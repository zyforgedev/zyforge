"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import IconWithText from "../components/IconWithText";
import Card from "../components/Card";
import FormInput from "../components/FormInput";
import {
  EnvelopeIcon,
  ClockIcon,
  GlobeAltIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const { isVisible, sectionRef } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-8 h-8 text-primary-cyan" />,
      text: "Email",
      subtitle: "zyforge@gmail.com\nSend us your project details",
    },
    {
      icon: <ClockIcon className="w-8 h-8 text-primary-cyan" />,
      text: "Response Time",
      subtitle: "Within 24 hours\nQuick turnaround guaranteed",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8 text-primary-cyan" />,
      text: "Location",
      subtitle: "Remote Worldwide\nServing clients globally",
    },
    {
      icon: <BanknotesIcon className="w-8 h-8 text-primary-cyan" />,
      text: "Payment",
      subtitle: "No upfront costs\nPay only when satisfied",
    },
  ];

  const projectTypeOptions = [
    { value: "", label: "Select a service" },
    { value: "website", label: "Custom Website" },
    { value: "webapp", label: "Web Application" },
    { value: "wordpress", label: "WordPress/CMS" },
    { value: "optimization", label: "Optimization" },
    { value: "other", label: "Other" },
  ];

  const budgetOptions = [
    { value: "", label: "Select budget" },
    { value: "1k-5k", label: "₱1,000 - ₱5,000" },
    { value: "5k-10k", label: "₱5,000 - ₱10,000" },
    { value: "10k-20k", label: "₱10,000 - ₱20,000" },
    { value: "20k+", label: "₱20,000+" },
  ];

  return (
    <AnimatedSection id="contact" backgroundColor="#2F2F2F" ref={sectionRef}>
      <SectionHeader
        title="Let's Forge Your"
        highlightText="Vision"
        subtitle="Ready to transform your ideas into reality? Get in touch and let's discuss your project."
        isVisible={isVisible}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <div
          className={`space-y-8 ${
            isVisible ? "animate-fadeInLeft" : "loading"
          }`}
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
              Get in Touch
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              Ready to start your project? Send us a message and we'll respond
              within 24 hours with a personalized proposal.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-colors duration-300"
              >
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    {item.text}
                  </h4>
                  {item.subtitle.split("\n").map((line, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-orange-400 font-medium"
                          : "text-gray-400 text-sm"
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Card backgroundColor="#3A3A3A" hoverEffect={false}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Project Type"
                  name="projectType"
                  type="select"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  options={projectTypeOptions}
                />
                <FormInput
                  label="Budget (in ₱)"
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="e.g., 10000"
                />
              </div>

              <FormInput
                label="Project Description"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project, goals, and any specific requirements..."
                rows={5}
                required
              />

              <motion.button
                type="submit"
                className="btn-primary w-full text-base py-4 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Project Details
              </motion.button>
            </form>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <footer
        className={`text-center mt-16 sm:mt-20 pt-8 border-t border-gray-600 ${
          isVisible ? "animate-fadeInUp" : "loading"
        }`}
        style={{ animationDelay: "0.6s" }}
      >
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
            ZyForge
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Forging digital excellence, one project at a time.
          </p>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ZyForge. All rights reserved.
        </p>
      </footer>
    </AnimatedSection>
  );
}
