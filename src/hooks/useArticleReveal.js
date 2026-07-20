import { useEffect } from 'react';

/**
 * Port of the article detail document's inline reveal script.
 *
 * The source attached one unthrottled `scroll` listener that re-measured
 * every matched element's `getBoundingClientRect()` on every scroll event —
 * on a long article page, that is a lot of forced layout for no benefit once
 * an element has already been revealed. This uses one IntersectionObserver
 * instead: same selector, same effective threshold (roughly the source's
 * `rect.top < innerHeight * 0.9`), same `visible` class name, but each
 * element stops being observed once it has appeared.
 */
export function useArticleReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
