// ./components/sections/EducationSection.tsx

"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";
import styles from "../../styles/EducationSection.module.css";
import { educationData } from "../../lib/educationData";
import EducationModal from "../ui/EducationModal";

interface EducationItem {
  category: string;
  title: string;
  institution: string;
  duration: string;
  description: string;
  logo: string;
  certificate?: string | null;
}

const flattenEducationData = (data: typeof educationData): EducationItem[] => {
  return data.flatMap((category) =>
    category.items.map((item) => ({
      category: category.category,
      ...item,
    }))
  );
};

const EducationSection: React.FC = () => {
  // Memorizar allItems para evitar recreación en cada render
  const allItems = useMemo(() => flattenEducationData(educationData), []);

  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleItems, setVisibleItems] = useState<EducationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null);
  const [hasMore, setHasMore] = useState(true);

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

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section
      id="education" // Añadido el id para la navegación
      className={`${styles.educationSection} pt-40`} // Añadido pt-40 para padding-top
      aria-labelledby="education-title"
      style={{ position: "relative" }} // Asegura que los elementos absolutos se posicionen respecto a esta sección
    >
      {/* Wave top (z-0 detrás, rotada) */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0] z-0">
        <Image
          src="/images/wave-top.svg"
          alt="Wave Top"
          className="w-full h-auto"
          width={1920} // Ajusta según las dimensiones reales de la imagen
          height={200} // Ajusta según las dimensiones reales de la imagen
        />
      </div>

      <h2 id="education-title" className={styles.title}>
        Education
      </h2>
      <div className={styles.timeline}>
        <div className={styles.capIcon}>
          <FaGraduationCap size={30} />
        </div>
        {visibleItems.map((item, index) => {
          const alignment = index % 2 === 0 ? styles.right : styles.left;

          return (
            <div
              key={index}
              className={`${styles.timelineItem} ${alignment}`}
              onClick={() => openModal(item)}
              onKeyPress={() => openModal(item)} // Eliminado 'e' ya que no se usa
              tabIndex={0}
              role="button"
              aria-pressed="false"
              aria-labelledby={`education-item-title-${index}`}
            >
              <div className={styles.timelineIcon}>
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    className={styles.timelineLogo}
                    loading="lazy"
                    width={50} // Ajusta según las dimensiones reales de la imagen
                    height={50} // Ajusta según las dimensiones reales de la imagen
                    onError={() => {
                      console.error(`Error al cargar la imagen: ${item.logo}`);
                      // Opcional: establecer una imagen de fallback
                    }} // Eliminado 'e' ya que no se usa
                  />
                ) : (
                  <div className={styles.timelineInnerCircle}></div>
                )}
              </div>
              <div className={styles.timelineContent}>
                <h3
                  id={`education-item-title-${index}`}
                  className={styles.itemTitle}
                >
                  {item.title}
                </h3>
                <p className={styles.itemInstitution}>{item.institution}</p>
                <p className={styles.itemDuration}>{item.duration}</p>
              </div>
            </div>
          );
        })}

        {hasMore && (
          <div
            className={`${styles.timelineItem} ${styles.loadMore}`}
            onClick={loadMoreItems}
            onKeyPress={() => loadMoreItems()} // Eliminado 'e' ya que no se usa
            tabIndex={0}
            role="button"
            aria-pressed="false"
            aria-label="Cargar más educación"
          >
            <div className={styles.timelineIcon}>
              <div className={styles.timelineInnerCircle}>+</div>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.itemTitle}>Load More</h3>
            </div>
          </div>
        )}

        <div
          id="infinite-scroll-sentinel"
          className={styles.timelineEndPoint}
        ></div>
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
      {isLoading && <p className={styles.loadingText}>Cargando más...</p>}
    </section>
  );
};

export default EducationSection;
