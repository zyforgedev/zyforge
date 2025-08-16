"use client";

import { scrollToSection } from "../utils/scrollToSection";
import {
  HomeIcon,
  BoltIcon,
  UserIcon,
  ArrowPathIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

interface FloatingNavProps {
  activeSection: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: "hero",
    label: "Home",
    icon: <HomeIcon className="w-6 h-6 text-white" />,
  },
  {
    id: "services",
    label: "Services",
    icon: <BoltIcon className="w-6 h-6 text-white" />,
  },
  {
    id: "about",
    label: "About",
    icon: <UserIcon className="w-6 h-6 text-white" />,
  },
  {
    id: "process",
    label: "Process",
    icon: <ArrowPathIcon className="w-6 h-6 text-white" />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <EnvelopeIcon className="w-6 h-6 text-white" />,
  },
];

export default function FloatingNav({ activeSection }: FloatingNavProps) {
  return (
    <>
      {/* Responsive Navigation */}
      <nav
        id="floating-nav"
        className="fixed z-50 lg:left-4 lg:top-1/2 lg:-translate-y-1/2 top-4 left-1/2 transform -translate-x-1/2 lg:translate-x-0"
      >
        <div
          className="glass-effect rounded-full shadow-2xl p-2 flex lg:flex-col lg:space-y-2 space-x-2 lg:space-x-0"
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
