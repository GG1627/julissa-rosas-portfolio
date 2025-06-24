"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Videos() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { isDarkMode } = useTheme();

  const videos = [
    {
      id: 1,
      title: "Morning Routine",
      description: "A glimpse into my daily creative process",
      platform: "TikTok",
      views: "125K",
      duration: "0:45",
      thumbnail: "/images/img1.jpg",
      videoSrc: "/videos/vid1.mp4",
    },
    {
      id: 2,
      title: "Behind the Scenes",
      description: "Creating content that connects",
      platform: "Instagram",
      views: "89K",
      duration: "1:20",
      thumbnail: "/images/img1.jpg",
      videoSrc: "/videos/vid1.mp4",
    },
    {
      id: 3,
      title: "Travel Vlog",
      description: "Exploring new places and stories",
      platform: "YouTube",
      views: "234K",
      duration: "3:15",
      thumbnail: "/images/img1.jpg",
      videoSrc: "/videos/vid1.mp4",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    setIsClient(true);
  }, []);

  return (
    <section
      id="videos"
      className={`min-h-screen transition-colors duration-300 py-12 md:py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-[#ffeaf4]"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-32 right-32 w-20 md:w-40 h-20 md:h-40 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-gray-700/30" : "bg-slate-200/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-32 left-32 w-16 md:w-32 h-16 md:h-32 rounded-full blur-2xl animate-float ${
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
            Videos
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            Short-form content that drives engagement and tells stories in
            motion.
          </p>
        </div>

        {/* Video Grid with iPhone16 Template */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`relative ${
                isLoaded ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* iPhone16 Frame as Main Container */}
              <div className="relative mx-auto w-64 sm:w-72 md:w-80 h-[600px] sm:h-[650px] md:h-[700px]">
                {/* iPhone16 Image as Main Container with Higher Z-Index */}
                <div className="absolute inset-0 z-20">
                  <img
                    src="/images/iPhone16.png"
                    alt="iPhone 16"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Video Content Behind iPhone (Lower Z-Index) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  {/* Video Screen Area - positioned to match iPhone screen */}
                  <div className="relative w-56 sm:w-64 md:w-72 h-[500px] sm:h-[550px] md:h-[630px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-black">
                    {/* Video Content */}
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      {/* Show video only on client side to prevent hydration issues */}
                      {isClient ? (
                        <video
                          className="w-full h-full object-contain"
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={video.thumbnail}
                          onError={(e) => {
                            // Fallback to image if video fails to load
                            const target = e.target as HTMLVideoElement;
                            target.style.display = "none";
                            const img =
                              target.nextElementSibling as HTMLImageElement;
                            if (img) img.style.display = "block";
                          }}
                        >
                          <source src={video.videoSrc} type="video/mp4" />
                          {/* Fallback image */}
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-contain"
                            style={{ display: "none" }}
                          />
                        </video>
                      ) : (
                        /* Show thumbnail during SSR */
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-contain"
                        />
                      )}

                      {/* Video Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="flex items-center justify-between mb-1 md:mb-2">
                          <span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            {video.platform}
                          </span>
                          <span className="text-xs text-white/80">
                            {video.duration}
                          </span>
                        </div>
                        <h3 className="font-semibold text-xs md:text-sm mb-1 text-white">
                          {video.title}
                        </h3>
                        <p className="text-xs text-gray-200 mb-1 md:mb-2">
                          {video.description}
                        </p>
                        <div className="flex items-center text-xs text-white/80">
                          <span>👁️ {video.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
