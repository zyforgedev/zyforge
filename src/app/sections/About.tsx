"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import IconWithText from "../components/IconWithText";
import Card from "../components/Card";
import CTAButton from "../components/CTAButton";

export default function About() {
  const { isVisible, sectionRef } = useIntersectionObserver();

  const benefits = [
    {
      text: "Direct collaboration with a dedicated developer",
      icon: "🤝",
    },
    {
      text: "Flexible and affordable pricing for any budget",
      icon: "💰",
    },
    {
      text: "Focus on quality, performance, and user experience",
      icon: "✨",
    },
    {
      text: "Personalized service and fast communication",
      icon: "💬",
    },
  ];

  return (
    <AnimatedSection id="about" backgroundColor="#1E1E1E" ref={sectionRef}>
      <SectionHeader
        title="Why Choose"
        highlightText="ZyForge"
        subtitle=""
        isVisible={isVisible}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div
          className={`space-y-6 ${
            isVisible ? "animate-fadeInLeft" : "loading"
          }`}
        >
          {benefits.map((item, index) => (
            <IconWithText
              key={index}
              icon={item.icon}
              text={item.text}
              animationDelay={`${index * 0.1}s`}
            />
          ))}
        </div>

        <div
          className={`relative ${
            isVisible ? "animate-fadeInRight" : "loading"
          }`}
        >
          <div className="gradient-border p-6 sm:p-8 text-center">
            <div className="text-4xl sm:text-6xl mb-4">🚀</div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Launch?
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              As a small, dedicated team, we help startups and small businesses
              succeed online. Let's work together to bring your vision to life.
            </p>
            <div className="relative z-10">
              <CTAButton
                targetSection="contact"
                className="w-full sm:w-auto text-sm sm:text-base px-6 py-3"
              >
                Get Started Today
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
