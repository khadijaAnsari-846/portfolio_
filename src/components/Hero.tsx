"use client";

import { useState, useEffect } from "react";
import { Brain } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI/ML Engineer| GenAI | Data Science | Tech Enthusiast";

  useEffect(() => {
    let currentIndex = 0;
    const typeTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          setTypedText("");
        }, 3000);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center" data-name="hero">
      <div className="container mx-auto px-8 text-center">
        <div className="floating mb-12">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full glassmorphism flex items-center justify-center lofi-glow">
            <Brain className="w-20 h-20 text-pink-300" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 lofi-text fade-in">
          Hi, I'm Khadija
        </h1>
        <div className="mb-6">
          <p className="text-xl md:text-2xl text-pink-200 typing-animation min-h-[32px]">
            {typedText}
          </p>
        </div>
        <div className="mb-12">
          <p className="text-lg max-w-3xl mx-auto text-gray-300 text-spacing">
            AI Engineer building intelligent systems with machine learning and large language models to solve real-world problems.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-pink-500/80 text-white rounded-lg font-medium hover:bg-pink-400 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}