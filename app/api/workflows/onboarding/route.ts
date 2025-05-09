import { serve } from "@upstash/workflow/nextjs";
import { db } from "@/database/drizzle";
import { getInactiveUsers, updateUserActivity } from "@/lib/redis";
import { sendInactivityEmail } from "@/lib/email";
import { users } from "@/database/schema";
import { and, eq, isNotNull } from "drizzle-orm";

type InitialData = {
  email: string;
  name: string;
}

export const { POST } = serve<InitialData>(async (context) => {
  // Get potentially inactive users from Redis (14+ days since last activity)
  const inactiveUsers = await context.run("get-inactive-users", async () => {
    return await getInactiveUsers(14);
  });

  // Process each user
  for (const { userId, data } of inactiveUsers) {
    await context.run(`send-reminder-${userId}`, async () => {
      try {
        // Double-check state using database
        const state = await getUserState(data.email);
        
        if (state === "non-active") {
          const { success } = await sendInactivityEmail({
            to_name: data.name,
            to_email: data.email,
            inactive_days: "14",
            reactivation_link: `${process.env.NEXTAUTH_URL}/login`
          });

          if (success) {
            await updateUserActivity(userId, { reminderSent: true });
            console.log(`Reminder sent to ${data.email}`);
          }
        } else {
          console.log(`User ${data.email} is now active, skipping reminder`);
        }
      } catch (error) {
        console.log(`Error processing user ${userId}: ${error}`);
      }
    });
  }

  return { processed: inactiveUsers.length };
});

type UserState = "non-active" | "active";

const getUserState = async(email: string): Promise<UserState> => {
  const [user] = await db
    .select()
    .from(users)
    .where(
      and(
        eq(users.email, email),
        isNotNull(users.lastLogin)
      )
    )
    .limit(1);
    
  if (!user?.lastLogin) return "non-active";

  const daysInactive = (Date.now() - user.lastLogin.getTime()) / (86400 * 1000);
  return daysInactive > 7 ? "non-active" : "active";
};