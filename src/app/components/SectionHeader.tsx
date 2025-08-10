interface SectionHeaderProps {
  title: string;
  highlightText: string;
  subtitle?: string;
  isVisible: boolean;
}

export default function SectionHeader({
  title,
  highlightText,
  subtitle,
  isVisible,
}: SectionHeaderProps) {
  return (
    <div
      className={`text-center mb-12 sm:mb-16 ${
        isVisible ? "animate-fadeInUp" : "loading"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        {title} <span className="gradient-text">{highlightText}</span>
      </h2>
      <div
        className="w-12 sm:w-16 h-1 mx-auto mb-4"
        style={{ background: "linear-gradient(135deg, #FF6B1A, #FFB366)" }}
      ></div>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
