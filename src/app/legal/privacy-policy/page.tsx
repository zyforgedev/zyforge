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
            <p className="text-text-secondary">Last updated: October 7, 2026</p>
          </header>

          <section className="space-y-6 text-text-secondary leading-relaxed">
            <h2 className="text-2xl font-syne font-bold text-white">1. Introduction</h2>
            <p>
              Zyforge is a freelance web development business based in Cebu, Philippines.
              This notice explains the information used by this website and the project inquiry form.
            </p>

            <h2 className="text-2xl font-syne font-bold text-white">2. Data We Collect</h2>
            <p>
              When you use our "Start Project" discovery form or contact us directly, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name, email address and optional company name.</li>
              <li>Your project type, description, logo status, optional budget, timeline and notes.</li>
              <li>Files you choose to attach, including their filenames. Attachments are optional.</li>
              <li>Technical request information processed by the hosting provider, such as an IP address and requested URL.</li>
            </ul>

            <h2 className="text-2xl font-syne font-bold text-white">3. How We Use Your Data</h2>
            <p>
              We only use your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your project inquiry and provide a custom proposal.</li>
              <li>Reply to you about scope, pricing, timing and project delivery.</li>
              <li>Operate and troubleshoot the website and inquiry delivery.</li>
            </ul>

            <h2 className="text-2xl font-syne font-bold text-white">4. Hosting, Email and Checkout</h2>
            <p>
              Netlify hosts this website. Submitted inquiry details and attachments are processed by the
              website server and Resend to deliver an email to Zyforge&apos;s Gmail business inbox.
              These providers may process information outside the Philippines. Please send only the
              information needed to discuss your project, and do not attach passwords, identity documents
              or payment details.
            </p>
            <p>
              The digital tools catalogue links to Gumroad. Checkout, payment and purchased-file delivery
              take place on Gumroad under its own policies. This website does not collect payment card details.
              Links to Facebook and other external websites are also subject to those services&apos; policies.
            </p>

            <h2 className="text-2xl font-syne font-bold text-white">5. Cookies and Your Choices</h2>
            <p>
              The website code does not include advertising pixels or a visitor analytics script.
              External services you visit may use their own cookies. You can contact Zyforge to ask about
              information you provided or request a correction or deletion. Inquiry emails and attachments
              may remain in the business inbox while needed for project communication and records.
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
