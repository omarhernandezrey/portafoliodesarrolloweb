This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# portafoliodesarrolloweb

## 🛠️ Mejoras Implementadas y Futuras

### Mejoras Generales
- **Optimización de performance:**
  - Uso de `React.memo` y `useMemo` en componentes pesados o listas grandes.
  - Lazy loading de imágenes y componentes no críticos en el primer render.
  - Uso de `next/image` para todas las imágenes, reemplazando `<img>` donde sea posible.
- **Accesibilidad:**
  - Todos los botones y enlaces tienen `aria-label` descriptivo.
  - Contraste de colores revisado en todas las paletas.
  - Uso de roles y atributos ARIA en modales y overlays.
- **Reutilización de código:**
  - Extracción de un componente reutilizable para partículas flotantes/parallax.
  - Botones de categoría y filtros convertidos en componentes genéricos.
- **Gestión de estado:**
  - Centralización de la lógica de cambio de paleta en un contexto global.
- **SEO y Metadatos:**
  - Uso del componente `Head` de Next.js para títulos, descripciones y Open Graph.
- **Testing:**
  - Pruebas unitarias y de integración con Jest y React Testing Library para los componentes clave.
- **Seguridad:**
  - Validación robusta y protección anti-spam en formularios de contacto.

### Mejoras por Sección
- **HeroSection:**
  - Feedback visual de loading en el botón "Ver Proyectos".
  - Hook reutilizable para scroll suave.
  - Fallback para el fondo de imagen en navegadores antiguos.
- **AboutSection:**
  - Extracción de partículas y parallax a un componente reutilizable.
  - Datos personales desde archivo de configuración o CMS.
  - Mejora de accesibilidad en los intereses (enlaces accesibles).
- **ProjectsSection:**
  - Paginación o carga incremental para listas grandes.
  - Animaciones al filtrar proyectos.
- **SkillSection:**
  - Optimización del renderizado de los círculos de progreso con `React.memo`.
  - Tooltips accesibles para cada skill.
- **ServicesSection:**
  - Servicios desde archivo JSON o CMS.
  - Microinteracciones al hacer hover en cada servicio.
- **ContactForm:**
  - Validación de campos en tiempo real.
  - Feedback visual de éxito/error con snackbar o toast.
  - Protección anti-spam (honeypot, reCAPTCHA).
- **EducationSection:**
  - Modal accesible (focus trap, cierre con ESC).
  - Imágenes de certificados optimizadas con `next/image`.
  - Búsqueda o filtrado de certificados.

### Mejoras Futuras a Implementar
- **Internacionalización (i18n):**
  - Implementar soporte multilenguaje con `next-i18next` o similar.
- **Gestión de estado global:**
  - Considerar Zustand o Jotai para temas, paletas o modales si el proyecto crece.
- **Integración con CMS:**
  - Permitir que proyectos, servicios y datos personales se gestionen desde un CMS (ej: Sanity, Contentful, Strapi).
- **Automatización de despliegue:**
  - Integrar CI/CD para pruebas y despliegue automático.
- **Mejoras en documentación:**
  - Ampliar el README con instrucciones de despliegue, personalización y contribución.
- **Lighthouse y auditoría de accesibilidad:**
  - Revisar y mejorar el puntaje de Lighthouse en performance, accesibilidad y SEO.
- **Animaciones avanzadas:**
  - Añadir animaciones de entrada/salida entre páginas y microinteracciones más ricas.
- **Modo oscuro/tema automático:**
  - Detectar y aplicar el tema del sistema automáticamente.
- **Soporte PWA:**
  - Convertir el portafolio en una Progressive Web App.

Estas mejoras buscan mantener el portafolio moderno, accesible, escalable y fácil de mantener. Si tienes sugerencias adicionales, ¡no dudes en contribuir o abrir un issue!

## Correcciones aplicadas

- 2025-05-31 · Lint (`npm run lint -- --fix`) ejecutado → sin warnings ni errores ✅
- 2025-05-31 · TypeScript (`npx tsc --noEmit`) ejecutado → sin errores ✅
- 2025-05-31 · Build de producción (`npm run build`) ejecutado → compilación exitosa sin errores ✅

npm run build
npm start

npm install core-js

import 'core-js';

rm -rf .next
