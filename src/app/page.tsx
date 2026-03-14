"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Experience from "@/components/Experience";
import Education from "@/app/education/page";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />


      <Education />

      <Contact />
    </div>
  );
}