"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ["Home", "Projects", "About", "Contact"];

  return (
    <header className="w-full bg-gray-900 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-blue-500"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Shravan's Portfolio
        </motion.a>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-400 transition"
            >
              {link}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
            ➕ Add Info
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block border-b border-gray-700 pb-2 text-sm"
              onClick={toggleMenu}
            >
              {link}
            </a>
          ))}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
            onClick={() => {
              toggleMenu();
              // Add onClick logic for Add Info here
            }}
          >
            ➕ Add Info
          </button>
        </div>
      )}
    </header>
  );
}
