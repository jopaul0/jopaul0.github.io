import styles from './Section.module.scss';
import type { SectionProps } from './interface';

export const Section = ({ children, id, sectionClassName = "", containerClassName ="" }: SectionProps) => {
  return (
    <section id={id} className={`${styles.section} ${sectionClassName}`}>
      <div className={`${styles.container} ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};