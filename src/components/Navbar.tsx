"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism m-4" data-name="navigation">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with icon */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <Sparkles className="w-6 h-6 text-pink-300 group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-semibold lofi-text">Khadija Ansari</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${activeSection === item.id
                  ? "text-pink-300"
                  : "text-gray-300 hover:text-pink-300"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-300 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}