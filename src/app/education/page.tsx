// src/components/Education.tsx
"use client";

import { GraduationCapIcon } from "@/components/icons";
import { Sparkles } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6" data-name="education">
      <div className="container mx-auto max-w-4xl">
        {/* Header with Sparkles */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="lofi-text relative">
              Education
              <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-pink-300 animate-pulse" />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="relative space-y-8">
          {/* MPhil Education */}
          <div className="glassmorphism p-8 rounded-2xl text-center relative group hover:translate-y-[-5px] transition-all duration-300">
            {/* Decorative line */}
            <div className="absolute -left-4 top-1/2 w-2 h-2 bg-pink-300 rounded-full group-hover:scale-150 transition-transform"></div>

            {/* Decorative sparkle on hover */}

            <div className="w-20 h-20 mx-auto mb-6 rounded-full glassmorphism flex items-center justify-center lofi-glow group-hover:scale-110 transition-transform">
              <GraduationCapIcon className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              MPhil Computer Science
            </h3>
            <p className="text-purple-400 mb-2 font-medium">
              Punjab University College of Information Technology (PUCIT)
            </p>
            <p className="text-gray-400">2024 – 2026 </p>

            {/* Achievements */}
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <p className="text-sm text-gray-400 flex items-center justify-center">
                <span className="text-purple-300">CGPA:</span> 3.35/4.0
              </p>
            </div>
          </div>

          {/* Bachelor's Education */}
          <div className="glassmorphism p-8 rounded-2xl text-center relative group hover:translate-y-[-5px] transition-all duration-300">
            {/* Decorative line */}
            <div className="absolute -left-4 top-1/2 w-2 h-2 bg-purple-300 rounded-full group-hover:scale-150 transition-transform"></div>

            {/* Decorative sparkle on hover */}

            <div className="w-20 h-20 mx-auto mb-6 rounded-full glassmorphism flex items-center justify-center lofi-glow group-hover:scale-110 transition-transform">
              <GraduationCapIcon className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Bachelor of Computer Science
            </h3>
            <p className="text-purple-400 mb-2 font-medium">
              Punjab University College of Information Technology (PUCIT)
            </p>
            <p className="text-gray-400">2020 – 2024</p>

            {/* Achievements */}
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <p className="text-sm text-gray-400 flex items-center justify-center">
                <span className="text-purple-300">CGPA:</span> 3.02/4.0
              </p>
            </div>
          </div>
        </div>

        {/* Connecting line between degrees */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-pink-300 to-purple-300 mt-[-8px]"></div>


      </div>
    </section>
  );
}