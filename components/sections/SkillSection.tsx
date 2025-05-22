"use client";
import React, { useRef, useState, useEffect } from "react";
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
const ANIMATION_DURATION = 1200;

// Animated particles for background effect
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 10 + 15
}));

const parsePercentage = (str: string): number => Math.min(100, Math.max(0, parseInt(str.replace("%", ""), 10) || 0));

export default function PremiumSkillsSection() {
  const [animatedValues, setAnimatedValues] = useState<number[]>(() => SKILLS.map(() => 0));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const animationRefs = useRef<Array<number | null>>([]);

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === "All" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === selectedCategory);

  // Intersection Observer for initial animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate all skills with staggered delay
            filteredSkills.forEach((skill, index) => {
              setTimeout(() => {
                animateToValue(index, parsePercentage(skill.percentage));
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredSkills, hasAnimated]);

  // Reset animation when category changes
  useEffect(() => {
    setHasAnimated(false);
    setAnimatedValues(filteredSkills.map(() => 0));
    setHoveredIndex(null);
    // Clear any running animations
    animationRefs.current.forEach(ref => {
      if (ref) cancelAnimationFrame(ref);
    });
    animationRefs.current = [];
  }, [selectedCategory]);

  const animateToValue = (index: number, targetValue: number) => {
    if (animationRefs.current[index]) {
      cancelAnimationFrame(animationRefs.current[index]!);
    }

    const startTime = performance.now();
    const startValue = animatedValues[index] || 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(startValue + (targetValue - startValue) * easedProgress);

      setAnimatedValues(prev => {
        const newValues = [...prev];
        newValues[index] = currentValue;
        return newValues;
      });

      if (progress < 1) {
        animationRefs.current[index] = requestAnimationFrame(animate);
      } else {
        animationRefs.current[index] = null;
      }
    };

    animationRefs.current[index] = requestAnimationFrame(animate);
  };

  const handleSkillHover = (index: number) => {
    setHoveredIndex(index);
    // Always animate on hover - force fill the bar regardless of current state
    animateToValue(index, parsePercentage(filteredSkills[index].percentage));
  };

  const handleSkillLeave = (index: number) => {
    setHoveredIndex(null);
    // If initial animation hasn't completed, reset to 0
    // If initial animation is done, keep the final value
    if (hasAnimated) {
      // Keep the current percentage value after initial load
      setAnimatedValues(prev => {
        const newValues = [...prev];
        newValues[index] = parsePercentage(filteredSkills[index].percentage);
        return newValues;
      });
    } else {
      // Reset to 0 if still in initial loading phase
      animateToValue(index, 0);
    }
  };

  return (
    <>
      <style jsx>{`
        :root {
          --background-color: #1c1c2e;
          --secondary-background-color: #28283c;
          --white-color: #ffffff;
          --text-color: #f4f4f9;
          --muted-color: #d1d1e0;
          --primary-color: #ff6f61;
          --accent-color: #f39c12;
          --card-bg-color: #28283c;
          --inner-circle-bg-color: #f39c12;
          --inner-circle-text-color: #28283c;
          --item-title-color-palette2: #f39c12;
          --loading-text-color-palette2: #f39c12;
          --loadmore-bg-color: #28283c;
          --loadmore-border-color: #f39c12;
          --loadmore-hover-bg-color: #1f2833;
        }
      `}</style>
      
      <section
        ref={sectionRef}
        className="relative min-h-screen py-20 px-4 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--background-color) 0%, var(--secondary-background-color) 50%, var(--background-color) 100%)`
        }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-20">
          {PARTICLES.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                backgroundColor: 'var(--white-color)'
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, var(--background-color) 0%, transparent 30%, var(--background-color) 100%)`,
            opacity: 0.6
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full border"
              style={{
                color: 'var(--accent-color)',
                backgroundColor: 'var(--accent-color)',
                borderColor: 'var(--accent-color)',
                background: `rgba(243, 156, 18, 0.1)`,
                borderColor: `rgba(243, 156, 18, 0.3)`
              }}
              whileHover={{ scale: 1.05 }}
            >
              Technical Excellence
            </motion.span>
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{
                background: `linear-gradient(135deg, var(--white-color) 0%, var(--text-color) 50%, var(--muted-color) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Core Skills
            </h2>
            <p 
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--muted-color)' }}
            >
              Mastering the modern development ecosystem to create exceptional digital experiences
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div 
              className="flex flex-wrap gap-2 p-2 backdrop-blur-lg rounded-2xl border"
              style={{
                backgroundColor: `rgba(40, 40, 60, 0.5)`,
                borderColor: `rgba(209, 209, 224, 0.3)`
              }}
            >
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300`}
                style={{
                  backgroundColor: selectedCategory === "All" ? 'var(--white-color)' : 'transparent',
                  color: selectedCategory === "All" ? 'var(--background-color)' : 'var(--muted-color)',
                  boxShadow: selectedCategory === "All" ? '0 10px 25px rgba(0,0,0,0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== "All") {
                    e.target.style.color = 'var(--white-color)';
                    e.target.style.backgroundColor = 'rgba(40, 40, 60, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== "All") {
                    e.target.style.color = 'var(--muted-color)';
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                All Skills
              </button>
              {Array.from(new Set(SKILLS.map(s => s.category))).map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: selectedCategory === category ? 'var(--primary-color)' : 'transparent',
                    color: selectedCategory === category ? 'var(--white-color)' : 'var(--muted-color)',
                    boxShadow: selectedCategory === category ? '0 10px 25px rgba(255, 111, 97, 0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.color = 'var(--white-color)';
                      e.target.style.backgroundColor = 'rgba(40, 40, 60, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.color = 'var(--muted-color)';
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => {
                const currentValue = animatedValues[index] || 0;
                const offset = CIRCUMFERENCE - (CIRCUMFERENCE * currentValue) / 100;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.div
                    key={`${skill.name}-${selectedCategory}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => handleSkillHover(index)}
                    onMouseLeave={() => handleSkillLeave(index)}
                  >
                    {/* Card */}
                    <div 
                      className="relative h-full p-8 backdrop-blur-xl border rounded-3xl transition-all duration-500 transform-gpu"
                      style={{
                        backgroundColor: isHovered ? 'var(--card-bg-color)' : `rgba(40, 40, 60, 0.4)`,
                        borderColor: isHovered ? 'var(--accent-color)' : `rgba(209, 209, 224, 0.3)`,
                        boxShadow: isHovered ? `0 25px 50px rgba(243, 156, 18, 0.15)` : 'none',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                      }}
                    >
                      {/* Glow Effect */}
                      <div 
                        className="absolute inset-0 rounded-3xl transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)`,
                          opacity: isHovered ? 1 : 0
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center text-center h-full">
                        {/* Progress Circle */}
                        <div className="relative w-32 h-32 mb-6">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                            {/* Background Circle */}
                            <circle
                              cx="40"
                              cy="40"
                              r={RADIUS}
                              stroke="rgba(255,255,255,0.05)"
                              strokeWidth="4"
                              fill="none"
                            />
                            {/* Progress Circle */}
                            <motion.circle
                              cx="40"
                              cy="40"
                              r={RADIUS}
                              stroke={skill.colorHex}
                              strokeWidth="4"
                              fill="none"
                              strokeDasharray={CIRCUMFERENCE}
                              strokeDashoffset={offset}
                              strokeLinecap="round"
                              className="drop-shadow-lg transition-all duration-500"
                              style={{
                                filter: isHovered ? `drop-shadow(0 0 8px ${skill.colorHex}50)` : 'none'
                              }}
                              animate={{
                                strokeDashoffset: offset
                              }}
                              transition={{ 
                                duration: 0.8, 
                                ease: "easeOut"
                              }}
                            />
                          </svg>

                          {/* Icon and Percentage */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-10 h-10 mb-1 opacity-90"
                              animate={{ 
                                scale: isHovered ? 1.2 : 1,
                                filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                            <motion.span 
                              className="text-2xl font-bold"
                              style={{ color: 'var(--white-color)' }}
                              animate={{ scale: isHovered ? 1.1 : 1 }}
                            >
                              {currentValue}%
                            </motion.span>
                          </div>
                        </div>

                        {/* Skill Name */}
                        <h3 
                          className="text-xl font-bold mb-3"
                          style={{ color: 'var(--white-color)' }}
                        >
                          {skill.name}
                        </h3>

                        {/* Description */}
                        <motion.p
                          className="text-sm leading-relaxed flex-grow"
                          style={{ color: 'var(--muted-color)' }}
                          animate={{ opacity: isHovered ? 1 : 0.7 }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.description}
                        </motion.p>

                        {/* Animated Line */}
                        <motion.div
                          className="w-full h-px mt-4"
                          style={{ 
                            background: `linear-gradient(to right, transparent 0%, ${skill.colorHex} 50%, transparent 100%)`
                          }}
                          animate={{ 
                            scaleX: isHovered ? 1 : 0,
                            opacity: isHovered ? 1 : 0
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <motion.div
                      className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      style={{
                        backgroundColor: 'var(--accent-color)',
                        color: 'var(--inner-circle-text-color)'
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill.category}
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent 0%, var(--accent-color) 50%, transparent 100%)`,
            opacity: 0.4
          }}
        />
      </section>
    </>
  );
}