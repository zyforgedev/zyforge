"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  CloudArrowUpIcon,
  CheckCircleIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { sendOnboardingEmail } from "../actions/email";

const steps = [
  { id: 1, title: "The Basics", description: "Tell us who you are." },
  { id: 2, title: "The Vision", description: "What are we building?" },
  { id: 3, title: "Resources", description: "Assets and budget." },
  { id: 4, title: "Finalize", description: "Almost there!" }
];

export default function StartProject() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    customProjectType: "",
    hasLogo: "",
    description: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [files, setFiles] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(e.target.files || []);
    
    // Check total size (approximate)
    const totalSize = uploadedFiles.reduce((acc, file) => acc + file.size, 0) + 
                     files.reduce((acc, file) => acc + (file.size || 0), 0);
    
    if (totalSize > 20 * 1024 * 1024) { // 20MB limit to be safe
      setError("Total file size exceeds 20MB limit.");
      return;
    }

    uploadedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFiles(prev => [...prev, {
          name: file.name,
          size: file.size,
          type: file.type,
          content: event.target?.result
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const nextStep = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    // Basic validation per step
    if (currentStep === 1) {
      if (!formData.name || !formData.email) {
        setError("Please fill in your name and email.");
        return;
      }
    } else if (currentStep === 2) {
      const isCustomTypeMissing = formData.projectType === "Custom" && !(formData as any).customProjectType;
      if (!formData.projectType || isCustomTypeMissing || !formData.hasLogo || !formData.description) {
        setError("Please complete all required vision details.");
        return;
      }
    }
    
    setError("");
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };

  const prevStep = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setError("");
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submission
    if (currentStep < steps.length) return;
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      const result = await sendOnboardingEmail({ ...formData, files });

      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent Enter key from submitting the form accidentally
  const handleFormKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (currentStep < steps.length) {
        nextStep();
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center max-w-xl w-full"
        >
          <div className="w-20 h-20 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircleIcon className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-syne font-bold text-white mb-4">Vision Received</h1>
          <p className="text-text-secondary mb-8">
            Thank you for trusting ZyForge. We've received your onboarding document and our team will review it within 24 hours.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-text-muted hover:text-orange-500 transition-colors mb-12">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-syne font-bold mb-4 tracking-tight">
            Start Your <span className="gradient-text">Project</span>
          </h1>
          <p className="text-text-secondary text-lg">
            Complete this discovery document to help us understand your vision.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {steps.map(step => (
              <div key={step.id} className={`flex flex-col items-center ${currentStep >= step.id ? 'text-orange-500' : 'text-text-muted'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mb-2 transition-colors ${currentStep >= step.id ? 'border-orange-500 bg-orange-500/10' : 'border-white/10'}`}>
                  {step.id}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-orange-500"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <form 
          onSubmit={handleSubmit} 
          onKeyDown={handleFormKeyDown}
          className="glass-card p-8 sm:p-12 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-syne font-bold mb-6">The Basics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="juan@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Company / Organization (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Company Name"
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-syne font-bold mb-6">The Vision</h2>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Project Type</label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="" className="bg-[#0a0a0a]">Select Project Type</option>
                    <option value="Landing Page" className="bg-[#0a0a0a]">Landing Page</option>
                    <option value="Business Website" className="bg-[#0a0a0a]">Business Website</option>
                    <option value="E-commerce" className="bg-[#0a0a0a]">E-commerce</option>
                    <option value="Web Application" className="bg-[#0a0a0a]">Web Application</option>
                    <option value="Custom" className="bg-[#0a0a0a]">Custom / Other</option>
                  </select>
                </div>

                {formData.projectType === "Custom" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-text-secondary">Please specify project type</label>
                    <input
                      type="text"
                      name="customProjectType"
                      required
                      value={(formData as any).customProjectType || ""}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="e.g. Browser Extension, Website AI Integration, etc."
                    />
                  </motion.div>
                )}

                <div className="space-y-4">
                  <label className="text-sm font-medium text-text-secondary block">Do you have an existing brand logo?</label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, hasLogo: "yes" } as any)}
                      className={`flex-1 py-3 rounded-xl border transition-all ${formData.hasLogo === "yes" ? "border-orange-500 bg-orange-500/10 text-white" : "border-white/10 bg-white/5 text-text-secondary hover:border-white/20"}`}
                    >
                      Yes, I have one
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, hasLogo: "no" } as any)}
                      className={`flex-1 py-3 rounded-xl border transition-all ${formData.hasLogo === "no" ? "border-orange-500 bg-orange-500/10 text-white" : "border-white/10 bg-white/5 text-text-secondary hover:border-white/20"}`}
                    >
                      No, I need one
                    </button>
                  </div>
                  
                  {formData.hasLogo === "no" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-xl"
                    >
                      <p className="text-xs text-orange-500/80 leading-relaxed italic">
                        <strong>Note:</strong> Since you don't have a logo yet, we will create a high-quality placeholder brand identity for you during the initial build phase.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Brief Description</label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Describe your project..."
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-syne font-bold mb-6">Resources & Budget</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Budget Range</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="e.g. ₱10k - ₱20k"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Expected Timeline</label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="e.g. 4 weeks"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Project Assets (Logos, Guidelines, etc.)</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center cursor-pointer hover:border-orange-500/50 hover:bg-orange-500/5 transition-all"
                  >
                    <CloudArrowUpIcon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                    <p className="text-text-secondary">Drag & drop files here or <span className="text-orange-500 font-bold">browse</span></p>
                    <p className="text-text-muted text-xs mt-2">Max 20MB total. Images, PDF, Zip.</p>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileUpload} 
                      multiple 
                      className="hidden" 
                    />
                  </div>

                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, i) => (
                        <div key={i} className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                          <div className="flex items-center space-x-3 overflow-hidden">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm truncate">{file.name}</span>
                            <span className="text-xs text-text-muted">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => removeFile(i)}
                            className="p-1 hover:bg-white/10 rounded-lg text-text-muted hover:text-red-500 transition-all"
                          >
                            <XMarkIcon className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-syne font-bold mb-6">Finalize</h2>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Additional Notes</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Anything else we should know?"
                  />
                </div>

                <div className="bg-orange-500/5 border border-orange-500/20 p-6 rounded-2xl">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    By submitting this form, you're initiating the discovery phase for your project. 
                    We'll review these details and prepare a custom proposal for our first meeting.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm"
            >
              {error}
            </motion.div>
          )}

          <div className="mt-12 flex justify-between items-center">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Next Step
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-10"
              >
                {isSubmitting ? "Forging..." : "Submit Discovery Form"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
