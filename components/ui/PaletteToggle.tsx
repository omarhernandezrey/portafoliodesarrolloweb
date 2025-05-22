"use client";

import { useState } from "react";
import { MdColorLens } from "react-icons/md"; // Importar el ícono

export default function PaletteToggle() {
  const [paletteIndex, setPaletteIndex] = useState(0); // Manejo de 10 paletas

  const togglePalette = () => {
    const root = document.documentElement;

    // Lista completa de paletas desde palette2 hasta palette10
    const palettes = ["", "palette2", "palette3", "palette4", "palette5", "palette6", "palette7", "palette8", "palette9", "palette10"];

    const nextIndex = (paletteIndex + 1) % palettes.length; // Avanzar al siguiente índice

    // Eliminar todas las clases de paleta previamente aplicadas
    palettes.forEach((palette) => {
      if (palette) root.classList.remove(palette);
    });

    // Aplicar la nueva paleta si no es la predeterminada
    if (palettes[nextIndex]) {
      root.classList.add(palettes[nextIndex]);
    }

    setPaletteIndex(nextIndex); // Actualizar el índice de la paleta activa
  };

  return (
    <button
      onClick={togglePalette}
      className={`fixed top-4 right-4 p-2 rounded-full shadow-md transition-colors z-50 md:block hidden
                 bg-[var(--primary-color)] text-[var(--text-color)]`}
      style={{
        border: "2px solid var(--accent-color)",
        width: "40px",
        height: "40px",
      }}
      aria-label="Cambiar Paleta de Colores"
    >
      <MdColorLens size={20} />
    </button>
  );
}
