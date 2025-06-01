import React, { Suspense } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
  minHeight?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback,
  rootMargin = '200px',
  threshold = 0.1,
  className = '',
  minHeight = '50vh'
}) => {
  const { isIntersecting, elementRef } = useIntersectionObserver({
    rootMargin,
    threshold,
    triggerOnce: true
  });

  const defaultFallback = (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ minHeight }}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <p className="text-sm text-gray-500">Cargando sección...</p>
      </div>
    </div>
  );

  return (
    <div ref={elementRef} className={className}>
      {isIntersecting ? (
        <Suspense fallback={fallback || defaultFallback}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight }} className="w-full" />
      )}
    </div>
  );
};

export default LazySection; 