// EducationSection.tsx
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import styles from '../../styles/EducationSection.module.css';

interface EducationItem {
  title: string;
  institution: string;
  duration: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    title: 'Bachelor Degree',
    institution: 'Defodil University',
    duration: 'Jan 2009 - May 2010',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Master Degree',
    institution: 'Amrder University',
    duration: 'Feb 2011 - Mar 2012',
    description: 'Vivamus laoreet dolor metus, eu ullamcorper turpis ornare.',
  },
  {
    title: 'UX Designer Course',
    institution: 'Crafty University',
    duration: 'Jun 2012 - May 2013',
    description: 'Vivamus tristique rhoncus enim.',
  },
  {
    title: 'Interface Designing',
    institution: 'Kheltam NA University',
    duration: 'Aug 2014 - Jun 2015',
    description: 'Eu ullamcorper turpis ornare tincidunt.',
  },
];

const EducationSection: React.FC = () => {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.timeline}>
        <div className={`${styles.capIcon} flex justify-center items-center text-teal-400`}>
          <FaGraduationCap size={40} />
        </div>
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.timelineIcon}>
              <div className={styles.timelineInnerCircle}></div>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemInstitution}>{item.institution}</p>
              <p className={styles.itemDuration}>{item.duration}</p>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          </div>
        ))}
        <div className={styles.timelineEndPoint}></div>
      </div>
    </section>
  );
};

export default EducationSection;
