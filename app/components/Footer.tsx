"use client";

import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`py-6 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-[#ffeaf4]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <p
          className={`text-xs text-center ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          © {new Date().getFullYear()} Julissa Rosas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
