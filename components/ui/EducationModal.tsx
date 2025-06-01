"use client";

import React, { useEffect, memo } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

const EducationModal = memo<EducationModalProps>(({ 
  isOpen, 
  onClose, 
  title, 
  institution, 
  duration, 
  description, 
  logo, 
  certificate 
}) => {
  // Bloquear scroll cuando el modal está abierto
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

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black/80 flex items-start justify-center z-[3000] p-5 pt-10 overflow-auto"
      onClick={onClose}
    >
      <motion.div 
        className="bg-[var(--card-bg-color)] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border-2 border-[var(--accent-color)]"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.span
            className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10 text-[var(--accent-color)]"
            whileHover={{ scale: 1.05 }}
          >
            Educación
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
            {title}
          </h2>
          
          <p className="text-base text-[var(--muted-color)] mb-2">{institution}</p>
          <p className="text-sm text-[var(--muted-color)]">{duration}</p>
        </motion.div>
        
        {/* Logo */}
        {logo && (
          <div className="flex justify-center mb-6">
            <Image 
              src={logo} 
              alt={institution} 
              width={90}
              height={90}
              className="rounded-full shadow-lg border-2 border-[var(--accent-color)] bg-white p-2"
              loading="lazy"
            />
          </div>
        )}
        
        {/* Description */}
        {description && (
          <p className="text-[var(--text-color)] mb-6 leading-relaxed">
            {description}
          </p>
        )}
        
        {/* Certificate */}
        {certificate && (
          <div className="mt-6 text-center">
            <a 
              href={certificate} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[var(--accent-color)] text-[var(--background-color)] px-6 py-3 rounded-full font-bold mb-4 hover:bg-[var(--accent-color)]/90 transition-colors"
            >
              Ver Certificado
            </a>
            <div className="flex justify-center">
              <Image
                src={certificate}
                alt="Certificado"
                width={320}
                height={240}
                className="rounded-lg shadow-lg bg-white"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Close button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onClose}
            className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--primary-color)]/90 transition-colors shadow-lg"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
});

EducationModal.displayName = 'EducationModal';

export default EducationModal;
