"use client";

import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaHome, FaUserAlt, FaGraduationCap, FaCode, FaEnvelope, FaProjectDiagram, FaToolbox } from "react-icons/fa";

const NavbarDesktop = () => {
  const [isPalette2, setIsPalette2] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const storedPalette = localStorage.getItem("palette");
    if (storedPalette === "palette2") {
      root.classList.add("palette2");
      setIsPalette2(true);
    } else {
      root.classList.remove("palette2");
      setIsPalette2(false);
    }
  }, []);

  const togglePalette = () => {
    const root = document.documentElement;
    setIsPalette2((prev) => {
      const newState = !prev;

      if (newState) {
        root.classList.add("palette2");
        localStorage.setItem("palette", "palette2");
      } else {
        root.classList.remove("palette2");
        localStorage.setItem("palette", "default");
      }

      return newState;
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--background-color)] text-[var(--text-color)] shadow-lg z-50 backdrop-blur-md bg-opacity-90">
      <div className="flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-16 w-auto object-contain transition-transform duration-500 hover:scale-125"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-end gap-8">
          <a
            href="#home"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:scale-105"
          >
            <FaHome /> Home
          </a>
          <a
            href="#about"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:scale-105"
          >
            <FaUserAlt /> About Me
          </a>
          <a
            href="#education"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:scale-105"
          >
            <FaGraduationCap /> Education
          </a>
          <a
            href="#skills"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:scale-105"
          >
            <FaToolbox /> Skills
          </a>
          <a
            href="#services"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:scale-105"
          >
            <FaCode /> Services
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:scale-105"
          >
            <FaProjectDiagram /> Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:scale-105"
          >
            <FaEnvelope /> Contact
          </a>
        </div>

        {/* Palette Toggle Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePalette}
            className="p-2 bg-[var(--primary-color)] text-[var(--background-color)] rounded-full shadow-xl hover:bg-[var(--primary-hover-color)] transition-transform transform hover:scale-110 focus:ring-4 focus:ring-[var(--accent-color)]"
            aria-label="Cambiar Paleta de Colores"
          >
            {isPalette2 ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
