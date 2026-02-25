import styles from './SectionTitle.module.scss';
import type { SectionTitleProps } from './interface';

export const SectionTitle = ({ number, title }: SectionTitleProps) => {
  return (
    <div className={styles.titleWrapper}>
      <span className={styles.number}>{number}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};