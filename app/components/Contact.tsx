"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDarkMode } = useTheme();

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "julissa@example.com",
      link: "mailto:julissa@example.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "@julissa.rosas",
      link: "https://instagram.com/julissa.rosas",
    },
    {
      icon: "🐦",
      label: "Twitter",
      value: "@julissa_rosas",
      link: "https://twitter.com/julissa_rosas",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="contact"
      className={`min-h-screen transition-colors duration-300 py-12 md:py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-white"
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
            className={`text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight ${
              isDarkMode
                ? "bg-gradient-to-r from-white via-gray-100 to-gray-300"
                : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700"
            }`}
          >
            Let's Connect
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            Ready to grow your social media presence? Let&apos;s discuss how we
            can elevate your brand together.
          </p>
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
                className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Get in Touch
              </h3>
              <p
                className={`text-base md:text-lg leading-relaxed mb-6 md:mb-8 px-4 ${
                  isDarkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                I&apos;m passionate about helping brands and businesses build
                meaningful connections with their audience. Let&apos;s create
                something amazing together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 md:p-6 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border group ${
                    isLoaded ? "animate-scale-in" : "opacity-0"
                  } ${
                    isDarkMode
                      ? "bg-gray-800/80 border-gray-600/50"
                      : "bg-white/80 border-slate-200/50"
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div
                    className={`w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-gray-600/50 to-gray-700/50"
                        : "bg-gradient-to-r from-slate-200/50 to-slate-300/50"
                    }`}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div
                      className={`font-semibold mb-1 text-sm md:text-base ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {contact.label}
                    </div>
                    <div
                      className={`text-xs md:text-sm group-hover:text-slate-800 transition-colors duration-300 ${
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
              className={`p-6 md:p-8 backdrop-blur-sm rounded-xl md:rounded-2xl border shadow-lg ${
                isDarkMode
                  ? "bg-gray-800/60 border-gray-600/50"
                  : "bg-white/60 border-slate-200/50"
              }`}
            >
              <h4
                className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Availability
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <div className="flex items-center justify-center">
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span
                    className={`text-xs md:text-sm ${
                      isDarkMode ? "text-gray-300" : "text-slate-600"
                    }`}
                  >
                    Available for new projects
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span
                    className={`text-xs md:text-sm ${
                      isDarkMode ? "text-gray-300" : "text-slate-600"
                    }`}
                  >
                    Quick response time (within 24 hours)
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span
                    className={`text-xs md:text-sm ${
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
    </section>
  );
}
