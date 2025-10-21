// src/hooks/useScrollAnimation.ts
import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
  // 👇 tell TS that this ref is for an HTMLDivElement
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observerInstance.unobserve(entry.target);
        }
      });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return elementRef;
};

