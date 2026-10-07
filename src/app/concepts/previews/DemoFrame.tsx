"use client";

import { MotionConfig } from "framer-motion";

export default function DemoFrame({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <aside className="concept-demo-notice">Zyforge concept demo. Business content and actions are illustrative. <a href="/#portfolio">Return to the design concepts</a>.</aside>
      <div className="concept-demo-body">{children}</div>
    </MotionConfig>
  );
}
