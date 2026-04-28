"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function AuthorityPreview() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Mini Nav */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="text-2xl font-black text-blue-900">AUTHORITY</div>
        <div className="flex items-center gap-6">
          <Link href="/concepts/authority-business" className="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center">
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Blueprint
          </Link>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center">
            <PhoneIcon className="w-4 h-4 mr-2" /> Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 leading-tight">
            The Digital Foundation for your <span className="text-blue-600">Local Business.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Stop losing clients to a dated website. We build trustworthy, 
            high-converting digital hubs for local service providers.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
              See Our Services
            </button>
            <button className="border-2 border-gray-100 hover:border-blue-600 px-8 py-4 rounded-xl font-bold transition-all">
              Read Reviews
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 aspect-square rounded-3xl border-8 border-white shadow-2xl flex items-center justify-center text-gray-300 italic"
        >
          [Business Professional Image]
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 grayscale opacity-50 font-bold text-gray-400">
          <span>GOOGLE RATING 5.0</span>
          <span>TRUSTED BY 200+ LOCAL CLIENTS</span>
          <span>LICENSED & INSURED</span>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-400 text-sm">
        &copy; 2024 Authority Business Concept. Forged by ZyForge.
      </footer>
    </div>
  );
}
