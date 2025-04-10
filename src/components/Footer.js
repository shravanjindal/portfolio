"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import clsx from "clsx";

export default function Footer({ isDarkMode }) {
  const bgColor = isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f9f9f9]";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const iconHover = isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600";
  const underlineHover = isDarkMode
    ? "hover:text-blue-300"
    : "hover:text-blue-600";

  const links = [
    {
      name: "Resume",
      icon: <FaFileAlt />,
      href: "https://drive.google.com/file/d/1DkBub5DuwsMoFUyeyeGQyS4JENHssvJA/view?usp=sharing",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/shravan-jindal-23068327a/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/shravanjindal",
    },
    {
      name: "Codeforces",
      icon: <FaCode />,
      href: "https://codeforces.com/profile/shravanjindal00",
    },
  ];

  const contact = [
    {
      icon: <FaEnvelope />,
      value: "shravanjindal@email.com",
      href: "mailto:shravanjindal@email.com",
    },
    {
      icon: <FaPhone />,
      value: "+91-7696591026",
    },
  ];

  return (
    <motion.footer
        id="footer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={clsx(
        "pt-20 pb-10 px-6 md:px-16 mt-24 rounded-t-3xl shadow-inner",
        bgColor,
        textColor
      )}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm">
        <div>
          <h3 className="text-2xl font-bold mb-6 tracking-tight">🔗 Useful Links</h3>
          <ul className="space-y-4">
            {links.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 transition-all"
              >
                <span className={`text-xl ${iconHover}`}>{link.icon}</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium ${underlineHover} transition`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 tracking-tight">📬 Contact Info</h3>
          <ul className="space-y-4">
            {contact.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 transition-all"
              >
                <span className={`text-xl ${iconHover}`}>{item.icon}</span>
                {item.href ? (
                  <a href={item.href} className={`font-medium ${underlineHover}`}>
                    {item.value}
                  </a>
                ) : (
                  <span className="font-medium">{item.value}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-500/30" />

      <div className="text-center text-xs text-gray-400 tracking-wide">
        © {new Date().getFullYear()} Shravan Jindal. Made with 💙
      </div>
    </motion.footer>
  );
}
