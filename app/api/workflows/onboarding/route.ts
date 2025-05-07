import { serve } from "@upstash/workflow/nextjs";
import emailjs from "@emailjs/browser"
import config from "@/lib/config";
import { db } from "@/database/drizzle";

type InitialData = {
  email: string;
  name: string;
}

export const { POST } = serve<InitialData> (async (context) => {
  const { email, name } = context.requestPayload;

  emailjs.init(config.env.emaijs.ejsPublicKey!)

  await context.run("new-signup", async () => {
    await sendEmail({
      templateId: config.env.emaijs.ejsOnboarding!,
      email,
      name,
      templateParams: {
        to_name: name,
        to_email: email,
        welcome_message: "Thanks for joining our platform!"
      }
    });
  });
  
  await context.sleep("wait-for-3-days", 60 * 60 * 24 * 3);

  while (true) {
    const state = await context.run("check-user-state", async () => {
      return await getUserState(email);;
    })

    if (state === "non-active") {
      await context.run("send-email-non-active", async () => {
        await sendEmail({
          templateId: config.env.emaijs.ejsInactivity!,
          email,
          name,
          templateParams: {
            to_name: name,
            to_email: email,
            inactivite_days: "3",
          }
        });
      })
    } else if (state === "active") {
      await context.run("send-email-active", async () => {
        await sendEmail({
          templateId: "",
          email,
          name,
          templateParams: {
            to_name: name,
            to_email: email,
            newsletter_content: "Here's what's new this month..."
          }
        });
      });
    }

    await context.sleep("wait-for-1-month", 60 * 60 * 24 * 30)
  }
})

type EmailParams = {
  templateId: string;
  email: string;
  name: string;
  templateParams: Record<string, string>
}

async function sendEmail(params: EmailParams) {
  //implement email sending logic here
  try {
    const response = await emailjs.send(
      config.env.emaijs.serviceID!,
      params.templateId,
      params.templateParams,
      config.env.emaijs.ejsPublicKey!
    )
    console.log(`Email sent to ${params.email}`, response)
  } catch (error) {
    console.log(`Failed to send email to ${params.email}`, error)
  }
}

type UserState = "non-active" | "active";

const getUserState = async(email: string) : Promise<UserState> => {
  //Implement user state logic here
  const lastActive = await db
  return "non-active";
}