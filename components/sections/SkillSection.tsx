"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Skill = {
  name: string;
  percentage: string;
  colorHex: string;
  icon: string;
  description: string;
  category: string;
};

const SKILLS: Skill[] = [
  {
    name: "HTML5",
    percentage: "95%",
    colorHex: "#FF6D00",
    icon: "/images/logos/html.svg",
    description: "Estructuras semánticas y optimizadas para SEO y accesibilidad.",
    category: "Frontend"
  },
  {
    name: "CSS3/Sass",
    percentage: "92%",
    colorHex: "#2965F1",
    icon: "/images/logos/css.svg",
    description: "Diseños responsive, animaciones CSS y arquitectura escalable.",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    percentage: "98%",
    colorHex: "#F0DB4F",
    icon: "/images/logos/javascript.svg",
    description: "ES6+, patrones avanzados y optimización de performance.",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    percentage: "90%",
    colorHex: "#007ACC",
    icon: "/images/logos/typescript.svg",
    description: "Tipado estático para aplicaciones empresariales escalables.",
    category: "Frontend"
  },
  {
    name: "React/Next.js",
    percentage: "96%",
    colorHex: "#61DAFB",
    icon: "/images/logos/react.svg",
    description: "Aplicaciones SSR, ISR y estáticas optimizadas.",
    category: "Frontend"
  },
  {
    name: "Node.js",
    percentage: "88%",
    colorHex: "#68A063",
    icon: "/images/logos/nodejs.svg",
    description: "APIs REST/GraphQL, microservicios y autenticación JWT.",
    category: "Backend"
  },
  {
    name: "UI/UX Design",
    percentage: "85%",
    colorHex: "#FF4081",
    icon: "/images/logos/figma.svg",
    description: "Diseño de interfaces centrado en la experiencia de usuario.",
    category: "Design"
  },
  {
    name: "Cloud Architecture",
    percentage: "82%",
    colorHex: "#4285F4",
    icon: "/images/logos/aws.svg",
    description: "Infraestructura escalable en AWS, GCP y Azure.",
    category: "DevOps"
  }
];

const RADIUS = 36;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const ANIMATION_DURATION = 800;
const EASING = [0.16, 0.77, 0.47, 0.97];

// Partículas predefinidas para evitar el error de hidratación
const PARTICLES = [
  { width: 6.6, height: 7.9, top: 86.3, left: 68.3 },
  { width: 7.8, height: 2.3, top: 37.8, left: 32.6 },
  { width: 2.2, height: 6.1, top: 17.1, left: 1.0 },
  { width: 2.4, height: 4.0, top: 46.4, left: 85.1 },
  { width: 5.9, height: 6.2, top: 68.6, left: 77.5 },
  { width: 2.7, height: 5.5, top: 83.0, left: 94.1 },
  { width: 7.8, height: 3.5, top: 13.1, left: 62.1 },
  { width: 3.5, height: 6.1, top: 90.9, left: 73.0 },
  { width: 4.3, height: 2.8, top: 34.7, left: 41.5 },
  { width: 3.4, height: 6.8, top: 57.0, left: 45.5 },
  { width: 3.1, height: 5.0, top: 0.9, left: 29.3 },
  { width: 5.9, height: 3.4, top: 70.7, left: 95.0 },
  { width: 3.8, height: 5.4, top: 43.8, left: 22.8 },
  { width: 6.7, height: 3.5, top: 26.7, left: 93.7 },
  { width: 6.8, height: 4.4, top: 70.4, left: 59.6 }
];

const parsePercentage = (str: string): number => Math.min(100, Math.max(0, parseInt(str.replace("%", ""), 10) || 0));

const categoryColors: Record<string, string> = {
  Frontend: "from-purple-500 to-indigo-600",
  Backend: "from-emerald-500 to-teal-600",
  Design: "from-pink-500 to-rose-600",
  DevOps: "from-blue-500 to-cyan-600"
};

export default function PremiumSkillsSection() {
  const [counts, setCounts] = useState<number[]>(() =>
    SKILLS.map(() => 0) // Initialize counts to 0 for all skills
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const animRefs = useRef<Array<number | null>>([]);
  const initialAnimationDone = useRef<boolean>(false); // To track initial animation

  // Filtered skills based on selected category
  const filteredSkills = selectedCategory === "All"
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  // Effect to handle initial animation when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !initialAnimationDone.current) {
          filteredSkills.forEach((_, index) => {
            // Delay initial animation to appear one by one
            // We now store the true percentage in `counts` directly for initial load
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = parsePercentage(filteredSkills[index].percentage);
              return newCounts;
            });
            setTimeout(() => animateSkill(index, true), index * 100);
          });
          initialAnimationDone.current = true; // Mark initial animation as done
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      animRefs.current.forEach(animId => animId && cancelAnimationFrame(animId));
    };
  }, [filteredSkills]); // Rerun when filteredSkills change (category selection)

  // Effect to reset animation state when category changes
  useEffect(() => {
    // Reset initial animation state when category changes
    initialAnimationDone.current = false;
    // Set counts to 0 initially for the new filteredSkills to allow re-animation on hover
    setCounts(filteredSkills.map(() => 0));
    setHoveredIndex(null);
  }, [selectedCategory]);


  const animateSkill = (index: number, isInitialAnimation: boolean = false) => {
    if (animRefs.current[index] !== null) {
      cancelAnimationFrame(animRefs.current[index]!);
    }

    const startTime = performance.now();
    const finalValue = parsePercentage(filteredSkills[index].percentage);
    const startValue = isInitialAnimation ? 0 : counts[index]; // Start from 0 for initial, or current for hover

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      const easedProgress = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      const currentValue = Math.floor(startValue + (finalValue - startValue) * easedProgress);

      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = currentValue;
        return newCounts;
      });

      if (progress < 1) {
        animRefs.current[index] = requestAnimationFrame(updateCount);
      } else {
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = finalValue;
          return newCounts;
        });
        animRefs.current[index] = null;
      }
    };

    setHoveredIndex(index);
    // Only animate if the skill is not yet at its final value or if it's an initial animation
    if (counts[index] !== finalValue || isInitialAnimation) {
      animRefs.current[index] = requestAnimationFrame(updateCount);
    }
  };

  const stopSkillAnimation = (index: number) => {
    if (animRefs.current[index] !== null) {
      cancelAnimationFrame(animRefs.current[index]!);
      animRefs.current[index] = null; // Clear the animation ID
    }
    setHoveredIndex(null);
    // On mouse leave, if it's not the initial animation done, revert to 0, otherwise keep final value
    // This makes sure percentages are always visible *after* initial load.
    if (initialAnimationDone.current) {
        setCounts(prev => {
            const newCounts = [...prev];
            // Ensure the displayed value is the actual skill percentage after initial load
            newCounts[index] = parsePercentage(filteredSkills[index].percentage);
            return newCounts;
        });
    } else {
        setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = 0; // Revert to 0 if initial animation hasn't completed
            return newCounts;
        });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8" // Adjusted padding for mobile-first
    >
      {/* Efecto de partículas animadas - Versión corregida */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 10 + (i % 5),
              repeat: Infinity,
              ease: "linear",
              delay: i % 3
            }}
          />
        ))}
      </div>

      {/* Efecto de gradiente sutil */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8"> {/* Removed px-4 on mobile for full width header */}
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 px-4 sm:mb-16" // Added horizontal padding for header on mobile
        >
          <span className="inline-block mb-2 text-xs font-medium tracking-widest text-indigo-400 uppercase sm:text-sm"> {/* Smaller on mobile */}
            Technical Mastery
          </span>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 sm:text-4xl md:text-5xl lg:text-6xl"> {/* Smaller on mobile */}
            Core Competencies
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-300 leading-relaxed sm:text-base md:text-lg"> {/* Smaller on mobile */}
              Specialized expertise across the modern development stack to deliver exceptional digital products.
            </p>
          </div>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mb-10 flex-wrap gap-2 px-4 sm:mb-12" // Added horizontal padding for filters
        >
          <div className="inline-flex bg-gray-800 rounded-full p-0.5 sm:p-1"> {/* Smaller padding on mobile */}
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all sm:px-5 sm:py-2 sm:text-sm ${ // Smaller on mobile
                selectedCategory === "All"
                  ? "bg-white text-gray-900"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              All Skills
            </button>
            {Array.from(new Set(SKILLS.map(s => s.category))).map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all sm:px-5 sm:py-2 sm:text-sm ${ // Smaller on mobile
                  selectedCategory === category
                    ? `text-white bg-gradient-to-r ${categoryColors[category]}`
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:gap-6"> {/* Smaller gap on mobile and added horizontal padding */}
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const currentVal = counts[index] || 0;
              const offset = CIRCUMFERENCE - (CIRCUMFERENCE * currentVal) / 100;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: EASING }}
                  className="relative group"
                  onMouseEnter={() => animateSkill(index)}
                  onMouseLeave={() => stopSkillAnimation(index)} // Use stopSkillAnimation
                >
                  {/* Tarjeta */}
                  <div className={`
                    relative h-full p-5 bg-gray-800/50 backdrop-blur-lg border
                    ${isHovered ? 'border-indigo-400/30' : 'border-gray-700/50'}
                    rounded-2xl overflow-hidden transition-all duration-500
                    hover:border-indigo-400/30 hover:shadow-xl
                  `}>
                    {/* Efecto de iluminación */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br from-white/5 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    `} />

                    {/* Efecto de borde luminoso */}
                    <div className={`
                      absolute inset-0 rounded-2xl pointer-events-none
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                      transition-opacity duration-500
                    `}>
                      <div className="absolute inset-0 rounded-2xl bg-indigo-500/10" />
                      <div className="absolute inset-0 rounded-2xl border border-indigo-500/30" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center h-full">
                      {/* Anillo de progreso */}
                      <div className="relative w-28 h-28 mb-4 sm:w-32 sm:h-32 sm:mb-6 md:w-40 md:h-40 md:mb-8"> {/* Adjusted smaller for mobile */}
                        <svg className="absolute inset-0" viewBox="0 0 80 80">
                          <circle
                            cx="40"
                            cy="40"
                            r={RADIUS}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="6"
                            fill="none"
                          />
                          <motion.circle
                            cx="40"
                            cy="40"
                            r={RADIUS}
                            stroke={skill.colorHex}
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={CIRCUMFERENCE}
                            transform="rotate(-90 40 40)"
                            strokeLinecap="round"
                            animate={{ strokeDashoffset: offset }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                          />
                        </svg>

                        {/* Ícono y Porcentaje (always visible) */}
                        <motion.div
                          className="absolute inset-0 flex flex-col items-center justify-center p-2" // Added padding to prevent text/icon overlap
                        >
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={40} // Smaller icon on mobile
                                height={40} // Smaller icon on mobile
                                className={`opacity-90 transition-all ${
                                    isHovered ? 'brightness-125 scale-110' : 'group-hover:brightness-110'
                                }`}
                            />
                            <span className="text-base font-bold text-white drop-shadow-md mt-1 sm:text-xl"> {/* Always visible percentage */}
                                {currentVal}%
                            </span>
                        </motion.div>
                      </div>

                      {/* Contenido */}
                      <div className="text-center flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-white sm:text-2xl"> {/* Smaller on mobile */}
                          {skill.name}
                        </h3>
                        <motion.p
                          className="text-gray-300 text-sm mb-4 flex-1 sm:text-base sm:mb-6" // Smaller on mobile
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1, // Always visible
                            height: 'auto'
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {skill.description}
                        </motion.p>
                        <motion.div
                          className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
                          initial={{ width: 0 }}
                          animate={{ width: isHovered ? '100%' : '0%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Badge de categoría */}
                  <div className={`absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-bold text-white
                    bg-gradient-to-r ${categoryColors[skill.category]} shadow-lg sm:-top-3 sm:-right-3 sm:px-3 sm:py-1`}> {/* Smaller on mobile */}
                    {skill.category}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Efecto de borde inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </section>
  );
}