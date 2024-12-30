"use client";

import React, { useEffect, useRef } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";

const NavbarMobile = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

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
      toggleMenu(); // Cierra el menú después de hacer clic
    }
  };

  return (
    <div className="relative">
      {/* Botón para abrir/cerrar el menú */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-12 w-12 object-cover drop-shadow-lg transition-transform duration-500 hover:scale-125 hover:rotate-6"
          />
                  </div>
        <button
          onClick={toggleMenu}
          className="text-3xl focus:outline-none hover:text-blue-400"
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Menú desplegable */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out w-4/5`}
        style={{ boxShadow: isOpen ? "-2px 0 5px rgba(0,0,0,0.5)" : "none" }}
      >
        <ul className="flex flex-col items-start pl-8 justify-center h-full gap-8 text-lg font-medium">
          <li className="flex items-center gap-4">
            <AiOutlineHome size={24} />
            <button
              onClick={() => handleLinkClick("#hero")}
              className="hover:text-blue-400 focus:text-blue-500 focus:outline-none"
            >
              Home
            </button>
          </li>
          <li className="flex items-center gap-4">
            <AiOutlineUser size={24} />
            <button
              onClick={() => handleLinkClick("#about")}
              className="hover:text-blue-400 focus:text-blue-500 focus:outline-none"
            >
              About
            </button>
          </li>
          <li className="flex items-center gap-4">
            <AiOutlineProject size={24} />
            <button
              onClick={() => handleLinkClick("#projects")}
              className="hover:text-blue-400 focus:text-blue-500 focus:outline-none"
            >
              Projects
            </button>
          </li>
          <li className="flex items-center gap-4">
            <AiOutlineMail size={24} />
            <button
              onClick={() => handleLinkClick("#contact")}
              className="hover:text-blue-400 focus:text-blue-500 focus:outline-none"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Línea inferior con iconos */}
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center gap-8 py-4 bg-gray-800 border-t border-gray-700">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform duration-500 hover:text-blue-400 hover:scale-125 hover:rotate-6 hover:bg-gray-700 p-2 rounded-full"
          >
            <AiFillGithub size={36} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform duration-500 hover:text-blue-400 hover:scale-125 hover:-rotate-6 hover:bg-gray-700 p-2 rounded-full"
          >
            <AiFillLinkedin size={36} />
          </a>
          <button
            className="text-white transition-transform duration-500 hover:text-yellow-400 hover:scale-110 focus:outline-none bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-2 rounded-full shadow-lg"
            aria-label="Toggle dark mode"
          >
            <MdDarkMode size={36} />
          </button>
        </div>
      </div>

      {/* Fondo nublado */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-white to-gray-300 opacity-50 z-30"></div>
      )}
    </div>
  );
};

export default NavbarMobile;
