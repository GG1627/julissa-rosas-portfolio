"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDarkMode } = useTheme();

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "julissarosas347@gmail.com",
      link: "mailto:julissarosas347@example.com",
    },

    {
      icon: <FaLinkedin className="text-blue-600" />,
      label: "LinkedIn",
      value: "@julissarosas",
      link: "https://www.linkedin.com/in/julissarosas/",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="contact"
      className={`min-h-screen transition-colors duration-300 py-12 md:py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-[#ffeaf4]"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 right-20 w-20 md:w-40 h-20 md:h-40 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-gray-700/30" : "bg-slate-200/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 left-20 w-16 md:w-32 h-16 md:h-32 rounded-full blur-2xl animate-float ${
            isDarkMode ? "bg-gray-700/20" : "bg-slate-200/20"
          }`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-48 h-24 md:h-48 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-gray-700/10" : "bg-slate-200/10"
          }`}
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 ${
            isLoaded ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2
            className={`text-5xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent mb-6 md:mb-8 tracking-tight ${
              isDarkMode
                ? "bg-gradient-to-r from-white via-gray-100 to-gray-300"
                : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700"
            }`}
          >
            Let&apos;s Connect
          </h2>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`space-y-6 md:space-y-8 ${
              isLoaded ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="text-center mb-8 md:mb-12">
              <h3
                className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Get in Touch
              </h3>
              <p
                className={`text-lg md:text-xl leading-relaxed mb-8 md:mb-12 px-4 ${
                  isDarkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                I&apos;m passionate about helping brands and businesses build
                meaningful connections with their audience. Let&apos;s create
                something amazing together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-6 md:p-8 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border group ${
                    isLoaded ? "animate-scale-in" : "opacity-0"
                  } ${
                    isDarkMode
                      ? "bg-gray-800/80 border-gray-600/50"
                      : "bg-white/80 border-slate-200/50"
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div
                    className={`w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-gray-600/50 to-gray-700/50"
                        : "bg-gradient-to-r from-slate-200/50 to-slate-300/50"
                    }`}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div
                      className={`font-semibold mb-2 text-base md:text-lg ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {contact.label}
                    </div>
                    <div
                      className={`text-sm md:text-base group-hover:text-slate-800 transition-colors duration-300 ${
                        isDarkMode
                          ? "text-gray-300 group-hover:text-gray-200"
                          : "text-slate-600"
                      }`}
                    >
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div
              className={`p-8 md:p-12 backdrop-blur-sm rounded-xl md:rounded-2xl border shadow-lg ${
                isDarkMode
                  ? "bg-gray-800/60 border-gray-600/50"
                  : "bg-white/60 border-slate-200/50"
              }`}
            >
              <h4
                className={`text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Availability
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-center justify-center">
                  <div className="w-3 md:w-4 h-3 md:h-4 bg-green-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
                  <span
                    className={`text-sm md:text-base ${
                      isDarkMode ? "text-gray-300" : "text-slate-600"
                    }`}
                  >
                    Available for new projects
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-3 md:w-4 h-3 md:h-4 bg-green-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
                  <span
                    className={`text-sm md:text-base ${
                      isDarkMode ? "text-gray-300" : "text-slate-600"
                    }`}
                  >
                    Quick response time (within 24 hours)
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-3 md:w-4 h-3 md:h-4 bg-green-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
                  <span
                    className={`text-sm md:text-base ${
                      isDarkMode ? "text-gray-300" : "text-slate-600"
                    }`}
                  >
                    Flexible scheduling for calls
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-center text-gray-400 mt-8 mb-2">
        © {new Date().getFullYear()} Julissa Rosas. All rights reserved.
      </p>
    </section>
  );
}
