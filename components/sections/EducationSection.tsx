"use client";

import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import styles from '../../styles/EducationSection.module.css';
import { educationData } from '../../lib/educationData';
import EducationModal from '../ui/EducationModal';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const EducationSection: React.FC = () => {
  const [visibleData, setVisibleData] = useState(educationData.slice(0, 2)); // Mostrar 2 categorías al inicio

  const loadMore = () => {
    if (visibleData.length < educationData.length) {
      setVisibleData(educationData.slice(0, visibleData.length + 1)); // Cargar 1 categoría más por iteración
    }
  };

  const isFetching = useInfiniteScroll(loadMore);

  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item: any) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className={styles.educationSection}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.timeline}>
        <div className={`${styles.capIcon} flex justify-center items-center text-teal-400`}>
          <FaGraduationCap size={40} />
        </div>
        {visibleData.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="opacity-0 animate-fadeIn transition-opacity duration-700 ease-in-out"
          >
            <h3 className="text-xl font-bold text-teal-400 mb-4">{category.category}</h3>
            {category.items.map((item: any, index: number) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                onClick={() => openModal(item)}
              >
                <div className={styles.timelineIcon}>
                  <div className={styles.timelineInnerCircle}></div>
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemInstitution}>{item.institution}</p>
                  <p className={styles.itemDuration}>{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div id="infinite-scroll-sentinel" className={styles.timelineEndPoint}></div>
      </div>
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
      {isFetching && <p className="text-center text-teal-400">Cargando más...</p>}
    </section>
  );
};

export default EducationSection;
