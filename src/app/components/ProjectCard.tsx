interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  index: number;
  isVisible: boolean;
}

export default function ProjectCard({
  title,
  description,
  tech,
  category,
  image,
  index,
  isVisible,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl glass-effect hover:transform hover:scale-[1.02] transition-all duration-500 ${
        isVisible ? "animate-fadeInUp" : "loading"
      }`}
      style={{
        backgroundColor: "#3A3A3A",
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
        <div className="text-6xl sm:text-8xl opacity-50 group-hover:scale-110 transition-transform duration-500">
          {image}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-orange-500/20 transition-colors duration-300"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
          {category}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((techItem, techIndex) => (
            <span
              key={techIndex}
              className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 text-xs sm:text-sm rounded-md"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <button className="text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors duration-300 flex items-center">
          View Details
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
