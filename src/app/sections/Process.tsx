"use client";

import { useEffect, useState, useRef } from "react";
import CTAButton from "../components/CTAButton";

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We discuss your goals, requirements, and vision to create a detailed project roadmap",
      icon: "🎯",
      duration: "1-2 days",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Create wireframes and visual designs that align with your brand and user experience goals",
      icon: "🎨",
      duration: "3-5 days",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Build your website using modern technologies with regular progress updates",
      icon: "⚡",
      duration: "1-3 weeks",
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description:
        "Thorough testing across devices and browsers, plus performance optimization",
      icon: "🔧",
      duration: "2-3 days",
    },
    {
      number: "05",
      title: "Launch & Support",
      description:
        "Deploy your site and provide training, documentation, and ongoing support",
      icon: "🚀",
      duration: "1 day",
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-12 sm:mb-16 ${
            isVisible ? "animate-fadeInUp" : "loading"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Development <span className="gradient-text">Process</span>
          </h2>
          <div
            className="w-12 sm:w-16 h-1 mx-auto mb-4"
            style={{ background: "linear-gradient(135deg, #FF6B1A, #FFB366)" }}
          ></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            A streamlined approach that ensures quality results and transparent
            communication
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 to-orange-600"></div>

          <div className="space-y-8 lg:space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  isVisible ? "animate-fadeInUp" : "loading"
                }`}
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
                    <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl glass-effect group hover:bg-gray-700/50 transition-all duration-300 relative">
                      {/* Connecting line */}
                      <div
                        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-12 h-0.5 bg-orange-500 ${
                          index % 2 === 0 ? "-right-12" : "-left-12"
                        }`}
                      ></div>
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
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-12 sm:mt-16 ${
            isVisible ? "animate-fadeInUp" : "loading"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <div className="gradient-border p-6 sm:p-8 max-w-2xl mx-auto relative">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Let's discuss your project and how we can bring your vision to
              life with our proven process.
            </p>
            <div className="relative z-10">
              <CTAButton
                targetSection="contact"
                className="w-full sm:w-auto text-sm sm:text-base px-8 py-4"
              >
                Start Your Project
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
