"use client";
import React, { useState } from "react";
import Chatbot from "../components/Chatbot";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className={`${isDarkMode ? "bg-[#1a1a1a] text-white dark-scroll" : "bg-[#f4f4f4] text-black light-scroll"} h-screen overflow-y-scroll`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Introduction isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <Chatbot isDarkMode={isDarkMode} />
    </div>
  );
}
