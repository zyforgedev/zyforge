import { ReactNode } from "react";

interface IconWithTextProps {
  icon: ReactNode;
  text: string;
  subtitle?: string;
  animationDelay?: string;
  hoverEffect?: boolean;
  iconSize?: "sm" | "md" | "lg" | "xl";
}

export default function IconWithText({
  icon,
  text,
  subtitle,
  animationDelay = "0s",
  hoverEffect = true,
  iconSize = "md",
}: IconWithTextProps) {
  const iconSizeClass = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-10 w-10",
    xl: "h-16 w-16",
  }[iconSize];

  return (
    <div
      className={`flex items-start space-x-4 p-4 sm:p-6 rounded-xl transition-all duration-300 ${
        hoverEffect ? "hover:bg-gray-800/50 group" : ""
      }`}
      style={{ animationDelay }}
    >
      <div
        className={`${iconSizeClass} text-primary-cyan group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
      >
        {icon}
      </div>
      <div>
        <span className="text-lg sm:text-xl font-medium text-white">
          {text}
        </span>
        {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
