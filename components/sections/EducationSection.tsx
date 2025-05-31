'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { educationData } from '../../lib/educationData';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

// Icono de graduación personalizado
const GraduationCapIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
);

// Tipado para los ítems de educación
interface EducationItem {
  category: string;
  title: string;
  institution: string;
  duration: string;
  description: string;
  logo: string;
  certificate?: string | null;
}

// Modal Component
interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  institution: string;
  duration: string;
  description: string;
  logo: string;
  certificate?: string | null;
}
const EducationModal = ({ isOpen, onClose, title, institution, duration, description, logo, certificate }: EducationModalProps) => {
  // Bloquear scroll externo cuando el modal está abierto (html y body)
  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Overlay oscuro
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: 3000,
        padding: '40px 20px 20px 20px', // paddingTop extra para evitar el navbar
        overflow: 'auto',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--card-bg-color)',
          borderRadius: '15px',
          padding: '30px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          position: 'relative',
          border: '2px solid var(--accent-color)',
          zIndex: 3001,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header animado igual que AboutSection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.span
            className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full border"
            style={{
              color: 'var(--accent-color)',
              backgroundColor: 'rgba(243, 156, 18, 0.1)',
              borderColor: 'rgba(243, 156, 18, 0.3)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            Educación
          </motion.span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              background:
                'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </h2>
          <p className="text-base" style={{ color: 'var(--muted-color)' }}>{institution}</p>
          <p className="text-sm mb-2" style={{ color: 'var(--muted-color)' }}>{duration}</p>
        </motion.div>
        
        {logo && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <Image 
              src={logo} 
              alt={institution} 
              width={90}
              height={90}
              style={{ 
                objectFit: 'contain', 
                borderRadius: '50%', 
                boxShadow: '0 4px 16px var(--accent-color, rgba(243,156,18,0.15))',
                background: 'var(--white-color)',
                border: '2px solid var(--accent-color)',
                padding: '8px',
                display: 'block',
              }} 
            />
          </div>
        )}
        
        {description && (
          <p style={{ color: 'var(--text-color)', marginBottom: '20px', lineHeight: '1.6' }}>
            {description}
          </p>
        )}
        
        {certificate && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <a 
              href={certificate} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--accent-color)',
                color: 'var(--background-color)',
                padding: '10px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}
            >
              Ver Certificado
            </a>
            <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center' }}>
              <Image
                src={certificate}
                alt="Certificado"
                width={320}
                height={240}
                style={{
                  borderRadius: '10px',
                  boxShadow: '0 2px 12px var(--accent-color, rgba(0,0,0,0.15))',
                  objectFit: 'contain',
                  background: 'var(--white-color)',
                }}
              />
            </div>
          </div>
        )}

        {/* Botón de cerrar en la parte inferior */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'var(--primary-color)',
              color: 'var(--white-color)',
              padding: '12px 32px',
              borderRadius: '25px',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 2px 8px var(--primary-color, rgba(243,111,97,0.15))',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, typeof window !== 'undefined' ? document.body : ({} as HTMLElement));
};

// Componente para mostrar el logo en la línea de tiempo con fallback seguro
function TimelineLogo({ logo, institution }: { logo: string; institution: string }) {
  const [imgError, setImgError] = useState(false);

  if (!logo || imgError) {
    return (
      <div className="timeline-inner-circle" style={{ display: 'flex' }}>
        <GraduationCapIcon size={16} />
      </div>
    );
  }

  return (
    <Image
      src={logo}
      alt={`${institution} logo`}
      width={80}
      height={80}
      className="timeline-logo"
      style={{
        objectFit: 'contain',
        borderRadius: '50%',
        boxShadow: '0 4px 16px rgba(243,156,18,0.15)',
        background: '#fff',
        border: '2px solid #f39c12',
        padding: '4px',
        display: 'block',
        margin: '0 auto',
        transform: 'scale(1.08)',
        transition: 'transform 0.2s',
      }}
      onError={() => setImgError(true)}
    />
  );
}

// Función para aplanar los datos
const flattenEducationData = (data: typeof educationData): EducationItem[] => {
  return data.flatMap((category) =>
    category.items.map((item) => ({
      category: category.category,
      ...item,
    }))
  );
};

// Defino la interfaz FloatingElement antes de su uso
interface FloatingElement {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  opacity: number;
}

const createFloatingElements = (count = 12) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 10 + 15,
    opacity: Math.random() * 0.4 + 0.1,
  }));

const EducationSection = () => {
  const allItems = useMemo<EducationItem[]>(() => flattenEducationData(educationData), []);
  
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<EducationItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => { setFloatingElements(createFloatingElements()); }, []);

  const loadMoreItems = useCallback(() => {
    if (visibleCount >= allItems.length) {
      setHasMore(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      const nextCount = Math.min(visibleCount + 1, allItems.length);
      setVisibleItems(allItems.slice(0, nextCount));
      setVisibleCount(nextCount);
      setIsLoading(false);
      if (nextCount >= allItems.length) {
        setHasMore(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [visibleCount, allItems]);

  useEffect(() => {
    const initialLoad = () => {
      const initialBatch = Math.min(7, allItems.length);
      setVisibleItems(allItems.slice(0, initialBatch));
      setVisibleCount(initialBatch);
      setIsLoading(false);
      if (initialBatch >= allItems.length) {
        setHasMore(false);
      }
    };
    initialLoad();
  }, [allItems]);

  const openModal = (item: EducationItem) => {
    setSelectedItem(item);
  };

  const closeModal = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.stopPropagation?.();
    setSelectedItem(null);
  };

  return (
    <>
      <style jsx global>{`
        .education-section {
          min-height: 100vh;
          padding: 10rem 0.5rem 3rem 0.5rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--background-color) 0%, var(--secondary-background-color) 50%, var(--background-color) 100%);
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, var(--accent-color, rgba(147, 51, 234, 0.05)), transparent);
          pointer-events: none;
        }

        .bg-blob-1 {
          position: absolute;
          top: 5rem;
          left: 2.5rem;
          width: 10rem;
          height: 10rem;
          background-color: var(--primary-color, rgba(168, 85, 247, 0.1));
          border-radius: 50%;
          filter: blur(48px);
        }

        .bg-blob-2 {
          position: absolute;
          bottom: 5rem;
          right: 2.5rem;
          width: 15rem;
          height: 15rem;
          background-color: var(--accent-color, rgba(243, 156, 18, 0.1));
          border-radius: 50%;
          filter: blur(48px);
        }

        .wave-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          transform: rotate(180deg);
          overflow: hidden;
          line-height: 0;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 10;
          max-width: 80rem;
          margin: 0 auto;
        }

        .title-wrapper {
          text-align: center;
          margin-bottom: 2.5rem;
          padding: 0 1rem;
        }

        .title {
          font-size: 1.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          background: linear-gradient(to right, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-underline {
          width: 4rem;
          height: 0.2rem;
          background: linear-gradient(to right, var(--primary-color), var(--accent-color));
          margin: 0 auto;
          border-radius: 0.25rem;
        }

        .timeline {
          position: relative;
          max-width: 100%;
          margin: 0 auto;
          padding: 1rem 0 3rem 0;
        }

        .timeline-line {
          position: absolute;
          width: 3px;
          height: 100%;
          background-color: var(--accent-color);
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .cap-icon {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--accent-color);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--background-color);
          box-shadow: 0 0 10px var(--accent-color, rgba(243, 156, 18, 0.5));
          z-index: 2;
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 10px 15px;
          cursor: pointer;
          margin-bottom: 10px;
        }

        .timeline-item.left {
          left: 0;
          text-align: right;
          padding-right: 20px;
        }

        .timeline-item.right {
          left: 50%;
          text-align: left;
          padding-left: 20px;
        }

        .timeline-icon {
          position: absolute;
          top: 15px;
          width: 35px;
          height: 35px;
          background-color: var(--card-bg-color);
          border: 2px solid var(--accent-color);
          border-radius: 50%;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .timeline-item.left .timeline-icon {
          right: -17.5px;
        }

        .timeline-item.right .timeline-icon {
          left: -17.5px;
        }

        .timeline-logo {
          width: 65%;
          height: 65%;
          object-fit: contain;
          display: block;
        }

        .timeline-inner-circle {
          width: 100%;
          height: 100%;
          background-color: var(--accent-color);
          color: var(--card-bg-color);
          border-radius: 50%;
          font-size: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .timeline-content {
          background-color: var(--card-bg-color);
          padding: 10px 12px;
          border-radius: 8px;
          position: relative;
          box-shadow: 0 3px 5px var(--accent-color, rgba(0, 0, 0, 0.1));
          transition: all 0.3s ease;
          border: 1px solid var(--accent-color, rgba(243, 156, 18, 0.2));
        }

        .timeline-item.left .timeline-content::after {
          content: "";
          position: absolute;
          top: 15px;
          right: -8px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 8px 0 8px 8px;
          border-color: transparent transparent transparent var(--card-bg-color);
        }

        .timeline-item.right .timeline-content::after {
          content: "";
          position: absolute;
          top: 15px;
          left: -8px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 8px 8px 8px 0;
          border-color: transparent var(--card-bg-color) transparent transparent;
        }

        .item-title {
          font-size: 0.9rem;
          color: var(--primary-color);
          margin-bottom: 4px;
          font-weight: 600;
          word-wrap: break-word;
          line-height: 1.2;
        }

        .item-institution {
          font-size: 0.75rem;
          color: var(--text-color);
          margin-bottom: 3px;
          word-wrap: break-word;
          opacity: 0.9;
        }

        .item-duration {
          font-size: 0.7rem;
          color: var(--muted-color);
          word-wrap: break-word;
          opacity: 0.7;
        }

        .timeline-end-point {
          width: 15px;
          height: 15px;
          background-color: var(--accent-color);
          border-radius: 50%;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .load-more .timeline-content {
          background-color: var(--card-bg-color);
          border: 2px dashed var(--accent-color);
          cursor: pointer;
        }

        .loading-text {
          color: var(--muted-color);
          margin-top: 20px;
          font-size: 0.8rem;
          padding: 0 15px;
        }

        /* Animaciones */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .timeline-item {
          opacity: 0;
          animation: fadeInUp 0.6s forwards;
        }

        .timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.3s; }
        .timeline-item:nth-child(4) { animation-delay: 0.4s; }
        .timeline-item:nth-child(5) { animation-delay: 0.5s; }
        .timeline-item:nth-child(6) { animation-delay: 0.6s; }
        .timeline-item:nth-child(7) { animation-delay: 0.7s; }

        .load-more {
          opacity: 1 !important;
          animation: none !important;
        }

        /* Hover effects */
        .timeline-item:hover .timeline-content {
          transform: scale(1.02);
          box-shadow: 0 5px 10px var(--accent-color, rgba(243, 156, 18, 0.2));
          border-color: var(--accent-color, rgba(243, 156, 18, 0.5));
        }

        .timeline-item:hover .timeline-icon {
          background-color: var(--accent-color);
          transform: scale(1.1);
        }

        /* Tablet and Desktop styles */
        @media (min-width: 768px) {
          .education-section {
            padding: 10rem 1.5rem 4rem 1.5rem;
          }

          .title {
            font-size: 2.5rem;
          }

          .timeline-line {
            width: 5px;
          }

          .cap-icon {
            width: 40px;
            height: 40px;
          }

          .timeline-icon {
            width: 45px;
            height: 45px;
          }

          .timeline-item.left .timeline-icon {
            right: -22.5px;
          }

          .timeline-item.right .timeline-icon {
            left: -22.5px;
          }

          .timeline-content {
            padding: 15px 20px;
          }

          .item-title {
            font-size: 1.2rem;
          }

          .item-institution {
            font-size: 0.95rem;
          }

          .item-duration {
            font-size: 0.85rem;
          }
        }

        @media (min-width: 1024px) {
          .title {
            font-size: 3rem;
          }

          .timeline-line {
            width: 6px;
          }

          .timeline-icon {
            width: 50px;
            height: 50px;
          }

          .timeline-item.left .timeline-icon {
            right: -25px;
          }

          .timeline-item.right .timeline-icon {
            left: -25px;
          }

          .item-title {
            font-size: 1.4rem;
          }

          .item-institution {
            font-size: 1.1rem;
          }

          .item-duration {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="education"
        className="education-section relative min-h-screen py-32 px-4 overflow-hidden"
        aria-labelledby="education-title"
      >
        {/* Fondo parallax moderno (igual que AboutSection) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Círculo grande blur */}
          <motion.div style={{ y: y1 }} className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] rounded-full bg-[var(--primary-color)] opacity-30 blur-3xl" />
          {/* Blob acento */}
          <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[-100px] w-[280px] h-[280px] rounded-[60%_40%_30%_70%/_60%_30%_70%_40%] bg-[var(--accent-color)] opacity-40 blur-2xl rotate-12" />
          {/* Círculo degradado */}
          <motion.div style={{ y: y3 }} className="absolute bottom-[-100px] left-[20%] w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-[var(--primary-color)] via-[var(--accent-color)] to-transparent opacity-30 blur-2xl" />
          {/* Línea diagonal luminosa */}
          <motion.div style={{ y: y4 }} className="absolute top-[60%] left-[-80px] w-[400px] h-[8px] bg-gradient-to-r from-[var(--accent-color)]/60 via-white/10 to-transparent opacity-40 rotate-[-20deg] blur-md" />
          {/* Círculo blanco suave */}
          <motion.div style={{ y: y2 }} className="absolute bottom-[-60px] right-[10%] w-[120px] h-[120px] rounded-full bg-white opacity-10 blur-2xl" />
        </div>
        {/* Partículas animadas tipo AboutSection */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {floatingElements.map((el) => (
            <motion.div
              key={el.id}
              className="absolute rounded-full"
              style={{
                width: el.size,
                height: el.size,
                left: `${el.x}%`,
                top: `${el.y}%`,
                backgroundColor: 'var(--accent-color)',
                opacity: el.opacity,
              }}
              animate={{
                y: [-40, 40, -40],
                x: [-20, 20, -20],
                opacity: [el.opacity * 0.3, el.opacity, el.opacity * 0.3],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: el.duration,
                repeat: Infinity,
                delay: el.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        {/* Wave superior */}
        <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0] z-0">
          <Image
            src="/images/wave-top.svg"
            alt="Wave Top"
            className="w-full h-auto"
            width={1920}
            height={200}
          />
        </div>
        {/* Header animado igual que AboutSection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full border"
            style={{
              color: 'var(--accent-color)',
              backgroundColor: 'rgba(243, 156, 18, 0.1)',
              borderColor: 'rgba(243, 156, 18, 0.3)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            Educación
          </motion.span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              background:
                'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Mi Trayectoria Académica
          </h2>
        </motion.div>

        <div className="container">
          <div className="title-wrapper">
            <h2 id="education-title" className="title">Education</h2>
            <div className="title-underline" />
          </div>

          <div className="timeline">
            <div className="timeline-line" />
            <div className="cap-icon">
              <GraduationCapIcon size={16} />
            </div>

            {visibleItems.map((item, index) => {
              const alignment = index % 2 === 0 ? 'right' : 'left';
              
              return (
                <div
                  key={index}
                  className={`timeline-item ${alignment}`}
                  onClick={() => openModal(item)}
                  onKeyPress={(e) => e.key === 'Enter' && openModal(item)}
                  tabIndex={0}
                  role="button"
                  aria-pressed="false"
                  aria-labelledby={`education-item-title-${index}`}
                >
                  <div className="timeline-icon">
                    <TimelineLogo logo={item.logo} institution={item.institution} />
                  </div>
                  <div className="timeline-content">
                    <h3 id={`education-item-title-${index}`} className="item-title">
                      {item.title}
                    </h3>
                    <p className="item-institution">{item.institution}</p>
                    <p className="item-duration">{item.duration}</p>
                  </div>
                </div>
              );
            })}

            {hasMore && (
              <div
                className="timeline-item load-more left"
                onClick={loadMoreItems}
                onKeyPress={(e) => e.key === 'Enter' && loadMoreItems()}
                tabIndex={0}
                role="button"
                aria-pressed="false"
                aria-label="Cargar más educación"
              >
                <div className="timeline-icon">
                  <div className="timeline-inner-circle">+</div>
                </div>
                <div className="timeline-content">
                  <h3 className="item-title">Load More</h3>
                </div>
              </div>
            )}

            <div id="infinite-scroll-sentinel" className="timeline-end-point"></div>
          </div>

          {selectedItem && (
            <EducationModal
              isOpen={true}
              onClose={closeModal}
              title={selectedItem.title}
              institution={selectedItem.institution}
              duration={selectedItem.duration}
              description={selectedItem.description}
              logo={selectedItem.logo}
              certificate={selectedItem.certificate}
            />
          )}
          
          {isLoading && <p className="loading-text">Cargando más...</p>}
        </div>
      </section>
    </>
  );
};

export default EducationSection;