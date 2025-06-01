'use client';

import React, { useState, useCallback, useMemo, memo } from 'react';
import { educationData } from '../../lib/educationData';
import { motion, useScroll, useTransform } from 'framer-motion';
import EducationModal from '../ui/EducationModal';
import TimelineLogo from '../ui/TimelineLogo';

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

// Función memoizada para aplanar datos
const flattenEducationData = (data: typeof educationData): EducationItem[] => {
  return data.flatMap((category) =>
    category.items.map((item) => ({
      category: category.category,
      ...item,
    }))
  );
};

// Componente de Timeline Item optimizado
const TimelineItem = memo<{
  item: EducationItem;
  index: number;
  onClick: (item: EducationItem) => void;
}>(({ item, index, onClick }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`timeline-item ${isLeft ? 'left' : 'right'}`}
      onClick={() => onClick(item)}
    >
      <div className="timeline-content">
        <div className="timeline-date">{item.duration}</div>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-institution">{item.institution}</p>
        <span className="timeline-category">{item.category}</span>
      </div>
      
      <div className="timeline-icon">
        <TimelineLogo logo={item.logo} institution={item.institution} size={35} />
      </div>
    </motion.div>
  );
});

TimelineItem.displayName = 'TimelineItem';

// Componente principal optimizado
const EducationSection = () => {
  const allItems = useMemo(() => flattenEducationData(educationData), []);
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null);
  const sectionRef = React.useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ['start end', 'end start'] 
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const visibleItems = useMemo(() => 
    allItems.slice(0, visibleCount), 
    [allItems, visibleCount]
  );

  const loadMoreItems = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + 3, allItems.length));
  }, [allItems.length]);

  const openModal = useCallback((item: EducationItem) => {
    setSelectedItem(item);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="education"
        className="education-section"
      >
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ y: y1 }}
            className="bg-blob-1"
          />
          <motion.div
            style={{ y: y2 }}
            className="bg-blob-2"
          />
        </div>

        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="title-wrapper"
          >
            <motion.span
              className="section-badge"
              whileHover={{ scale: 1.05 }}
            >
              Mi Educación
            </motion.span>
            <h2 className="title">Formación Académica</h2>
            <div className="title-underline" />
          </motion.div>

          {/* Timeline */}
          <div className="timeline">
            <div className="timeline-line" />
            
            {visibleItems.map((item, index) => (
              <TimelineItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                onClick={openModal}
              />
            ))}

            {/* Load More Button */}
            {visibleCount < allItems.length && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex justify-center mt-8"
              >
                <button
                  onClick={loadMoreItems}
                  className="load-more-btn"
                >
                  Ver más ({allItems.length - visibleCount} restantes)
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <EducationModal
          isOpen={!!selectedItem}
          onClose={closeModal}
          title={selectedItem.title}
          institution={selectedItem.institution}
          duration={selectedItem.duration}
          description={selectedItem.description}
          logo={selectedItem.logo}
          certificate={selectedItem.certificate}
        />
      )}

      {/* Estilos CSS optimizados */}
      <style jsx>{`
        .education-section {
          min-height: 100vh;
          padding: 8rem 1rem 3rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--background-color) 0%, var(--secondary-background-color) 50%, var(--background-color) 100%);
        }

        .bg-blob-1 {
          position: absolute;
          top: 5rem;
          left: 2.5rem;
          width: 10rem;
          height: 10rem;
          background: var(--primary-color);
          opacity: 0.1;
          border-radius: 50%;
          filter: blur(48px);
        }

        .bg-blob-2 {
          position: absolute;
          bottom: 5rem;
          right: 2.5rem;
          width: 15rem;
          height: 15rem;
          background: var(--accent-color);
          opacity: 0.1;
          border-radius: 50%;
          filter: blur(48px);
        }

        .container {
          position: relative;
          z-index: 10;
          max-width: 80rem;
          margin: 0 auto;
        }

        .title-wrapper {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          margin-bottom: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-radius: 9999px;
          border: 1px solid rgba(243, 156, 18, 0.3);
          background: rgba(243, 156, 18, 0.1);
          color: var(--accent-color);
        }

        .title {
          font-size: 2.5rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
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
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          width: 3px;
          height: 100%;
          background: var(--accent-color);
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 1rem;
          cursor: pointer;
          margin-bottom: 2rem;
          transition: transform 0.3s ease;
        }

        .timeline-item:hover {
          transform: scale(1.02);
        }

        .timeline-item.left {
          left: 0;
          text-align: right;
          padding-right: 2rem;
        }

        .timeline-item.right {
          left: 50%;
          text-align: left;
          padding-left: 2rem;
        }

        .timeline-content {
          background: var(--card-bg-color);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .timeline-icon {
          position: absolute;
          top: 1.5rem;
          width: 35px;
          height: 35px;
          z-index: 2;
        }

        .timeline-item.left .timeline-icon {
          right: -17.5px;
        }

        .timeline-item.right .timeline-icon {
          left: -17.5px;
        }

        .timeline-date {
          font-size: 0.75rem;
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }

        .timeline-institution {
          font-size: 0.875rem;
          color: var(--muted-color);
          margin-bottom: 0.5rem;
        }

        .timeline-category {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(243, 156, 18, 0.2);
          color: var(--accent-color);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .load-more-btn {
          background: var(--primary-color);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .load-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 111, 97, 0.3);
        }

        @media (max-width: 768px) {
          .timeline-item {
            width: 100%;
            left: 0 !important;
            text-align: left;
            padding-left: 3rem;
            padding-right: 1rem;
          }

          .timeline-icon {
            left: -17.5px !important;
          }

          .timeline-line {
            left: 0;
          }
        }
      `}</style>
    </>
  );
};

export default memo(EducationSection);