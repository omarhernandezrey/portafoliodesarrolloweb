"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Información Principal */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Omar Hernández Rey</h2>
          <p className="text-gray-400">Desarrollador Web Full Stack</p>
        </div>

        {/* Enlaces a Redes Sociales */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm mt-4 md:mt-0 text-center md:text-right">
          © {new Date().getFullYear()} Omar Hernández Rey. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
