"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";
import {
  MagnifyingGlassIcon,
  PaintBrushIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePositions, setMousePositions] = useState<{
    [key: number]: { x: number; y: number };
  }>({});

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

  const handleMouseMove = (
    e: React.MouseEvent,
    cardRef: React.RefObject<HTMLDivElement | null>,
    index: number
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;

    setMousePositions((prev) => ({
      ...prev,
      [index]: { x: deltaX, y: deltaY },
    }));
  };

  const handleMouseLeave = (index: number) => {
    setMousePositions((prev) => ({
      ...prev,
      [index]: { x: 0, y: 0 },
    }));
  };

  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We discuss your goals, requirements, and vision to create a detailed project roadmap",
      icon: <MagnifyingGlassIcon className="w-8 h-8 text-primary-cyan" />,
      duration: "1-2 days",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Create wireframes and visual designs that align with your brand and user experience goals",
      icon: <PaintBrushIcon className="w-8 h-8 text-primary-cyan" />,
      duration: "3-5 days",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Build your website using modern technologies with regular progress updates",
      icon: <BoltIcon className="w-8 h-8 text-primary-cyan" />,
      duration: "1-3 weeks",
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description:
        "Thorough testing across devices and browsers, plus performance optimization",
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-primary-cyan" />,
      duration: "2-3 days",
    },
    {
      number: "05",
      title: "Launch & Support",
      description:
        "Deploy your site and provide training, documentation, and ongoing support",
      icon: <RocketLaunchIcon className="w-8 h-8 text-primary-cyan" />,
      duration: "1 day",
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding"
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
            {steps.map((step, index) => {
              const cardRef = useRef<HTMLDivElement | null>(null);
              const currentPosition = mousePositions[index] || { x: 0, y: 0 };
              const isHovering =
                Math.abs(currentPosition.x) > 0.01 ||
                Math.abs(currentPosition.y) > 0.01;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                      {/* Outer glow container */}
                      <div className="relative">
                        {/* Background glow - positioned outside the card */}
                        <motion.div
                          className="absolute -inset-8 opacity-0 rounded-2xl pointer-events-none"
                          style={{
                            background: `radial-gradient(400px circle at ${
                              50 + currentPosition.x * 30
                            }% ${
                              50 + currentPosition.y * 30
                            }%, rgba(255, 107, 26, 0.2), rgba(255, 179, 102, 0.15) 40%, transparent 70%)`,
                            filter: "blur(30px)",
                          }}
                          animate={{
                            opacity: isHovering ? 1 : 0,
                            scale: isHovering ? 1.05 : 1,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                        />

                        <motion.div
                          ref={cardRef}
                          className="bg-gray-800/50 p-6 sm:p-8 rounded-xl glass-effect relative overflow-hidden"
                          onMouseMove={(e) =>
                            handleMouseMove(e, cardRef, index)
                          }
                          onMouseLeave={() => handleMouseLeave(index)}
                          style={{
                            transformStyle: "preserve-3d",
                            perspective: "1000px",
                          }}
                        >
                          {/* Localized scaling effect */}
                          <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: `radial-gradient(150px circle at ${
                                50 + currentPosition.x * 50
                              }% ${
                                50 + currentPosition.y * 50
                              }%, rgba(255, 107, 26, 0.1) 0%, transparent 70%)`,
                              transformOrigin: `${
                                50 + currentPosition.x * 50
                              }% ${50 + currentPosition.y * 50}%`,
                            }}
                            animate={{
                              scale: isHovering ? 1.2 : 1,
                              opacity: isHovering ? 1 : 0,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />

                          {/* Connecting line */}
                          <div
                            className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-12 h-0.5 bg-orange-500 ${
                              index % 2 === 0 ? "-right-12" : "-left-12"
                            }`}
                          ></div>

                          {/* Content container */}
                          <div className="relative z-10">
                            <div className="flex items-center mb-4">
                              <motion.div
                                className="text-2xl sm:text-3xl mr-4"
                                animate={{
                                  scale:
                                    1 +
                                    (isHovering
                                      ? Math.abs(currentPosition.x) * 0.1 +
                                        Math.abs(currentPosition.y) * 0.1
                                      : 0),
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 30,
                                }}
                              >
                                {step.icon}
                              </motion.div>
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
                              <motion.div
                                className="w-2 h-2 bg-orange-500 rounded-full mr-2"
                                animate={{
                                  scale:
                                    1 +
                                    (isHovering
                                      ? (Math.abs(currentPosition.x) +
                                          Math.abs(currentPosition.y)) *
                                        0.3
                                      : 0),
                                  boxShadow: isHovering
                                    ? `0 0 ${
                                        10 +
                                        (Math.abs(currentPosition.x) +
                                          Math.abs(currentPosition.y)) *
                                          15
                                      }px rgba(255, 107, 26, ${
                                        0.6 +
                                        (Math.abs(currentPosition.x) +
                                          Math.abs(currentPosition.y)) *
                                          0.3
                                      })`
                                    : "0 0 0px rgba(255, 107, 26, 0)",
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                }}
                              />
                              {step.duration}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Timeline dot with enhanced hover effect */}
                    <div className="hidden lg:flex w-2/12 justify-center relative z-10 my-4 lg:my-0">
                      <motion.div
                        className="w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 shadow-lg relative"
                        whileHover={{
                          scale: 1.5,
                          boxShadow:
                            "0 0 20px rgba(255, 107, 26, 0.8), 0 0 40px rgba(255, 107, 26, 0.4)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Pulsing ring effect */}
                        <motion.div
                          className="absolute inset-0 bg-orange-500 rounded-full opacity-30"
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.3, 0, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="w-full lg:w-5/12"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div
          className={`text-center mt-12 sm:mt-16 ${
            isVisible ? "animate-fadeInUp" : "loading"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <motion.div
            className="gradient-border p-6 sm:p-8 max-w-2xl mx-auto relative overflow-hidden"
            whileHover={{
              rotateX: 2,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Background glow for CTA section */}
            <motion.div
              className="absolute inset-0 opacity-0"
              style={{
                background: `radial-gradient(circle at center, rgba(255, 107, 26, 0.2) 0%, rgba(255, 179, 102, 0.1) 50%, transparent 80%)`,
                filter: "blur(30px)",
              }}
              whileHover={{
                opacity: 1,
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            />

            <div className="relative z-10">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
