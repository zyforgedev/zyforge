import type { Metadata } from "next";
import DemoFrame from "./DemoFrame";

export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <DemoFrame>{children}</DemoFrame>;
}
