// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extiende las configuraciones recomendadas de Next.js
  ...compat.extends("next/core-web-vitals"),
  
  // Extiende las configuraciones recomendadas de TypeScript
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  
  // Opcional: Añade configuraciones adicionales si es necesario
  // Puedes agregar reglas personalizadas aquí
  {
    rules: {
      // Ejemplo: desactivar la regla de indentación
      "indent": "off",
      // Añade más reglas según tus necesidades
    },
  },
];

export default eslintConfig;
