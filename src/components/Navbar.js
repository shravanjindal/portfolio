"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { title:"Home", 
      href:"#home" 
    },
    { title:"Skills", href:"#skills" },
    { title:"Experience", href:"#experience" },
    { title:"Projects", href:"#projects" },
    { title:"Contact", href:"#footer" }];

  const bgColor = isDarkMode ? "bg-[#1a1a1a]" : "bg-[#f4f4f4]";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const hoverColor = isDarkMode ? "hover:text-gray-400" : "hover:text-gray-700";
  const buttonBg = isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-black hover:bg-gray-800";
  const addInfoText = "text-white";
  const handleClick = () => {
    setIsDialogOpen(true);
    setIsOpen(false);
  };
  return (
    <>
      <header className={clsx("w-full fixed top-0 z-50 shadow-md", bgColor, textColor)}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className={clsx("text-xl sm:text-2xl font-semibold tracking-tight")}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Shravan&apos;s Portfolio
        </motion.a>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link.title}
              href={`${link.href.toLowerCase()}`}
              className={clsx("transition", hoverColor)}
            >
              {link.title}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl px-2 hover:scale-110 transition"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={clsx("md:hidden px-4 pb-4 space-y-3", textColor)}>
          {links.map((link) => (
            <a
              key={link.title}
              href={`${link.href.toLowerCase()}`}
              className="block border-b border-gray-500 pb-2 text-sm"
              onClick={toggleMenu}
            >
              {link.title}
            </a>
          ))}

          <div className="flex items-center justify-between pt-2 gap-3">
            <button onClick={toggleTheme} className="text-lg">
              {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>


          </div>
        </div>
        
      )}

    </header>

    </>
    
  );
}
