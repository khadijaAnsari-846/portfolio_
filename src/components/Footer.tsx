"use client";

import { Linkedin, Github, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-800 relative overflow-hidden" data-name="footer">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright with sparkle */}
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-400">
              © {currentYear} Khadija Ansari. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {/* LinkedIn - FIXED with https:// */}
            <a
              href="https://www.linkedin.com/in/khadija-ansari-831928363"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-pink-300 transition-all duration-300 group-hover:scale-110 relative z-10" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/khadijaAnsari-846"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Github className="w-5 h-5 text-gray-400 group-hover:text-pink-300 transition-all duration-300 group-hover:scale-110 relative z-10" />
            </a>

            {/* Email */}
            <a
              href="mailto:ansarikhadija846@gmail.com"
              className="group relative"
            >
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-pink-300 transition-all duration-300 group-hover:scale-110 relative z-10" />
            </a>
          </div>
        </div>

        {/* Small decorative line */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-pink-300"></div>
            <div className="w-1 h-1 rounded-full bg-purple-300"></div>
            <div className="w-1 h-1 rounded-full bg-pink-300"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}