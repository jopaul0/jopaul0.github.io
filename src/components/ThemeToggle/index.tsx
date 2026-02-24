import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      className={`${styles.container} ${isDark ? styles.active : ''}`} 
      onClick={toggleTheme}
      title="Alternar Tema"
    >
      <span className={styles.label}>{isDark ? 'Dark' : 'Light'}</span>
      <div className={styles.switch} />
    </div>
  );
};