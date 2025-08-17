"use client";

import { useEffect, useState, useRef } from "react";
import CTAButton from "../components/CTAButton";
import {
  MagnifyingGlassIcon,
  PaintBrushIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Process({ motion }: { motion: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePositions, setMousePositions] = useState<{
    [key: number]: { x: number; y: number };
  }>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Fixed: Added proper TypeScript typing for the event parameter
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    cardRef: React.RefObject<HTMLDivElement | null>,
    index: number
  ) => {
    if (isMobile || !cardRef.current) return;

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
    if (isMobile) return;
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
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 to-orange-600"></div>

          <div className="space-y-8 lg:space-y-4">
            {steps.map((step, index) => {
              const cardRef = useRef<HTMLDivElement | null>(null);
              const currentPosition = mousePositions[index] || { x: 0, y: 0 };
              const isHovering =
                Math.abs(currentPosition.x) > 0.01 ||
                Math.abs(currentPosition.y) > 0.01;

              // Enhanced 3D parallax calculations
              const rotateX = currentPosition.y * -15; // Vertical tilt
              const rotateY = currentPosition.x * 15; // Horizontal tilt
              const translateZ = isHovering ? 20 : 0; // Z-depth movement
              const scale = isHovering ? 1.02 : 1; // Subtle scale increase

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ perspective: "1200px" }}
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
                      <div
                        className="relative"
                        style={{ perspective: "1200px" }}
                      >
                        {/* Background glow - enhanced with 3D positioning */}
                        <motion.div
                          className="absolute -inset-8 opacity-0 rounded-2xl pointer-events-none"
                          style={{
                            background: `radial-gradient(500px circle at ${
                              50 + currentPosition.x * 40
                            }% ${
                              50 + currentPosition.y * 40
                            }%, rgba(255, 107, 26, 0.3), rgba(255, 179, 102, 0.2) 40%, transparent 70%)`,
                            filter: "blur(40px)",
                            transformStyle: "preserve-3d",
                          }}
                          animate={{
                            opacity: isHovering ? 1 : 0,
                            scale: isHovering ? 1.1 : 1,
                            rotateX: rotateX * 0.3,
                            rotateY: rotateY * 0.3,
                            z: translateZ * 0.5,
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
                          }}
                          animate={{
                            rotateX,
                            rotateY,
                            z: translateZ,
                            scale,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            mass: 0.8,
                          }}
                        >
                          {/* Enhanced gradient overlay with parallax */}
                          <motion.div
                            className="absolute inset-0 pointer-events-none rounded-xl"
                            style={{
                              background: `linear-gradient(${
                                135 + currentPosition.x * 45
                              }deg, rgba(255, 107, 26, 0.15) 0%, rgba(255, 179, 102, 0.1) 50%, transparent 80%)`,
                              transform: `translateZ(10px)`,
                            }}
                            animate={{
                              opacity: isHovering ? 1 : 0.3,
                              scale: isHovering ? 1.05 : 1,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: "easeOut",
                            }}
                          />

                          {/* Floating particles effect */}
                          {isHovering && (
                            <>
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
                                  style={{
                                    left: `${20 + i * 30}%`,
                                    top: `${30 + i * 20}%`,
                                    transform: `translateZ(${15 + i * 5}px)`,
                                  }}
                                  animate={{
                                    y: [0, -10, 0],
                                    x: [0, Math.sin(i) * 5, 0],
                                    opacity: [0.6, 1, 0.6],
                                    scale: [1, 1.2, 1],
                                  }}
                                  transition={{
                                    duration: 2 + i * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.2,
                                  }}
                                />
                              ))}
                            </>
                          )}

                          {/* Localized scaling effect with enhanced 3D */}
                          <motion.div
                            className="absolute inset-0 pointer-events-none rounded-xl"
                            style={{
                              background: `radial-gradient(200px circle at ${
                                50 + currentPosition.x * 50
                              }% ${
                                50 + currentPosition.y * 50
                              }%, rgba(255, 107, 26, 0.2) 0%, rgba(255, 179, 102, 0.1) 40%, transparent 70%)`,
                              transformOrigin: `${
                                50 + currentPosition.x * 50
                              }% ${50 + currentPosition.y * 50}%`,
                              transform: `translateZ(5px)`,
                            }}
                            animate={{
                              scale: isHovering ? 1.3 : 1,
                              opacity: isHovering ? 1 : 0,
                              rotateX: rotateX * 0.5,
                              rotateY: rotateY * 0.5,
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

                          {/* Content container with layered 3D elements */}
                          <div
                            className="relative z-10"
                            style={{ transform: `translateZ(15px)` }}
                          >
                            <div className="flex items-center mb-4">
                              <motion.div
                                className="text-2xl sm:text-3xl mr-4"
                                style={{ transform: `translateZ(20px)` }}
                                animate={{
                                  scale:
                                    1 +
                                    (isHovering
                                      ? Math.abs(currentPosition.x) * 0.15 +
                                        Math.abs(currentPosition.y) * 0.15
                                      : 0),
                                  rotateX: currentPosition.y * -5,
                                  rotateY: currentPosition.x * 5,
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 30,
                                }}
                              >
                                {step.icon}
                              </motion.div>
                              <motion.div
                                style={{ transform: `translateZ(10px)` }}
                              >
                                <div className="text-orange-400 font-mono text-sm sm:text-base font-semibold mb-1">
                                  {step.number}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">
                                  {step.title}
                                </h3>
                              </motion.div>
                            </div>
                            <motion.p
                              className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed"
                              style={{ transform: `translateZ(8px)` }}
                            >
                              {step.description}
                            </motion.p>
                            <motion.div
                              className="flex items-center text-orange-400 text-sm font-semibold"
                              style={{ transform: `translateZ(12px)` }}
                            >
                              <motion.div
                                className="w-2 h-2 bg-orange-500 rounded-full mr-2"
                                animate={{
                                  scale:
                                    1 +
                                    (isHovering
                                      ? (Math.abs(currentPosition.x) +
                                          Math.abs(currentPosition.y)) *
                                        0.4
                                      : 0),
                                  boxShadow: isHovering
                                    ? `0 0 ${
                                        15 +
                                        (Math.abs(currentPosition.x) +
                                          Math.abs(currentPosition.y)) *
                                          20
                                      }px rgba(255, 107, 26, ${
                                        0.8 +
                                        (Math.abs(currentPosition.x) +
                                          Math.abs(currentPosition.y)) *
                                          0.2
                                      })`
                                    : "0 0 0px rgba(255, 107, 26, 0)",
                                  rotateZ: currentPosition.x * 10,
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                }}
                              />
                              {step.duration}
                            </motion.div>
                          </div>

                          {/* Subtle border highlight with 3D effect */}
                          <motion.div
                            className="absolute inset-0 rounded-xl pointer-events-none"
                            style={{
                              border: "1px solid rgba(255, 107, 26, 0)",
                              transform: `translateZ(25px)`,
                            }}
                            animate={{
                              borderColor: isHovering
                                ? "rgba(255, 107, 26, 0.4)"
                                : "rgba(255, 107, 26, 0)",
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeOut",
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Timeline dot with enhanced 3D hover effect */}
                    <div className="hidden lg:flex w-2/12 justify-center relative z-10 my-4 lg:my-0">
                      <motion.div
                        className="w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 shadow-lg relative"
                        style={{ perspective: "200px" }}
                        whileHover={{
                          scale: 1.8,
                          rotateY: 180,
                          boxShadow:
                            "0 0 30px rgba(255, 107, 26, 1), 0 0 60px rgba(255, 107, 26, 0.6)",
                        }}
                        transition={{
                          duration: 0.4,
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        {/* Enhanced pulsing ring effect */}
                        <motion.div
                          className="absolute inset-0 bg-orange-500 rounded-full opacity-30"
                          animate={{
                            scale: [1, 2.5, 1],
                            opacity: [0.4, 0, 0.4],
                            rotateZ: [0, 360, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Secondary pulse ring */}
                        <motion.div
                          className="absolute inset-0 bg-orange-400 rounded-full opacity-20"
                          animate={{
                            scale: [1, 3.2, 1],
                            opacity: [0.2, 0, 0.2],
                            rotateZ: [0, -360, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
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
            className="gradient-border p-6 sm:p-8 max-w-2xl mx-auto relative"
            whileHover={{
              rotateX: 3,
              rotateY: 2,
              scale: 1.03,
              z: 30,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Enhanced background glow for CTA section */}
            <motion.div
              className="absolute inset-0 opacity-0"
              style={{
                background: `radial-gradient(circle at center, rgba(255, 107, 26, 0.3) 0%, rgba(255, 179, 102, 0.2) 50%, transparent 80%)`,
                filter: "blur(40px)",
                transform: `translateZ(-10px)`,
              }}
              whileHover={{
                opacity: 1,
                scale: 1.2,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />

            <div
              className="relative z-10"
              style={{ transform: `translateZ(20px)` }}
            >
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
