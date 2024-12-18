// components/sections/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import { useWindowSize } from "../../hooks/useWindowSize";

interface Project {
  title: string;
  demo: string;
  demoTablet: string;
  demoMobile: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Moderno",
    demo: "https://enfermeria-roxana.vercel.app/inicio",
    demoTablet: "https://enfermeria-roxana.vercel.app/tabla-demo",
    demoMobile: "https://enfermeria-roxana.vercel.app/mobile-demo",
  },
  {
    title: "Gestor de Tareas",
    demo: "https://enfermeria-roxana.vercel.app/inicio",
    demoTablet: "https://enfermeria-roxana.vercel.app/tabla-demo",
    demoMobile: "https://enfermeria-roxana.vercel.app/mobile-demo",
  },
  // Agrega más proyectos según sea necesario
];

export default function ProjectsSection() {
  const { width } = useWindowSize();

  // Definir los niveles de escala según el ancho de la pantalla
  let scaleFactorLaptop = 1;
  let scaleFactorTablet = 1;
  let scaleFactorMobile = 1;

  if (width < 480) {
    // Dispositivos muy pequeños (e.g., pequeños móviles)
    scaleFactorLaptop = 0.1;
    scaleFactorTablet = 0.1;
    scaleFactorMobile = 0.1;
  } else if (width < 768) {
    // Móviles
    scaleFactorLaptop = 0.15;
    scaleFactorTablet = 0.15;
    scaleFactorMobile = 0.15;
  } else if (width < 1024) {
    // Tablets
    scaleFactorLaptop = 0.2;
    scaleFactorTablet = 0.2;
    scaleFactorMobile = 0.2;
  } else {
    // Desktop y mayores
    scaleFactorLaptop = 0.25;
    scaleFactorTablet = 0.25;
    scaleFactorMobile = 0.25;
  }

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Grid de una sola columna */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative flex justify-center items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Contenedor de la tarjeta con imágenes responsivas */}
              <div className="relative w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto p-4 overflow-visible">
                {/* Imagen del laptop */}
                <img
                  src="/images/laptop.png"
                  alt="Laptop Mockup"
                  className="w-full h-auto z-10"
                />

                {/* Iframe para Laptop */}
                <iframe
                  src={project.demo}
                  title={`${project.title}-laptop`}
                  className="absolute rounded-lg shadow-lg z-20"
                  style={{
                    width: "2203px", // Tamaño original ajustado
                    height: "1411px",
                    top: "15.5%",
                    left: "14%",
                    transform: `scale(${scaleFactorLaptop})`,
                    transformOrigin: "top left",
                  }}
                  loading="lazy" // Mejora de rendimiento
                ></iframe>

                {/* Imagen de la tablet montada sobre el laptop */}
                <img
                  src="/images/tablet.png"
                  alt="Tablet Mockup"
                  className="absolute top-[34%] left-[-25%] w-[59.333333%] z-30
                         sm:top-[40%] sm:left-[-20%] sm:w-[50%]
                         lg:top-[31%] lg:left-[-25%] lg:w-[68.333333%]"
                />

                {/* Iframe para Tablet */}
                <iframe
                  src={project.demoTablet}
                  title={`${project.title}-tablet`}
                  className="absolute rounded-lg shadow-lg z-40"
                  style={{
                    width: "1808px", // Tamaño original ajustado
                    height: "1132px",
                    top: "39%",
                    left: "-20%",
                    transform: `scale(${scaleFactorTablet})`,
                    transformOrigin: "top left",
                  }}
                  loading="lazy" // Mejora de rendimiento
                ></iframe>

                {/* Imagen del móvil montada sobre la tablet */}
                <img
                  src="/images/mobile.png"
                  alt="Mobile Mockup"
                  className="absolute top-[60%] left-[-10%] w-[30%] z-50
                         sm:top-[65%] sm:left-[-8%] sm:w-[25%]
                         lg:top-[48%] lg:left-[78%] lg:w-[19%]"
                />

                {/* Iframe para Móvil */}
                <iframe
                  src={project.demoMobile}
                  title={`${project.title}-mobile`}
                  className="absolute rounded-lg shadow-lg"
                  style={{
                    width: "532px", // Tamaño original ajustado
                    height: "915px",
                    top: "54%",
                    left: "79%",
                    transform: `scale(${scaleFactorMobile})`,
                    transformOrigin: "top left",
                    zIndex: 9999, // Asegura que esté por encima de todos los demás elementos
                  }}
                  loading="lazy" // Mejora de rendimiento
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
