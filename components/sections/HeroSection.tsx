"use client";

import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import ParticlesComponent from "@/components/ParticlesComponent";
import "@/styles/advancedButton.css";
import Image from "next/image";

export default function HeroSection() {
  const projectsRef = useRef<HTMLElement | null>(null);

  // Scroll suave mejorado con useRef
  const handleViewProjects = () => {
    if (!projectsRef.current) {
      projectsRef.current = document.querySelector("#projects");
    }
    projectsRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  // Precarga las partículas solo en cliente
  const [showParticles, setShowParticles] = React.useState(false);
  useEffect(() => {
    setShowParticles(true);
  }, []);

  return (
    <section
      id="hero"
      className="
        relative w-full min-h-screen 
        bg-[var(--background-color)] flex items-center justify-center
        overflow-hidden
      "
    >
      {/* Fondo de imagen optimizado con next/image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Fondo decorativo"
          fill
          priority
          quality={85}
          className="object-cover"
          placeholder="blur"
          blurDataURL="/images/hero-background-lowres.jpg"
        />
      </div>

      {/* Capa overlay mejorada */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenedor de partículas optimizado */}
      {showParticles && (
        <div
          className="
            absolute inset-0 overflow-hidden 
            pointer-events-none z-[1]
          "
          id="particles-container"
        >
          <ParticlesComponent />
        </div>
      )}

      {/* Contenido */}
      <div
        className="
          relative z-10 flex flex-col items-center 
          justify-center text-center text-[var(--white-color)] px-4
          w-full max-w-6xl mx-auto
        "
      >
        {/* Título animado mejorado */}
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-extrabold mb-6 leading-tight
          "
        >
          ¡Hola Soy{" "}
          <span className="inline-block min-h-[1.2em]">
            <Typewriter
              options={{
                strings: [
                  `<span style="color: var(--accent-color)">Omar Hernández Rey</span>`,
                  `<span style="color: var(--primary-color)">Desarrollador Web Full Stack</span>`,
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

        {/* Descripción mejorada */}
        <p
          className="
            max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl
            text-white/90 mt-4 mb-8
            [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]
            animate-fadeIn
          "
        >
          Combino <span className="font-semibold text-[var(--accent-color)]">creatividad</span>,{" "}
          <span className="font-semibold text-[var(--primary-color)]">innovación</span> y{" "}
          <span className="font-semibold">tecnología</span> para crear experiencias web{" "}
          <span className="underline decoration-[var(--accent-color)]/50">inolvidables</span>.
        </p>

        {/* Botón interactivo mejorado */}
        <button
          type="button"
          className="btn relative group"
          onClick={handleViewProjects}
          aria-label="Ver mis proyectos"
        >
          <strong className="relative z-10">Ver Proyectos</strong>
          <div id="container-stars">
            <div id="stars" className="group-hover:animate-pulse" />
          </div>
          <div id="glow">
            <div className="circle group-hover:opacity-80" />
            <div className="circle group-hover:opacity-60" />
          </div>
        </button>
      </div>
    </section>
  );
}