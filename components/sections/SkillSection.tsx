"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image'; // Importa el componente Image

// Parámetros y datos de Skills
const skills = [
  {
    name: "HTML",
    percentage: "90%",
    color: "text-red-500",
    colorHex: "#ef4444",
    icon: "/images/logos/html.svg",
    description: "Estructuras semánticas y accesibles para la web.",
  },
  {
    name: "CSS",
    percentage: "75%",
    color: "text-blue-500",
    colorHex: "#3b82f6",
    icon: "/images/logos/css.svg",
    description: "Diseños responsivos y animaciones elegantes.",
  },
  {
    name: "JavaScript",
    percentage: "98%",
    color: "text-yellow-500",
    colorHex: "#f59e0b",
    icon: "/images/logos/javascript.svg",
    description: "Lógica dinámica y programación orientada a eventos.",
  },
  {
    name: "Node.js",
    percentage: "60%",
    color: "text-green-500",
    colorHex: "#10b981",
    icon: "/images/logos/nodejs.svg",
    description: "Creación de servidores de alto rendimiento y escalables.",
  },
  {
    name: "React",
    percentage: "85%",
    color: "text-cyan-500",
    colorHex: "#06b6d4",
    icon: "/images/logos/react-js.svg",
    description: "Interfaces modernas y arquitectura de componentes.",
  },
];

// Parámetros para el anillo circular
const RADIUS = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Convierte "XX%" a número (0-100)
function parsePercentage(str: string): number {
  return parseInt(str.replace("%", ""), 10) || 0;
}

export default function SkillSection() {
  // Estado que guarda el valor actual de cada porcentaje
  const [counts, setCounts] = useState<number[]>(
    skills.map((skill) => parsePercentage(skill.percentage))
  );

  // Animaciones (para cancelar si fuera necesario)
  const animRefs = useRef<Array<number | null>>([]);

  // Inicializa animRefs
  useEffect(() => {
    animRefs.current = skills.map(() => null);
  }, []);

  // Función de animación de la skill
  function animateSkill(index: number) {
    // Cancela animación previa si existe
    if (animRefs.current[index] !== null) {
      cancelAnimationFrame(animRefs.current[index]!);
      animRefs.current[index] = null;
    }

    const finalVal = parsePercentage(skills[index].percentage);

    // Arrancamos en 1%
    setCounts((old) => {
      const copy = [...old];
      copy[index] = 1;
      return copy;
    });

    // Definimos animación ~60 frames (~1s a 60fps)
    let frame = 0;
    const totalFrames = 60;

    function doFrame() {
      frame++;
      const progress = frame / totalFrames;
      const currentValue = Math.floor(1 + (finalVal - 1) * progress);

      setCounts((old) => {
        const copy = [...old];
        copy[index] = currentValue;
        return copy;
      });

      if (frame < totalFrames) {
        animRefs.current[index] = requestAnimationFrame(doFrame);
      } else {
        // Aseguramos valor final
        setCounts((old) => {
          const copy = [...old];
          copy[index] = finalVal;
          return copy;
        });
        animRefs.current[index] = null;
      }
    }

    animRefs.current[index] = requestAnimationFrame(doFrame);
  }

  // Handlers de eventos de hover
  function handleMouseEnter(index: number) {
    animateSkill(index);
  }

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden text-[var(--text-color)] 
        bg-gradient-to-b from-[var(--background-color)] to-[var(--secondary-background-color)]
        py-32 px-4
      "
    >
      {/* Wave Top (rotada) */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0] z-0">
        <Image
          src="/images/wave-top.svg"
          alt="Wave Top"
          fill // Hace que la imagen ocupe todo el espacio del contenedor padre
          style={{ objectFit: 'cover' }} // Ajusta según tus necesidades ('cover' o 'contain')
          priority={false} // Puedes establecerlo en true si es crucial para el LCP
        />
      </div>

      {/* Contenido principal (z-10) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Título con degradado (igual que "My Services") */}
        <h2
          className="
            text-center text-4xl md:text-5xl font-extrabold mb-8
            text-transparent bg-clip-text 
            bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]
          "
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => {
            const currentVal = counts[index];
            // Calcula offset para dibujar el anillo
            const offset =
              CIRCUMFERENCE - (CIRCUMFERENCE * currentVal) / 100;

            return (
              <div
                key={index}
                className="flex flex-col items-center"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {/* Contenedor del anillo + ícono */}
                <div className="relative w-16 h-16 mb-4">
                  <svg
                    className="absolute top-0 left-0 w-full h-full drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"
                    viewBox="0 0 64 64"
                  >
                    {/* Círculo de fondo */}
                    <circle
                      cx={32}
                      cy={32}
                      r={RADIUS}
                      stroke="var(--muted-color)"
                      strokeWidth={4}
                      fill="none"
                    />
                    {/* Círculo de progreso */}
                    <circle
                      cx={32}
                      cy={32}
                      r={RADIUS}
                      stroke={skill.colorHex || "var(--accent-color)"}
                      strokeWidth={4}
                      fill="none"
                      strokeDasharray={CIRCUMFERENCE}
                      strokeDashoffset={offset}
                      transform="rotate(-90 32 32)"
                      strokeLinecap="round"
                      className="transition-all duration-200 ease-linear"
                    />
                  </svg>

                  {/* Ícono centrado */}
                  <div className="absolute inset-0 p-2 flex items-center justify-center z-10">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      width={40} // Ajusta según las dimensiones reales de la imagen
                      height={40} // Ajusta según las dimensiones reales de la imagen
                      className="object-contain opacity-50 pointer-events-none"
                      priority={false}
                    />
                  </div>

                  {/* Porcentaje en texto */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className={`text-sm font-bold text-[var(--text-color)]`}>
                      {currentVal}%
                    </span>
                  </div>
                </div>

                {/* Nombre de la skill */}
                <h3
                  className="
                    mt-2 text-xl font-semibold 
                    text-transparent bg-clip-text 
                    bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]
                  "
                >
                  {skill.name}
                </h3>

                {/* Descripción */}
                <p className="text-[var(--text-color)] mt-2 text-sm max-w-xs">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <Image
          src="/images/wave-bottom.svg"
          alt="Wave Bottom"
          fill // Hace que la imagen ocupe todo el espacio del contenedor padre
          style={{ objectFit: 'cover' }} // Ajusta según tus necesidades ('cover' o 'contain')
          priority={false} // Puedes establecerlo en true si es crucial para el LCP
        />
      </div>
    </section>
  );
}
