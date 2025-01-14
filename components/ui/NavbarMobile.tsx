"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
  AiOutlineMenu,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface NavbarMobileProps {
  isOpen: boolean;
  toggleMenu: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isOpen,
  toggleMenu,
  isDarkMode,
  toggleDarkMode,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("#hero");

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, toggleMenu]);

  const handleLinkClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
    }
  };

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
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (
          section &&
          section.getBoundingClientRect().top + window.scrollY <= scrollPosition
        ) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-transparent border-b-2 border-teal-400 fixed top-0 left-0 w-full z-50 shadow-md">
        <button
          onClick={toggleMenu}
          className="text-teal-400 text-3xl focus:outline-none hover:text-teal-500 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <button
          onClick={() => handleLinkClick("#hero")}
          className="focus:outline-none transition-transform transform hover:scale-125"
          aria-label="Ir al Inicio"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-12 w-12 object-contain transition-transform duration-300"
          />
        </button>
      </nav>

      {/* Menú desplegable */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out w-4/5`}
        style={{
          boxShadow: isOpen ? "-2px 0 5px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Enlaces de navegación */}
          <ul className="flex flex-col items-start pl-8 mt-32 space-y-6">
            {[
              { id: "#hero", label: "Inicio", icon: <AiOutlineHome size={24} /> },
              { id: "#about", label: "Sobre Mí", icon: <AiOutlineUser size={24} /> },
              { id: "#education", label: "Educación", icon: <AiOutlineUser size={24} /> },
              { id: "#skills", label: "Habilidades", icon: <AiOutlineUser size={24} /> },
              { id: "#services", label: "Servicios", icon: <AiOutlineUser size={24} /> },
              { id: "#projects", label: "Proyectos", icon: <AiOutlineProject size={24} /> },
              { id: "#contact", label: "Contacto", icon: <AiOutlineMail size={24} /> },
            ].map((link) => (
              <li key={link.id} className="w-full">
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-4 w-full px-4 py-2 text-teal-400 hover:text-teal-500 transition-colors duration-300 ${
                    activeSection === link.id ? "underline" : ""
                  }`}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  {link.icon}
                  <span className="text-base">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Iconos sociales y botón de modo oscuro */}
          <div className="flex items-center justify-around gap-4 py-6 border-t border-teal-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 transition-transform duration-500 hover:text-blue-400 hover:scale-125 hover:rotate-6"
              aria-label="GitHub"
            >
              <AiFillGithub size={36} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 transition-transform duration-500 hover:text-blue-400 hover:scale-125 hover:-rotate-6"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size={36} />
            </a>
            <button
              onClick={() => {
                toggleMenu();
                toggleDarkMode();
              }}
              className="text-teal-400 transition-transform transform hover:scale-125 hover:text-yellow-400 focus:outline-none"
              aria-label="Alternar Modo Oscuro"
            >
              {isDarkMode ? <MdLightMode size={36} /> : <MdDarkMode size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* Fondo nublado */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-30"></div>
      )}
    </div>
  );
};

export default NavbarMobile;
