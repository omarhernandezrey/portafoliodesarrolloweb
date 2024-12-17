"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sobre Mí
        </motion.h2>

        {/* Descripción */}
        <motion.p
          className="text-lg text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          Soy <span className="font-bold">Omar Hernández Rey</span>, un{" "}
          <span className="text-blue-500">desarrollador web full stack</span>{" "}
          con pasión por construir aplicaciones modernas, eficientes y
          sorprendentes. Mi objetivo es crear soluciones tecnológicas que dejen
          huella.
        </motion.p>

        {/* Habilidades */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
          >
            <h3 className="font-bold text-xl mb-2">Frontend</h3>
            <p>React, Next.js, Tailwind CSS</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
          >
            <h3 className="font-bold text-xl mb-2">Backend</h3>
            <p>Node.js, Express, MongoDB</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
          >
            <h3 className="font-bold text-xl mb-2">Herramientas</h3>
            <p>Git, Docker, Postman</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
          >
            <h3 className="font-bold text-xl mb-2">Soft Skills</h3>
            <p>Trabajo en equipo, Comunicación, Resolución de problemas</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
