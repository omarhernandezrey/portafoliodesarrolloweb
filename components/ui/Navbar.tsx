import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md z-20">
      {/* z-index elevado para estar por encima del HeroSection */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gray-400">
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-400">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-400">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
