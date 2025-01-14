'use client'; // Si usas Next.js 13 con App Router

import React from 'react';
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
        relative bg-gradient-to-b from-gray-900 to-gray-800
        text-white overflow-hidden
        pt-32 pb-32 px-8
      "
    >
      {/* Wave top (z-0 detrás, rotada) */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0] z-0">
        <img
          src="/images/wave-top.svg"
          alt="wave top"
          className="w-full h-auto"
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
                border-4 border-teal-400
                transform translate-x-4 -translate-y-4
                transition-transform duration-300
                hover:translate-x-6 hover:-translate-y-6
              "
            />
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <a
            href="/files/CV-Omar-Hernandez-Rey.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gradient-to-r from-green-400 to-blue-500 
              hover:from-green-500 hover:to-blue-600 
              text-white font-semibold
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
              bg-gradient-to-r from-green-400 to-blue-500
            "
          >
            Sobre Mí
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            ¡Hola! Soy <strong>Omar Hernández Rey</strong>, un{' '}
            <strong>Desarrollador Web Full Stack</strong> con experiencia tanto
            en <strong>Front-End</strong> como en <strong>Back-End</strong>.
            Estoy a punto de graduarme en{' '}
            <strong>Ingeniería de Software</strong> del{' '}
            <strong>Politécnico Grancolombiano</strong> y continuamente mejoro
            mis conocimientos con cursos en <strong>Platzi</strong> sobre
            tecnologías web, DevOps y más.
          </p>

          <ul className="text-sm lg:text-base text-gray-300 space-y-3">
            <li>
              <strong className="uppercase text-teal-400">Nombre:</strong>{' '}
              Omar Hernández Rey
            </li>
            <li>
              <strong className="uppercase text-teal-400">Fecha de Nacimiento:</strong>{' '}
              14 de febrero de 1990
            </li>
            <li>
              <strong className="uppercase text-teal-400">Dirección:</strong>{' '}
              Carrera 2N #39D-16 Sur, Bogotá
            </li>
            <li>
              <strong className="uppercase text-teal-400">Teléfono:</strong>{' '}
              (+57) 3219058278
            </li>
            <li>
              <strong className="uppercase text-teal-400">Correo Electrónico:</strong>{' '}
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
            bg-gradient-to-r from-green-400 to-blue-500
            uppercase tracking-wide
          "
        >
          Mis Intereses
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
                <span className="text-4xl text-green-400">★</span>
              )}
              <span className="text-sm text-gray-300 mt-3">
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
