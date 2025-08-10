import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  isVisible?: boolean;
  animationDelay?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  backgroundColor = "#3A3A3A",
  isVisible = true,
  animationDelay = "0s",
  hoverEffect = true,
}: CardProps) {
  return (
    <div
      className={`p-6 sm:p-8 rounded-xl glass-effect ${
        hoverEffect
          ? "group hover:bg-gray-700/50 transition-all duration-300"
          : ""
      } ${isVisible ? "animate-fadeInUp" : "loading"} ${className}`}
      style={{
        backgroundColor,
        animationDelay,
      }}
    >
      {children}
    </div>
  );
}
