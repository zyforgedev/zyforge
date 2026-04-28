"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export async function sendOnboardingEmail(formData: any) {
  const { name, email, company, projectType, description, budget, timeline, message, files } = formData;

  try {
    const attachments = files.map((file: any) => ({
      filename: file.name,
      content: file.content.split(",")[1], // Remove the base64 prefix
    }));

    const { data, error } = await resend.emails.send({
      from: "ZyForge Onboarding <onboarding@resend.dev>", // Note: Replace with your verified domain in production
      to: ["zyforge.dev@gmail.com"],
      subject: `New Project Inquiry: ${projectType} from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">
          <h1 style="color: #ff6b1a;">New Project Discovery Form</h1>
          <p>A new vision has been forged by <strong>${name}</strong>.</p>
          
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Client Info</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">The Vision</h2>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Description:</strong> ${description}</p>
          
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Resources</h2>
          <p><strong>Budget Range:</strong> ${budget || "Not specified"}</p>
          <p><strong>Expected Timeline:</strong> ${timeline || "Not specified"}</p>
          
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Additional Notes</h2>
          <p>${message || "No additional notes."}</p>
        </div>
      `,
      attachments: attachments,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
