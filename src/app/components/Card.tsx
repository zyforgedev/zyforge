import { ReactNode, forwardRef } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  isVisible?: boolean;
  animationDelay?: string;
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = "",
      backgroundColor = "#3A3A3A",
      isVisible = true,
      animationDelay = "0s",
      hoverEffect = true,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`h-full flex flex-col p-6 sm:p-8 rounded-xl glass-effect ${
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
);

Card.displayName = "Card";

export default Card;
