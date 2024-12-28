import React from 'react';
import Card from '../shared/Card';


const projects = [
    {
        title: "Página Web Enfermería Roxana",
        description: "Una plataforma web moderna y responsiva diseñada para promover servicios profesionales de enfermería, ofreciendo información clara y contacto rápido.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        repository: "https://github.com/omarhernandezrey/enfermeriaroxanapag",
        demo: "https://enfermeria-roxana.vercel.app/inicio",
    },
    
   /*  {
        title: "Michis App",
        description: "Aplicación interactiva que utiliza APIs REST para mostrar fotos aleatorias de gatos, gestionar favoritos y subir imágenes personalizadas. Diseñada con HTML, CSS y JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript", "APIs REST"],
        repository: "https://github.com/omarhernandezrey/47-curso-de-api-rest-con-javascript-fundamentos",
        demo: "https://omarhernandezrey.github.io/47-curso-de-api-rest-con-javascript-fundamentos/",
    }, */
    
/*   {
    title: "Películas Tendencia",
    description: "Explora el cine fácilmente: descubre películas populares, busca títulos, obtén detalles y navega por categorías según tus gustos.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/49-Curso-de-API-REST-con-Javascript-Performance-y-Usabilidad",
    demo: "https://omarhernandezrey.github.io/49-Curso-de-API-REST-con-Javascript-Performance-y-Usabilidad/",
  }, */

  {
    title: "Task Manager App",
    description: "Aplicación sencilla para gestionar tareas con funcionalidad de agregar, editar y eliminar, persistencia en localStorage y soporte para alternar entre temas claro y oscuro.",
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
    repository: "https://github.com/omarhernandezrey/46-Task-Manager",
    demo: "https://omarhernandezrey.github.io/46-Task-Manager/",
},
{
    title: "Tienda Lizz.io",
    description: "E-commerce moderno desarrollado con Next.js, diseñado para una experiencia de usuario intuitiva y fluida, con funcionalidades como carrito de compras, métodos de pago y contacto mediante correo electrónico.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    repository: "https://github.com/omarhernandezrey/tienda_Lizz.io",
    demo: "https://tienda-lizz-io.vercel.app/",
},

{
    title: "Your Restaurant",
    description: "Sitio web de restaurante creado con HTML y CSS Grid, con diseño responsivo y un enfoque en la presentación atractiva de menús y servicios gastronómicos.",
    technologies: ["HTML", "CSS", "CSS Grid"],
    repository: "https://github.com/omarhernandezrey/38-Curso-de-CSS-Grid-B-sico.io",
    demo: "https://omarhernandezrey.github.io/38-Curso-de-CSS-Grid-B-sico.io/",
},
{
    title: "Steam - Hamburguesas Artesanales",
    description: "Sitio web promocional para Steam, especializado en hamburguesas artesanales con un diseño atractivo y secciones para menú, promociones y contacto.",
    technologies: ["HTML", "CSS"],
    repository: "https://github.com/omarhernandezrey/36-Curso-de-Dise-o-para-Developers-html.io",
    demo: "https://omarhernandezrey.github.io/36-Curso-de-Dise-o-para-Developers-html.io/",
},
{
    title: "Eco-store",
    description: "Tienda en línea enfocada en productos ecológicos y decoraciones para el hogar, desarrollada con un enfoque en sostenibilidad y diseño moderno. Incluye categorías como cuidado personal y muebles hechos con materiales reciclables.",
    technologies: ["HTML", "CSS", "SCSS", "Flexbox"],
    repository: "https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io",
    demo: "https://omarhernandezrey.github.io/35-Curso-de-Fundamentos-de-Sass.io/",
},
{
    title: "Batatabit",
    description: "Sitio web diseñado para visibilizar precios y tendencias en el mercado de criptomonedas, con diseño responsive y enfoque Mobile-First. Ofrece información confiable en tiempo real sobre monedas, tasas de cambio y planes de acceso.",
    technologies: ["HTML", "CSS", "Mobile-First Design", "Responsive Design"],
    repository: "https://github.com/omarhernandezrey/34-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First.io",
    demo: "https://omarhernandezrey.github.io/34-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First.io/",
},

{
    title: "Google Chrome Clone",
    description: "Réplica sencilla de la página principal de Google, con barra de navegación, campo de búsqueda, botones de acción y enlaces en el pie de página, diseñada con HTML y CSS.",
    technologies: ["HTML", "CSS"],
    repository: "https://github.com/omarhernandezrey/33-Google-Chrome-Clone.io",
    demo: "https://omarhernandezrey.github.io/33-Google-Chrome-Clone.io/",
},
{
    title: "Plan de Comidas Semanal",
    description: "Aplicación simple para organizar un plan de comidas semanal. Permite agregar, visualizar y organizar comidas en una tabla con una interfaz fácil de usar.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/31.1--comidasDeLaSemana.io",
    demo: "https://omarhernandezrey.github.io/31.1--comidasDeLaSemana.io/",
},
{
    title: "Pagar Recibos",
    description: "Aplicación básica que permite gestionar y visualizar el pago de recibos de servicios de manera organizada y sencilla. Incluye una interfaz intuitiva para el manejo de recibos.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/28.1-PagarRecibos.io",
    demo: "https://omarhernandezrey.github.io/28.1-PagarRecibos.io/",
},
{
    title: "Página Web de Enfermería",
    description: "Sitio web diseñado para promocionar servicios de enfermería domiciliarios en Bogotá. Incluye información detallada sobre atención especializada, cuidado postoperatorio, administración de medicamentos, y más.",
    technologies: ["HTML", "SCSS", "CSS", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/07.2-pagina_web_enfermeria",
    demo: "https://omarhernandezrey.github.io/07.2-pagina_web_enfermeria/",
},
{
    title: "Calculadora de Pago de Turnos de Enfermería",
    description: "Aplicación web que permite a los usuarios calcular el pago correspondiente a turnos de enfermería, con un calendario interactivo para gestionar y visualizar los turnos trabajados.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/07.1-calculadoraDePagoTurnosEmfermeria.github.io",
    demo: "https://omarhernandezrey.github.io/07.1-calculadoraDePagoTurnosEmfermeria.github.io/",
},
{
    title: "Async Landing",
    description: "Landing page personal diseñada para destacar habilidades, proyectos y contenido de Omar Hernández Rey como full stack developer, con un diseño limpio y moderno que incluye integración de contenido dinámico mediante APIs.",
    technologies: ["HTML", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/22.1_async-landing",
    demo: "https://omarhernandezrey.github.io/22.1_async-landing/",
},
{
    title: "Frontend Developer JavaScript Práctico",
    description: "Aplicación de e-commerce que incluye navegación en desktop y mobile, carrito de compras, lista de productos y detalles de cada producto, diseñada para brindar una experiencia fluida y responsiva.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/18-curso-frontend-developer-javascript-practico.io",
    demo: "https://omarhernandezrey.github.io/18-curso-frontend-developer-javascript-practico.io/",
},
{
    title: "Portafolio Personal",
    description: "Portafolio web diseñado para destacar mi experiencia, habilidades técnicas y proyectos realizados. Incluye secciones como biografía, habilidades, proyectos destacados y medios de contacto.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/omarhernandezrey/07-portafolio.github.io",
    demo: "https://omarhernandezrey.github.io/07-portafolio.github.io/",
},

];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              repository={project.repository}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
