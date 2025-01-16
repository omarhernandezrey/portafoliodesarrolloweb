// components/ParticlesComponent.tsx

"use client";

import React, { useEffect, useState, useMemo } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

/**
 * Componente para mostrar partículas con íconos personalizados.
 * Incluye manejo de errores para imágenes.
 */
export default function ParticlesComponent() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticlesEngine = async (engine: Engine) => {
      try {
        await loadFull(engine);
        setInit(true);
      } catch (error) {
        console.error("Error al inicializar el motor de partículas:", error);
      }
    };

    // Accede a tsParticles sin usar 'any' gracias a la extensión de Window
    if (window.tsParticles) {
      initParticlesEngine(window.tsParticles);
    } else {
      console.error("tsParticles no está disponible en window.");
    }
  }, []);

  /**
   * Lista de rutas de los íconos.
   * Filtra automáticamente imágenes inválidas.
   */
  const logos = useMemo(
    () =>
      [
        "/images/logos/angular.svg",
        "/images/logos/css.svg",
        "/images/logos/django.svg",
        "/images/logos/docker.svg",
        "/images/logos/express-js.svg",
        "/images/logos/figma.svg",
        "/images/logos/firebase.svg",
        "/images/logos/git.svg",
        "/images/logos/github.svg",
        "/images/logos/html.svg",
        "/images/logos/javascript.svg",
        "/images/logos/jenkins.svg",
        "/images/logos/mongodb.svg",
        "/images/logos/mysql.svg",
        "/images/logos/next-js.svg",
        "/images/logos/nodejs.svg",
        "/images/logos/postgresql.svg",
        "/images/logos/react-js.svg",
        "/images/logos/sqlite.svg",
        "/images/logos/svelte.svg",
        "/images/logos/tailwind-css.svg",
        "/images/logos/typescript.svg",
        "/images/logos/vite.svg",
        "/images/logos/vue-js.svg",
      ].filter((src) => {
        const img = new Image();
        img.src = src;
        img.onerror = () => console.error(`Error al cargar la imagen: ${src}`);
        return !!img.src;
      }),
    []
  );

  // Genera partículas manuales
  const manualParticles = useMemo(() => {
    return logos.map((logo) => ({
      position: {
        x: Math.random() * 70 + 15, // Evitar bordes
        y: Math.random() * 70 + 15,
      },
      options: {
        shape: {
          type: "image",
          options: {
            image: {
              src: logo,
              width: 40,
              height: 40,
            },
          },
        },
      },
    }));
  }, [logos]);

  const options = useMemo(() => {
    return {
      detectRetina: true,
      fpsLimit: 120,
      particles: {
        number: { value: 0 },
        size: { value: { min: 5, max: 10 } },
        move: {
          enable: true,
          speed: 2,
          outModes: { default: "bounce" as const },
        },
        collisions: {
          enable: true,
        },
        links: {
          enable: true,
          distance: 110,
          color: "#ffffff",
          opacity: 0.6,
          width: 1,
        },
        shape: {
          type: "image",
          options: {
            image: logos.map((src) => ({
              src,
              width: 40,
              height: 40,
            })),
          },
        },
      },
      interactivity: {
        detectsOn: "window", // Detectar interacciones globales para mayor precisión
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Repulsión al pasar el mouse
          },
          onClick: {
            enable: true,
            mode: "push", // Creación de nuevas partículas al hacer clic
          },
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4, // Menor duración para una respuesta fluida
          },
          push: {
            quantity: 2,
          },
        },
      },
      manualParticles,
      fullScreen: {
        enable: false, // Asegura que las partículas no ocupen todo el viewport
      },
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Asegura que las partículas no interfieran con la interacción del puntero
      },
    };
  }, [logos, manualParticles]);

  return init ? <Particles id="tsparticles" options={options} /> : null;
}
