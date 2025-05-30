import "./globals.css";
import NavbarLogic from "../components/ui/NavbarLogic";
import PaletteToggle from "../components/ui/PaletteToggle"; // Importa el nuevo componente cliente
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <Head>
        {/* Google Fonts para todos los temas */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@400;700&family=Merriweather:wght@400;700&family=Montserrat:wght@400;700&family=Orbitron:wght@400;700&family=Share+Tech+Mono&family=Nunito:wght@400;700&family=Quicksand:wght@400;700&family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <head>
        <title>Portafolio Desarrollador Web</title>
        <meta
          name="description"
          content="Mi portafolio profesional como desarrollador web."
        />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <NavbarLogic />
        <PaletteToggle /> {/* Usa el componente cliente aquí */}
        {children}
      </body>
    </html>
  );
}
