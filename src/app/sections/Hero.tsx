"use client";

import Link from "next/link";
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutExpo
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 rounded-full blur-[120px] animate-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[100px] animate-glow" style={{ animationDelay: "2s" }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-500 text-sm font-medium tracking-wider uppercase mb-6">
              Web Development Excellence
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-syne font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight"
          >
            Forge Your <br />
            <span className="gradient-text">Digital Legacy</span>
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed font-light">
              We are a Cebu-based digital agency crafting high-performance, 
              responsive websites for startups and small businesses in the Philippines. 
              <span className="block mt-2 font-medium text-orange-400">
                Premium quality. Zero upfront cost.
              </span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            variants={itemVariants}
          >
            <Link
              href="/start-project"
              className="btn-primary group"
            >
              Get Started
              <svg 
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              onClick={() => scrollToSection("process")}
              className="btn-secondary"
            >
              Our Process
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-orange-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
