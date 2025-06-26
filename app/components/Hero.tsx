"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={`relative min-h-screen flex flex-col overflow-hidden transition-colors duration-300 pt-20 ${
        isDarkMode ? "bg-gray-900" : "bg-[#ffeaf4]"
      }`}
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

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center py-8 md:py-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column - Enhanced Text Content */}
            <div
              className={`text-center lg:text-left ${
                isLoaded ? "animate-fade-in-left" : "opacity-0"
              }`}
            >
              {/* Friendly greeting */}
              <div
                className={`mb-3 md:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-noto-serif-display ${
                  isLoaded ? "animate-fade-in-left" : "opacity-0"
                } ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}
                style={{ animationDelay: "0.1s" }}
              >
                Hey there!
              </div>

              {/* Name with enhanced styling */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 md:mb-4 lg:mb-6 leading-none tracking-tight relative">
                  <span
                    className={`bg-clip-text text-transparent font-noto-serif-display ${
                      isDarkMode
                        ? "bg-gradient-to-r from-white via-gray-100 to-gray-300"
                        : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700"
                    }`}
                  >
                    Julissa
                  </span>
                  <br />
                  <span
                    className={`font-light relative font-noto-serif-display ${
                      isDarkMode ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    Rosas
                    <div
                      className={`absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 rounded-full ${
                        isDarkMode
                          ? "bg-gradient-to-r from-gray-600 to-transparent"
                          : "bg-gradient-to-r from-slate-300 to-transparent"
                      }`}
                    ></div>
                  </span>
                </h1>

                {/* Floating accent near name */}
                <div
                  className={`absolute -top-2 md:-top-4 -right-2 md:-right-4 w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 rounded-full blur-sm animate-pulse ${
                    isDarkMode
                      ? "bg-gradient-to-br from-gray-600 to-gray-700"
                      : "bg-gradient-to-br from-slate-200 to-slate-300"
                  }`}
                ></div>
              </div>

              {/* Enhanced animated subtitle with TypeAnimation */}
              <div
                className={`mb-4 md:mb-6 lg:mb-8 h-5 md:h-6 lg:h-8 flex items-center justify-center lg:justify-start ${
                  isLoaded ? "animate-fade-in-left" : "opacity-0"
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <TypeAnimation
                  className={`text-sm sm:text-base md:text-lg lg:text-xl font-light bg-clip-text text-transparent ${
                    isDarkMode
                      ? "bg-gradient-to-r from-gray-400 to-gray-500"
                      : "bg-gradient-to-r from-slate-500 to-slate-600"
                  }`}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  sequence={[
                    "Content Creator",
                    2000,
                    "Brand Strategist",
                    2000,
                    "Digital Storyteller",
                    2000,
                  ]}
                />
                <span
                  className={`text-sm sm:text-base md:text-lg lg:text-xl ml-2 animate-pulse ${
                    isDarkMode ? "text-gray-500" : "text-slate-400"
                  }`}
                >
                  |
                </span>
              </div>

              {/* Enhanced description */}
              <p
                className={`text-sm sm:text-base md:text-lg mb-6 md:mb-8 lg:mb-10 max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:mx-0 leading-relaxed ${
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
                  Let&apos;s build something meaningful together.
                </span>
              </p>

              {/* Enhanced CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start ${
                  isLoaded ? "animate-fade-in-left" : "opacity-0"
                }`}
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  href="#picture"
                  className={`group font-medium py-2.5 md:py-3 px-5 md:px-6 lg:px-8 rounded-full transition-all duration-300 hover-lift shadow-lg hover:shadow-xl relative overflow-hidden text-sm md:text-base ${
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
                </a>
                <a
                  href="#contact"
                  className={`group border font-medium py-2.5 md:py-3 px-5 md:px-6 lg:px-8 rounded-full transition-all duration-300 hover-lift relative overflow-hidden text-sm md:text-base ${
                    isDarkMode
                      ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                  }`}
                >
                  <span className="relative z-10">Let&apos;s Connect</span>
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDarkMode ? "bg-gray-800" : "bg-slate-50"
                    }`}
                  ></div>
                </a>
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
                {/* Main Image with improved responsive sizing */}
                <img
                  src="/images/julissa1.png"
                  alt="Julissa Rosas"
                  className="w-full h-auto mx-auto max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]"
                  style={{
                    minHeight: "320px",
                    minWidth: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
