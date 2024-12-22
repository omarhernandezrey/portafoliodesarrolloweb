import React from 'react';

const Card: React.FC = () => {
    return (
        <div className="relative p-4"> {/* Reducido de p-6 a p-4 */}
            {/* Contenedor general para dispositivos */}
            <div className="flex flex-col items-center justify-center p-2"> {/* Reducido de p-4 a p-2 */}
                {/* Contenedor principal con altura fija */}
                <div
                    className="flex flex-col items-center justify-center relative"
                    style={{ height: '250px' }} // Altura ajustada
                >
                    {/* Laptop */}
                    <div className="relative w-[200px] h-[150px] flex-shrink-0 xs:w-[250px] xs:h-[200px]">
                        <img
                            src="/images/laptop.png"
                            alt="Laptop"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-3 right-3 bottom-4 overflow-hidden">
                            <iframe
                                src="https://enfermeria-roxana.vercel.app/inicio"
                                className="border-none"
                                title="Enfermeria Roxana Desktop"
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
                    <div className="flex justify-between items-center w-full mt-2 absolute bottom-6 left-0 right-0"> {/* Reducido mt-4 a mt-2, bottom de 8 a 6 */}
                        {/* Tablet */}
                        <div
                            className="relative flex-shrink-0"
                            style={{
                                width: '120px',
                                height: '87px',
                                marginRight: '8px', // Reducido de 12px a 8px
                            }}
                        >
                            <img
                                src="/images/tablet.png"
                                alt="Tablet"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-1 left-0.5 right-0.5 bottom-2 overflow-hidden">
                                <iframe
                                    src="https://enfermeria-roxana.vercel.app/inicio"
                                    className="border-none bg-transparent"
                                    title="Enfermeria Roxana Tablet"
                                    style={{
                                        width: '1155px',
                                        height: '761px',
                                        transform: 'scale(0.1)', // Ajuste de escala
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
                                marginLeft: '8px', // Reducido de 12px a 8px
                            }}
                        >
                            <img
                                src="/images/mobile.png"
                                alt="Mobile"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-1 left-0.5 right-0.5 bottom-1 overflow-hidden">
                                <iframe
                                    src="https://enfermeria-roxana.vercel.app/inicio"
                                    className="border-none"
                                    title="Enfermeria Roxana Mobile"
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
            <div className="mt-3 text-center"> {/* Reducido de mt-4 a mt-3 */}
                {/* Título */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Página Web Enfermería
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Una plataforma web diseñada para enfermeras, que optimiza la gestión de turnos y proporciona herramientas interactivas.
                </p>

                {/* Tecnologías usadas */}
                <div className="flex justify-center gap-2 mt-2"> {/* Reducido de mt-3 a mt-2 */}
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        React
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Tailwind CSS
                    </span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                        Vercel
                    </span>
                </div>

                {/* Botones */}
                <div className="flex justify-center gap-4 mt-3"> {/* Reducido de mt-4 a mt-3 */}
                    <a
                        href="https://github.com/tu-usuario/enfermeria-roxana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                    >
                        Ver Repositorio
                    </a>
                    <a
                        href="https://enfermeria-roxana.vercel.app/inicio"
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
