import { useState, useRef, useEffect } from 'react';
import { SimpleButton } from '@/components/SimpleButton';
import styles from './CvDropdown.module.scss';
import type { CvOption } from './interface';

const cvOptions: CvOption[] = [
    { label: 'Currículo Web', filename: 'Curriculo_Web_Joao_Paulo.pdf', path: '/cv_web.pdf' },
    { label: 'Currículo Frontend', filename: 'Curriculo_Frontend_Joao_Paulo.pdf', path: '/cv_frontend.pdf' },
    { label: 'Currículo Backend', filename: 'Curriculo_Backend_Joao_Paulo.pdf', path: '/cv_backend.pdf' },
];

export const CvDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={styles.dropdownContainer} ref={dropdownRef}>
            <SimpleButton
                outline
                label="Download CV ▾"
                onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    {cvOptions.map((cv, index) => (
                        <a
                            key={index}
                            href={cv.path}
                            download={cv.filename}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                        >
                            {cv.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};