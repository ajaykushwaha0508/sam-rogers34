import { useEffect } from 'react';

/**
 * Port of the original inline reveal script.
 * Same selector, same threshold, same class names — it adds `reveal` to every
 * section and glass card, then `active` once the element scrolls into view.
 * Runs after mount so the DOM React renders is already in place.
 */
export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('section, .glass-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 },
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
