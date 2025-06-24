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
      items: ["Instagram", "TikTok", "LinkedIn"],
      icon: "📱",
      color: "from-blue-500 to-indigo-600",
    },
    {
      category: "Content",
      items: ["Photos", "Videos", "Stories", "Reels"],
      icon: "🎬",
      color: "from-purple-500 to-pink-600",
    },
    {
      category: "Tools",
      items: ["Canva", "CapCut", "Editing", "Microsoft 360", "Nikon D 5600"],
      icon: "🛠️",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section
      id="about"
      className={`min-h-screen transition-colors duration-300 py-12 md:py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-[#ffeaf4]"
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
          <div className="flex items-center justify-center mb-6">
            <img
              src="/logo.png"
              alt="Julissa Rosas Logo"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-lg"
            />
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight ${
              isDarkMode
                ? "bg-gradient-to-r from-white via-gray-100 to-gray-300"
                : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700"
            }`}
          >
            About Me
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
          {/* Left Column - My Story & Education, then What I Do */}
          <div
            className={`space-y-6 md:space-y-8 ${
              isLoaded ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
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
              I'm a Marketing and Finance student at Florida State University
              with a passion for storytelling, brand development, and creative
              strategy. My journey combines hands-on experience with small
              businesses and a strong academic foundation to help brands grow
              through thoughtful content, data-driven decisions, and a
              people-first approach.
            </p>
            <p
              className={`text-base md:text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              From internships in the U.S. and abroad to campus involvement and
              freelance projects, I'm constantly exploring new ways to connect
              ideas with impact.
            </p>

            {/* What I Do Section (Skills Grid) */}
            <div
              className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <h3
                className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
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
            </div>
          </div>
          {/* Right Column - Experiences (5 default boxes) */}
          <div
            className={`${isLoaded ? "animate-fade-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h3
              className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Experiences
            </h3>
            <div className="space-y-4 md:space-y-6 mb-8">
              <div
                className={`p-4 md:p-6 rounded-2xl border shadow-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/60 border-gray-600/50"
                    : "bg-white/60 border-slate-200/50"
                }`}
              >
                <h4
                  className={`font-bold text-xl md:text-2xl mb-1 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Bean Trolley Cafe
                </h4>
                <div
                  className={`font-medium text-base md:text-lg mb-1 ${
                    isDarkMode ? "text-gray-200" : "text-slate-700"
                  }`}
                >
                  Social Media Intern
                </div>
                <div
                  className={`text-xs md:text-sm mb-2 ${
                    isDarkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  Naples, FL
                </div>
                <p
                  className={`text-sm md:text-base ${
                    isDarkMode ? "text-gray-300" : "text-slate-600"
                  }`}
                >
                  Worked with a local brand to develop engaging content and grow
                  their online presence. Gained hands-on experience in content
                  creation, analytics, and community management.
                </p>
              </div>
              <div
                className={`p-4 md:p-6 rounded-2xl border shadow-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/60 border-gray-600/50"
                    : "bg-white/60 border-slate-200/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <h4
                    className={`font-bold text-xl md:text-2xl ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Delta Nu Zeta
                  </h4>
                  <img
                    src="/images/DNZ.png"
                    alt="Delta Nu Zeta Logo"
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border border-gray-300"
                  />
                </div>
                <div
                  className={`font-medium text-base md:text-lg mb-1 ${
                    isDarkMode ? "text-gray-200" : "text-slate-700"
                  }`}
                >
                  Social Media Committe
                </div>
                <div
                  className={`text-xs md:text-sm mb-2 ${
                    isDarkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  Tallahassee, FL
                </div>
                <p
                  className={`text-sm md:text-base ${
                    isDarkMode ? "text-gray-300" : "text-slate-600"
                  }`}
                >
                  Managed the chapter's social media presence, created content,
                  and increased engagement through creative campaigns and
                  community outreach.
                </p>
              </div>
              <div
                className={`p-4 md:p-6 rounded-2xl border shadow-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/60 border-gray-600/50"
                    : "bg-white/60 border-slate-200/50"
                }`}
              >
                <h4
                  className={`font-bold text-xl md:text-2xl mb-1 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  The Finance Society
                </h4>
                <div
                  className={`font-medium text-base md:text-lg mb-1 ${
                    isDarkMode ? "text-gray-200" : "text-slate-700"
                  }`}
                >
                  VP of Marketing Shadow
                </div>
                <div
                  className={`text-xs md:text-sm mb-2 ${
                    isDarkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  Tallahassee, FL
                </div>
                <p
                  className={`text-sm md:text-base ${
                    isDarkMode ? "text-gray-300" : "text-slate-600"
                  }`}
                >
                  Oversaw marketing initiatives, coordinated events, and led a
                  team to promote the organization's mission and activities to
                  the student body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
