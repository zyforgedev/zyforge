interface SectionHeaderProps {
  title: string;
  highlightText: string;
  subtitle?: string;
}

export default function SectionHeader({
  title,
  highlightText,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl sm:text-5xl font-syne font-bold mb-6 text-white tracking-tight">
        {title} <span>{highlightText}</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
