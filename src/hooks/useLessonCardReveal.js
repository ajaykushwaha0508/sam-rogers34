import { useEffect } from 'react';

/**
 * Port of the original inline scroll script.
 *
 * Every .lesson-card starts hidden and shifted down, then reveals once its top
 * edge passes 100px above the viewport bottom. Same threshold, same inline
 * styles, same 0.8s ease-out transition as the original.
 *
 * The original never removed its listener; this one does on unmount.
 */
export function useLessonCardReveal() {
  useEffect(() => {
    const cards = document.querySelectorAll('.lesson-card');

    // Initialise cards state.
    cards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.8s ease-out';
    });

    const onScroll = () => {
      document.querySelectorAll('.lesson-card').forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    };

    document.addEventListener('scroll', onScroll);

    // Trigger the first few, as the original did.
    onScroll();

    return () => document.removeEventListener('scroll', onScroll);
  }, []);
}
