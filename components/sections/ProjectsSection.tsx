"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Tienda en línea desarrollada con Next.js y Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe"],
    image: "/images/ecommerce.jpg",
    github: "https://github.com/tu-usuario/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "Gestor de Tareas",
    description: "Aplicación para gestionar tareas con React y Node.js.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/tasks.jpg",
    github: "https://github.com/tu-usuario/task-manager",
    demo: "https://task-manager-demo.com",
  },
  // Agrega más proyectos aquí
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Proyectos Destacados
        </motion.h2>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-blue-500 text-white px-2 py-1 rounded mr-2 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Ver Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
