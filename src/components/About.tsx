"use client";

import { User, Code, Brain, Award, Briefcase, Sparkles, Target, Rocket, Heart, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStat, setActiveStat] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Code, value: "5+", label: "Programming Languages", color: "from-blue-400 to-cyan-400" },
    { icon: Brain, value: "3", label: "AI/ML Projects", color: "from-purple-400 to-pink-400" },
    { icon: Award, value: "6", label: "Certifications", color: "from-yellow-400 to-orange-400" },
    { icon: Briefcase, value: "1+", label: "Years Experience", color: "from-green-400 to-emerald-400" },
  ];

  const passions = [
    { icon: Brain, text: "Artificial Intelligence", color: "pink" },
    { icon: Code, text: "Machine Learning", color: "cyan" },
    { icon: Rocket, text: "Problem Solving", color: "purple" }
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden" data-name="about">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header with Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="lofi-text relative inline-block">
              About Me
              <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-pink-300 animate-pulse" />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Profile Card */}
          <div className={`h-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glassmorphism p-8 rounded-2xl lofi-card group relative overflow-hidden h-full flex flex-col">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Profile Image/Icon */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <div className="w-40 h-40 mx-auto rounded-full glassmorphism flex items-center justify-center lofi-glow group-hover:scale-105 transition-transform duration-300">
                      <User className="w-20 h-20 text-pink-300" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 glassmorphism rounded-full flex items-center justify-center border-2 border-pink-300/30">
                      <Sparkles className="w-6 h-6 text-pink-300" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-semibold text-pink-200 mt-6">Khadija Ansari</h3>
                </div>



                {/* Passions/Tags - will push to bottom if needed */}
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {passions.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className={`glassmorphism px-3 py-1 rounded-full text-xs flex items-center gap-1 border border-${item.color}-300/30`}>
                          <Icon className={`w-3 h-3 text-${item.color}-300`} />
                          <span className={`text-${item.color}-200`}>{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Objective & Vision */}
          <div className={`h-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glassmorphism p-8 rounded-2xl lofi-card relative overflow-hidden h-full flex flex-col">
              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-pink-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
              <div className="relative flex flex-col h-full">
                {/* Professional Summary */}
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold mb-6 flex items-center">

                  </h3>

                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-pink-300/30">
                      <p className="text-gray-300 text-spacing leading-relaxed">
                        AI Engineer with experience in <span className="text-purple-300 font-semibold">Machine learning, Deep learning, Predictive modeling, and LLM-powered applications</span>,
                        combined with strong Python and backend development expertise.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Career Objective */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 text-pink-300 mr-2" />
                    <span className="text-pink-200">
                      Objective
                    </span>
                  </h3>
                  <div className="relative pl-6 border-l-2 border-purple-300/30">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      To leverage my expertise in AI and machine learning to develop innovative solutions that address real-world challenges.
                      Seeking a role where I can contribute to cutting-edge AI projects and continuously grow as an AI engineer.
                    </p>
                  </div>
                </div>

              </div>





            </div>
          </div>
        </div>
      </div>
    </section>
  );
}