import "./globals.css";
import NavbarLogic from "../components/ui/NavbarLogic";
import PaletteToggle from "../components/ui/PaletteToggle"; // Importa el nuevo componente cliente

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
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
