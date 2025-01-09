// EducationSection.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaGraduationCap } from "react-icons/fa";
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
  const allItems = flattenEducationData(educationData);
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
    const initialLoad = async () => {
      for (let i = 0; i < Math.min(7, allItems.length); i++) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setVisibleItems((prev) => [...prev, allItems[i]]);
        setVisibleCount((prev) => prev + 1);
      }
      setIsLoading(false);
      if (visibleCount >= allItems.length) {
        setHasMore(false);
      }
    };
    initialLoad();
  }, []);

  const openModal = (item: EducationItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className={styles.educationSection}>
      <h2 className={styles.title}>Education</h2>
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
              onKeyPress={(e) => {
                if (e.key === "Enter") openModal(item);
              }}
              tabIndex={0}
              role="button"
              aria-pressed="false"
            >
              <div className={styles.timelineIcon}>
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    className={styles.timelineLogo}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.timelineInnerCircle}></div>
                )}
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
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
            onKeyPress={(e) => {
              if (e.key === "Enter") loadMoreItems();
            }}
            tabIndex={0}
            role="button"
            aria-pressed="false"
          >
            <div className={styles.timelineIcon}>
              <div className={styles.timelineInnerCircle}>+</div>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.itemTitle}>Load More</h3>
            </div>
          </div>
        )}

        <div id="infinite-scroll-sentinel" className={styles.timelineEndPoint}></div>
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