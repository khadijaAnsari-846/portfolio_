"use client";

import SectionTitle from "@/components/SectionTitle";
import { tools } from "@/data/tools";

export default function Tools() {
  return (
    <section id="tools" className="section-spacing" data-name="tools">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>Tools I Use</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="glassmorphism content-box lofi-card text-center">
              <h3 className="text-xl font-semibold mb-2 text-pink-300">{tool.name}</h3>
              <p className="text-gray-300">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}