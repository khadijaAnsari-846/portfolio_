// src/components/SkillCard.tsx
"use client";

import { useState, useEffect } from "react";

interface SkillCardProps {
  name: string;
  level: number;
}

export default function SkillCard({ name, level }: SkillCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-pink-300 font-semibold">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: isVisible ? `${level}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}