// src/hooks/useScrollAnimation.ts
import { useEffect, useRef } from 'react';

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export const useScrollAnimation = ({ threshold = 0.08, rootMargin = '0px 0px -120px 0px', once = true }: Options = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (once && observer) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin, once]);

  return elementRef;
};
