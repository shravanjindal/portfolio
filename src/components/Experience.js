"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FaBriefcase } from "react-icons/fa";

export default function Experience({ isDarkMode }) {
  const bgColor = isDarkMode ? "bg-[#1a1a1a]" : "bg-[#f4f4f4]";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const cardBg = isDarkMode ? "bg-[#0f0f0f]" : "bg-white";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200";
  const experiences = [
    {
      title: "Machine Learning Lead",
      company: "XYROMATICS Automation Solution Pvt. Ltd.",
      duration: "July 2024 – September 2024",
      description:
        "Contributing to a startup focusing on predictive maintenance using machine learning. Working with raw time series data from accelerometers to analyze vibrations and developing classification algorithms for fault prediction and severity stages.",
      tags: ["Machine Learning", "Python", "Time Series", "Predictive Maintenance"],
      url: "https://github.com/shravanjindal/PdM",
    },
    {
      title: "Research Intern",
      company: "IKSMHA | IIT Mandi – Under Prof. Varun Dutt",
      duration: "May 2024 – July 2024",
      description:
        "Worked with EEG data processing using MNE, analyzing phase connectivity with ITPC/ISPC, and using Topological Data Analysis (TDA) to understand the intrinsic features of neural datasets.",
      tags: ["MNE", "EEG", "Python", "TDA", "Neuroscience"],
      url: "https://github.com/shravanjindal/NeuroConnectivty-Analysis",
    },
  ];

  return (
    <section id="experience" className={clsx("py-20 px-4 sm:px-10", bgColor, textColor)}>
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14">💼 Experience</h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={clsx(
              "border rounded-2xl p-6 shadow-md hover:shadow-lg transition",
              cardBg,
              borderColor
            )}
          >
            <div className="flex items-center gap-3 mb-1">
              <FaBriefcase className="text-blue-400" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
            </div>
            <div className="text-sm text-gray-400 mb-2">{exp.company} • {exp.duration}</div>
            <p className="text-sm mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className={clsx(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    isDarkMode ? "bg-blue-800/40 text-blue-300" : "bg-blue-100 text-blue-600"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
