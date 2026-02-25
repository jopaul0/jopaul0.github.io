import { useEffect, useRef, useState } from 'react';
import styles from './Section.module.scss';
import type { SectionProps } from './interface';

export const Section = ({ 
  children, 
  id, 
  sectionClassName = "", 
  containerClassName = "",
  noGlow = false
}: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`${styles.section} ${sectionClassName} ${isVisible ? styles.visible : ''} ${noGlow ? styles.noGlow : ''}`}
    >
      {!noGlow && <div className={styles.glowRight} />} 
      
      <div className={`${styles.container} ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};