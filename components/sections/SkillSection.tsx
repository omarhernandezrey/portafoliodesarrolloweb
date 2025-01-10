"use client";
import React, { useRef, useState, useEffect } from "react";

/** 
 * Ajusta estos datos a tus necesidades:
 * - percentage: "XX%"
 * - color: clases de Tailwind para el color del texto
 * - colorHex: el color en HEX que usaremos para la barra circular
 * - icon: ruta de tu ícono
 */
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

// Parámetros para el anillo circular.
const RADIUS = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Convierte "XX%" a número (0-100).
function parsePercentage(str: string): number {
  return parseInt(str.replace("%", ""), 10) || 0;
}

export default function SkillSection() {
  /**
   * 1) counts almacenará el valor "actual" de cada porcentaje.
   *    Por defecto, se inicializan con su valor final (para no confundir al usuario).
   */
  const [counts, setCounts] = useState<number[]>(
    skills.map((skill) => parsePercentage(skill.percentage))
  );

  /**
   * 2) animRefs guardará, para cada skill, el ID del requestAnimationFrame en curso,
   *    de modo que podamos cancelar o evitar animaciones duplicadas.
   */
  const animRefs = useRef<Array<number | null>>([]);

  // Al montar, inicializamos animRefs con un array del mismo tamaño que skills.
  useEffect(() => {
    animRefs.current = skills.map(() => null);
  }, []);

  /**
   * 3) Función que “resetea” (en tiempo real) una skill a 1% y la anima hasta su valor final.
   *    - i: índice de la skill en el array.
   */
  function animateSkill(i: number) {
    // Si había una animación en curso, la cancelamos.
    if (animRefs.current[i] !== null) {
      cancelAnimationFrame(animRefs.current[i]!);
      animRefs.current[i] = null;
    }

    // Valor final que queremos para esta skill.
    const finalVal = parsePercentage(skills[i].percentage);

    // Forzamos a que arranque en 1% (se verá instantáneo antes de animar).
    setCounts((old) => {
      const copy = [...old];
      copy[i] = 1;
      return copy;
    });

    // Ahora definimos la animación con ~60 frames (≈1s a 60fps).
    let frame = 0;
    const totalFrames = 60;

    function doFrame() {
      frame++;
      // Hacemos interpolación lineal desde 1 hasta finalVal.
      const progress = frame / totalFrames;
      const currentValue = Math.floor(1 + (finalVal - 1) * progress);

      setCounts((old) => {
        const copy = [...old];
        copy[i] = currentValue;
        return copy;
      });

      if (frame < totalFrames) {
        animRefs.current[i] = requestAnimationFrame(doFrame);
      } else {
        // Al terminar, aseguramos el valor final exacto.
        setCounts((old) => {
          const copy = [...old];
          copy[i] = finalVal;
          return copy;
        });
        animRefs.current[i] = null;
      }
    }

    animRefs.current[i] = requestAnimationFrame(doFrame);
  }

  /**
   * 4) Manejo de eventos de mouse:
   *    - onMouseEnter => llama a animateSkill(i)
   *    - onMouseLeave => se queda en el valor final, NO reseteamos a 0%
   */
  function handleMouseEnter(i: number) {
    animateSkill(i);
  }
  // No hacemos nada en onMouseLeave para que permanezca en el valor final
  function handleMouseLeave(i: number) {}

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Título principal con color personalizado */}
        <h2 className="text-4xl font-bold mb-8 text-[#3DC0A3]">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => {
            // El valor actual que se está mostrando.
            const currentVal = counts[index];

            // offset para el anillo: si currentVal = 100 => offset = 0 (lleno).
            const offset =
              CIRCUMFERENCE - (CIRCUMFERENCE * currentVal) / 100;

            return (
              <div
                key={index}
                className="flex flex-col items-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Contenedor para el anillo y el ícono */}
                <div className="relative w-16 h-16 mb-4">
                  <svg
                    className="absolute top-0 left-0 w-full h-full drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"
                    viewBox="0 0 64 64"
                  >
                    {/* Círculo de fondo (gris) */}
                    <circle
                      cx={32}
                      cy={32}
                      r={RADIUS}
                      stroke="#3f3f46" // gray-700
                      strokeWidth={4}
                      fill="none"
                    />
                    {/* Círculo de progreso */}
                    <circle
                      cx={32}
                      cy={32}
                      r={RADIUS}
                      stroke={skill.colorHex}
                      strokeWidth={4}
                      fill="none"
                      strokeDasharray={CIRCUMFERENCE}
                      strokeDashoffset={offset}
                      transform="rotate(-90 32 32)"
                      strokeLinecap="round"
                      // Pequeña transición para suavizar
                      className="transition-all duration-200 ease-linear"
                    />
                  </svg>

                  {/* Ícono centrado */}
                  <div className="absolute inset-0 p-2 flex items-center justify-center z-10">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-full h-full object-contain opacity-50 pointer-events-none"
                    />
                  </div>

                  {/* Porcentaje en texto */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className={`text-sm font-bold ${skill.color}`}>
                      {currentVal}%
                    </span>
                  </div>
                </div>

                {/* Nombre de la skill con color personalizado */}
                <h3 className="mt-2 text-xl font-semibold text-[#3DC0A3]">
                  {skill.name}
                </h3>

                {/* Descripción */}
                <p className="text-gray-400 mt-2 text-sm max-w-xs">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
