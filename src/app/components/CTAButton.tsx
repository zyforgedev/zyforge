import { scrollToSection } from "../utils/scrollToSection";

interface CTAButtonProps {
  targetSection: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CTAButton({
  targetSection,
  children,
  className = "",
  variant = "primary",
}: CTAButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button
      onClick={() => scrollToSection(targetSection)}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  );
}
