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
  const pillBg = isDarkMode ? "bg-blue-800/40 text-blue-300" : "bg-blue-100 text-blue-600";

  const projects = [
    {
      name: "House Price Prediction",
      description: "A machine learning model to predict house prices based on various features.",
      url: "https://github.com/shravanjindal/House_price_prediction_project",
      tags: ["Python", "Machine Learning", "Jupyter Notebook"],
    },
    {
      name: "Hexapod",
      description: "A C++ project simulating the movement of a six-legged robot.",
      url: "https://github.com/shravanjindal/Hexapod",
      tags: ["C++", "Robotics"],
    },
    {
      name: "RISC-V Assembler",
      description: "Assembler for RISC-V architecture, translating assembly code to machine code.",
      url: "https://github.com/shravanjindal/Riscv_Assembler",
      tags: ["C++", "Assembler", "RISC-V"],
    },
    {
      name: "Spell Checker and Auto-Correction",
      description: "A C-based spell checker that suggests corrections for misspelled words.",
      url: "https://github.com/shravanjindal/SpellCheckerAndAutoCorrection",
      tags: ["C", "NLP", "Spell Checker"],
    },
    {
      name: "Hand Gesture Simulation",
      description: "Simulates hand gestures using Unity and C# for interactive applications.",
      url: "https://github.com/shravanjindal/Hand_gesture_simulation",
      tags: ["C#", "Unity", "Simulation"],
    },
    {
      name: "CIFAR-10 with CNN",
      description: "Convolutional Neural Network model trained on CIFAR-10 dataset.",
      url: "https://github.com/shravanjindal/CIFAR10-with-CNN-model",
      tags: ["Python", "CNN", "Deep Learning"],
    },
  ];

  return (
    <section id="projects" className={clsx("py-20 px-4 sm:px-10", bgColor, textColor)}>
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14">🛠️ Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
        ))}
      </div>
    </section>
  );
}
