"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function HeroSection() {
  // Referencia para el contenedor de Typed.js
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Configuración de Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ["Omar Hernández Rey", "Desarrollador Full Stack"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    // Destruye la instancia cuando el componente se desmonta
    return () => typed.destroy();
  }, []);

  return (
    <section
      className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4"
      id="hero"
    >
      {/* Título Principal con Efecto Typed */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        ¡Hola, soy{" "}
        <span className="text-blue-500" ref={typedElement}></span>
        !
      </h1>

      {/* Subtítulo */}
      <p className="text-lg md:text-2xl mb-6">
        Soy un desarrollador web full stack apasionado por crear aplicaciones increíbles.
      </p>

      {/* Botón de CTA */}
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition duration-300"
      >
        Ver Mis Proyectos
      </a>
    </section>
  );
}
