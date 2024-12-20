import React from 'react';

const Card: React.FC = () => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden max-w-sm border-2 border-blue-500 transition-transform transform hover:-translate-y-1 hover:shadow-xl items-center justify-center">
            <div className="relative w-[200px] h-[150px] bg-gray-200 border-2 border-red-500 flex-shrink-0 xs:w-[250px] xs:h-[200px]">
                {/* Imagen centrada */}
                <img
                    src="/images/laptop.png"
                    alt="Laptop"
                    className="w-full h-full object-cover"
                />
                {/* Contenedor del iframe */}
                <div
                    className="absolute top-4 left-3 right-3 bottom-5 overflow-hidden"
                >
                    <iframe
                        src="https://enfermeria-roxana.vercel.app/inicio"
                        className="border-none"
                        title="Enfermeria Roxana"
                        style={{
                            width: '1147px', // Tamaño original del contenido
                            height: '771px', // Tamaño original del contenido
                            transform: 'scale(0.15)', // Escala ajustada para vista de escritorio
                            transformOrigin: 'top left', // Alineación superior izquierda
                        }}
                    ></iframe>
                </div>
            </div>
            <div className="p-4 border-2 border-green-500">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Project Title</h2>
                <p className="text-sm text-gray-600">
                    This is a brief description of the project. It highlights the main features and purpose of the project.
                </p>
            </div>
        </div>
    );
};

const CardWrapper: React.FC = () => {
    return (
        <div className="overflow-x-auto p-4">
            <Card />
        </div>
    );
};

export default CardWrapper;
