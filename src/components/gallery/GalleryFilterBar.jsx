import { FILTERS } from '../../data/galleryItems';

/**
 * Category filter. The source used inline onclick handlers and read the global
 * `event` object; here the active category is React state passed down from the
 * page, so the buttons are genuinely wired up.
 */
export default function GalleryFilterBar({ active, onChange }) {
  return (
    <section className="sticky top-[88px] z-40 bg-background/90 backdrop-blur-md py-6 px-6 md:px-margin-desktop mb-12">
      <div
        className="max-w-container-max mx-auto flex flex-wrap gap-6 items-center justify-start border-b border-outline-variant pb-4"
        role="group"
        aria-label="Filter gallery by category"
      >
        {FILTERS.map((filter) => {
          const isActive = filter.id === active;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onChange(filter.id)}
              aria-pressed={isActive}
              className={`filter-btn font-label-sm text-label-sm uppercase tracking-widest px-2 pb-1 transition-all ${
                isActive ? 'active text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
