// ./components/sections/AboutSection.tsx

"use client"; // Si usas Next.js 13 con App Router

import React from 'react';
import Image from 'next/image';
import technologyIcons from '../../config/technologyIcons';

const AboutSection: React.FC = () => {
  const interests = [
    'Platzi Learning',
    'Open Source',
    'AI & ML',
    'Coding',
    'Tech Conferences',
  ];

  const interestLinks: Record<string, string> = {
    'Platzi Learning': 'https://platzi.com/',
    'Open Source': 'https://opensource.org/',
    'AI & ML': 'https://ai.google/',
    'Coding': 'https://www.codecademy.com/',
    'Tech Conferences': 'https://www.techconferences.co/',
  };

  return (
    <section
      id="about"
      className="
        relative bg-gradient-to-b from-[var(--background-color)] to-[var(--secondary-background-color)]
        text-[var(--text-color)] overflow-hidden
        pt-32 pb-32 px-8
      "
    >
      {/* Wave top (z-0 detrás, rotada) */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0] z-0">
        <Image
          src="/images/wave-top.svg"
          alt="Wave Top"
          className="w-full h-auto"
          width={1920} // Ajusta según las dimensiones reales de la imagen
          height={200} // Ajusta según las dimensiones reales de la imagen
        />
      </div>

      {/* Contenedor principal (z-10 adelante) */}
      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* FOTO + BOTÓN CV */}
        <div className="flex flex-col items-center">
          <div className="relative w-[240px] h-[300px] mb-6">
            <div
              className="
                absolute top-0 left-0 w-full h-full
                border-4 border-[var(--primary-color)]
                transform translate-x-4 -translate-y-4
                transition-transform duration-300
                hover:translate-x-6 hover:-translate-y-6
              "
            />
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
                width={240} // Ajusta según las dimensiones reales de la imagen
                height={300} // Ajusta según las dimensiones reales de la imagen
              />
            </div>
          </div>
          <a
            href="/files/CV-Omar-Hernandez-Rey.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] 
              hover:from-[var(--primary-hover-color)] hover:to-[var(--accent-hover-color)]
              text-[var(--button-text-color)] font-semibold
              py-3 px-8 rounded-lg shadow-lg
              transition-transform duration-300
              hover:scale-105
              mt-4 text-center
            "
            download
          >
            Download CV
          </a>
        </div>

        {/* TEXTO SOBRE MÍ */}
        <div className="flex flex-col space-y-6">
          {/* Título con gradiente */}
          <h2
            className="
              text-4xl font-extrabold uppercase tracking-wide
              text-transparent bg-clip-text
              bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]
            "
          >
            About Me
          </h2>

          
          <p
  className="text-[var(--muted-color)] leading-relaxed text-lg text-justify"
  style={{
    textAlign: "justify",
    textJustify: "inter-word", // Soporte variable según el navegador
    hyphens: "auto",           // Permite cortar palabras para evitar huecos grandes
  }}
>
  ¡Hola! Soy <strong className="text-[var(--muted-color)] font-normal">Omar Hernández Rey</strong>, un <strong className="text-[var(--primary-color)] font-normal">Desarrollador Web Full Stack</strong> con experiencia tanto en <strong className="text-[var(--accent-color)] font-normal">Front-End</strong> como en <strong className="text-[var(--accent-color)] font-normal">Back-End</strong>. Estoy a punto de graduarme en <strong className="text-[var(--primary-color)] font-normal">Ingeniería de Software</strong> del <strong className="text-[var(--primary-color)] font-normal">Politécnico Grancolombiano</strong> y continuamente mejoro mis conocimientos con cursos en <strong className="text-[var(--accent-color)] font-normal">Platzi</strong> sobre tecnologías web, DevOps y más.
</p>


 



          <ul className="text-sm lg:text-base text-[var(--muted-color)] space-y-3">
            <li>
              <strong className="uppercase text-[var(--primary-color)]">Nombre:</strong>{' '}
              Omar Hernández Rey
            </li>
            <li>
              <strong className="uppercase text-[var(--primary-color)]">Fecha de Nacimiento:</strong>{' '}
              14 de febrero de 1990
            </li>
            <li>
              <strong className="uppercase text-[var(--primary-color)]">Dirección:</strong>{' '}
              Carrera 2N #39D-16 Sur, Bogotá
            </li>
            <li>
              <strong className="uppercase text-[var(--primary-color)]">Teléfono:</strong>{' '}
              (+57) 3219058278
            </li>
            <li>
              <strong className="uppercase text-[var(--primary-color)]">Correo Electrónico:</strong>{' '}
              omarhernandezrey@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* INTERESES */}
      <div className="relative z-10 mx-auto max-w-6xl mt-16">
        <h3
          className="
            text-center text-3xl md:text-4xl font-extrabold mb-8
            text-transparent bg-clip-text
            bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]
            uppercase tracking-wide
          "
        >
          My Interests
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {interests.map((interest) => (
            <a
              key={interest}
              href={interestLinks[interest] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex flex-col items-center text-center
                transition-transform duration-300
                hover:scale-110
              "
            >
              {technologyIcons[interest] ?? (
                <span className="text-4xl text-[var(--primary-color)]">★</span>
              )}
              <span className="text-sm text-[var(--muted-color)] mt-3">
                {interest}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
