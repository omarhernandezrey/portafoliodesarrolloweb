import React from 'react';
import Image from 'next/image';
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
    <div className="relative p-6 w-full max-w-sm flex flex-col justify-between bg-transparent text-[var(--text-color)] rounded-lg z-10">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[200px] h-[150px] flex-shrink-0 xs:w-[250px] xs:h-[200px]">
          <Image 
            src="/images/laptop.png" 
            alt="Laptop" 
            width={200} 
            height={150} 
            className="w-full h-full object-cover" 
          />
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
            <Image 
              src="/images/tablet.png" 
              alt="Tablet" 
              width={120} 
              height={87} 
              className="w-full h-full object-cover" 
            />
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
            <Image 
              src="/images/mobile.png" 
              alt="Mobile" 
              width={36} 
              height={76} 
              className="w-full h-full object-cover" 
            />
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
        <h3 className="text-xl font-bold text-[var(--accent-color)]">{title}</h3>
        <p className="text-[var(--muted-color)] text-sm mt-2">{description}</p>
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
                  <span className="text-[var(--accent-color)] text-sm font-medium">{tech}</span>
                )}
                <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] bg-[var(--secondary-background-color)] text-[var(--text-color)] text-xs px-2 py-1 rounded transition-all">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center gap-8 mt-6">
          {/* Botón GitHub estilizado */}
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-[var(--text-color)] bg-[var(--secondary-background-color)] border border-[var(--muted-color)] rounded-lg hover:bg-[var(--muted-color)] transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.599.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.73.083-.73 1.204.084 1.838 1.236 1.838 1.236 1.07 1.833 2.805 1.303 3.49.997.107-.775.418-1.303.761-1.603-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 013.003-.403c1.019.005 2.047.138 3.002.403 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.768.84 1.236 1.912 1.236 3.222 0 4.61-2.804 5.625-5.475 5.922.43.37.815 1.1.815 2.217 0 1.603-.015 2.895-.015 3.286 0 .32.192.694.8.576C20.565 21.795 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
            </svg>
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium text-[var(--text-color)] bg-[var(--primary-color)] rounded-lg hover:bg-[var(--primary-hover-color)] transition duration-300"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
