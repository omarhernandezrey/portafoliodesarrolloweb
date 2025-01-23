"use client";

import React, { useEffect, useState, useMemo } from "react";
import Particles from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function ParticlesComponent() {
  const [init, setInit] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [logosReady, setLogosReady] = useState(false);

  useEffect(() => {
    setIsClient(true); // Detectamos si estamos en el cliente
    const initParticlesEngine = async (engine: Engine) => {
      try {
        await loadFull(engine);
        setInit(true);
      } catch (error) {
        console.error("Error al inicializar el motor de partículas:", error);
      }
    };

    if (window.tsParticles) {
      initParticlesEngine(window.tsParticles);
    } else {
      console.error("tsParticles no está disponible en window.");
    }
  }, []);

  const logos = useMemo(() => {
    if (!isClient) return []; // Evitar ejecutar en el servidor
    const loadedLogos = [
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
      img.onload = () => setLogosReady(true);
      img.onerror = () => console.error(`Error al cargar la imagen: ${src}`);
      return !!img.src;
    });
    return loadedLogos;
  }, [isClient]);

  const manualParticles = useMemo(() => {
    if (!logosReady) return [];
    return logos.map((logo) => ({
      position: {
        x: Math.random() * 70 + 15,
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
  }, [logos, logosReady]);

  const options: ISourceOptions = useMemo(() => {
    if (!logosReady) return {};
    return {
      detectRetina: true,
      fpsLimit: 120,
      particles: {
        number: { value: 0 },
        size: { value: { min: 5, max: 10 } },
        move: {
          enable: true,
          speed: 2,
          outModes: { default: "bounce" },
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
        detectsOn: "window", // Uso del valor compatible directamente
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4,
          },
          push: {
            quantity: 2,
          },
        },
      },
      manualParticles,
      fullScreen: {
        enable: false,
      },
      style: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      },
    };
  }, [logos, manualParticles, logosReady]);

  return init && logosReady ? <Particles id="tsparticles" options={options} /> : null;
}
