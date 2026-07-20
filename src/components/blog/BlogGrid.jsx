import { useState } from 'react';
import BlogCard from './BlogCard';
import { blogPosts, INITIAL_COUNT, LOAD_STEP } from '../../data/blogPosts';

/**
 * The bento grid plus a working "Load Older Reflections" button.
 *
 * The source document's button had no handler at all. Here the number of
 * visible cards is React state: each click reveals `LOAD_STEP` more, and the
 * button removes itself once every post is on screen rather than sitting there
 * doing nothing.
 */
export default function BlogGrid() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visiblePosts = blogPosts.slice(0, visibleCount);
  const remaining = blogPosts.length - visibleCount;

  return (
    <section className="px-margin-desktop max-w-container-max mx-auto mb-section-gap">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 bg-primary" />
        <h3 className="font-headline-lg text-display-md uppercase tracking-tight">Recent Insights</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {visiblePosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-20 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => Math.min(count + LOAD_STEP, blogPosts.length))}
            className="border-2 border-primary text-primary px-12 py-4 font-headline-lg text-body-lg uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300"
          >
            Load Older Reflections
          </button>
        </div>
      )}

      {/* Announce the change for screen reader users, who get no visual cue. */}
      <p className="sr-only" role="status" aria-live="polite">
        Showing {visiblePosts.length} of {blogPosts.length} reflections.
      </p>
    </section>
  );
}
