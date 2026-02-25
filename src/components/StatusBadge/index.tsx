import styles from './StatusBadge.module.scss';
import type { StatusBadgeProps } from './interface';


export const StatusBadge = ({ 
  label = "Open to work", 
  variant = 'default', 
  noDot = false,
  className = "" 
}: StatusBadgeProps) => {
  return (
    <div className={`${styles.badge} ${styles[variant]} ${className}`}>
      <span className={`${styles.dot} ${noDot ? styles.noDot : ""}`}></span>
      {label}
    </div>
  );
};