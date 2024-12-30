"use client";

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";

const NavbarDesktop = () => {
  const handleLinkClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-end items-center px-8 py-3 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-lg border-b border-gray-700 backdrop-blur-lg">
      {/* Logo */}
      <div className="absolute left-8 top-3">
        <button
          onClick={() => handleLinkClick("#hero")}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="Go to Home"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full shadow-md border-2 border-blue-500 hover:scale-110 transition-transform duration-500"
          />
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-10 text-sm font-semibold uppercase tracking-wide items-center">
        <li className="relative group">
          <button
            onClick={() => handleLinkClick("#hero")}
            className="hover:text-blue-500 focus:text-blue-500 focus:outline-none transition duration-300"
          >
            Home
          </button>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <button
            onClick={() => handleLinkClick("#about")}
            className="hover:text-blue-500 focus:text-blue-500 focus:outline-none transition duration-300"
          >
            About
          </button>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <button
            onClick={() => handleLinkClick("#projects")}
            className="hover:text-blue-500 focus:text-blue-500 focus:outline-none transition duration-300"
          >
            Projects
          </button>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <button
            onClick={() => handleLinkClick("#contact")}
            className="hover:text-blue-500 focus:text-blue-500 focus:outline-none transition duration-300"
          >
            Contact
          </button>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </li>
      </ul>

      {/* Social Media & Dark Mode */}
      <div className="flex gap-6 items-center ml-10">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-br from-gray-700 to-gray-900 p-2.5 rounded-full transition-transform duration-500 hover:scale-125 hover:rotate-6 hover:bg-blue-500 shadow-lg"
        >
          <AiFillGithub size={17}/>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-br from-gray-700 to-gray-900 p-2.5 rounded-full transition-transform duration-500 hover:scale-125 hover:-rotate-6 hover:bg-blue-500 shadow-lg"
        >
          <AiFillLinkedin size={17}/>
        </a>
        <button
          className="text-white bg-gradient-to-br from-gray-700 to-gray-900 p-2.5 rounded-full transition-transform duration-500 hover:scale-125 hover:text-yellow-400 hover:bg-gray-700 shadow-lg"
          aria-label="Toggle dark mode"
        >
          <MdDarkMode size={17}/>
        </button>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
