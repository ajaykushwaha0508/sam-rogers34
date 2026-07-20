import { useEffect } from 'react';

/**
 * Port of the Global Journey document's inline reveal script.
 *
 * Each <section> starts faded and offset, then transitions in when it crosses
 * the 0.1 intersection threshold. Same class names and threshold as the source.
 *
 * Scoped to the page component that calls it, so it never touches the markup
 * belonging to the other pages, which use their own reveal mechanisms.
 */
export function useSectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
}
