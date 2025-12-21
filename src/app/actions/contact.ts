'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@dignitate.co.uk';

const contactSchema = z.object({
    type: z.string().min(1, 'Please select what you are seeking'),
    fname: z.string().min(1, 'First name is required'),
    lname: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
});

export async function sendContactEmail(formData: FormData) {
    const rawData = {
        type: formData.get('type'),
        fname: formData.get('fname'),
        lname: formData.get('lname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    };

    try {
        const validatedData = contactSchema.parse(rawData);

        const { data, error } = await resend.emails.send({
            from: 'Dignitate Contact Form <onboarding@resend.dev>', // Update this with a verified domain later
            to: [CONTACT_EMAIL],
            subject: `New Contact Form Submission: ${validatedData.type}`,
            replyTo: validatedData.email,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Type:</strong> ${validatedData.type}</p>
                <p><strong>Name:</strong> ${validatedData.fname} ${validatedData.lname}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, error: 'Failed to send email. Please try again later.' };
        }

        return { success: true };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error('Unexpected Error:', error);
        return { success: false, error: 'An unexpected error occurred.' };
    }
}
