"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";

export default function Projects({ isDarkMode }) {
  const bgColor = isDarkMode ? "bg-[#1a1a1a]" : "bg-[#f4f4f4]";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const cardBg = isDarkMode ? "bg-[#0f0f0f]" : "bg-white";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const pillBg = isDarkMode
    ? "bg-blue-800/40 text-blue-300"
    : "bg-blue-100 text-blue-600";

  const webGenAIProjects = [
    {
      name: "Learn Era",
      description:
        "An AI based web application for personalized learning experience.",
      url: "https://github.com/shravanjindal/LearnEra",
      tags: ["NextJS", "Machine Learning", "Hugging Face"],
    },
    {
      name: "FestEz",
      description: "A team project for streamlining college fest organization.",
      url: "https://github.com/shravanjindal/FestEaze",
      tags: ["ReactJS", "Node", "MongoDB", "Team Project"],
    },
    {
      name: "ClinicX",
      description:
        "An AI-powered doctor assistant for real-time medical support.",
      url: "https://github.com/shravanjindal/AI-Doctor-Assistant",
      tags: ["GenAI", "LangChain", "Hugging Face"],
    },
    {
      name: "TradeHub",
      description:
        "A sleek and responsive ReactJS dashboard for crypto trading.",
      url: "https://tradehub-phi.vercel.app/",
      tags: ["ReactJS", "UI", "Finance"],
    },
    {
      name: "WanderLust",
      description: "A travel planner using EJS templates and NodeJS backend.",
      url: "https://wanderlust-66k3.onrender.com/listings",
      tags: ["EJS", "NodeJS", "Express", "MongoDB"],
    },
  ];

  const mlProjects = [
    {
      name: "Travelling Salesman - CV Approach",
      description:
        "Computer vision-based solution to calculate the total distance travelled.",
      url: "https://github.com/shravanjindal/Travelling-Salesman-Computer-Vision",
      tags: ["OpenCV", "Path Optimization", "Computer Vision"],
    },
    {
      name: "House Price Prediction",
      description:
        "A regression model predicting house prices using feature engineering.",
      url: "https://github.com/shravanjindal/House_price_prediction_project",
      tags: ["Python", "Supervised Learning", "Regression"],
    },
  ];

  const collegeProjects = [
    {
      name: "xv6 Memory Management",
      description:
        "Modified xv6 kernel to implement advanced memory management.",
      url: "https://github.com/shravanjindal/COW-Implementation-in-xv6",
      tags: ["C", "Operating Systems", "xv6"],
    },

    {
      name: "Enhanced ChampSim Simulator",
      description:
        "Improved cache performance tracking using branch predictors.",
      url: "https://github.com/shravanjindal/Enhanced_Champsim",
      tags: ["C++", "Simulator", "Computer Architecture"],
    },
    {
      name: "RISC-V Assembler",
      description:
        "Designed and implemented an assembler for the RISC-V instruction set in C++. Translated assembly language into machine code, handled labels and pseudo-instructions, and built a robust symbol table for multi-pass assembly. Demonstrated deep understanding of low-level architecture and instruction encoding.",
      tags: ["C++", "RISC-V", "Assembler", "Instruction Set", "Symbol Table"],
      url: "https://github.com/shravanjindal/Riscv_Assembler",
    },

    {
      name: "Spell Checker and Auto-Correction",
      description:
        "A C-based spell checker that suggests corrections for misspelled words.",
      url: "https://github.com/shravanjindal/SpellCheckerAndAutoCorrection",
      tags: ["C", "NLP", "Spell Checker"],
    },
    {
      name: "CUCU compiler",
      description:
        "Built a working compiler from scratch for a custom C-like language named CUCU. Implemented lexical analysis, parsing (LL(1)), syntax-directed translation, intermediate code generation, and a symbol table. Emphasized compiler design principles and AST construction.",
      tags: ["C", "Compiler Design", "Parsing", "LL(1)", "Intermediate Code"],
      url: "https://github.com/shravanjindal/cucu-compiler",
    },
  ];

  const roboticsProjects = [
    {
      name: "Hand Gesture Simulation",
      description:
        "Simulates hand gestures using Unity and C# for interactive applications.",
      url: "https://github.com/shravanjindal/Hand_gesture_simulation",
      tags: ["C#", "Unity", "Simulation"],
    },
    {
      name: "Hexapod",
      description:
        "A C++ project simulating the movement of a six-legged robot.",
      url: "https://github.com/shravanjindal/Hexapod",
      tags: ["C++", "Robotics"],
    },
  ];

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <motion.a
        key={project.name}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={clsx(
          "rounded-2xl p-6 border shadow-md transition hover:shadow-lg hover:scale-[1.02] cursor-pointer",
          cardBg,
          cardBorder
        )}
      >
        <div className="flex items-center gap-3 mb-2">
          <FaGithub className="text-xl text-gray-400" />
          <h3 className="text-xl font-semibold">{project.name}</h3>
        </div>
        <p className="text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={clsx(
                "px-3 py-1 rounded-full text-xs font-medium",
                pillBg
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.a>
    ));

  return (
    <section
      id="projects"
      className={clsx("py-20 px-4 sm:px-10", bgColor, textColor)}
    >
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14">
        🛠️ Projects
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            🌐 Web & GenAI Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renderProjects(webGenAIProjects)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">
            🧠 Machine Learning Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renderProjects(mlProjects)}
          </div>
          <div className="text-sm text-gray-400 mt-4">
            I have also been working on few research projects. Its a work in
            progress and I will be updating them soon.
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">🎓 College Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renderProjects(collegeProjects)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">🤖 Robotics Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renderProjects(roboticsProjects)}
          </div>
        </div>
      </div>
    </section>
  );
}
