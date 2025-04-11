"use client";
import React, { useRef, useEffect, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
export default function Chatbot({ isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm Shravan, a B.Tech Computer Science student at IIT Ropar. Thanks for visiting my portfolio! Feel free to ask me anything you'd like to know about me.",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const [sessionId, setSessionId] = useState(uuidv4());

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/getData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input , sessionId: sessionId}),
      });

      const data = await response.json();
      const botMessage = {
        sender: "bot",
        text: data.reply || "Sorry, I couldn't get that. Try again?",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    }
  };

  // Dynamic styling
  const containerBg = isDarkMode ? "bg-[#1e1e1e]" : "bg-white";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-300";
  const inputBg = isDarkMode ? "bg-[#2a2a2a]" : "bg-gray-100";
  const textColor = isDarkMode ? "text-gray-100" : "text-black";
  const botBubble = isDarkMode
    ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white"
    : "bg-gradient-to-br from-gray-200 to-gray-100 text-black";
  const userBubble = "bg-blue-600 text-white";

  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:right-6 z-50 flex flex-col items-end"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      {isOpen && (
        <div
          className={`w-[90vw] sm:w-150 max-h-[80vh] h-[80vh] m-2 sm:m-4 p-3 rounded-lg shadow-lg flex flex-col ${containerBg} ${textColor}`}
        >
          {/* Header */}
          <div className={`flex justify-between items-center border-b pb-2 mb-2 ${borderColor}`}>
            <span className="text-base sm:text-lg font-semibold">👨🏻‍🏫 Hi! I am Shravan</span>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* Messages */}
          <div
            className={`flex-1 overflow-y-auto mb-2 p-2 border rounded ${borderColor} space-y-1`}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start ${
                  msg.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="mr-2 mt-1 text-blue-400 font-semibold text-sm">🤖 Shravan</div>
                )}
                <div
                  className={`relative p-3 rounded-2xl text-sm sm:text-base break-words w-fit max-w-[85%] shadow-md ${
                    msg.sender === "bot" ? botBubble : userBubble
                  }`}
                >
                  {msg.sender === "bot" ? (
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                  {msg.sender === "bot" && (
                    <span className="absolute bottom-0 right-0 text-xs text-gray-400 pr-2 pb-1">
                      AI
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Field */}
          <div className="flex items-center gap-2">
          <input
              type="text"
              className={`p-2 flex-1 border rounded text-sm ${inputBg} ${textColor} ${borderColor}`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 text-sm bg-blue-600 rounded text-white hover:bg-blue-700 transition"
              aria-label="Send message"
            >
              📩
            </button>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <motion.button
        className="rounded-full p-3 bg-blue-600 shadow-lg text-white hover:bg-blue-700 transition"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        aria-label="Toggle chatbot"
      >
        <MessageSquare size={24} />
      </motion.button>
    </motion.div>
  );
}
