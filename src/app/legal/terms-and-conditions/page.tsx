"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function TermsAndConditions() {
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
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-text-secondary">Last Updated: April 28, 2024</p>
          </header>

          <section className="space-y-8 text-text-secondary leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl font-syne font-bold text-white">1. Agreement to Terms</h2>
              <p>
                By accessing or using ZyForge's services, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of the terms, you may not access our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-syne font-bold text-white">2. Our Services & Pricing</h2>
              <p>
                ZyForge provides custom web development and design services. We operate on a "Zero Upfront Cost" model 
                for selected projects, meaning initial development phases may begin without a deposit. 
                Full payment terms, including milestone-based payments and final delivery costs, will be detailed in 
                the custom proposal provided after the discovery phase.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-syne font-bold text-white">3. Intellectual Property</h2>
              <p>
                Upon final payment for a project, the client is granted full ownership of the final frontend design, 
                content, and custom assets. ZyForge retains ownership of its underlying software patterns, 
                reusable code libraries, and generic development frameworks used across multiple projects.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-syne font-bold text-white">4. Client Responsibilities</h2>
              <p>
                Clients are responsible for providing accurate project vision data, brand assets (or approval of 
                placeholders), and timely feedback. Delays in communication may impact the delivery timeline 
                outlined in the proposal.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-syne font-bold text-white">5. Limitation of Liability</h2>
              <p>
                ZyForge shall not be held liable for any indirect, incidental, or consequential damages resulting 
                from the use of our services or any downtime of websites we build. We provide high-performance 
                solutions but cannot guarantee specific business outcomes (e.g., exact sales numbers).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-syne font-bold text-white">6. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Republic of the Philippines. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts of 
                <span className="text-white font-bold"> Cebu City, Philippines.</span>
              </p>
            </div>

            <div className="space-y-4 border-t border-white/5 pt-8">
              <h2 className="text-2xl font-syne font-bold text-white">Contact Us</h2>
              <p>
                For any questions regarding these terms, please contact:
                <br />
                <span className="text-orange-500 font-bold">zyforge.dev@gmail.com</span>
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
