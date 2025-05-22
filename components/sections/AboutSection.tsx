"use client"; // Si usas Next.js 13 con App Router

import React from 'react';
import Image from 'next/image';
import technologyIcons from '../../config/technologyIcons';
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

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
        relative
        bg-gradient-to-b from-[var(--background-color)] to-[var(--secondary-background-color)]
        text-[var(--text-color)]
        overflow-hidden
        pt-32 pb-32 px-8
        transition-colors duration-500
      "
    >
      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <Image
          src="/images/wave-top.svg"
          alt="Wave Top"
          className="w-full h-auto rotate-180"
          width={1920}
          height={200}
          priority
        />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* FOTO + BOTÓN CV */}
        <div className="flex flex-col items-center">
          <div className="group relative w-[240px] h-[300px] mb-6">
            <div
              className="
                absolute inset-0
                border-2 border-[var(--accent-color)]
                rounded-lg
                transform translate-x-4 -translate-y-4
                transition-all duration-500
                group-hover:translate-x-6 group-hover:-translate-y-6
                group-hover:border-[var(--accent-hover-color)]
              "
            />
            <div
              className="
                relative w-full h-full overflow-hidden rounded-lg shadow-2xl
                border-2 border-[var(--accent-color)]
                bg-[var(--primary-color)]
                transition-all duration-500
                group-hover:scale-105 group-hover:border-[var(--accent-hover-color)]
                flex items-center justify-center
              "
            >
              <Image
                src="/images/profile-SN-fondo.png"
                alt="Foto de perfil"
                className="object-cover w-full h-full"
                width={240}
                height={300}
                priority
              />
            </div>
          </div>

          {/* BOTÓN CV PREMIUM */}
          <a
            href="/files/CV-Omar-Hernandez-Rey.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="
              relative inline-flex items-center justify-center gap-3 px-6 py-3 mt-6
              bg-[var(--primary-color)] text-white font-semibold rounded-full
              shadow-xl transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_15px_var(--primary-color)]
              backdrop-blur-lg bg-opacity-80
            "
            style={{
              border: "2px solid var(--accent-color)",
            }}
          >
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3M12 4v8" />
            </svg>
            Download CV
          </a>
        </div>

        {/* TEXTO SOBRE MÍ */}
        <div className="flex flex-col space-y-6">
          <h2
            className="
              text-4xl md:text-5xl font-extrabold uppercase tracking-wide
              text-transparent bg-clip-text
              bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]
              animate-fadeIn
            "
          >
            Sobre mí
          </h2>
          <p
            className="text-[var(--muted-color)] leading-relaxed text-lg text-justify"
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              hyphens: "auto",
            }}
          >
            ¡Hola! Soy <strong className="text-[var(--muted-color)] font-normal">Omar Hernández Rey</strong>, un <strong className="text-[var(--primary-color)] font-normal">Desarrollador Web Full Stack</strong> con experiencia tanto en <strong className="text-[var(--accent-color)] font-normal">Front-End</strong> como en <strong className="text-[var(--accent-color)] font-normal">Back-End</strong>. Estoy a punto de graduarme en <strong className="text-[var(--primary-color)] font-normal">Ingeniería de Software</strong> del <strong className="text-[var(--primary-color)] font-normal">Politécnico Grancolombiano</strong> y continuamente mejoro mis conocimientos con cursos en <strong className="text-[var(--accent-color)] font-normal">Platzi</strong> sobre tecnologías web, DevOps y más.
          </p>

          {/* DATOS PERSONALES CON --primary-color */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm lg:text-base text-[var(--muted-color)]">
            <div className="flex items-start gap-4 group">
              <span className="w-8 h-8 flex items-center justify-center bg-[var(--primary-color)] text-white rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <FaUser size={16} />
              </span>
              <div>
                <p className="uppercase text-xs text-[var(--muted-color)]">Nombre</p>
                <p>Omar Hernández Rey</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <span className="w-8 h-8 flex items-center justify-center bg-[var(--primary-color)] text-white rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <FaCalendarAlt size={16} />
              </span>
              <div>
                <p className="uppercase text-xs text-[var(--muted-color)]">Fecha de Nacimiento</p>
                <p>14 de febrero de 1990</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <span className="w-8 h-8 flex items-center justify-center bg-[var(--primary-color)] text-white rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <FaMapMarkerAlt size={16} />
              </span>
              <div>
                <p className="uppercase text-xs text-[var(--muted-color)]">Dirección</p>
                <p>Carrera 2N #39D-16 Sur, Bogotá</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <span className="w-8 h-8 flex items-center justify-center bg-[var(--primary-color)] text-white rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <FaPhoneAlt size={16} />
              </span>
              <div>
                <p className="uppercase text-xs text-[var(--muted-color)]">Teléfono</p>
                <p>(+57) 3219058278</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE INTERESES PREMIUM */}
      <div className="relative z-10 mx-auto max-w-6xl mt-20">
        <h3
          className="
            text-center text-3xl md:text-4xl font-extrabold mb-12
            text-transparent bg-clip-text
            bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]
            uppercase tracking-widest
            animate-fadeIn
          "
        >
          Mis Intereses
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {interests.map((interest) => (
            <a
              key={interest}
              href={interestLinks[interest] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex flex-col items-center justify-center text-center
                bg-[var(--card-bg-color)] bg-opacity-50 backdrop-blur-md
                rounded-2xl shadow-lg p-6 w-full h-36
                border border-[var(--accent-color)] transition-all duration-300
                hover:scale-105 hover:shadow-xl hover:border-[var(--primary-color)]
              "
            >
              {technologyIcons[interest] ? (
                <div className="text-3xl text-[var(--primary-color)] group-hover:scale-125 transition-transform duration-300">
                  {technologyIcons[interest]}
                </div>
              ) : (
                <span className="text-3xl text-[var(--primary-color)] group-hover:scale-125 transition-transform duration-300">
                  ★
                </span>
              )}
              <span className="text-sm text-[var(--muted-color)] mt-4 font-medium transition-colors duration-300 group-hover:text-[var(--primary-color)]">
                {interest}
              </span>
            </a>
          ))}
        </div>
      </div>

            {/* Wave Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-48 overflow-hidden leading-[0] z-0">
              <Image
                src="/images/wave-bottom.svg"
                alt="Wave Bottom"
                fill // Hace que la imagen ocupe todo el espacio del contenedor padre
                style={{ objectFit: 'cover' }} // Ajusta según tus necesidades ('cover' o 'contain')
                className="w-full h-full"
                priority={false} // Puedes establecerlo en true si es crucial para el LCP
              />
            </div>
    </section>
  );
};

export default AboutSection;
