"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import clsx from "clsx";

export default function Introduction({ isDarkMode }) {
  const bgColor = isDarkMode ? "bg-[#1a1a1a]" : "bg-[#f4f4f4]";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const subText = isDarkMode ? "text-gray-300" : "text-gray-700";
  const animatedColor = isDarkMode ? "text-gray-200" : "text-gray-800";
  const borderColor = isDarkMode ? "border-white" : "border-black";

  return (
    <section
      id="home"
      className={clsx(
        "w-full min-h-screen flex items-center justify-center px-4",
        bgColor,
        textColor
      )}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/139500631?s=400&u=139adcce560244c747ff548b35d2358e1a8eaa46&v=4"
            alt="Shravan Jindal"
            className={clsx(
              "w-[35vh] h-[35vh] object-cover rounded-full border-4 shadow-lg",
              borderColor
            )}
          />
        </div>

        {/* Intro Text */}
        <div className="text-center md:text-left space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hey! I'm Shravan Jindal 👋
          </h1>
          <p className={clsx("text-lg sm:text-xl max-w-xl", subText)}>
            I'm a B.Tech Computer Science student at IIT Ropar. Passionate about building
            intelligent systems, full-stack web apps, and diving deep into data.
          </p>

          {/* Animated Line */}
          <div className={clsx("pt-2 text-md sm:text-xl font-semibold", animatedColor)}>
            <TypeAnimation
              sequence={[
                "I am a coder 👨‍💻",
                2000,
                "I am a web developer 🌐",
                2000,
                "I am a data expert 📊",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
