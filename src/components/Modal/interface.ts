import type { ReactNode } from 'react';

export interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    isOpen: boolean;
    noHeader?: boolean;
    title?: string;
    footer?: ReactNode;
}