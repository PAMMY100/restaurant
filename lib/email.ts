import emailjs from "@emailjs/browser"
import config from "./config";

type EmailParams = {
  to_name: string;
  to_email: string;
  [key: string]: any;
}

export const sendEmail = async (templateId: string, params: EmailParams): Promise<{success: boolean; error?: string}> => {
  try {
    await emailjs.send(config.env.emaijs.serviceID!, templateId, params, config.env.emaijs.ejsPublicKey);
    return {success: true};
  } catch(error) {
    console.error('Email sending error: ', error);
    return {success: false, error: 'Failed to send email'}
  }
}

export const sendOnboardingEmail = (params: EmailParams) => sendEmail(config.env.emaijs.ejsOnboarding!, params);

export const sendInactivityEmail = (params: EmailParams) => sendEmail(config.env.emaijs.ejsInactivity!, params)