"use client";
import React, { useState } from "react";
import Chatbot from "../components/Chatbot";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className={isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-[#f4f4f4] text-black"}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Introduction isDarkMode={isDarkMode} />
      <Chatbot isDarkMode={isDarkMode} />
    </div>
  );
}
