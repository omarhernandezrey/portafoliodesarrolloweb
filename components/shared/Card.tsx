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
    <div className="relative p-6 w-full max-w-sm flex flex-col justify-between bg-[#1a1a1a] text-white rounded-lg shadow-lg z-10">
      <div className="flex flex-col items-center justify-center">
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
        <div className="flex justify-between items-center w-full mt-[-72px] gap-20">
          <div className="relative flex-shrink-0" style={{ width: '120px', height: '87px' }}>
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
          <div className="relative flex-shrink-0" style={{ width: '36px', height: '76px' }}>
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
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-teal-400">{title}</h3>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="flex justify-center gap-2 mt-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center cursor-pointer"
              >
                {technologyIcons[tech] ? (
                  <div className="transform transition-transform group-hover:scale-110">
                    {technologyIcons[tech]}
                  </div>
                ) : (
                  <span className="text-teal-400 text-sm font-medium">{tech}</span>
                )}
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
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
