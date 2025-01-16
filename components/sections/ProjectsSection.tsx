"use client";
import React from "react";
import Card from "../shared/Card";

const projects = [
  {
    title: "Página Web Enfermería Roxana",
    description:
      "Una plataforma web moderna y responsiva diseñada para promover servicios profesionales de enfermería, ofreciendo información clara y contacto rápido.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    repository: "https://github.com/omarhernandezrey/enfermeriaroxanapag",
    demo: "https://enfermeria-roxana.vercel.app/inicio",
  },
  {
    title: "Tienda Lizz.io",
    description:
      "E-commerce moderno desarrollado con Next.js, diseñado para una experiencia de usuario intuitiva y fluida, con funcionalidades como carrito de compras, métodos de pago y contacto mediante correo electrónico.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    repository: "https://github.com/omarhernandezrey/tienda_Lizz.io",
    demo: "https://tienda-lizz-io.vercel.app/",
  },

];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="
        relative py-32 px-4 
        bg-[var(--background-color)] text-[var(--text-color)]
        overflow-hidden scroll-mt-16
      "
    >


      {/* Contenedor principal (z-10) */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        {/* Título con el mismo gradiente que "My Services" */}
        <h2
          className="
            text-center text-4xl md:text-5xl font-extrabold mb-12
            text-transparent bg-clip-text 
            bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]
            uppercase tracking-wider
          "
        >
          Mis Proyectos
        </h2>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              repository={project.repository}
              demo={project.demo}
            />
          ))}
        </div>
      </div>

    </section>

  );
};

export default ProjectsSection;
