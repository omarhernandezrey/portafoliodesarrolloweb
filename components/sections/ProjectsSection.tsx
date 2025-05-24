"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../shared/Card";

const projects = [
  {
    title: "CineXpress - API REST con JavaScript",
    description:
      "Aplicación web para explorar películas en tendencia, buscarlas por categoría o nombre, y ver detalles como reparto, tráileres y similares, consumiendo The Movie Database API. Proyecto del Curso de API REST con JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Axios", "Vercel"],
    repository: "https://github.com/omarhernandezrey/31-cursoDeApiRestConJavascriptEjemplosConApisReales",
    demo: "https://cinexpressonline.vercel.app/",
    category: "JavaScript"
  },
  {
    title: "Michis App - API REST con JavaScript",
    description:
      "Aplicación web para mostrar, guardar y subir imágenes de gatitos usando The Cat API. Proyecto del Curso de Fundamentos de API REST con JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Fetch", "Axios"],
    repository: "https://github.com/omarhernandezrey/30_cursoDeApiRestConJavascriptFundamentos",
    demo: "https://michis-app-api-rest.netlify.app/",
    category: "JavaScript"
  },
  {
    title: "Página Web Enfermería Roxana",
    description:
      "Una plataforma web moderna y responsiva diseñada para promover servicios profesionales de enfermería, ofreciendo información clara y contacto rápido.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    repository: "https://github.com/omarhernandezrey/enfermeriaroxanapag",
    demo: "https://enfermeria-roxana.vercel.app/inicio",
    category: "Next.js"
  },
  {
    title: "Your Restaurant",
    description:
      "Sitio web de restaurante creado con HTML y CSS Grid, con diseño responsivo y un enfoque en la presentación atractiva de menús y servicios gastronómicos.",
    technologies: ["HTML", "CSS", "CSS Grid"],
    repository:
      "https://github.com/omarhernandezrey/38-Curso-de-CSS-Grid-B-sico.io",
    demo: "https://omarhernandezrey.github.io/38-Curso-de-CSS-Grid-B-sico.io/",
    category: "CSS"
  },
  {
    title: "Steam - Hamburguesas Artesanales",
    description:
      "Sitio web promocional para Steam, especializado en hamburguesas artesanales con un diseño atractivo y secciones para menú, promociones y contacto.",
    technologies: ["HTML", "CSS"],
    repository:
      "https://github.com/omarhernandezrey/36-Curso-de-Dise-o-para-Developers-html.io",
    demo: "https://omarhernandezrey.github.io/36-Curso-de-Dise-o-para-Developers-html.io/",
    category: "CSS"
  },
  {
    title: "Eco-store",
    description:
      "Tienda en línea enfocada en productos ecológicos y decoraciones para el hogar, desarrollada con un enfoque en sostenibilidad y diseño moderno. Incluye categorías como cuidado personal y muebles hechos con materiales reciclables.",
    technologies: ["HTML", "CSS", "SCSS", "Flexbox"],
    repository: "https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io",
    demo: "https://omarhernandezrey.github.io/35-Curso-de-Fundamentos-de-Sass.io/",
    category: "CSS"
  },
  {
    title: "Batatabit",
    description:
      "Sitio web diseñado para visibilizar precios y tendencias en el mercado de criptomonedas, con diseño responsive y enfoque Mobile-First. Ofrece información confiable en tiempo real sobre monedas, tasas de cambio y planes de acceso.",
    technologies: ["HTML", "CSS", "Mobile-First Design", "Responsive Design"],
    repository:
      "https://github.com/omarhernandezrey/34-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First.io",
    demo: "https://omarhernandezrey.github.io/34-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First.io/",
    category: "CSS"
  },
  {
    title: "E-commerce",
    description:
      "E-commerce moderno desarrollado con Next.js, diseñado para una experiencia de usuario intuitiva y fluida, con funcionalidades como carrito de compras, métodos de pago y contacto mediante correo electrónico.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    repository: "https://github.com/omarhernandezrey/tienda_Lizz.io",
    demo: "https://tienda-lizz-io.vercel.app/",
    category: "Next.js"
  },
  {
    title: "Task Manager App",
    description:
      "Aplicación sencilla para gestionar tareas con funcionalidad de agregar, editar y eliminar, persistencia en localStorage y soporte para alternar entre temas claro y oscuro.",
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
    repository: "https://github.com/omarhernandezrey/46-Task-Manager",
    demo: "https://omarhernandezrey.github.io/46-Task-Manager/",
    category: "JavaScript"
  },
  {
    title: "Google Chrome Clone",
    description:
      "Réplica sencilla de la página principal de Google, con barra de navegación, campo de búsqueda, botones de acción y enlaces en el pie de página, diseñada con HTML y CSS.",
    technologies: ["HTML", "CSS"],
    repository: "https://github.com/omarhernandezrey/33-Google-Chrome-Clone.io",
    demo: "https://omarhernandezrey.github.io/33-Google-Chrome-Clone.io/",
    category: "CSS"
  },
  {
    title: "Plan de Comidas Semanal",
    description:
      "Aplicación simple para organizar un plan de comidas semanal. Permite agregar, visualizar y organizar comidas en una tabla con una interfaz fácil de usar.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/31.1--comidasDeLaSemana.io",
    demo: "https://omarhernandezrey.github.io/31.1--comidasDeLaSemana.io/",
    category: "JavaScript"
  },
  {
    title: "Pagar Recibos",
    description:
      "Aplicación básica que permite gestionar y visualizar el pago de recibos de servicios de manera organizada y sencilla. Incluye una interfaz intuitiva para el manejo de recibos.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/28.1-PagarRecibos.io",
    demo: "https://omarhernandezrey.github.io/28.1-PagarRecibos.io/",
    category: "JavaScript"
  },
  {
    title: "Página Web de Enfermería",
    description:
      "Sitio web diseñado para promocionar servicios de enfermería domiciliarios en Bogotá. Incluye información detallada sobre atención especializada, cuidado postoperatorio, administración de medicamentos, y más.",
    technologies: ["HTML", "SCSS", "CSS", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/07.2-pagina_web_enfermeria",
    demo: "https://omarhernandezrey.github.io/07.2-pagina_web_enfermeria/",
    category: "CSS"
  },
  {
    title: "Calculadora de Pago de Turnos de Enfermería",
    description:
      "Aplicación web que permite a los usuarios calcular el pago correspondiente a turnos de enfermería, con un calendario interactivo para gestionar y visualizar los turnos trabajados.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository:
      "https://github.com/omarhernandezrey/07.1-calculadoraDePagoTurnosEmfermeria.github.io",
    demo: "https://omarhernandezrey.github.io/07.1-calculadoraDePagoTurnosEmfermeria.github.io/",
    category: "JavaScript"
  },
  {
    title: "Async Landing",
    description:
      "Landing page personal diseñada para destacar habilidades, proyectos y contenido de Omar Hernández Rey como full stack developer, con un diseño limpio y moderno que incluye integración de contenido dinámico mediante APIs.",
    technologies: ["HTML", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/22.1_async-landing",
    demo: "https://omarhernandezrey.github.io/22.1_async-landing/",
    category: "JavaScript"
  },
  {
    title: "Frontend Developer JavaScript Práctico",
    description:
      "Aplicación de e-commerce que incluye navegación en desktop y mobile, carrito de compras, lista de productos y detalles de cada producto, diseñada para brindar una experiencia fluida y responsiva.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository:
      "https://github.com/omarhernandezrey/18-curso-frontend-developer-javascript-practico.io",
    demo: "https://omarhernandezrey.github.io/18-curso-frontend-developer-javascript-practico.io/",
    category: "JavaScript"
  },
  {
    title: "Portafolio Personal",
    description:
      "Portafolio web diseñado para destacar mi experiencia, habilidades técnicas y proyectos realizados. Incluye secciones como biografía, habilidades, proyectos destacados y medios de contacto.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/07-portafolio.github.io",
    demo: "https://omarhernandezrey.github.io/07-portafolio.github.io/",
    category: "CSS"
  },
];

/* -------------------------------------------------------------------------------------------------
   Partículas de fondo (decorativas)
--------------------------------------------------------------------------------------------------*/
const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 8 + 12,
}));

/* -------------------------------------------------------------------------------------------------
   Componente auxiliar: botón de categoría
--------------------------------------------------------------------------------------------------*/
type CategoryButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count: number;
};

function CategoryButton({ label, isActive, onClick, count }: CategoryButtonProps) {
  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isActive) {
      const el = e.currentTarget;
      el.style.color = 'var(--white-color)';
      el.style.backgroundColor = 'rgba(40,40,60,0.5)';
      el.style.transform = 'scale(1.05)';
    }
  };

  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isActive) {
      const el = e.currentTarget;
      el.style.color = 'var(--muted-color)';
      el.style.backgroundColor = 'transparent';
      el.style.transform = 'scale(1)';
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 group"
      style={{
        backgroundColor: isActive ? 'var(--primary-color)' : 'transparent',
        color: isActive ? 'var(--white-color)' : 'var(--muted-color)',
        boxShadow: isActive ? '0 10px 25px rgba(255,111,97,0.3)' : 'none',
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <span className="relative z-10">{label}</span>
      <motion.span
        className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold"
        style={{
          backgroundColor: 'var(--accent-color)',
          color: 'var(--background-color)',
        }}
        animate={{ 
          scale: isActive ? 1.1 : 1,
          opacity: isActive ? 1 : 0.8 
        }}
        transition={{ duration: 0.2 }}
      >
        {count}
      </motion.span>
    </button>
  );
}

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const sectionRef = useRef<HTMLElement>(null);

  // Filtrado por categoría y búsqueda
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Obtener categorías únicas con conteo
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const getCategoryCount = (category: string) => {
    if (category === 'All') return projects.length;
    return projects.filter(p => p.category === category).length;
  };

  return (
    <>
      {/* CSS-in-JS global (variables) */}
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
        }
      `}</style>

      <section
        ref={sectionRef}
        id="projects"
        className="relative py-32 px-4 overflow-hidden scroll-mt-16"
        style={{
          background: 'linear-gradient(135deg, var(--background-color) 0%, var(--secondary-background-color) 50%, var(--background-color) 100%)',
          color: 'var(--text-color)'
        }}
      >
        {/* Partículas decorativas */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                backgroundColor: 'var(--white-color)',
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-8, 8, -8],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Degradado de overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, var(--background-color) 0%, transparent 30%, var(--background-color) 100%)',
            opacity: 0.6,
          }}
        />

        {/* Wave Top - mantengo tu elemento original */}
        <div className="absolute top-0 left-0 w-full h-48 rotate-180 overflow-hidden leading-[0] z-0">
          <Image
            src="/images/wave-top.svg"
            alt="Wave Top"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full"
            priority={false}
          />
        </div>

        {/* Contenedor principal */}
        <div className="relative z-10 container mx-auto px-6 lg:px-20">
          {/* Header con animación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full border"
              style={{
                color: 'var(--accent-color)',
                background: 'rgba(243, 156, 18, 0.1)',
                borderColor: 'rgba(243, 156, 18, 0.3)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              Portfolio Showcase
            </motion.span>

            {/* Título con gradiente - mantengo tu estilo */}
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-wider"
              style={{
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              My Projects
            </h2>

            <p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--muted-color)' }}
            >
              Explore my collection of web applications and development projects
            </p>
          </motion.div>

          {/* Buscador premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-12"
          >
            <div
              className="relative backdrop-blur-xl border rounded-2xl p-1"
              style={{
                backgroundColor: 'rgba(40,40,60,0.5)',
                borderColor: 'rgba(209,209,224,0.3)',
              }}
            >
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-0 rounded-xl"
                style={{ color: 'var(--white-color)' }}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg 
                  className="w-5 h-5 opacity-50" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--muted-color)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Filtros de categoría premium */}
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
                backgroundColor: 'rgba(40,40,60,0.5)',
                borderColor: 'rgba(209,209,224,0.3)',
              }}
            >
              {categories.map((category) => (
                <CategoryButton
                  key={category}
                  isActive={selectedCategory === category}
                  label={category}
                  count={getCategoryCount(category)}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
          </motion.div>

          {/* Contador de resultados */}
          <motion.div
            className="text-center mb-8"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p style={{ color: 'var(--muted-color)' }}>
              Showing {filteredProjects.length} of {projects.length} projects
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </motion.div>

          {/* Grid de Proyectos con AnimatePresence - MANTIENES TUS ESTILOS DE CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${selectedCategory}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  <Card
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    repository={project.repository}
                    demo={project.demo}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mensaje cuando no hay resultados */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div
                className="max-w-md mx-auto p-8 backdrop-blur-xl border rounded-2xl"
                style={{
                  backgroundColor: 'rgba(40,40,60,0.5)',
                  borderColor: 'rgba(209,209,224,0.3)',
                }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--white-color)' }}>
                  No projects found
                </h3>
                <p style={{ color: 'var(--muted-color)' }}>
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 px-6 py-2 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'var(--white-color)',
                  }}
                >
                  Clear filters
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Línea inferior decorativa */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(to right, transparent 0%, var(--accent-color) 50%, transparent 100%)',
            opacity: 0.4,
          }}
        />
      </section>
    </>
  );
};

export default ProjectsSection;