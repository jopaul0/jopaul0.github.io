import type { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  id?: string;
  sectionClassName?: string;
  containerClassName?: string;
}