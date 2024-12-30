"use client";

import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection: React.FC = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  const [textIndex, setTextIndex] = React.useState(0);
  const texts = ["Omar Hernández Rey!", "Desarrollador Web Full Stack!"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, [texts.length]);

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05, // Efecto de escritura con un pequeño retraso por carácter
      },
    }),
  };

  return (
    <div
      id="hero"
      className="relative w-full h-screen overflow-hidden scroll-mt-16"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-background.jpg')`,
          zIndex: -3,
        }}
      ></div>

      {/* Superposición negra con opacidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-2]"></div>

      {/* Partículas avanzadas */}
      <Particles
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          fpsLimit: 120,
          background: {
            color: "transparent",
          },
          particles: {
            number: { value: 150, density: { enable: true, area: 800 } },
            color: { value: ["#06b6d4", "#10b981", "#facc15", "#ef4444", "#8b5cf6"] },
            shape: {
              type: ["circle", "triangle", "polygon"],
              polygon: {
                sides: 4,
              },
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.2,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 2.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" },
              attract: {
                enable: true,
                rotateX: 1200,
                rotateY: 2400,
              },
            },
            links: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.5,
              width: 1.5,
              triangles: {
                enable: true,
                opacity: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "remove",
              },
            },
            modes: {
              repulse: {
                distance: 120,
                duration: 0.4,
              },
              bubble: {
                distance: 250,
                size: 10,
                duration: 0.6,
                opacity: 0.9,
              },
              remove: {
                quantity: 2,
              },
            },
          },
        }}
      />

      {/* Contenido Principal */}
      <div className="relative flex flex-col items-center justify-center w-full h-full z-10 text-center px-4">
        {/* Título Animado */}
        {textIndex === 0 && (
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ¡Hola, Soy{" "}
            <motion.span
              className="text-[#0099FF] px-2 rounded"
              initial="hidden"
              animate="visible"
            >
              {texts[textIndex]
                .split("")
                .map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={typingVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {char}
                  </motion.span>
                ))}
            </motion.span>
          </motion.h1>
        )}

        {textIndex === 1 && (
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-teal-400 mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {texts[textIndex]
              .split("")
              .map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  className="text-teal-400"
                  variants={typingVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
          </motion.h1>
        )}

        {/* Párrafo Destacado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 drop-shadow-lg max-w-2xl"
        >
          Apasionado por crear aplicaciones únicas y experiencias digitales modernas.
        </motion.p>

        {/* Botón con Gradiente Personalizado y Tamaño Reducido */}
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          href="#projects"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#0099FF] to-teal-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform"
        >
          Mis Proyectos
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
