interface ProcessStepProps {
  step: {
    number: string;
    title: string;
    description: string;
    icon: string;
    duration: string;
  };
  index: number;
  isVisible: boolean;
}

export default function ProcessStep({
  step,
  index,
  isVisible,
}: ProcessStepProps) {
  return (
    <div
      className={`relative ${isVisible ? "animate-fadeInUp" : "loading"}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div
        className={`flex flex-col lg:flex-row items-center ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Content */}
        <div
          className={`w-full lg:w-5/12 ${
            index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
          }`}
        >
          <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl glass-effect group hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-2xl sm:text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div>
                <div className="text-orange-400 font-mono text-sm sm:text-base font-semibold mb-1">
                  {step.number}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {step.title}
                </h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
              {step.description}
            </p>
            <div className="flex items-center text-orange-400 text-sm font-semibold">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              {step.duration}
            </div>
          </div>
        </div>

        {/* Timeline dot */}
        <div className="hidden lg:flex w-2/12 justify-center relative z-10 my-4 lg:my-0">
          <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
        </div>

        {/* Spacer */}
        <div className="w-full lg:w-5/12"></div>
      </div>
    </div>
  );
}
