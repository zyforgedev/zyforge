"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-16">
          <Link href="/" className="text-2xl font-syne font-bold gradient-text">
            ZyForge
          </Link>
          <Link href="/" className="inline-flex items-center text-text-muted hover:text-orange-500 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header>
            <h1 className="text-5xl font-syne font-bold mb-4 tracking-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-text-secondary">Last Updated: April 28, 2024</p>
          </header>

          <section className="space-y-6 text-text-secondary leading-relaxed">
            <h2 className="text-2xl font-syne font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to ZyForge. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-syne font-bold text-white">2. Data We Collect</h2>
            <p>
              When you use our "Start Project" discovery form or contact us directly, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: Name, company name, and professional role.</li>
              <li>Contact Data: Email address and social media handles.</li>
              <li>Project Data: Vision documents, logos, brand assets, and budget ranges.</li>
              <li>Usage Data: Information about how you use our website.</li>
            </ul>

            <h2 className="text-2xl font-syne font-bold text-white">3. How We Use Your Data</h2>
            <p>
              We only use your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your project inquiry and provide a custom proposal.</li>
              <li>Communicate with you regarding your vision.</li>
              <li>Improve our website and services.</li>
            </ul>

            <h2 className="text-2xl font-syne font-bold text-white">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorized way. We use encrypted transmission (SSL) for all form submissions.
            </p>

            <h2 className="text-2xl font-syne font-bold text-white">5. Cookies</h2>
            <p>
              We use minimal cookies for essential website functionality and performance analysis. You can set your browser 
              to refuse all or some browser cookies, but some parts of this website may become inaccessible or not function properly.
            </p>

            <h2 className="text-2xl font-syne font-bold text-white">6. Contact Information</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              <span className="text-orange-500 font-bold">zyforge.dev@gmail.com</span>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
