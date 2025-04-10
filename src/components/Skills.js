"use client";
import React from "react";
import { motion } from "framer-motion";
import { Database, Code, Server } from "lucide-react";
import clsx from "clsx";

export default function Skills({ isDarkMode }) {
  const bgColor = isDarkMode ? "bg-[#1a1a1a]" : "bg-[#f4f4f4]";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const cardBg = isDarkMode ? "bg-[#0f0f0f]" : "bg-[#fafafa]";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const pillBg = isDarkMode ? "bg-blue-800/40 text-blue-300" : "bg-blue-100 text-blue-600";

  const skillSections = [
    {
      title: "Data",
      icon: <Database className="text-blue-400" size={24} />,
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "MNE",
        "Giotto-TDA",
      ],
    },
    {
      title: "Development",
      icon: <Code className="text-green-400" size={24} />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Flask",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
    {
      title: "DevOps",
      icon: <Server className="text-yellow-400" size={24} />,
      skills: [
        "Git & GitHub",
        "Docker",
        "Linux",
        "AWS",
        "EC2/S3/Lambda",
        "Nginx",
        "CI/CD",
        "Vercel",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={clsx("py-20 px-4 sm:px-10", bgColor, textColor)}
    >
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-14">
        ⚙️ My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={clsx(
              "rounded-2xl p-6 border shadow-md transition hover:shadow-lg",
              cardBg,
              cardBorder
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h3 className="text-xl font-semibold">{section.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill, i) => (
                <span
                  key={i}
                  className={clsx(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    pillBg
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
