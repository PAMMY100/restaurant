"use server"

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import ratelimit from "../ratelimit";
import { redirect } from "next/navigation";
import { updateUserActivity } from "../redis";
import { sendOnboardingEmail } from "../email";


export const signInWithCredentials = async (params: Pick<AuthCredentials, "email" | "password">) => {
  const {email, password} = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1"

  const { success } = await ratelimit.limit(ip)

  if (!success) return redirect("/too-fast")

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      return {success: false, error: result.error}
    }

    const user = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1)

    if (user) {
      await db.update(users)
        .set({lastLogin: new Date() })
        .where(eq(users.id, user[0].id))

        await updateUserActivity(user[0].id, {
          lastActive: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          reminderSent: false
        })
    }

    return {success: true, userId: user[0]?.id};

  } catch (error) {
    console.log(error, "signin error");
    return { success: false, error: "Signin error" }
  }
}

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, address, password, phone} = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1"

  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast")

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

    if (existingUser.length > 0) {
      return {success: false, error: "User already exists"}
    }

    const hashedPassword = await hash(password, 10);

    try {
      const [newUser] = await db.insert(users).values({
        fullName,
        email,
        address,
        phone,
        password: hashedPassword,
        lastLogin: new Date(), //Set initial last login
    }).returning();

    await updateUserActivity(newUser.id, {
      userId: newUser.id,
      email,
      name: fullName,
      lastActive: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    })

    await sendOnboardingEmail({
      to_name: fullName,
      to_email: email,
      welcome_message: "Thanks for joining PerfectHome!"
    })

    await signInWithCredentials({email, password})

      return { success: true, userId: newUser.id }
    } catch(error) {
      console.log(error, "Signup error")
      return { success: false, error: "Registration failed"};
    }
}