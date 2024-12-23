import React from 'react';
import technologyIcons from '../../config/technologyIcons';

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  repository: string;
  demo: string;
}

const Card: React.FC<CardProps> = ({ title, description, technologies, repository, demo }) => {
  return (
    <div className="relative p-4 w-full max-w-sm flex flex-col justify-between">
      {/* Contenedor general para dispositivos */}
      <div className="flex flex-col items-center justify-center p-2">
        <div className="flex flex-col items-center justify-center">
          {/* Laptop */}
          <div className="relative w-[200px] h-[150px] flex-shrink-0 xs:w-[250px] xs:h-[200px]">
            <img src="/images/laptop.png" alt="Laptop" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-3 right-3 bottom-4 overflow-hidden">
              <iframe
                src={demo}
                className="border-none"
                title={`${title} Desktop`}
                style={{
                  width: '1189px',
                  height: '771px',
                  transform: 'scale(0.15)',
                  transformOrigin: 'top left',
                  pointerEvents: 'auto',
                }}
              ></iframe>
            </div>
          </div>

          {/* Tablet y Mobile */}
          <div className="flex justify-between items-center w-full relative mt-[-72px] gap-20">
            {/* Tablet */}
            <div
              className="relative flex-shrink-0"
              style={{
                width: '120px',
                height: '87px',
              }}
            >
              <img src="/images/tablet.png" alt="Tablet" className="w-full h-full object-cover" />
              <div className="absolute top-1 left-0.5 right-0.5 bottom-2 overflow-hidden">
                <iframe
                  src={demo}
                  className="border-none bg-transparent"
                  title={`${title} Tablet`}
                  style={{
                    width: '1155px',
                    height: '761px',
                    transform: 'scale(0.1)',
                    transformOrigin: 'top left',
                    pointerEvents: 'auto',
                  }}
                ></iframe>
              </div>
            </div>

            {/* Mobile */}
            <div
              className="relative flex-shrink-0"
              style={{
                width: '36px',
                height: '76px',
              }}
            >
              <img src="/images/mobile.png" alt="Mobile" className="w-full h-full object-cover" />
              <div className="absolute top-1 left-0.5 right-0.5 bottom-1 overflow-hidden">
                <iframe
                  src={demo}
                  className="border-none"
                  title={`${title} Mobile`}
                  style={{
                    width: '334px',
                    height: '640px',
                    transform: 'scale(0.1)',
                    transformOrigin: 'top left',
                    pointerEvents: 'auto',
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información del proyecto */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="flex justify-center gap-2 mt-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center cursor-pointer"
              >
                {/* Renderiza el ícono */}
                {technologyIcons[tech] ? (
                  <div className="transform transition-transform group-hover:scale-110">
                    {technologyIcons[tech]}
                  </div>
                ) : (
                  <span className="text-blue-700 text-sm font-medium">{tech}</span>
                )}
                {/* Tooltip con el nombre de la tecnología */}
                <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] bg-gray-700 text-white text-xs px-2 py-1 rounded transition-all">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        )}
<div className="flex justify-center gap-8 mt-6">
  <a
    href={repository}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center px-6 py-3 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 hover:border-gray-400 transition duration-200 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-2"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 .5C5.798.5.5 5.798.5 12c0 5.086 3.291 9.386 7.857 10.908.575.106.742-.248.742-.55 0-.271-.01-.991-.015-1.946-3.197.694-3.87-1.54-3.87-1.54-.522-1.333-1.275-1.687-1.275-1.687-.965-.66.073-.647.073-.647 1.068.075 1.63 1.096 1.63 1.096.948 1.623 2.486 1.153 3.09.882.096-.687.37-1.154.673-1.42-2.552-.293-5.238-1.276-5.238-5.684 0-1.256.45-2.283 1.191-3.085-.121-.293-.516-1.472.115-3.07 0 0 .97-.31 3.174 1.175.922-.257 1.914-.385 2.898-.389.983.004 1.976.132 2.9.389 2.201-1.485 3.17-1.175 3.17-1.175.632 1.598.237 2.777.116 3.07.743.802 1.19 1.829 1.19 3.085 0 4.42-2.69 5.385-5.254 5.671.38.326.717.972.717 1.959 0 1.418-.013 2.562-.013 2.91 0 .305.165.662.752.548C20.217 21.38 23.5 17.086 23.5 12c0-6.202-5.298-11.5-11.5-11.5z"
        clipRule="evenodd"
      />
    </svg>
    GitHub
  </a>
  <a
    href={demo}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
  >
    Demo
  </a>
</div>

      </div>
    </div>
  );
};

export default Card;
