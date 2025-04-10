"use client";
import React, { useState } from "react";
import Chatbot from "../components/Chatbot";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import AddInfoDialog from "../components/forms/AddInfoDialog";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className={isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-[#f4f4f4] text-black"}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Introduction isDarkMode={isDarkMode} />
      <Chatbot isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
