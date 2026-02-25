import styles from './Input.module.scss';
import type { InputProps } from './interface';

export const Input = ({ label, name, type = 'text', placeholder, required }: InputProps) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} required={required} placeholder={placeholder} />
        </div>
    );
}