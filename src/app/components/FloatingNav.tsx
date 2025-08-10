"use client";

import { scrollToSection } from "../utils/scrollToSection";

interface FloatingNavProps {
  activeSection: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: "🏠" },
  { id: "services", label: "Services", icon: "⚡" },
  { id: "about", label: "About", icon: "👨‍💻" },
  { id: "process", label: "Process", icon: "🔄" },
  { id: "contact", label: "Contact", icon: "📧" },
];

export default function FloatingNav({ activeSection }: FloatingNavProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-4 z-50">
        <div
          className="glass-effect rounded-full shadow-2xl p-2 flex space-x-2"
          style={{
            backgroundColor: "rgba(30, 30, 30, 0.5)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 107, 26, 0.2)",
          }}
        >
          {/* Buttons */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition-all ${
                activeSection === item.id ? "bg-orange-500" : ""
              }`}
              title={item.label}
            >
              <span className="text-lg">{item.icon}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
