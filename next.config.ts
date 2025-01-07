/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React
  experimental: {
    scrollRestoration: true, // Habilita la restauración del scroll en las páginas
  },
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
};

module.exports = nextConfig;
