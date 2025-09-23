"use client";

import { useState } from "react";
import type { ReactElement } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import FeatureList from "../components/FeatureList";
import CTAButton from "../components/CTAButton";
import {
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

interface PriceDetail {
  summary: string;
  details: string[];
}

interface Service {
  title: string;
  description: string;
  icon: ReactElement;
  features: string[];
  price: PriceDetail;
}

export default function Services({ motion }: { motion: any }) {
  const { isVisible, sectionRef } = useIntersectionObserver();
  const MotionCard = motion.div;
  const [expandedServices, setExpandedServices] = useState<number[]>([]);

  const togglePriceExpansion = (index: number) => {
    setExpandedServices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const services: Service[] = [
    {
      title: "Full Handoff",
      description:
        "Get your complete website and code. Pay once, full ownership guaranteed.",
      icon: <PaintBrushIcon className="w-8 h-8 text-primary-cyan" />,
      features: [
        "Complete Source Code",
        "Full Ownership",
        "One-time Payment",
        "No Hidden Fees",
      ],
      price: {
        summary: "Fixed Prices",
        details: [
          "₱1,500 – Basic Landing Page",
          "₱5,000 – Multi-page Business Site",
          "₱8,000–₱12,000 – Small E-commerce (no login)",
        ],
      },
    },
    {
      title: "Hosted & Maintained",
      description:
        "Coming Soon! We'll soon offer hosting and maintenance so you can focus on your business.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-gray-500" />,
      features: [
        "Hosting Included",
        "Regular Backups",
        "Security Updates",
        "Ongoing Support",
      ],
      price: {
        summary: "Coming Soon",
        details: [],
      },
    },
  ];

  return (
    <AnimatedSection id="services" backgroundColor="#2F2F2F" ref={sectionRef}>
      <SectionHeader
        title="Services"
        highlightText="Offered"
        subtitle="Comprehensive web development solutions designed to elevate your digital presence"
        isVisible={isVisible}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {services.map((service, index) => {
          const isExpanded = expandedServices.includes(index);

          const isHostedComingSoon = service.title === "Hosted & Maintained";

          return (
            <MotionCard
              key={index}
              className={`service-card flex flex-col h-full ${
                isHostedComingSoon ? "opacity-50 cursor-not-allowed" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex-grow">
                  <div className="flex items-start mb-6">
                    <div className="text-3xl sm:text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <FeatureList features={service.features} />
                </div>

                <div className="mt-auto pt-6">
                  <div className="border-t border-gray-600 mb-6"></div>

                  {/* Clickable Price Summary */}
                  <button
                    onClick={() =>
                      !isHostedComingSoon && togglePriceExpansion(index)
                    }
                    disabled={isHostedComingSoon}
                    className={`w-full group/price rounded-lg p-3 transition-all duration-300 ${
                      isHostedComingSoon
                        ? "cursor-not-allowed"
                        : "hover:bg-gray-800/50"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <p
                        className={`text-lg font-bold mr-2 ${
                          isHostedComingSoon
                            ? "text-gray-500"
                            : "text-orange-400"
                        }`}
                      >
                        {service.price.summary}
                      </p>
                      {!isHostedComingSoon &&
                        (isExpanded ? (
                          <ChevronUpIcon className="w-5 h-5 text-orange-400 group-hover/price:text-orange-300 transition-colors" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5 text-orange-400 group-hover/price:text-orange-300 transition-colors" />
                        ))}
                    </div>
                    {!isHostedComingSoon && (
                      <p className="text-xs text-gray-400 mt-1 group-hover/price:text-gray-300 transition-colors">
                        Click for detailed pricing
                      </p>
                    )}
                  </button>

                  {/* Expandable Price Details */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                      <h4 className="text-sm font-semibold text-orange-300 mb-3">
                        Detailed Pricing:
                      </h4>
                      <ul className="space-y-2">
                        {service.price.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="text-sm text-gray-300 flex items-start"
                          >
                            <span className="text-orange-400 mr-2 mt-1 flex-shrink-0">
                              •
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Includes section */}
                      <div className="mt-4 pt-3 border-t border-gray-600">
                        <p className="text-xs text-gray-400 italic">
                          {service.title === "Full Handoff"
                            ? "Includes: Complete source code, full ownership, one-time payment, no hidden fees"
                            : "Includes: Hosting, maintenance, backups, security updates, ongoing support"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              </Card>
            </MotionCard>
          );
        })}
      </div>

      <div
        className={`text-center mt-12 sm:mt-16 ${
          isVisible ? "animate-fadeInUp" : "loading"
        }`}
        style={{ animationDelay: "0.8s" }}
      >
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Need something specific? Let's discuss your custom requirements.
        </p>
        <CTAButton
          targetSection="contact"
          className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
        >
          Get a Quote
        </CTAButton>
      </div>
    </AnimatedSection>
  );
}
