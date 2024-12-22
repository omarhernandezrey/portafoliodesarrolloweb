import React from 'react';

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  repository: string;
  demo: string;
}

const Card: React.FC<CardProps> = ({ title, description, technologies, repository, demo }) => {
  return (
    <div className="relative p-4">
      {/* Contenedor general para dispositivos */}
      <div className="flex flex-col items-center justify-center p-2">
        <div className="flex flex-col items-center justify-center relative" style={{ height: '250px' }}>
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
          <div className="flex justify-between items-center w-full mt-2 absolute bottom-6 left-0 right-0">
            {/* Tablet */}
            <div
              className="relative flex-shrink-0"
              style={{
                width: '120px',
                height: '87px',
                marginRight: '8px',
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
                marginLeft: '8px',
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
      <div className="mt-3 text-center">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="flex justify-center gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-center gap-4 mt-3">
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Ver Repositorio
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 underline"
          >
            Ver Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
