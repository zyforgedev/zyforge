"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export async function sendOnboardingEmail(formData: any) {
  const { 
    name, 
    email, 
    company, 
    projectType, 
    customProjectType,
    hasLogo,
    description, 
    budget, 
    timeline, 
    message, 
    files = [] 
  } = formData;

  try {
    const attachments = (files || []).map((file: any) => ({
      filename: file.name,
      content: file.content.split(",")[1], // Remove the base64 prefix
    }));

    const { data, error } = await resend.emails.send({
      from: "ZyForge Onboarding <onboarding@resend.dev>", // Note: Replace with your verified domain in production
      to: ["zyforge.dev@gmail.com"],
      subject: `New Project Inquiry: ${projectType === "Custom" ? customProjectType : projectType} from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h1 style="color: #ff6b1a; border-bottom: 2px solid #ff6b1a; padding-bottom: 10px;">New Project Discovery Form</h1>
          <p>A new vision has been forged by <strong>${name}</strong>.</p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="margin-top: 0; color: #555; font-size: 18px;">Client Info</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
          </div>
          
          <div style="background: #fff; border: 1px solid #eee; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="margin-top: 0; color: #555; font-size: 18px;">The Vision</h2>
            <p><strong>Project Type:</strong> ${projectType} ${projectType === "Custom" ? `(${customProjectType})` : ""}</p>
            <p><strong>Has Logo:</strong> ${hasLogo === "yes" ? "Yes, existing" : "No, needs placeholder"}</p>
            <p><strong>Description:</strong></p>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${description}</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="margin-top: 0; color: #555; font-size: 18px;">Resources</h2>
            <p><strong>Budget Range:</strong> ${budget || "Not specified"}</p>
            <p><strong>Expected Timeline:</strong> ${timeline || "Not specified"}</p>
          </div>
          
          <div style="background: #fff; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="margin-top: 0; color: #555; font-size: 18px;">Additional Notes</h2>
            <p>${message || "No additional notes."}</p>
          </div>
          
          <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">
            Sent via ZyForge Automated Onboarding System
          </p>
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
