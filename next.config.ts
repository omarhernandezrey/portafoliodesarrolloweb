// next.config.ts

import type { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React
  compress: true, // Habilitar compresión gzip
  
  // Optimizaciones experimentales
  experimental: {
    optimizeCss: true, // Optimizar CSS automáticamente
    optimizePackageImports: ['framer-motion', 'react-icons'], // Optimizar imports específicos
  },

  // Configuración de imágenes optimizada
  images: {
    formats: ['image/webp', 'image/avif'], // Formatos modernos más eficientes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Tamaños responsivos
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tamaños para íconos
    minimumCacheTTL: 31536000, // Cache de imágenes por 1 año
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers de performance y seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Cache control para recursos estáticos
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400',
          },
          // Seguridad
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Performance hints
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // Headers específicos para assets estáticos
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*\\.(ico|png|jpg|jpeg|gif|webp|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer, dev }) => {
    // Evita dependencias innecesarias en el lado cliente
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Elimina "fs" en el lado cliente
        net: false,
        tls: false,
      };
    }

    // Optimizaciones de producción
    if (!dev) {
      // Optimizar chunks para mejor caching
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization?.splitChunks,
          cacheGroups: {
            ...config.optimization?.splitChunks?.cacheGroups,
            // Separar vendor chunks por tipo
            framerMotion: {
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              priority: 10,
            },
            reactIcons: {
              test: /[\\/]node_modules[\\/](react-icons)[\\/]/,
              name: 'react-icons',
              chunks: 'all',
              priority: 10,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 5,
            },
          },
        },
      };
    }

    return config;
  },

  // Redirects para mejor SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Variables de entorno públicas (si las necesitas)
  env: {
    SITE_URL: process.env.SITE_URL || 'https://portafoliodesarrolloweb.vercel.app',
  },
};

export default nextConfig;
