import type { ReactNode } from 'react';

export interface NavLinkProps{
    children: ReactNode;
    className?: string;
    href: string;
    target?: string;
}