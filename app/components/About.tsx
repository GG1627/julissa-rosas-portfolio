"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const { isDarkMode } = useTheme();

  const skills = [
    {
      category: "Platforms",
      items: ["Instagram", "TikTok", "Twitter", "LinkedIn", "YouTube"],
      icon: "📱",
      color: "from-blue-500 to-indigo-600",
    },
    {
      category: "Content",
      items: ["Photos", "Videos", "Stories", "Reels", "Live Streams"],
      icon: "🎬",
      color: "from-purple-500 to-pink-600",
    },
    {
      category: "Tools",
      items: ["Canva", "CapCut", "Analytics", "Scheduling", "Editing"],
      icon: "🛠️",
      color: "from-emerald-500 to-teal-600",
    },
    {
      category: "Strategy",
      items: ["Campaigns", "Engagement", "Growth", "Branding", "ROI"],
      icon: "📈",
      color: "from-orange-500 to-amber-600",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className={`min-h-screen transition-colors duration-300 py-12 md:py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-32 left-32 w-20 md:w-40 h-20 md:h-40 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-gray-700/30" : "bg-slate-200/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-32 right-32 w-16 md:w-32 h-16 md:h-32 rounded-full blur-2xl animate-float ${
            isDarkMode ? "bg-gray-700/20" : "bg-slate-200/20"
          }`}
          style={{ animationDelay: "1.5s" }}
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
            About Me
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            A creative social media specialist with a passion for building
            engaging online communities and creating compelling content that
            drives brand awareness and engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Column - Story */}
          <div
            className={`space-y-6 md:space-y-8 ${
              isLoaded ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="space-y-4 md:space-y-6">
              <h3
                className={`text-2xl md:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                My Story
              </h3>
              <p
                className={`text-base md:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                With over 5 years of experience in content strategy, community
                management, and social media marketing, I help brands connect
                authentically with their audiences across all major platforms.
              </p>
              <p
                className={`text-base md:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                I believe in the power of storytelling and authentic
                connections. Every piece of content I create is designed to
                resonate with real people and drive meaningful engagement.
              </p>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              {[
                { number: "5+", label: "Years Experience", icon: "⭐" },
                { number: "100+", label: "Brands Helped", icon: "💼" },
                { number: "1M+", label: "Reach Generated", icon: "📊" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent mb-1 transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-white to-gray-300 group-hover:from-gray-300 group-hover:to-gray-400"
                        : "bg-gradient-to-r from-slate-900 to-slate-700 group-hover:from-slate-700 group-hover:to-slate-600"
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

            {/* Philosophy Card */}
            <div
              className={`p-6 md:p-8 backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-500 ${
                isDarkMode
                  ? "bg-gray-800/60 border-gray-600/50"
                  : "bg-white/60 border-slate-200/50"
              }`}
            >
              <h4
                className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                My Philosophy
              </h4>
              <p
                className={`text-sm md:text-base leading-relaxed italic ${
                  isDarkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                "Authenticity is the key to meaningful connections. I create
                content that doesn't just look good—it feels real, resonates
                with audiences, and drives results."
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div
            className={`${isLoaded ? "animate-fade-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h3
              className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              What I Do
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className={`relative group cursor-pointer transition-all duration-500 hover-lift ${
                    activeSkill === index ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setActiveSkill(index)}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div
                    className={`backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                      isDarkMode
                        ? "bg-gray-800/80 border-gray-600/50"
                        : "bg-white/80 border-slate-200/50"
                    }`}
                  >
                    <div className="flex items-center mb-3 md:mb-4">
                      <div
                        className={`w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-xl md:text-2xl mr-3 md:mr-4 shadow-lg`}
                      >
                        {skill.icon}
                      </div>
                      <h4
                        className={`font-semibold text-base md:text-lg ${
                          isDarkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {skill.category}
                      </h4>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <div
                          key={item}
                          className={`text-xs md:text-sm transition-all duration-300 ${
                            activeSkill === index
                              ? isDarkMode
                                ? "text-white font-medium"
                                : "text-slate-900 font-medium"
                              : isDarkMode
                              ? "text-gray-300"
                              : "text-slate-600"
                          }`}
                          style={{ transitionDelay: `${itemIndex * 50}ms` }}
                        >
                          • {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Values Section */}
            <div
              className={`mt-8 md:mt-12 p-6 md:p-8 backdrop-blur-sm rounded-2xl border ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-600/50"
                  : "bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200/50"
              }`}
            >
              <h4
                className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                My Values
              </h4>
              <div className="grid grid-cols-1 gap-3 md:gap-4">
                {[
                  {
                    value: "Authenticity",
                    desc: "Real connections over perfect posts",
                  },
                  {
                    value: "Creativity",
                    desc: "Innovative approaches to content",
                  },
                  {
                    value: "Results",
                    desc: "Data-driven strategies that work",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        isDarkMode ? "bg-gray-400" : "bg-slate-400"
                      }`}
                    ></div>
                    <div>
                      <div
                        className={`font-medium text-sm md:text-base ${
                          isDarkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {value.value}
                      </div>
                      <div
                        className={`text-xs md:text-sm ${
                          isDarkMode ? "text-gray-400" : "text-slate-500"
                        }`}
                      >
                        {value.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
