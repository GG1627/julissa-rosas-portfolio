"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Picture() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDarkMode } = useTheme();

  // Array of image data with titles and descriptions
  const images = [
    {
      src: "/images/img1.jpg",
      title: "Nature's Beauty",
      description: "Capturing the serene moments in nature",
    },
    {
      src: "/images/img2.jpg",
      title: "Urban Life",
      description: "The vibrant energy of city streets",
    },
    {
      src: "/images/img3.jpg",
      title: "Portrait Series",
      description: "Expressive moments and emotions",
    },
    {
      src: "/images/img4.jpg",
      title: "Architecture",
      description: "Modern structures and timeless design",
    },
    {
      src: "/images/img5.jpg",
      title: "Street Photography",
      description: "Candid moments of everyday life",
    },
    {
      src: "/images/img6.jpg",
      title: "Landscape",
      description: "Breathtaking views and natural wonders",
    },
    {
      src: "/images/img7.jpg",
      title: "Abstract Art",
      description: "Creative perspectives and unique angles",
    },
    {
      src: "/images/img8.jpg",
      title: "Cultural Moments",
      description: "Celebrating diversity and traditions",
    },
    {
      src: "/images/img9.jpg",
      title: "Minimalist",
      description: "Simplicity in composition and form",
    },
    {
      src: "/images/img10.jpg",
      title: "Color Stories",
      description: "Vibrant palettes and visual harmony",
    },
    {
      src: "/images/img11.jpg",
      title: "Documentary",
      description: "Real stories captured through the lens",
    },
    {
      src: "/images/img12.jpg",
      title: "Fine Art",
      description: "Artistic expression through photography",
    },
    {
      src: "/images/img13.jpg",
      title: "Travel Diary",
      description: "Adventures and discoveries around the world",
    },
    {
      src: "/images/img14.jpg",
      title: "Emotional Depth",
      description: "Capturing the human experience",
    },
    {
      src: "/images/img15.jpg",
      title: "Contemporary",
      description: "Modern perspectives on life and society",
    },
    {
      src: "/images/img16.jpg",
      title: "Timeless",
      description: "Moments that transcend time and space",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="picture"
      className={`min-h-screen transition-colors duration-300 py-12 md:py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute top-20 left-20 w-16 md:w-32 h-16 md:h-32 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-gray-400" : "bg-slate-400"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-12 md:w-24 h-12 md:h-24 rounded-full blur-2xl animate-float ${
            isDarkMode ? "bg-gray-400" : "bg-slate-400"
          }`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 md:w-40 h-20 md:h-40 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-gray-400" : "bg-slate-400"
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
            Pictures
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${
              isDarkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            A creative collection of moments captured through my lens. Each
            image tells its own unique story.
          </p>
        </div>

        {/* Creative Image Grid - Masonry Style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`break-inside-avoid group relative ${
                isLoaded ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {/* Image Container */}
              <div
                className={`relative rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                {/* Image - No cropping, true size */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Creative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-semibold text-white text-base md:text-lg mb-1 md:mb-2">
                      {image.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-200 leading-relaxed mb-2 md:mb-3">
                      {image.description}
                    </p>

                    {/* Creative accent line */}
                    <div className="w-8 md:w-12 h-0.5 bg-white/60 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div
                  className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-1 md:w-1.5 h-1 md:h-1.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
