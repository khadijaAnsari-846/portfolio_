"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const skillsData = {
  primary: [
    { name: "Machine Learning", description: "Scikit-learn, Model Training, Feature Engineering, Predictive Modeling, NLP, Model Evaluation, Cross-validation, Hyperparameter Tuning" },
    { name: "Deep Learning", description: "PyTorch, TensorFlow, CNNs, RNNs, Transformers, LLMs, Neural Network Architectures, Transfer Learning, Model Optimization" },
    { name: "Computer Vision", description: "Image Classification, Object Detection (YOLO), OpenCV, CNN Architectures (ResNet, VGG), Image Segmentation, Feature Extraction" },
    { name: "Data Science", description: "NumPy, Pandas, Statistical Analysis, EDA, Model Evaluation, Data Visualization, Hypothesis Testing, A/B Testing" },
    { name: "Generative AI", description: "LLM-powered chatbots, Prompt Engineering, RAG systems, Vector Databases, Fine-tuning LLMs, AI Agents, LangChain Integration" },
    { name: "API Development", description: "FastAPI for AI model deployment, RESTful APIs, Scalable backend systems, API Integration, Docker Deployment" }
  ],

  secondary: [
    { name: "Python", description: "Primary language for AI, ML, Data Science, and backend systems. Expert in OOP, async programming, and Python ecosystems" },
    { name: "C++", description: "Algorithms, Data Structures, Performance Optimization, STL, Competitive Programming, Memory Management" },
    { name: "C#", description: ".NET backend development, ASP.NET Core, Entity Framework, REST APIs, System Integration" },
    { name: "SQL", description: "Database Design, Complex Queries, Data Optimization, Stored Procedures, Indexing, PostgreSQL, MySQL" },
    { name: ".NET", description: ".NET Core/Framework, C# development, Web APIs, Entity Framework, Backend systems, Microsoft Technologies" },
    { name: "Kotlin", description: "Modern JVM language, Android development, Coroutines, Functional programming, Interoperability with Java" },
    { name: "PyTorch", description: "Deep learning model development, Custom architectures, Dynamic computation graphs, Model deployment, TorchScript" },
    { name: "Scikit-learn", description: "Classical ML algorithms, Pipeline building, Model selection, Preprocessing, Feature extraction, Cross-validation" },
    { name: "NumPy", description: "Numerical computing, Array operations, Linear algebra, Random number generation, Broadcasting, Mathematical functions" },
    { name: "Pandas", description: "Data manipulation, DataFrame operations, Data cleaning, Time series analysis, Grouping, Merging, Reshaping data" },
    { name: "Matplotlib", description: "Data visualization, Custom plots, Publication-ready figures, Subplots, Animations, Interactive plotting" },
    { name: "Seaborn", description: "Statistical visualizations, Heatmaps, Distribution plots, Regression plots, Categorical plots, Theme customization" },
    { name: "OpenCV", description: "Computer vision, Image processing, Real-time video analysis, Feature detection, Object tracking, Image transformations" },
    { name: "LangChain", description: "LLM orchestration, Chains, Agents, Memory, Document loaders, Vector stores, Prompt templates, Tool integration" },
    { name: "LangGraph", description: "Graph-based AI workflow design, Multi-agent systems, State machines, Cyclic workflows, Agent collaboration" },
    { name: "CrewAI", description: "Multi-agent AI orchestration, Role-based agent teams, Collaborative task execution, Autonomous AI workflows, Agent delegation, Parallel processing" }
  ],

  tools: [
    { name: "Git", category: "Version Control • Branching, Merging, Rebasing, Collaboration workflows" },
    { name: "GitHub", category: "Collaboration • Repository Hosting, CI/CD, Actions, Project Management, Code Review" },
    { name: "VS Code", category: "IDE • Extensions, Debugging, Integrated Terminal, Git Integration, Remote Development" },
    { name: "Jupyter Notebook", category: "Data Science • Interactive Computing, Visualization, Markdown, Research Documentation" },
    { name: "Overleaf", category: "Technical Writing • LaTeX, Research Papers, Collaborative Writing, Academic Templates" },
    { name: "Postman", category: "API Testing • Request Building, Collections, Environment Variables, Automation, Documentation" },
    { name: "anti-gravity", category: "Humor • Reference to XKCD comic, Python's Easter egg (import antigravity)" },
    { name: "Claude", category: "AI Assistant • Claude AI by Anthropic, Prompt Engineering, AI Collaboration, Problem Solving" },
    { name: "n8n", description: "Workflow automation, AI integrations, Node-based automation, API connections, Data transformation, Webhook handling" }

  ]
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-spacing relative overflow-hidden" data-name="skills">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="lofi-text relative inline-block">
              Skills & Tools
              <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-pink-300 animate-pulse" />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </div>

        {/* Primary Skills */}
        <div className="mb-12">
          <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-4 ml-1">Core Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {skillsData.primary.map((skill) => (
              <div
                key={skill.name}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="glassmorphism p-4 rounded-xl lofi-card text-center cursor-default group hover:border-purple-300/30 hover:bg-purple-500/5 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <span className="text-white font-semibold text-sm">{skill.name}</span>
                </div>

                {/* Hover Tooltip */}
                {hoveredSkill === skill.name && (
                  <div className="absolute z-20 -bottom-28 left-1/2 transform -translate-x-1/2 w-56 p-3 glassmorphism rounded-lg lofi-glow text-center">
                    <p className="text-gray-300 text-xs leading-relaxed">{skill.description}</p>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Skills */}
        <div className="mb-12">
          <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-4 ml-1">Languages & Libraries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {skillsData.secondary.map((skill) => (
              <div
                key={skill.name}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="glassmorphism p-3 rounded-xl lofi-card text-center cursor-default group hover:border-purple-300/30 hover:bg-purple-500/5 transition-all duration-300 h-full flex items-center justify-center">
                  <span className="text-gray-200 text-xs">{skill.name}</span>
                </div>

                {/* Hover Tooltip */}
                {hoveredSkill === skill.name && (
                  <div className="absolute z-20 -bottom-24 left-1/2 transform -translate-x-1/2 w-48 p-2 glassmorphism rounded-lg lofi-glow text-center">
                    <p className="text-gray-300 text-xs leading-relaxed">{skill.description}</p>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-4 ml-1">Tools & Platforms</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {skillsData.tools.map((tool) => (
              <div
                key={tool.name}
                className="relative"
                onMouseEnter={() => setHoveredSkill(tool.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="glassmorphism p-3 rounded-xl lofi-card text-center cursor-default group hover:border-purple-300/30 hover:bg-purple-500/5 transition-all duration-300 h-full flex items-center justify-center">
                  <span className="text-gray-300 text-xs font-medium">{tool.name}</span>
                </div>

                {/* Category Tooltip */}
                {hoveredSkill === tool.name && (
                  <div className="absolute z-20 -bottom-20 left-1/2 transform -translate-x-1/2 w-44 p-2 glassmorphism rounded-lg lofi-glow text-center">
                    <p className="text-gray-300 text-xs leading-relaxed">{tool.category}</p>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}