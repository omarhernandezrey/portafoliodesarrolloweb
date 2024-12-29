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
    <section className="w-full bg-[#1a1a1a] text-white py-16 px-8">
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
{/* Columna Izquierda: Foto y Botón */}
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
    <div className="relative w-full h-full overflow-hidden">
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="object-cover w-full h-full"
      />
    </div>
  </div>
  {/* Botón para descargar CV */}
  <a
    href="/files/CV-Omar-Hernandez-Rey.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      bg-teal-500 hover:bg-teal-600 
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
        {/* Columna Derecha: Texto Sobre Mí */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl font-bold text-teal-400">
            SOBRE MÍ
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            ¡Hola! Soy <strong>Omar Hernández Rey</strong>, un 
            <strong> Desarrollador Web Full Stack</strong> con experiencia 
            tanto en Front-End como en Back-End. Estoy a punto de graduarme en 
            <strong> Ingeniería de Software</strong> del 
            <strong> Politécnico Grancolombiano</strong> y continuamente 
            mejoro mis conocimientos con cursos en 
            <strong> Platzi</strong> sobre tecnologías web, DevOps y más.
          </p>
          <ul className="text-sm lg:text-base text-gray-300 space-y-3">
            <li>
              <strong className="text-teal-400 uppercase">Nombre:</strong> Omar Hernández Rey
            </li>
            <li>
              <strong className="text-teal-400 uppercase">Fecha de Nacimiento:</strong> 14 de febrero de 1990
            </li>
            <li>
              <strong className="text-teal-400 uppercase">Dirección:</strong> Carrera 2N #39D-16 Sur, Bogotá
            </li>
            <li>
              <strong className="text-teal-400 uppercase">Teléfono:</strong> (+57) 3219058278
            </li>
            <li>
              <strong className="text-teal-400 uppercase">Correo Electrónico:</strong> omarhernandezrey@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Sección de Intereses */}
      <div className="mx-auto max-w-5xl mt-16">
        <h3 className="text-3xl font-bold text-teal-400 text-center mb-8">
          MY INTERESTS
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
                <span className="text-teal-400 text-4xl">★</span>
              )}
              <span className="text-sm text-gray-300 mt-3">{interest}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;