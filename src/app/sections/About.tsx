"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import IconWithText from "../components/IconWithText";
import Card from "../components/Card";
import CTAButton from "../components/CTAButton";
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function About({ motion }: { motion: any }) {
  const { isVisible, sectionRef } = useIntersectionObserver();

  const benefits = [
    {
      text: "Direct collaboration with a dedicated developer",
      icon: <UserGroupIcon />,
    },
    {
      text: "Flexible and affordable pricing for any budget",
      icon: <CurrencyDollarIcon />,
    },
    {
      text: "Focus on quality, performance, and user experience",
      icon: <SparklesIcon />,
    },
    {
      text: "Personalized service and fast communication",
      icon: <ChatBubbleLeftRightIcon />,
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
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {benefits.map((item, index) => (
            <IconWithText
              key={index}
              icon={item.icon}
              text={item.text}
              animationDelay={`${index * 0.1}s`}
            />
          ))}
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="gradient-border p-6 sm:p-8 text-center">
            <RocketLaunchIcon className="w-16 h-16 text-primary-cyan mx-auto mb-4" />
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
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
