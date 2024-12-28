"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection: React.FC = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('/images/hero-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
        }}
      ></div>

      {/* Superposición negra */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black"
        style={{
          opacity: 0.5,
          zIndex: -1,
        }}
      ></div>

      {/* Partículas modernas */}
      <Particles
        init={particlesInit}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        options={{
          fpsLimit: 60,
          background: {
            color: "transparent",
          },
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: ["#00ff00", "#00bfff", "#ff69b4", "#ff4500"] }, // Colores modernos
            shape: {
              type: ["circle", "triangle", "star"], // Formas variadas
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.3,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Partículas se alejan del cursor
              },
              onClick: {
                enable: true,
                mode: "push", // Agrega partículas al hacer clic
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
      />

      {/* Contenido */}
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <h1 className="text-4xl font-bold text-white">Hero Section</h1>
      </div>
    </div>
  );
};

export default HeroSection;
