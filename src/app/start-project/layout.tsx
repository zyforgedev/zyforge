import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discuss a Website Project | Zyforge",
  description: "Tell Zyforge about the website you need, your budget and your timeline.",
  alternates: { canonical: "/start-project" },
  robots: { index: false, follow: true },
};

export default function ProjectInquiryLayout({ children }: { children: React.ReactNode }) { return children; }
