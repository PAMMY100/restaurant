import emailjs from "@emailjs/browser"
import config from "./config";

type EmailParams = {
  to_name: string;
  to_email: string;
  [key: string]: any;
}

export const sendOnboardingEmail = async (params: EmailParams) => {

  try {
    await emailjs.send(
      config.env.emaijs.serviceID!,
      config.env.emaijs.ejsOnboarding!,
      params,
      config.env.emaijs.ejsPublicKey!
    )
    return {success: true};
  } catch (error) {
    console.error('Onboarding email error: ', error);
    return {success: false, error: `Failed to send onboarding email`}
  }

}

export const sendInactivityEmail = async (params: EmailParams) => {
  try {
    await emailjs.send(
      config.env.emaijs.serviceID!,
      config.env.emaijs.ejsInactivity!,
      params,
      config.env.emaijs.ejsPublicKey!
    )

    return { success: true };

  } catch (error) {
    console.error('Inactivity email error: ', error);
    return { success: false, error: 'Failed to send inactivity email'}
  }
}