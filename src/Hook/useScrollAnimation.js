// src/hooks/useScrollAnimation.js
import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.2) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // toggle añade la clase si isIntersecting es true, y la quita si es false
        if (elementRef.current) {
          elementRef.current.classList.toggle('is-visible', entry.isIntersecting);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return elementRef;
};