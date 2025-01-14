"use client";

import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaBookReader,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const NavbarDesktop = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cargar preferencia de modo oscuro desde localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleLinkClick = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Cerrar menú móvil al hacer clic
    }
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const sections = [
      "#hero",
      "#about",
      "#education",
      "#skills",
      "#services",
      "#projects",
      "#contact",
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Inicializar al montar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-b border-teal-400 fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <button
          onClick={() => handleLinkClick("#hero")}
          className="focus:outline-none transition-transform transform hover:scale-110"
          aria-label="Ir al Inicio"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain transition-transform duration-300"
          />
        </button>
      </div>

      {/* Botón de Menú Móvil */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-teal-400 p-2 transition-transform transform hover:scale-110 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Navigation Links y Dark Mode Toggle */}
      <div className="hidden md:flex items-center gap-4">
        {/* Navigation Links */}
        <ul className="flex gap-4 text-xs font-semibold uppercase">
          {[
            { id: "#hero", label: "Home", icon: <FaHome size={14} /> },
            { id: "#about", label: "Sobre Mí", icon: <FaUser size={14} /> },
            { id: "#education", label: "Education", icon: <FaGraduationCap size={14} /> },
            { id: "#skills", label: "Skills", icon: <FaLaptopCode size={14} /> },
            { id: "#services", label: "Services", icon: <FaBriefcase size={14} /> },
            { id: "#projects", label: "Projects", icon: <FaBookReader size={14} /> },
            { id: "#contact", label: "Contact", icon: <FaEnvelope size={14} /> },
          ].map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center gap-1 text-teal-400 relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-teal-400 after:to-blue-500 after:transition-all after:duration-300 ${
                  activeSection === link.id
                    ? "underline after:w-full"
                    : "hover:after:w-full"
                }`}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                {link.icon}
                {link.label}
              </button>
            </li>
          ))}
          <li className="relative">
            <a
              href="/files/CV-Omar-Hernandez-Rey.pdf"
              download
              className="flex items-center gap-1 text-teal-400 relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-teal-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              aria-label="Descargar CV"
            >
              <FaDownload size={14} />
              Download CV
            </a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-teal-400 p-2 transition-transform transform hover:scale-110 focus:outline-none"
          aria-label="Alternar Modo Oscuro"
        >
          {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-b border-teal-400 shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-3 py-4 text-sm font-semibold uppercase">
            {[
              { id: "#hero", label: "Home", icon: <FaHome size={16} /> },
              { id: "#about", label: "Sobre Mí", icon: <FaUser size={16} /> },
              { id: "#education", label: "Education", icon: <FaGraduationCap size={16} /> },
              { id: "#skills", label: "Skills", icon: <FaLaptopCode size={16} /> },
              { id: "#services", label: "Services", icon: <FaBriefcase size={16} /> },
              { id: "#projects", label: "Projects", icon: <FaBookReader size={16} /> },
              { id: "#contact", label: "Contact", icon: <FaEnvelope size={16} /> },
              {
                id: "download-cv",
                label: "Download CV",
                icon: <FaDownload size={16} />,
                href: "/files/CV-Omar-Hernandez-Rey.pdf",
                download: true,
              },
            ].map((link) => (
              <li key={link.id} className="w-full text-center">
                {link.href ? (
                  <a
                    href={link.href}
                    download={link.download}
                    onClick={() => handleLinkClick(link.id)}
                    className="flex items-center justify-center gap-2 text-teal-400 relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-teal-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    aria-label={link.label}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ) : (
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="flex items-center justify-center gap-2 text-teal-400 relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-teal-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    aria-current={activeSection === link.id ? "page" : undefined}
                  >
                    {link.icon}
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarDesktop;
