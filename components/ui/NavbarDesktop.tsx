"use client";

import React from "react";
import Image from "next/image";
import { FaHome, FaUserAlt, FaGraduationCap, FaCode, FaEnvelope, FaProjectDiagram, FaToolbox } from "react-icons/fa";

const NavbarDesktop = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--background-color)] text-[var(--text-color)] shadow-lg z-50 backdrop-blur-md bg-opacity-90">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo7.png"
            alt="Logo"
            width={64}
            height={64}
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col ml-2 hidden lg:flex">
            <span
              style={{
                color: "var(--primary-color)",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Desarrollador Web Full Stack
            </span>
            <span
              style={{
                color: "var(--accent-color)",
                fontSize: "0.7rem",
              }}
            >
              Omar Hernández Rey
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-end gap-6 text-sm lg:text-base mr-[6rem]">
          <a
            href="#hero"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 font-medium uppercase tracking-wide hover:scale-105"
          >
            <FaHome /> Home
          </a>
          <a
            href="#about"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 font-medium uppercase tracking-wide hover:scale-105"
          >
            <FaUserAlt /> About Me
          </a>
          <a
            href="#education"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 font-medium uppercase tracking-wide hover:scale-105"
          >
            <FaGraduationCap /> Education
          </a>
          <a
            href="#skills"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 font-medium uppercase tracking-wide hover:scale-105"
          >
            <FaToolbox /> Skills
          </a>
          <a
            href="#services"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 font-medium uppercase tracking-wide hover:scale-105"
          >
            <FaCode /> Services
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 font-medium uppercase tracking-wide hover:scale-105"
          >
            <FaProjectDiagram /> Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2 font-medium uppercase tracking-wide hover:scale-105"
          >
            <FaEnvelope /> Contact
          </a>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .flex.items-center .flex-col {
            display: none; /* Oculta el texto del logo en tabletas y dispositivos más pequeños */
          }
          .flex.items-center.justify-end.gap-6 {
            margin-right: 5rem; /* Asegura un margen adecuado con el botón */
          }
        }

        @media (max-width: 768px) {
          nav {
            padding: 0.5rem 1rem;
          }
          .flex.items-center.justify-end.gap-6 {
            flex-wrap: wrap;
            justify-content: center;
            font-size: 0.8rem;
            margin-right: 3rem; /* Reduce el margen pero evita solapamiento */
          }
        }

        @media (max-width: 480px) {
          .flex.items-center.justify-end.gap-6 {
            gap: 6px;
          }
          .flex.items-center {
            justify-content: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavbarDesktop;
