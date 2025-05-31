// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

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
  
  // Añade el plugin unused-imports
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Ejemplo: desactivar la regla de indentación
      "indent": "off",
      // Habilita la regla para eliminar imports no usados
      "unused-imports/no-unused-imports": "error",
      //"@typescript-eslint/prefer-as-const": "off",
    },
  },
];

export default eslintConfig;
