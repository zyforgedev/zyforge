"use client";

import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
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

type InquiryFile = { name: string; size: number; type: string; content: string };

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
  const [files, setFiles] = useState<InquiryFile[]>([]);
  const [isReadingFiles, setIsReadingFiles] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isReadingFiles) return;
    const uploadedFiles = Array.from(e.target.files || []);
    
    if (uploadedFiles.length + files.length > 8) {
      setError("Attach up to 8 files.");
      return;
    }

    const totalSize = uploadedFiles.reduce((acc, file) => acc + file.size, 0) + 
                     files.reduce((acc, file) => acc + (file.size || 0), 0);
    
    if (totalSize > 3 * 1024 * 1024) {
      setError("Please keep attachments below 3MB in total.");
      return;
    }

    setIsReadingFiles(true);
    setError("");
    try {
      const selected = await Promise.all(uploadedFiles.map(file => new Promise<InquiryFile>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => typeof reader.result === "string"
          ? resolve({ name: file.name, size: file.size, type: file.type, content: reader.result })
          : reject(new Error("File reading failed"));
        reader.onerror = () => reject(new Error("File reading failed"));
        reader.readAsDataURL(file);
      })));
      setFiles(previous => [...previous, ...selected]);
    } catch {
      setError("A file could not be read. Please select it again or send your inquiry without it.");
    } finally {
      setIsReadingFiles(false);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const nextStep = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (isReadingFiles) {
      setError("Please wait for the selected files to finish loading.");
      return;
    }
    
    // Basic validation per step
    if (currentStep === 1) {
      if (!formData.name.trim() || !formData.email.trim()) {
        setError("Please fill in your name and email.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        setError("Please enter a valid email address.");
        return;
      }
    } else if (currentStep === 2) {
      const isCustomTypeMissing = formData.projectType === "Custom" && !formData.customProjectType.trim();
      if (!formData.projectType || isCustomTypeMissing || !formData.hasLogo || !formData.description.trim()) {
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
    if (isSubmitting || isReadingFiles) return;

    setIsSubmitting(true);
    setError("");

    try {
      const result = await sendOnboardingEmail({ ...formData, files });

      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Let focused buttons keep their native keyboard behaviour.
  const handleFormKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.target as HTMLElement).tagName === 'INPUT' && (e.target as HTMLInputElement).type !== 'file') {
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
          <h1 className="text-4xl font-syne font-bold text-white mb-4">Inquiry received</h1>
          <p className="text-text-secondary mb-8">
            Thank you for contacting Zyforge. Your project details have been sent for review. Keep a copy of your inquiry and use email if you need to add anything.
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
            Share the website you need, your budget and timing. This is an inquiry; scope and price are agreed separately.
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

        <MotionConfig reducedMotion="user">
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
                    <label htmlFor="inquiry-name" className="text-sm font-medium text-text-secondary">Full name</label>
                    <input
                      id="inquiry-name"
                      autoComplete="name"
                      maxLength={120}
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
                    <label htmlFor="inquiry-email" className="text-sm font-medium text-text-secondary">Email address</label>
                    <input
                      id="inquiry-email"
                      autoComplete="email"
                      maxLength={254}
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
                  <label htmlFor="inquiry-company" className="text-sm font-medium text-text-secondary">Company / organisation (optional)</label>
                  <input
                    id="inquiry-company"
                    autoComplete="organization"
                    maxLength={160}
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
                  <label htmlFor="inquiry-type" className="text-sm font-medium text-text-secondary">Project type</label>
                  <select
                    id="inquiry-type"
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
                    <label htmlFor="inquiry-custom-type" className="text-sm font-medium text-text-secondary">Please specify project type</label>
                    <input
                      id="inquiry-custom-type"
                      maxLength={160}
                      type="text"
                      name="customProjectType"
                      required
                      value={formData.customProjectType}
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
                      aria-pressed={formData.hasLogo === "yes"}
                      onClick={() => setFormData({ ...formData, hasLogo: "yes" })}
                      className={`flex-1 py-3 rounded-xl border transition-all ${formData.hasLogo === "yes" ? "border-orange-500 bg-orange-500/10 text-white" : "border-white/10 bg-white/5 text-text-secondary hover:border-white/20"}`}
                    >
                      Yes, I have one
                    </button>
                    <button
                      type="button"
                      aria-pressed={formData.hasLogo === "no"}
                      onClick={() => setFormData({ ...formData, hasLogo: "no" })}
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
                        Logo or branding work can be discussed as part of the project scope.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry-description" className="text-sm font-medium text-text-secondary">Brief description</label>
                  <textarea
                    id="inquiry-description"
                    maxLength={5000}
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
                    <label htmlFor="inquiry-budget" className="text-sm font-medium text-text-secondary">Budget range (optional)</label>
                    <input
                      id="inquiry-budget"
                      maxLength={160}
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="e.g. ₱10k - ₱20k"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="inquiry-timeline" className="text-sm font-medium text-text-secondary">Expected timeline (optional)</label>
                    <input
                      id="inquiry-timeline"
                      maxLength={160}
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
                  <label htmlFor="inquiry-files" className="text-sm font-medium text-text-secondary">Project assets (optional)</label>
                  <div
                    className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center cursor-pointer hover:border-orange-500/50 hover:bg-orange-500/5 transition-all"
                  >
                    <CloudArrowUpIcon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                    <p className="text-text-secondary mb-4">Choose files to attach to your inquiry.</p>
                    <p id="inquiry-file-help" className="text-text-muted text-sm mb-4">Up to 8 files, 3MB total. Images, PDF or ZIP. Send only material you want Zyforge to review. Email us for larger assets.</p>
                    <input 
                      id="inquiry-files"
                      aria-describedby="inquiry-file-help"
                      accept="image/*,.pdf,.zip"
                      type="file" 
                      disabled={isReadingFiles}
                      onChange={handleFileUpload} 
                      multiple 
                      className="w-full text-sm file:mr-4 file:rounded file:border file:border-white/20 file:bg-white/10 file:px-4 file:py-3 file:text-white"
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
                            aria-label={`Remove ${file.name}`}
                            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center hover:bg-white/10 rounded-lg text-text-muted hover:text-red-500 transition-all"
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
                <dl className="inquiry-review">
                  {[
                    ["Name", formData.name], ["Email", formData.email],
                    ["Company", formData.company || "Not specified"],
                    ["Project type", formData.projectType === "Custom" ? formData.customProjectType : formData.projectType],
                    ["Existing logo", formData.hasLogo === "yes" ? "Yes" : "No"],
                    ["Description", formData.description],
                    ["Budget", formData.budget || "Not specified"],
                    ["Timeline", formData.timeline || "Not specified"],
                    ["Attachments", files.length ? files.map(file => file.name).join(", ") : "None"],
                  ].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
                </dl>
                <div className="space-y-2">
                  <label htmlFor="inquiry-notes" className="text-sm font-medium text-text-secondary">Additional notes (optional)</label>
                  <textarea
                    id="inquiry-notes"
                    maxLength={5000}
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
                    Review the details before sending. This form sends your inquiry and any attachments to Zyforge. It does not start a paid project.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <motion.div
              role="alert"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm"
            >
              {error}
            </motion.div>
          )}

          <div className="inquiry-actions mt-12 flex flex-wrap justify-between items-center gap-4">
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
                disabled={isSubmitting || isReadingFiles}
                className="btn-primary px-10"
              >
                {isSubmitting ? "Sending..." : "Send project inquiry"}
              </button>
            )}
          </div>
        </form>
        </MotionConfig>
        <p className="mt-8 text-text-secondary">Prefer email or having trouble with the form? <a className="discovery-link" href="mailto:zyforge.dev@gmail.com">Contact zyforge.dev@gmail.com</a>.</p>
      </div>
    </div>
  );
}
