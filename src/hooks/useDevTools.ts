import { useEffect, useState } from 'react';

export const useDevTools = () => {
  const [isDetected, setIsDetected] = useState(false);

  useEffect(() => {
    const detect = () => {
      const threshold = 160;
      // Verifica se a diferença entre a largura da janela e a largura interna é grande
      // Isso indica que o console lateral/inferior está aberto
      if (window.outerWidth - window.innerWidth > threshold || 
          window.outerHeight - window.innerHeight > threshold) {
        setIsDetected(true);
      }
    };

    window.addEventListener('resize', detect);
    detect();

    return () => window.removeEventListener('resize', detect);
  }, []);

  return isDetected;
};