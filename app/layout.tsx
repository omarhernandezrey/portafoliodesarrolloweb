// layout.tsx
"use client";

import "./globals.css";
import NavbarLogic from "../components/ui/NavbarLogic";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isPalette2, setIsPalette2] = useState(false);

  const togglePalette = () => {
    const root = document.documentElement;
    setIsPalette2(!isPalette2);

    if (!isPalette2) {
      root.classList.add("palette2");
    } else {
      root.classList.remove("palette2");
    }
  };

  return (
    <html lang="es">
      <head>
        <title>Portafolio Desarrollador Web</title>
        <meta
          name="description"
          content="Mi portafolio profesional como desarrollador web."
        />
      </head>
      <body>
        <NavbarLogic />
        <button
          onClick={togglePalette}
          className="fixed top-4 right-4 p-2 bg-primary text-white rounded shadow-lg hover:bg-secondary transition-colors"
        >
          Cambiar Colores
        </button>
        {children}
      </body>
    </html>
  );
}
