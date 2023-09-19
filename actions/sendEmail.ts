'use server'

import {Resend} from 'resend'
import { validateString , getErrorMessage } from '@/lib/utils'
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmailClient = async (senderEmail: string, message: string) => {
    console.log('running on server');

    if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

    let data;
    try {
        data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'roni78rm@gmail.com',
            subject: 'Dev-Portfolio Message',
            reply_to: senderEmail,
            text: message
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }
    return {
        data,
    }
}