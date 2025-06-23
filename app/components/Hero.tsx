"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDarkMode, toggleDarkMode } = useTheme();

  const texts = [
    "Social Media Manager",
    "Content Creator",
    "Brand Strategist",
    "Digital Storyteller",
  ];

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className={`relative h-screen flex flex-col overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0">
        {/* Main gradient orbs */}
        <div
          className={`absolute top-20 right-20 w-48 md:w-96 h-48 md:h-96 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-gray-700/40" : "bg-slate-200/40"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 left-20 w-32 md:w-64 h-32 md:h-64 rounded-full blur-2xl animate-float ${
            isDarkMode ? "bg-gray-700/30" : "bg-slate-200/30"
          }`}
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Floating accent elements */}
        <div
          className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse ${
            isDarkMode ? "bg-gray-400/60" : "bg-slate-400/60"
          }`}
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className={`absolute top-1/3 right-1/3 w-1 h-1 rounded-full animate-pulse ${
            isDarkMode ? "bg-gray-400/40" : "bg-slate-400/40"
          }`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse ${
            isDarkMode ? "bg-gray-400/50" : "bg-slate-400/50"
          }`}
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${
              isDarkMode ? "#9ca3af" : "#64748b"
            } 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="relative z-20 flex justify-end pt-4 md:pt-8 px-4">
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

      {/* Navigation with enhanced styling */}
      <nav className="relative z-10 flex justify-center pt-4 md:pt-8 px-4">
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
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column - Enhanced Text Content */}
            <div
              className={`text-center lg:text-left ${
                isLoaded ? "animate-fade-in-left" : "opacity-0"
              }`}
            >
              {/* Name with enhanced styling */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-none tracking-tight relative">
                  <span
                    className={`bg-clip-text text-transparent ${
                      isDarkMode
                        ? "bg-gradient-to-r from-white via-gray-100 to-gray-300"
                        : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700"
                    }`}
                  >
                    Julissa
                  </span>
                  <br />
                  <span
                    className={`font-light relative ${
                      isDarkMode ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    Rosas
                    <div
                      className={`absolute -bottom-2 left-0 w-full h-0.5 rounded-full ${
                        isDarkMode
                          ? "bg-gradient-to-r from-gray-600 to-transparent"
                          : "bg-gradient-to-r from-slate-300 to-transparent"
                      }`}
                    ></div>
                  </span>
                </h1>

                {/* Floating accent near name */}
                <div
                  className={`absolute -top-4 -right-4 w-6 md:w-8 h-6 md:h-8 rounded-full blur-sm animate-pulse ${
                    isDarkMode
                      ? "bg-gradient-to-br from-gray-600 to-gray-700"
                      : "bg-gradient-to-br from-slate-200 to-slate-300"
                  }`}
                ></div>
              </div>

              {/* Enhanced animated subtitle */}
              <div
                className={`mb-6 md:mb-8 h-6 md:h-8 flex items-center justify-center lg:justify-start ${
                  isLoaded ? "animate-fade-in-left" : "opacity-0"
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <span
                  className={`text-lg md:text-xl font-light bg-clip-text text-transparent ${
                    isDarkMode
                      ? "bg-gradient-to-r from-gray-400 to-gray-500"
                      : "bg-gradient-to-r from-slate-500 to-slate-600"
                  }`}
                >
                  {texts[currentText]}
                </span>
                <span
                  className={`text-lg md:text-xl ml-2 animate-pulse ${
                    isDarkMode ? "text-gray-500" : "text-slate-400"
                  }`}
                >
                  |
                </span>
              </div>

              {/* Enhanced description */}
              <p
                className={`text-base md:text-lg mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed ${
                  isLoaded ? "animate-fade-in-left" : "opacity-0"
                } ${isDarkMode ? "text-gray-300" : "text-slate-600"}`}
                style={{ animationDelay: "0.5s" }}
              >
                Creating authentic connections through thoughtful content and
                strategic social media management.
                <span
                  className={`italic ${
                    isDarkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  {" "}
                  Let's build something meaningful together.
                </span>
              </p>

              {/* Enhanced CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start ${
                  isLoaded ? "animate-fade-in-left" : "opacity-0"
                }`}
                style={{ animationDelay: "0.7s" }}
              >
                <button
                  className={`group font-medium py-3 px-6 md:px-8 rounded-full transition-all duration-300 hover-lift shadow-lg hover:shadow-xl relative overflow-hidden ${
                    isDarkMode
                      ? "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white"
                      : "bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white"
                  }`}
                >
                  <span className="relative z-10">View My Work</span>
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-gray-600 to-gray-700"
                        : "bg-gradient-to-r from-slate-800 to-slate-700"
                    }`}
                  ></div>
                </button>
                <button
                  className={`group border font-medium py-3 px-6 md:px-8 rounded-full transition-all duration-300 hover-lift relative overflow-hidden ${
                    isDarkMode
                      ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                  }`}
                >
                  <span className="relative z-10">Let's Connect</span>
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDarkMode ? "bg-gray-800" : "bg-slate-50"
                    }`}
                  ></div>
                </button>
              </div>

              {/* Enhanced Stats */}
              <div
                className={`flex gap-4 md:gap-8 mt-8 md:mt-12 justify-center lg:justify-start ${
                  isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: "0.9s" }}
              >
                {[
                  { number: "500+", label: "Projects Completed", icon: "✨" },
                  { number: "50K+", label: "Followers Reached", icon: "👥" },
                  { number: "95%", label: "Client Satisfaction", icon: "💫" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`text-xl md:text-2xl font-semibold mb-1 transition-colors duration-300 ${
                        isDarkMode
                          ? "text-white group-hover:text-gray-300"
                          : "text-slate-900 group-hover:text-slate-700"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`text-xs md:text-sm flex items-center justify-center gap-1 ${
                        isDarkMode ? "text-gray-400" : "text-slate-500"
                      }`}
                    >
                      <span className="text-xs">{stat.icon}</span>
                      <span className="hidden sm:inline">{stat.label}</span>
                      <span className="sm:hidden">
                        {stat.label.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Enhanced Image */}
            <div
              className={`relative order-first lg:order-last ${
                isLoaded ? "animate-fade-in-right" : "opacity-0"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative group">
                {/* Main Image with enhanced styling */}
                <div className="relative z-10">
                  <div className="relative">
                    <img
                      src="/images/julissa1.png"
                      alt="Julissa Rosas"
                      className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Image border glow */}
                    <div
                      className={`absolute inset-0 rounded-2xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-500 ${
                        isDarkMode
                          ? "bg-gradient-to-br from-gray-600/20 to-gray-700/10"
                          : "bg-gradient-to-br from-slate-200/20 to-slate-300/10"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Enhanced decorative elements */}
                <div
                  className={`absolute -top-4 md:-top-6 -right-4 md:-right-6 w-20 md:w-32 h-20 md:h-32 rounded-full blur-xl animate-float ${
                    isDarkMode
                      ? "bg-gradient-to-br from-gray-600/40 to-gray-700/20"
                      : "bg-gradient-to-br from-slate-200/40 to-slate-300/20"
                  }`}
                ></div>
                <div
                  className={`absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-16 md:w-24 h-16 md:h-24 rounded-full blur-xl animate-float ${
                    isDarkMode
                      ? "bg-gradient-to-tr from-gray-600/30 to-gray-700/10"
                      : "bg-gradient-to-tr from-slate-200/30 to-slate-300/10"
                  }`}
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Floating accent dots */}
                <div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse ${
                    isDarkMode ? "bg-gray-400/60" : "bg-slate-400/60"
                  }`}
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className={`absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full animate-pulse ${
                    isDarkMode ? "bg-gray-400/40" : "bg-slate-400/40"
                  }`}
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div
        className={`absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 ${
          isLoaded ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationDelay: "1.1s" }}
      >
        <div
          className={`flex flex-col items-center group cursor-pointer ${
            isDarkMode ? "text-gray-400" : "text-slate-400"
          }`}
        >
          <span className="text-xs mb-2 group-hover:text-slate-600 transition-colors duration-300">
            Scroll to explore
          </span>
          <div
            className={`w-5 h-8 border rounded-full flex justify-center group-hover:border-slate-400 transition-colors duration-300 ${
              isDarkMode ? "border-gray-600" : "border-slate-300"
            }`}
          >
            <div
              className={`w-1 h-2 rounded-full mt-1 animate-bounce group-hover:bg-slate-500 transition-colors duration-300 ${
                isDarkMode ? "bg-gray-400" : "bg-slate-400"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
