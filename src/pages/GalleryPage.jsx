import { useState } from 'react';
import GalleryHeader from '../components/gallery/GalleryHeader';
import GalleryFilterBar from '../components/gallery/GalleryFilterBar';
import GalleryGrid from '../components/gallery/GalleryGrid';
import MomentOfImpact from '../components/gallery/MomentOfImpact';
import GalleryCta from '../components/gallery/GalleryCta';

/**
 * "Chronicles of a Movement".
 *
 * The active filter category lives here and flows down to the filter bar and
 * the grid, which is what makes the category buttons actually work.
 *
 * The nav bar and footer come from the shared Layout, not from here.
 */
export default function GalleryPage() {
  const [category, setCategory] = useState('all');

  return (
    <>
      <GalleryHeader />
      <GalleryFilterBar active={category} onChange={setCategory} />
      <GalleryGrid category={category} />
      <MomentOfImpact />
      <GalleryCta />
    </>
  );
}
