interface FeatureListProps {
  features: string[];
  layout?: "single" | "double";
}

export default function FeatureList({
  features,
  layout = "double",
}: FeatureListProps) {
  const gridClass = layout === "double" ? "grid-cols-2" : "grid-cols-1";

  return (
    <div className={`grid ${gridClass} gap-2 sm:gap-3`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center text-xs sm:text-sm text-gray-400"
        >
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
          <span className="leading-tight">{feature}</span>
        </div>
      ))}
    </div>
  );
}
