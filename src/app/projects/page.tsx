"use client";

import { useState, useEffect } from "react";
import { Sparkles, X } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [displayProjects, setDisplayProjects] = useState(projects.slice(0, 4));

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleViewAll = () => {
    setShowAll(true);
    setDisplayProjects(projects);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setDisplayProjects(projects.slice(0, 4));
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section-spacing" data-name="projects">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="lofi-text relative inline-block">
              Projects
              <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-pink-300 animate-pulse" />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              objective={project.objective}
              stack={project.stack}
              status={project.status as "completed" | "coming-soon"}
            />
          ))}
        </div>

        {/* View All / Show Less Button */}
        <div className="text-center mt-12">
          {!showAll ? (
            <button
              onClick={handleViewAll}
              className="px-8 py-3 glassmorphism rounded-lg text-pink-300 hover:text-white transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2">View All Projects</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          ) : (
            <div className="space-y-4">
              <button
                onClick={handleShowLess}
                className="px-8 py-3 glassmorphism rounded-lg text-pink-300 hover:text-white transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <X className="w-4 h-4 mr-2" />
                  <span>Show Less</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>

              {/* Project stats */}
              <div className="flex justify-center gap-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-300">
                  ✨ Coming Soon: {projects.filter(p => p.status === "coming-soon").length}
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-300">
                  ✓ Completed: {projects.filter(p => p.status !== "coming-soon").length}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}