// next.config.ts

import type { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React
  // scrollRestoration: true, // ⚠ Eliminada para evitar el error

  webpack: (config, { isServer }) => {
    // Evita dependencias innecesarias en el lado cliente
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Elimina "fs" en el lado cliente
      };
    }
    return config;
  },

  // Configuración de imágenes (Descomenta y ajusta si usas imágenes externas)
  // images: {
  //   domains: ['dominio-externo.com', 'otro-dominio.com'], // Añade los dominios necesarios
  // },
};

export default nextConfig;
