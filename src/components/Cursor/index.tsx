import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.scss';

export const Cursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            pos.current.mx = e.clientX;
            pos.current.my = e.clientY;

            if (dotRef.current) {
                dotRef.current.style.left = `${pos.current.mx}px`;
                dotRef.current.style.top = `${pos.current.my}px`;
            }

            const target = e.target as HTMLElement;
            setIsActive(!!(target.closest('a') || target.closest('button')));
        };

        const animRing = () => {
            pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12;
            pos.current.ry += (pos.current.my - pos.current.ry) * 0.12;

            if (ringRef.current) {
                ringRef.current.style.left = `${pos.current.rx}px`;
                ringRef.current.style.top = `${pos.current.ry}px`;
            }

            requestAnimationFrame(animRing);
        };

        const animationId = requestAnimationFrame(animRing);
        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className={`${styles.dot} ${isActive ? styles.active : ''}`}
            />
            <div
                ref={ringRef}
                className={`${styles.ring} ${isActive ? styles.active : ''}`}
            />
        </>
    );
};