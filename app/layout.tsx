import { Metadata } from 'next';
import "./globals.css";
import NavbarLogic from "../components/ui/NavbarLogic";

export const metadata: Metadata = {
  title: {
    default: 'Omar Hernandez - Desarrollador Web Full Stack',
    template: '%s | Omar Hernandez'
  },
  description: 'Desarrollador Web Full Stack especializado en Next.js, React, TypeScript y tecnologías modernas. Portafolio profesional con proyectos y experiencia.',
  keywords: ['desarrollador web', 'full stack', 'Next.js', 'React', 'TypeScript', 'JavaScript', 'frontend', 'backend'],
  authors: [{ name: 'Omar Alberto Hernandez Rey' }],
  creator: 'Omar Alberto Hernandez Rey',
  publisher: 'Omar Alberto Hernandez Rey',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://portafoliodesarrolloweb.vercel.app',
    title: 'Omar Hernandez - Desarrollador Web Full Stack',
    description: 'Desarrollador Web Full Stack especializado en Next.js, React, TypeScript y tecnologías modernas.',
    siteName: 'Portafolio Omar Hernandez',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Omar Hernandez - Desarrollador Web'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Hernandez - Desarrollador Web Full Stack',
    description: 'Desarrollador Web Full Stack especializado en Next.js, React, TypeScript y tecnologías modernas.',
    images: ['/images/profile.jpg']
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#1c1c2e'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preload crítico - recursos que se necesitan inmediatamente */}
        <link
          rel="preload"
          href="/images/profile.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/images/hero-background.jpg"
          as="image"
          type="image/jpeg"
        />
        
        {/* Preconnect a dominios externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch para recursos que se cargarán después */}
        <link rel="dns-prefetch" href="https://vercel.com" />
      </head>
      <body className="fade-in">
        {/* Navigation siempre visible */}
        <NavbarLogic />
        
        {/* Main content */}
        <main role="main">
          {children}
        </main>
        
        {/* Service Worker registration para caching */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(e) {
                    console.log('SW registration failed');
                  });
                });
              }
            `,
          }}
        />
        
        {/* Preload de recursos no críticos */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preload imágenes no críticas después del load
              window.addEventListener('load', function() {
                const imagesToPreload = [
                  '/images/logo7.png',
                  '/images/wave-top.svg',
                  '/images/wave-bottom.svg'
                ];
                
                imagesToPreload.forEach(function(src) {
                  const link = document.createElement('link');
                  link.rel = 'prefetch';
                  link.href = src;
                  link.as = 'image';
                  document.head.appendChild(link);
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
