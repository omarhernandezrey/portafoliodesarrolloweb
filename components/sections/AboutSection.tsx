'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import technologyIcons from '../../config/technologyIcons';
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

// Floating particles for background effect
const FLOATING_ELEMENTS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 10 + 15,
  opacity: Math.random() * 0.4 + 0.1
}));

const AboutSection: React.FC = () => {
  const [hoveredInterest, setHoveredInterest] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const interests = [
    'Platzi Learning',
    'Open Source',
    'AI & ML',
    'Coding',
    'Tech Conferences',
  ];

  const interestLinks: Record<string, string> = {
    'Platzi Learning': 'https://platzi.com/',
    'Open Source': 'https://opensource.org/',
    'AI & ML': 'https://ai.google/',
    'Coding': 'https://www.codecademy.com/',
    'Tech Conferences': 'https://www.techconferences.co/',
  };

  const personalData = [
    { icon: FaUser, label: 'Nombre', value: 'Omar Hernández Rey' },
    { icon: FaCalendarAlt, label: 'Fecha de Nacimiento', value: '14 de febrero de 1990' },
    { icon: FaMapMarkerAlt, label: 'Dirección', value: 'Carrera 2N #39D-16 Sur, Bogotá' },
    { icon: FaPhoneAlt, label: 'Teléfono', value: '(+57) 3219058278' }
  ];

  return (
    <>
      <style jsx>{`
        :root {
          --background-color: #1c1c2e;
          --secondary-background-color: #28283c;
          --white-color: #ffffff;
          --text-color: #f4f4f9;
          --muted-color: #d1d1e0;
          --primary-color: #ff6f61;
          --accent-color: #f39c12;
          --card-bg-color: #28283c;
          --inner-circle-bg-color: #f39c12;
          --inner-circle-text-color: #28283c;
          --item-title-color-palette2: #f39c12;
          --loading-text-color-palette2: #f39c12;
          --loadmore-bg-color: #28283c;
          --loadmore-border-color: #f39c12;
          --loadmore-hover-bg-color: #1f2833;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="about"
        className="relative min-h-screen py-32 px-4 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--background-color) 0%, var(--secondary-background-color) 50%, var(--background-color) 100%)`
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          {FLOATING_ELEMENTS.map((element) => (
            <motion.div
              key={element.id}
              className="absolute rounded-full"
              style={{
                width: element.size,
                height: element.size,
                left: `${element.x}%`,
                top: `${element.y}%`,
                backgroundColor: 'var(--accent-color)',
                opacity: element.opacity
              }}
              animate={{
                y: [-40, 40, -40],
                x: [-20, 20, -20],
                opacity: [element.opacity * 0.3, element.opacity, element.opacity * 0.3],
                scale: [1, 1.8, 1]
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Parallax Background Shapes */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y }}
        >
          <div 
            className="absolute top-32 left-20 w-40 h-40 rounded-full"
            style={{ backgroundColor: 'var(--primary-color)' }}
          />
          <div 
            className="absolute top-60 right-32 w-28 h-28 rounded-full"
            style={{ backgroundColor: 'var(--accent-color)' }}
          />
          <div 
            className="absolute bottom-40 left-1/3 w-48 h-48 rounded-full"
            style={{ backgroundColor: 'var(--primary-color)' }}
          />
        </motion.div>

        {/* Wave top */}
        <motion.div 
          className="absolute top-0 left-0 w-full overflow-hidden z-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/wave-top.svg"
            alt="Wave Top"
            className="w-full h-auto rotate-180"
            width={1920}
            height={200}
            priority
          />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10 mx-auto max-w-6xl"
          style={{ opacity }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* FOTO + BOTÓN CV */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <div className="group relative w-[240px] h-[300px] mb-6">
                <div className="absolute inset-0 border-2 border-[var(--accent-color)] rounded-lg transform translate-x-4 -translate-y-4 transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:border-[var(--accent-hover-color)]" />
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl border-2 border-[var(--accent-color)] bg-[var(--primary-color)] transition-all duration-500 group-hover:scale-105 group-hover:border-[var(--accent-hover-color)] flex items-center justify-center">
                  <Image
                    src="/images/profile-SN-fondo.png"
                    alt="Foto de perfil"
                    className="object-cover w-full h-full"
                    width={240}
                    height={300}
                    priority
                  />
                </div>
              </div>

              {/* BOTÓN CV PREMIUM */}
              <motion.a
                href="/files/CV-Omar-Hernandez-Rey.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 mt-6 font-semibold text-lg rounded-full shadow-xl transition-all duration-300 backdrop-blur-lg"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)`,
                  color: 'var(--white-color)',
                  border: "2px solid var(--accent-color)",
                  boxShadow: '0 10px 30px rgba(243, 156, 18, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 40px rgba(243, 156, 18, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3M12 4v8" />
                </motion.svg>
                Download CV
              </motion.a>
            </motion.div>

            {/* TEXTO SOBRE MÍ */}
            <motion.div 
              className="flex flex-col space-y-8"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              {/* Header Section */}
              <div>
                <motion.span 
                  className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full border"
                  style={{
                    color: 'var(--accent-color)',
                    backgroundColor: `rgba(243, 156, 18, 0.1)`,
                    borderColor: `rgba(243, 156, 18, 0.3)`
                  }}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Conóceme
                </motion.span>

                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  style={{
                    background: `linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Sobre mí
                </h2>
              </div>

              <motion.p
                className="text-lg leading-relaxed text-justify"
                style={{
                  color: 'var(--muted-color)',
                  textAlign: "justify",
                  textJustify: "inter-word",
                  hyphens: "auto",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                ¡Hola! Soy <strong className="text-[var(--muted-color)] font-normal">Omar Hernández Rey</strong>, un <strong className="text-[var(--primary-color)] font-normal">Desarrollador Web Full Stack</strong> con experiencia tanto en <strong className="text-[var(--accent-color)] font-normal">Front-End</strong> como en <strong className="text-[var(--accent-color)] font-normal">Back-End</strong>. Estoy a punto de graduarme en <strong className="text-[var(--primary-color)] font-normal">Ingeniería de Software</strong> del <strong className="text-[var(--primary-color)] font-normal">Politécnico Grancolombiano</strong> y continuamente mejoro mis conocimientos con cursos en <strong className="text-[var(--accent-color)] font-normal">Platzi</strong> sobre tecnologías web, DevOps y más.
              </motion.p>

              {/* DATOS PERSONALES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {personalData.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)`,
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: '0 10px 25px rgba(243, 156, 18, 0.3)'
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon size={18} />
                    </motion.span>
                    <div className="flex-1">
                      <p 
                        className="uppercase text-xs font-semibold tracking-wider mb-1"
                        style={{ color: 'var(--accent-color)' }}
                      >
                        {item.label}
                      </p>
                      <p 
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-color)' }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SECCIÓN DE INTERESES */}
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Header Section */}
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full border"
                style={{
                  color: 'var(--accent-color)',
                  backgroundColor: `rgba(243, 156, 18, 0.1)`,
                  borderColor: `rgba(243, 156, 18, 0.3)`
                }}
                whileHover={{ scale: 1.05 }}
              >
                Pasiones
              </motion.span>
              
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Mis Intereses
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {interests.map((interest, index) => (
                <motion.a
                  key={interest}
                  href={interestLinks[interest] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center text-center p-6 h-36 rounded-3xl border backdrop-blur-xl transition-all duration-500"
                  style={{
                    backgroundColor: hoveredInterest === interest 
                      ? 'var(--card-bg-color)' 
                      : `rgba(40, 40, 60, 0.4)`,
                    borderColor: hoveredInterest === interest 
                      ? 'var(--accent-color)' 
                      : `rgba(209, 209, 224, 0.2)`,
                    boxShadow: hoveredInterest === interest 
                      ? `0 25px 50px rgba(243, 156, 18, 0.15)` 
                      : 'none'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredInterest(interest)}
                  onHoverEnd={() => setHoveredInterest(null)}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5
                  }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)`,
                      opacity: hoveredInterest === interest ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10 flex flex-col items-center h-full justify-center">
                    <motion.div
                      className="text-3xl mb-3"
                      style={{ color: 'var(--primary-color)' }}
                      animate={{
                        scale: hoveredInterest === interest ? 1.2 : 1,
                        rotate: hoveredInterest === interest ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {technologyIcons[interest] ? (
                        technologyIcons[interest]
                      ) : (
                        <span>★</span>
                      )}
                    </motion.div>
                    
                    <span 
                      className="text-sm font-medium transition-colors duration-300"
                      style={{ 
                        color: hoveredInterest === interest 
                          ? 'var(--primary-color)' 
                          : 'var(--muted-color)' 
                      }}
                    >
                      {interest}
                    </span>
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-3 right-3 w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                    animate={{
                      scale: hoveredInterest === interest ? 1.5 : 1,
                      opacity: hoveredInterest === interest ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Wave Bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-48 overflow-hidden leading-[0] z-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/wave-bottom.svg"
            alt="Wave Bottom"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
            priority={false}
          />
        </motion.div>

        {/* Bottom Gradient Line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent 0%, var(--accent-color) 50%, transparent 100%)`,
            opacity: 0.4
          }}
        />
      </section>
    </>
  );
};

export default AboutSection;