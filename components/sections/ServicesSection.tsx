'use client'; // Para Next.js 13 con App Router

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Frontend Development',
    description:
      'Creating modern, responsive user interfaces using technologies like React and Next.js.',
    icon: '/images/services/frontend.svg', // Ícono en blanco/negro
  },
  {
    title: 'Backend Development',
    description:
      'Building robust, scalable APIs with Node.js, Express, and SQL/NoSQL databases.',
    icon: '/images/services/backend.svg',
  },
  {
    title: 'UI/UX Design',
    description:
      'Functional prototypes and design focused on enhancing user experience.',
    icon: '/images/services/design.svg',
  },
  {
    title: 'DevOps Implementation',
    description:
      'Automating deployments and maintaining cloud infrastructure.',
    icon: '/images/services/devops.svg',
  },
];

// Variantes para animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ServicesSection() {
  return (
<section
  id="services"
  /* 
    Aumentamos padding para que las waves
    no oculten el contenido
  */
  className="relative bg-[var(--background-color)] text-[var(--text-color)] pt-32 pb-32 overflow-hidden"
>
  {/* Contenido principal (z-10 adelante) */}
  <div className="relative z-10 container mx-auto px-4 max-w-screen-xl">
    {/* TÍTULO con gradiente */}
    <motion.h2
      className="text-center text-4xl md:text-5xl font-extrabold mb-12 
                 text-transparent bg-clip-text
                 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      My Services
    </motion.h2>

    {/* GRID con stagger */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-[var(--secondary-background-color)] rounded-xl p-8 shadow-lg 
                     hover:shadow-2xl transition-transform 
                     relative group"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* ÍCONO con color dorado */}
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20"
              style={{
                maskImage: `url(${service.icon})`,
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskImage: `url(${service.icon})`, // Safari/Chrome
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'contain',
                backgroundColor: "#FFD700", // Color dorado
              }}
            />
          </div>

          {/* TÍTULO de la card con mismo gradiente */}
          <h3
            className="text-center text-2xl font-bold mb-4
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]"
          >
            {service.title}
          </h3>

          {/* DESCRIPCIÓN */}
          <p className="text-[var(--muted-color)] text-center">
            {service.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Wave inferior (z-0 detrás) */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
    <img 
      src="/images/wave-bottom.svg"
      alt="wave bottom"
      className="w-full h-auto"
    />
  </div>
</section>


  );
}
