"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#1E1E1E",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      {/* Background Elements - Fixed for mobile */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-3xl animate-pulse-custom"
          style={{
            top: "25%",
            left: "25%",
            width: "min(16rem, 40vw)",
            height: "min(16rem, 40vh)",
            maxWidth: "256px",
            maxHeight: "256px",
          }}
        ></div>
        <div
          className="absolute rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 blur-3xl animate-pulse-custom"
          style={{
            bottom: "25%",
            right: "25%",
            width: "min(12rem, 35vw)",
            height: "min(12rem, 35vh)",
            maxWidth: "192px",
            maxHeight: "192px",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      {/* Gradient overlay - constrained to container */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-50 w-max"></div>

      {/* Main content container - with proper constraints */}
      <div
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "100vw" }}
      >
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          style={{ width: "100%", maxWidth: "100%" }}
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <h1 className="font-black mb-6 tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
              <span className="gradient-text">Zy</span>Forge
            </h1>
            <div
              className="w-16 sm:w-24 h-1 mx-auto mb-8"
              style={{
                background: "linear-gradient(135deg, #FF6B1A, #FFB366)",
              }}
            ></div>
          </motion.div>

          <motion.div
            className="px-4 max-w-4xl mx-auto"
            variants={itemVariants}
            style={{ width: "100%", maxWidth: "100%" }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed font-light">
              Your partner in building a strong online presence. We create
              modern, responsive, and high-performance websites for startups,
              small businesses, and individuals — with{" "}
              <span className="text-orange-400 font-medium">
                no upfront payment required.
              </span>
            </p>

            <p className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto">
              You pay only when your project is completed and you're completely
              satisfied.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 max-w-2xl mx-auto"
            variants={itemVariants}
            style={{ width: "100%" }}
          >
            <motion.button
              onClick={() => scrollToSection("services")}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ maxWidth: "100%" }}
            >
              Explore Services
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ maxWidth: "100%" }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </motion.div>
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
