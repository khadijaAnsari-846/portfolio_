"use client";

import { Briefcase, Calendar, MapPin, Award, Brain, Cpu, Database, GitBranch, Sparkles } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI Trainee",
      company: "Vaival Technologies",
      period: "2026 – Present",
      location: "On-Site",
      description: "Working on cutting-edge AI solutions with focus on Generative AI and Agent-based systems.",
      learnings: [
        "Building AI Agents using LangChain and LangGraph",
        "Working with Crew AI for multi-agent orchestration",
        "Implementing RAG (Retrieval-Augmented Generation) systems",
        "Developing and deploying LLM-based applications",
        "Prompt engineering and fine-tuning language models"
      ],
      technologies: ["LangChain", "LangGraph", "CrewAI", "LLMs", "RAG", "Python", "GenAI"],
      color: "purple",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-300",
      borderColor: "border-purple-300/10",
      gradientFrom: "from-purple-500/5",
      gradientTo: "to-pink-500/5"
    },
    {
      title: "AI/ML Engineer Intern",
      company: "Code Generation",
      period: "2025",
      location: "Remote",
      description: "Focused on developing code generation models and deep learning solutions.",
      learnings: [
        "Deep Learning fundamentals and architectures",
        "Fine-tuning models for code generation tasks",
        "Transformers",
        "Model optimization and deployment basics"
      ],
      technologies: ["Deep Learning", "LLMs", "Transformers", "Python", "TensorFlow", "PyTorch"],
      color: "purple",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-300",
      borderColor: "border-purple-300/10",
      gradientFrom: "from-purple-500/5",
      gradientTo: "to-pink-500/5"
    },
    {
      title: "Data Science Intern",
      company: "YoungDev",
      period: "2025",
      location: "Remote",
      description: "Assisted in data analysis, visualization, and machine learning projects.",
      learnings: [
        "Data preprocessing and exploratory data analysis",
        "Building interactive dashboards for data visualization",
        "Implementing basic machine learning models",
        "Statistical analysis and hypothesis testing",
        "Working with real-world datasets"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter", "SQL"],
      color: "purple",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-300",
      borderColor: "border-purple-300/10",
      gradientFrom: "from-purple-500/5",
      gradientTo: "to-pink-500/5"
    }
  ];

  // Icon mapping for technologies
  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      "LangChain": Brain,
      "LangGraph": GitBranch,
      "CrewAI": Briefcase,
      "LLMs": Brain,
      "RAG": Database,
      "GenAI": Brain,
      "Deep Learning": Cpu,
      "Python": Briefcase,
      "TensorFlow": Cpu,
      "PyTorch": Cpu,
      "Pandas": Database,
    };
    return iconMap[tech] || Brain;
  };

  return (
    <section id="experience" className="py-20 px-6" data-name="experience">
      <div className="container mx-auto max-w-4xl">
        {/* Header with Sparkles */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="lofi-text relative">
              Experience
              <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-pink-300 animate-pulse" />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glassmorphism p-8 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 relative group"
            >
              {/* Decorative sparkle on hover */}
              <Sparkles className={`absolute -top-3 -right-3 w-5 h-5 ${exp.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center lofi-glow flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className={`w-6 h-6 ${exp.textColor}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title and Company */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className={`${exp.textColor} font-medium`}>
                        {exp.company}
                      </p>
                    </div>

                    {/* Period Badge */}
                    <span className={`inline-block mt-2 md:mt-0 px-4 py-1 rounded-full ${exp.bgColor} border ${exp.borderColor} ${exp.textColor} text-sm`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin className={`w-4 h-4 mr-1 ${exp.textColor}`} />
                    <span>{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-spacing mb-4">
                    {exp.description}
                  </p>

                  {/* Learnings/Achievements */}
                  <div className="space-y-2 mb-4">
                    <h4 className={`text-sm font-semibold ${exp.textColor} mb-2 flex items-center`}>
                      <Sparkles className={`w-3 h-3 mr-1 ${exp.textColor}`} /> Key Learnings:
                    </h4>
                    {exp.learnings.map((learning, i) => (
                      <div key={i} className="flex items-start">
                        <Award className={`w-4 h-4 ${exp.textColor} mr-2 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-300 text-sm">{learning}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies/Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700/50">
                    {exp.technologies.map((tech, i) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full ${exp.bgColor} ${exp.textColor}`}
                        >
                          <Icon className="w-3 h-3" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Special highlight for each role */}
                  <div className={`mt-4 p-3 rounded-lg bg-gradient-to-r ${exp.gradientFrom} ${exp.gradientTo} border ${exp.borderColor}`}>
                    <p className="text-xs text-gray-300 flex items-center">
                      <Sparkles className={`w-3 h-3 ${exp.textColor} mr-1`} />
                      <span className={`${exp.textColor} font-semibold`}>Focus Area:</span> {
                        index === 0 ? "Building AI Agents with LangChain, LangGraph, and CrewAI • Generative AI Applications" :
                          index === 1 ? "Deep Learning & LLMs for Code Generation • Transformer Architectures" :
                            "Data Analysis, Visualization & ML • Real-world Dataset Processing"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More experiences coming soon note */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm italic flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-pink-300 mr-1" />
            Continuously learning and growing in AI/ML field...
            <Sparkles className="w-4 h-4 text-purple-300 ml-1" />
          </p>
        </div>
      </div>
    </section>
  );
}