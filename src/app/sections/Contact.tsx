"use client";

import { useState } from "react";
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
import emailjs from "@emailjs/browser";

export default function Contact({ motion }: { motion: any }) {
  const { isVisible, sectionRef } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Method 1: Using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        to_email: "zyforge.dev@gmail.com", // Your receiving email
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSubmitStatus({
        type: "success",
        message:
          "Thank you for your message! We'll get back to you within 24 hours.",
      });

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Alternative Method 2: Mailto fallback (opens user's email client)
  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(
      `New Project Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Project Type: ${formData.projectType}\n` +
        `Budget: ₱${formData.budget}\n\n` +
        `Message:\n${formData.message}`
    );
    window.location.href = `mailto:zyforge.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  // Alternative Method 3: Using Web3Forms (another free service)
  const handleWeb3FormsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Get your access key from https://web3forms.com/ (free)
    const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          budget: `₱${formData.budget}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your message! We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-8 h-8 text-primary-cyan" />,
      text: "Email",
      subtitle: "zyforge.dev@gmail.com\nSend us your project details",
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
    { value: "Custom Website", label: "Custom Website" },
    { value: "Web Application", label: "Web Application" },
    { value: "WordPress/CMS", label: "WordPress/CMS" },
    { value: "Optimization", label: "Optimization" },
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

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary flex-1 text-base py-4 font-semibold ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? "Sending..." : "Send Project Details"}
                </motion.button>

                {/* Fallback option */}
                <motion.button
                  type="button"
                  onClick={handleMailtoFallback}
                  className="btn-secondary flex-1 text-base py-4 font-semibold border border-primary-cyan text-primary-cyan hover:bg-primary-cyan hover:text-black transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Email Client
                </motion.button>
              </div>
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
