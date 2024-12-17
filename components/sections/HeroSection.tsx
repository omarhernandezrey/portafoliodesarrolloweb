export default function HeroSection() {
    return (
      <section
        className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4"
        id="hero"
      >
        {/* Título Principal */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          ¡Hola, soy <span className="text-blue-500">[Omar Hernández Rey]</span>!
        </h1>
  
        {/* Subtítulo */}
        <p className="text-lg md:text-2xl mb-6">
          Soy un desarrollador web full stack apasionado por crear aplicaciones increíbles.
        </p>
  
        {/* Botón de CTA */}
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition duration-300"
        >
          Ver Mis Proyectos
        </a>
      </section>
    );
  }
  