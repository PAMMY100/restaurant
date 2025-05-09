import emailjs from "@emailjs/nodejs"
import config from "./config";

type EmailParams = {
  to_name: string;
  to_email: string;
  [key: string]: any;
}

emailjs.init({
  publicKey: config.env.emaijs.ejsPublicKey!,
  privateKey: config.env.emaijs.ejsPrivateKey!
});


export const sendOnboardingEmail = async (params: EmailParams) => {

  try {
    //Initialize with public key
    const response = await emailjs.send(
      config.env.emaijs.serviceID!,
      config.env.emaijs.ejsOnboarding!,
      params,
    
    )
    return {success: true, response};
  } catch (error) {
    console.error('Onboarding email error: ', error);
    return {success: false, error: `Failed to send onboarding email`}
  }

}

export const sendInactivityEmail = async (params: EmailParams) => {
  try {
    const response = await emailjs.send(
      config.env.emaijs.serviceID!,
      config.env.emaijs.ejsInactivity!,
      params,
    )

    return { success: true, response };

  } catch (error) {
    console.error('Inactivity email error: ', error);
    return { success: false, error: 'Failed to send inactivity email'}
  }
}