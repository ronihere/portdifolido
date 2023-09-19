'use server'

import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmailClient = async (senderEmail: string, message: string) => {
    console.log('running on server');
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'roni78rm@gmail.com',
        subject: 'Dev-Portfolio Message',
        reply_to: senderEmail,
        text: message
    })
}