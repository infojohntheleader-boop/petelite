'use client';

import { useEffect, useRef } from 'react';

export function ScrollAnimator() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('[data-scroll]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <div ref={ref} />;
}
