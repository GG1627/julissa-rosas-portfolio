"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container mx-auto flex justify-center items-center">
        {/* Navigation Links */}
        <div
          className={`backdrop-blur-xl rounded-full px-4 md:px-8 py-3 md:py-4 shadow-lg border transition-all duration-500 hover:shadow-xl ${
            isDarkMode
              ? "bg-gray-800/70 border-gray-600/50"
              : "bg-white/70 border-slate-200/50"
          }`}
        >
          <div className="flex space-x-4 md:space-x-8">
            {[
              { href: "#about", label: "About" },
              { href: "#picture", label: "Pictures" },
              { href: "#videos", label: "Videos" },
              { href: "#contact", label: "Contact" },
            ].map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-all duration-300 font-medium text-xs md:text-sm relative group ${
                  isLoaded ? "animate-fade-in-up" : "opacity-0"
                } ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {link.label}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                    isDarkMode
                      ? "bg-gradient-to-r from-gray-400 to-gray-600"
                      : "bg-gradient-to-r from-slate-400 to-slate-600"
                  }`}
                ></div>
              </a>
            ))}
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="absolute right-4 flex items-center">
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full transition-all duration-300 hover-lift shadow-lg ${
              isDarkMode
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-white text-gray-600 hover:bg-gray-50"
            } border ${isDarkMode ? "border-gray-600" : "border-gray-200"}`}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
