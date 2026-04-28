"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";
import {
  HomeIcon,
  BoltIcon,
  UserIcon,
  ArrowPathIcon,
  EnvelopeIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

interface FloatingNavProps {
  activeSection: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: HomeIcon },
  { id: "services", label: "Services", icon: BoltIcon },
  { id: "about", label: "About", icon: UserIcon },
  { id: "portfolio", label: "Concepts", icon: Square3Stack3DIcon },
  { id: "process", label: "Process", icon: ArrowPathIcon },
  { id: "contact", label: "Contact", icon: EnvelopeIcon },
];

export default function FloatingNav({ activeSection }: FloatingNavProps) {
  return (
    <nav className="fixed z-50 left-1/2 -translate-x-1/2 bottom-8 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-8">
      <div className="glass-card p-2 flex lg:flex-col gap-2 bg-black/40 backdrop-blur-xl border-white/10 rounded-full lg:rounded-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative p-3 rounded-full lg:rounded-xl transition-all duration-300 ${
                isActive ? "bg-orange-500 text-white" : "text-text-secondary hover:bg-white/5"
              }`}
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-2 py-1 rounded bg-[#0a0a0a] border border-white/10 text-xs font-medium text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity hidden lg:block">
                {item.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-orange-500 rounded-full lg:rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
