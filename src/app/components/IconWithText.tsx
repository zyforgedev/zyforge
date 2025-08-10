interface IconWithTextProps {
  icon: string;
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
    sm: "text-xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl",
    xl: "text-4xl sm:text-6xl",
  }[iconSize];

  return (
    <div
      className={`flex items-start space-x-4 p-4 sm:p-6 rounded-xl transition-all duration-300 ${
        hoverEffect ? "hover:bg-gray-800/50 group" : ""
      }`}
      style={{ animationDelay }}
    >
      <div
        className={`${iconSizeClass} ${
          hoverEffect ? "group-hover:scale-110" : ""
        } transition-transform duration-300 flex-shrink-0`}
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
