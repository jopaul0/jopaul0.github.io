import styles from './SocialLink.module.scss';
import type { SocialLinkProps } from './interface';

export const SocialLink = ({ href, label, label2, icon } : SocialLinkProps) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className={styles.statLink}>
            <div className={styles.statIcon}>
                {icon}
            </div>
            <div className={styles.statContent}>
                <div className={styles.statLabel}>{label}</div>
                <div className={styles.statValue}>{label2}</div>
            </div>
        </a>
    );
}