import { useEffect, useRef, useState } from 'react';

/**
 * One masonry tile.
 *
 * Two animations share a single set of classes so they cannot fight each other:
 * the scroll reveal (fade and rise on first view) and the filter transition
 * (fade and scale when a category is selected). A tile is visible only when it
 * has been revealed and it matches the active filter.
 */
export default function GalleryCard({ item, matches, mounted }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const shown = revealed && matches;

  return (
    <div
      ref={ref}
      aria-hidden={!matches}
      className={`masonry-item gallery-card ${item.category} reveal-on-hover group relative overflow-hidden bg-surface-container transition-all duration-700 ${
        mounted ? '' : 'hidden'
      } ${shown ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
    >
      {item.kind === 'img' ? (
        <img className="w-full h-auto transition-all duration-700" data-alt={item.alt} alt={item.alt} src={item.src} />
      ) : (
        <div
          className={`${item.aspect} bg-cover bg-center transition-all duration-700`}
          data-alt={item.alt}
          role="img"
          aria-label={item.alt}
          style={{ backgroundImage: `url('${item.src}')` }}
        />
      )}

      <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <span className="text-primary font-label-sm text-[10px] tracking-widest mb-2 uppercase">{item.label}</span>
        <h3 className="font-display-md text-body-lg font-bold leading-tight">{item.title}</h3>
      </div>
    </div>
  );
}
