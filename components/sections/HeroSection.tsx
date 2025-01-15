"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import ParticlesComponent from "@/components/ParticlesComponent";
import "@/styles/advancedButton.css";

export default function HeroSection() {
  const handleViewProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="
        relative w-full min-h-screen 
        bg-[var(--background-color)] flex items-center justify-center
      "
    >
      {/* Fondo de imagen */}
      <div
        className="
          absolute inset-0 bg-[url('/images/hero-background.jpg')] 
          bg-cover bg-center
        "
      ></div>

      {/* Capa nublada */}
      <div
        className="
          absolute inset-0 bg-black bg-opacity-50
        "
      ></div>

      {/* Contenedor de partículas */}
      <div
        className="
          absolute inset-0 overflow-hidden 
          pointer-events-none z-0
        "
        id="particles-container"
      >
        <ParticlesComponent />
      </div>

      {/* Contenido */}
      <div
        className="
          relative z-10 flex flex-col items-center 
          justify-center text-center text-[var(--white-color)] px-4
        "
      >
        {/* Título animado */}
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-extrabold mb-6 tracking-tight drop-shadow-md
          "
        >
          ¡Hola Soy{" "}
          <span>
            <Typewriter
              options={{
                strings: [
                  `<span class="text-[var(--accent-color)]">Omar Hernández Rey</span>`,
                  `<span class="text-[var(--primary-color)]">Desarrollador Web Full Stack</span>`,
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "inline-block",
              }}
            />
          </span>
        </h1>

        {/* Descripción */}
        <p
          className="
            max-w-lg text-sm sm:text-base md:text-lg lg:text-xl 
            tracking-normal text-[var(--text-color)] 
            mt-4 mb-8 animate-fadeIn
          "
        >
          Combino creatividad, innovación y tecnología para crear experiencias web
          inolvidables.
        </p>

        {/* Botón interactivo */}
        <button
          type="button"
          className="btn"
          onClick={handleViewProjects}
          aria-label="Ver Proyectos"
        >
          <strong>Ver Proyectos</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </div>
    </section>
  );
}
