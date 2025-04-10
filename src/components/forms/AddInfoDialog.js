"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddInfoDialog({ isOpen, setIsOpen, isDarkMode }) {
  const [formType, setFormType] = useState(null);

  const bgColor = isDarkMode ? "bg-[#1a1a1a]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const btnColor = isDarkMode
    ? "bg-gray-700 hover:bg-gray-600 text-white"
    : "bg-black hover:bg-gray-800 text-white";

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(`${type} submitted:`, data);
    // 👉 You can replace this with a real API call
    setFormType(null);
    setIsOpen(false);
  };

  const renderForm = () => {
    switch (formType) {
      case "Skills":
        return (
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e, "Skills")}>
            <input
              name="skill"
              type="text"
              placeholder="Enter skill"
              className="w-full p-2 border rounded"
              required
            />
            <button type="submit" className={btnColor + " px-4 py-2 rounded w-full"}>
              ➕ Add Skill
            </button>
          </form>
        );
      case "Experience":
        return (
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e, "Experience")}>
            <input name="company" type="text" placeholder="Company" className="w-full p-2 border rounded" required />
            <input name="role" type="text" placeholder="Role" className="w-full p-2 border rounded" required />
            <textarea name="description" placeholder="Description" className="w-full p-2 border rounded" required />
            <button type="submit" className={btnColor + " px-4 py-2 rounded w-full"}>
              ➕ Add Experience
            </button>
          </form>
        );
      case "Projects":
        return (
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e, "Projects")}>
            <input name="title" type="text" placeholder="Project Title" className="w-full p-2 border rounded" required />
            <textarea name="description" placeholder="Description" className="w-full p-2 border rounded" required />
            <button type="submit" className={btnColor + " px-4 py-2 rounded w-full"}>
              ➕ Add Project
            </button>
          </form>
        );
      case "Achievements":
        return (
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e, "Achievements")}>
            <input name="title" type="text" placeholder="Achievement Title" className="w-full p-2 border rounded" required />
            <textarea name="details" placeholder="Details" className="w-full p-2 border rounded" required />
            <button type="submit" className={btnColor + " px-4 py-2 rounded w-full"}>
              ➕ Add Achievement
            </button>
          </form>
        );
      default:
        return (
          <div className="grid grid-cols-2 gap-4">
            {["Skills", "Experience", "Projects", "Achievements"].map((type) => (
              <button
                key={type}
                className={`${btnColor} py-3 rounded`}
                onClick={() => setFormType(type)}
              >
                ➕ {type}
              </button>
            ))}
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
  {/* Backdrop */}
  <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

  {/* Dialog Content */}
  <div className="fixed inset-0 flex items-center justify-center z-50">

          <Dialog.Panel
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`rounded-2xl p-6 w-[90vw] max-w-md mx-auto ${bgColor} ${textColor}`}
          >
            <Dialog.Title className="text-xl font-semibold mb-4">
              {formType ? `Add ${formType}` : "Add Information"}
            </Dialog.Title>

            {renderForm()}

            <div className="mt-6 flex justify-between">
              {formType && (
                <button className="underline text-sm" onClick={() => setFormType(null)}>
                  ⬅ Back
                </button>
              )}
              <button
                className="text-red-500 font-medium text-sm"
                onClick={() => {
                  setFormType(null);
                  setIsOpen(false);
                }}
              >
                ✖ Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      )}
    </AnimatePresence>
  );
}
