import { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard';
import { galleryItems } from '../../data/galleryItems';

const ALL_IDS = galleryItems.map((item) => item.id);
const EXIT_MS = 500; // matches the source document's 500ms hide delay

/**
 * Masonry grid with working category filtering.
 *
 * Matching tiles are made visible immediately, then fade in. Non-matching tiles
 * fade out first and are only removed from layout once the transition has
 * finished, which is the behaviour the original script aimed for.
 */
export default function GalleryGrid({ category }) {
  const [mountedIds, setMountedIds] = useState(ALL_IDS);

  useEffect(() => {
    const matching = galleryItems.filter((i) => category === 'all' || i.category === category).map((i) => i.id);

    // Show incoming tiles at once so they can transition in.
    setMountedIds((prev) => Array.from(new Set([...prev, ...matching])));

    // Drop outgoing tiles from layout after they have faded.
    const timer = setTimeout(() => setMountedIds(matching), EXIT_MS);
    return () => clearTimeout(timer);
  }, [category]);

  return (
    <main className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
      <div className="masonry-grid" id="gallery-container">
        {galleryItems.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
            matches={category === 'all' || item.category === category}
            mounted={mountedIds.includes(item.id)}
          />
        ))}
      </div>
    </main>
  );
}
