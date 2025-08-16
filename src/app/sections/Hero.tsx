"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      {/* Background Elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-3xl animate-pulse-custom"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 blur-3xl animate-pulse-custom"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-50"></div>

      <div
        className={`relative z-10 text-center max-w-5xl mx-auto ${
          isLoaded ? "animate-fadeInUp" : "loading"
        }`}
      >
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 tracking-tight leading-none">
            <span className="gradient-text">Zy</span>Forge
          </h1>
          <div
            className="w-16 sm:w-24 h-1 mx-auto mb-8"
            style={{ background: "linear-gradient(135deg, #FF6B1A, #FFB366)" }}
          ></div>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed font-light px-4">
          Your partner in building a strong online presence. We create modern,
          responsive, and high-performance websites for startups, small
          businesses, and individuals — with{" "}
          <span className="text-orange-400 font-medium">
            no upfront payment required.
          </span>
        </p>

        <p className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto px-4">
          You pay only when your project is completed and you're completely
          satisfied.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button
            onClick={() => scrollToSection("services")}
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
