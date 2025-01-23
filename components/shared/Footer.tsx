"use client";
import React from "react";
import Image from "next/image"; // Importar el componente Image de next/image
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const testimonials = [
    {
      quote:
        "Omar es un desarrollador excepcional que aporta creatividad y eficiencia a cada proyecto.",
      author: "María López",
      role: "Gerente de Proyectos en TechCorp",
      avatar: "/images/testimonials/maria.jpg",
    },
    {
      quote:
        "Trabajar con Omar ha sido una experiencia increíble. Su atención al detalle y habilidades técnicas son insuperables.",
      author: "Juan Pérez",
      role: "CEO en Innovatech",
      avatar: "/images/testimonials/juan.jpg",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[var(--background-color)] to-[var(--secondary-background-color)] text-[var(--text-color)] py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0] z-0">
        <Image
          src="/images/wave-top.svg"
          alt="wave top"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]">
            Omar Hernández Rey
          </h2>
          <p className="text-[var(--muted-color)] text-center lg:text-left max-w-xs">
            Desarrollador Web Full Stack apasionado por crear experiencias digitales
            innovadoras y funcionales.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold mb-4 text-[var(--accent-color)]">Navegación</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold mb-4 text-[var(--accent-color)]">Sígueme</h3>
          <div className="flex space-x-6">
            <a
              href="https://github.com/omarhernandezrey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-color)] hover:text-[var(--accent-color)] transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/omarhernandezrey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-color)] hover:text-[var(--accent-color)] transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/omarhernandezrey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-color)] hover:text-[var(--accent-color)] transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:omarhernandezrey@gmail.com"
              className="text-[var(--muted-color)] hover:text-[var(--accent-color)] transition-transform transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-20 mt-12">
        <NewsletterForm />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-20 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-20 mt-12">
        <h3 className="text-xl font-semibold mb-4 text-[var(--accent-color)]">Encuéntrame</h3>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.930785758242!2d-74.1013568497773!3d4.557107158097733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8428a1a0b3ef%3A0x123456789abcdef!2sTu%20Dirección%20Aqui!5e0!3m2!1ses!2sco!4v1736731266116!5m2!1ses!2sco"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
            title="Ubicación de Omar Hernández Rey"
          ></iframe>
        </div>
      </div>
      <div className="relative z-10 mt-12">
        <hr className="border-[var(--muted-color)]" />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-20 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[var(--muted-color)] text-center md:text-left">
          © {new Date().getFullYear()} Omar Hernández Rey. Todos los derechos reservados.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-[var(--muted-color)] hover:text-[var(--accent-color)] transition-colors duration-300"
          aria-label="Volver al inicio"
        >
          <FiArrowUp size={20} />
          <span className="font-medium">Inicio</span>
        </button>
      </div>
      <motion.a
        href="https://wa.me/573219052878?text=Hola%2C%20me%20interesa%20tus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 bg-[#25D366] hover:bg-[#20B357] text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--background-color)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--secondary-background-color)" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="
              M0,80 
              C240,120 480,40 720,80 
              C960,120 1200,40 1440,80 
              V150 
              H0 
              Z
            "
          />
        </svg>
      </div>
    </footer>
  );
}
