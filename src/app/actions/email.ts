"use server";

import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const projectTypes = ["Landing Page", "Business Website", "E-commerce", "Web Application", "Custom"];
// Allow headroom for file Base64 and the hosting provider's request encoding.
const attachmentLimit = 3 * 1024 * 1024;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[character]!));
}

export async function sendOnboardingEmail(input: unknown) {
  if (!input || typeof input !== "object") return { success: false, error: "Please check the inquiry details." };
  const raw = input as Record<string, unknown>;
  const limits: Record<string, number> = { name: 120, email: 254, company: 160, projectType: 40, customProjectType: 160, hasLogo: 3, description: 5000, budget: 160, timeline: 160, message: 5000 };
  const fields: Record<string, string> = {};
  for (const [field, limit] of Object.entries(limits)) {
    if (typeof raw[field] !== "string" || (raw[field] as string).length > limit) {
      return { success: false, error: "Please check the inquiry details and field lengths." };
    }
    fields[field] = (raw[field] as string).trim();
  }
  const { name, email, company, projectType, customProjectType, hasLogo, description, budget, timeline, message } = fields;
  if (!name || !emailPattern.test(email) || !projectTypes.includes(projectType) || !["yes", "no"].includes(hasLogo) || !description || (projectType === "Custom" && !customProjectType)) {
    return { success: false, error: "Please complete the required project details and use a valid email address." };
  }
  if (!Array.isArray(raw.files) || raw.files.length > 8) return { success: false, error: "Attach up to 8 files." };

  const attachments: { filename: string; content: Buffer }[] = [];
  let totalBytes = 0;
  for (const file of raw.files) {
    if (!file || typeof file !== "object" || typeof file.name !== "string" || typeof file.content !== "string" || file.name.length > 180 || /[\r\n\\/]/.test(file.name)) {
      return { success: false, error: "Please check the attachment names and files." };
    }
    if (file.content.length > Math.ceil(attachmentLimit * 4 / 3) + 512) {
      return { success: false, error: "Please keep attachments below 3MB in total." };
    }
    const match = /^data:(image\/[a-zA-Z0-9.+-]+|application\/pdf|application\/(?:zip|x-zip-compressed));base64,([a-zA-Z0-9+/]*={0,2})$/.exec(file.content);
    if (!match) return { success: false, error: "Attach images, PDF or ZIP files only." };
    const content = Buffer.from(match[2], "base64");
    totalBytes += content.length;
    if (totalBytes > attachmentLimit) return { success: false, error: "Please keep attachments below 3MB in total." };
    attachments.push({ filename: file.name, content });
  }

  const apiKey = process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_KEY;
  if (!apiKey) return { success: false, error: "The form is unavailable. Please email zyforge.dev@gmail.com." };
  const type = projectType === "Custom" ? customProjectType : projectType;
  const rows = [
    ["Name", name], ["Email", email], ["Company", company || "Not specified"],
    ["Project type", type], ["Existing logo", hasLogo === "yes" ? "Yes" : "No"],
    ["Description", description], ["Budget", budget || "Not specified"],
    ["Timeline", timeline || "Not specified"], ["Additional notes", message || "None"],
  ];
  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Zyforge Inquiry <onboarding@resend.dev>",
      to: ["zyforge.dev@gmail.com"],
      subject: ("Project inquiry: " + type + " from " + name).replace(/[\r\n]/g, " "),
      replyTo: email,
      text: rows.map(([label, value]) => label + ": " + value).join("\n\n"),
      html: '<div style="font-family: sans-serif; line-height: 1.6"><h1>Zyforge project inquiry</h1>' +
        rows.map(([label, value]) => "<p><strong>" + escapeHtml(label) + ':</strong><br><span style="white-space:pre-wrap">' + escapeHtml(value) + "</span></p>").join("") + "</div>",
      attachments,
    });
    if (error || !data) return { success: false, error: "The inquiry could not be sent. Please try again or email zyforge.dev@gmail.com." };
    return { success: true };
  } catch {
    return { success: false, error: "The inquiry could not be sent. Please try again or email zyforge.dev@gmail.com." };
  }
}
