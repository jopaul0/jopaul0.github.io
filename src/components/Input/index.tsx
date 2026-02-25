import styles from './Input.module.scss';
import type { InputTextProps, TextAreaProps } from './interface';

export const InputText = ({ label, name, type = 'text', placeholder, required, error }: InputTextProps) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} required={required} placeholder={placeholder} />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
}

export const TextArea = ({ label, name, placeholder, required }: TextAreaProps) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name} required={required} placeholder={placeholder} />
        </div>
    );
}