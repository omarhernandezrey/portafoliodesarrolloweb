# PortafolioDesarrolloWeb

Este proyecto es un portafolio profesional desarrollado con **Next.js** y **TypeScript**, optimizado para performance, accesibilidad, SEO y buenas prácticas modernas. Incluye integración con Tailwind CSS, ESLint, PostCSS y despliegue en Vercel.

---

## 🚀 Estructura del Proyecto

- **app/**: Páginas, layouts y rutas dinámicas (estructura App Router de Next.js).
- **components/**: Componentes reutilizables, organizados en:
  - `sections/`: Secciones principales del portafolio (Hero, About, Projects, Skills, Services, Contact, Education).
  - `ui/`: Componentes de interfaz (Navbar, Modals, Botones, etc).
  - `shared/`: Componentes compartidos (Footer, Cards, Testimonios, Newsletter).
- **public/**: Recursos estáticos (imágenes, logos, certificados, archivos descargables como el CV).
- **styles/**: Archivos CSS globales y específicos, configuración de Tailwind.
- **services/**: Lógica de servicios y acceso a datos.
- **hooks/**: Hooks personalizados para lógica reutilizable.
- **lib/**: Utilidades y datos estructurados (ej: educación).
- **config/**: Configuración de iconos y otros recursos.
- **.next/**, **dist/**: Carpetas de build y distribución (auto-generadas).
- **.vercel/**: Configuración de despliegue en Vercel.

---

## ⚙️ Configuración y Herramientas

- **TypeScript**: Estricto, con paths personalizados y soporte JSX.
- **Next.js**: Modo estricto, Webpack personalizado para evitar dependencias innecesarias en cliente.
- **Tailwind CSS**: Modo oscuro por clase, animaciones personalizadas, plugin de formularios.
- **PostCSS**: Tailwind y Autoprefixer.
- **ESLint**: Reglas de Next.js, TypeScript y eliminación automática de imports no usados.
- **Vercel**: Header `X-Frame-Options: ALLOWALL` para todas las rutas.
- **.gitignore**: Ignora node_modules, .next, dist, .env, archivos de build, etc.

---

## 📦 Dependencias Principales

- **Next.js**, **React**, **Tailwind CSS**, **Framer Motion**, **EmailJS**, **React Spring**, **React Icons**, **tsparticles** (animaciones de partículas), **TypeScript**.
- **Dev:** ESLint, autoprefixer, plugins de ESLint, etc.
- **Resolutions:** React y ReactDOM forzados a la versión 18.2.0.

---

## 🛠️ Mejoras Implementadas

### Generales
- **Performance:**
  - Uso de `React.memo` y `useMemo` en componentes pesados.
  - Lazy loading de imágenes y componentes no críticos.
  - Uso de `next/image` para optimización de imágenes.
- **Accesibilidad:**
  - Botones y enlaces con `aria-label` descriptivo.
  - Contraste de colores revisado.
  - Roles y atributos ARIA en modales y overlays.
- **Reutilización de código:**
  - Componentes reutilizables para partículas, botones, filtros, etc.
- **Gestión de estado:**
  - Lógica de cambio de paleta centralizada en contexto global.
- **SEO y Metadatos:**
  - Uso de `Head` para títulos, descripciones y Open Graph.
- **Testing:**
  - Pruebas unitarias y de integración con Jest y React Testing Library (en progreso).
- **Seguridad:**
  - Validación robusta y protección anti-spam en formularios.

### Por Sección
- **HeroSection:** Feedback visual en botones, hook de scroll suave, fallback para fondo.
- **AboutSection:** Partículas y parallax reutilizables, datos personales desde config, accesibilidad mejorada.
- **ProjectsSection:** Paginación/carga incremental, animaciones al filtrar.
- **SkillSection:** Render optimizado, tooltips accesibles.
- **ServicesSection:** Servicios desde JSON/config, microinteracciones.
- **ContactForm:** Validación en tiempo real, feedback visual, protección anti-spam.
- **EducationSection:** Modal accesible, imágenes optimizadas, búsqueda/filtrado de certificados.

---

## 🔮 Mejoras Futuras

- **Internacionalización (i18n):** Soporte multilenguaje con `next-i18next` o similar.
- **Gestión de estado global:** Considerar Zustand o Jotai si el proyecto crece.
- **Integración con CMS:** Proyectos, servicios y datos personales gestionados desde un CMS.
- **CI/CD:** Automatización de pruebas y despliegue.
- **Documentación:** Ampliar instrucciones de despliegue, personalización y contribución.
- **Lighthouse:** Mejorar puntaje de performance, accesibilidad y SEO.
- **Animaciones avanzadas:** Transiciones entre páginas y microinteracciones.
- **Modo oscuro automático:** Detectar y aplicar el tema del sistema.
- **PWA:** Soporte Progressive Web App.

---

## 📝 Comandos Útiles

```bash
npm run dev       # Desarrollo local
npm run build     # Build de producción
npm start         # Servidor de producción
npm run lint      # Linting de código
```

---

## 🧩 Notas y Buenas Prácticas

- El proyecto sigue buenas prácticas de accesibilidad, performance y SEO.
- Estructura modular y escalable.
- Listo para despliegue en Vercel.
- Documentación y código comentado para fácil mantenimiento.

---

¿Tienes sugerencias o quieres contribuir? ¡Abre un issue o pull request!

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT.

Copyright (c) 2024 Omar Alberto Hernandez Rey
