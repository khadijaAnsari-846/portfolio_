import { Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  objective: string;
  stack: string;
  status?: "completed" | "coming-soon";
}

export default function ProjectCard({ title, objective, stack, status = "completed" }: ProjectCardProps) {
  return (
    <div className="glassmorphism content-box lofi-card text-center h-full flex flex-col">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full glassmorphism flex items-center justify-center lofi-glow">
        <Code className="w-8 h-8 text-pink-300" />
      </div>

      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>

      {/* Objective Section */}
      <div className="mb-4 text-left">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1">OBJECTIVE</span>
        <p className="text-white/90 text-sm leading-relaxed">{objective}</p>
      </div>

      {/* Stack Section */}
      <div className="mb-6 text-left flex-grow">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1">STACK</span>
        <p className="text-white/90 text-sm leading-relaxed">{stack}</p>
      </div>

      {/* Status Button */}
      <div className="flex justify-center mt-auto pt-4">
        {status === "coming-soon" ? (
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-300/20">
            <span className="text-xs font-medium text-pink-300">🔮 Coming Soon</span>
          </div>
        ) : (
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-300/20">
            <span className="text-xs font-medium text-pink-300">✓ Completed</span>
          </div>
        )}
      </div>
    </div>
  );
}