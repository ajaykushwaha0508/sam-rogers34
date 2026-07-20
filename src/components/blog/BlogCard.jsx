import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from '../ui/MaterialIcon';

/**
 * One bento tile.
 *
 * The source document had two treatments: most cards use a bottom-up black
 * gradient and carry an excerpt, while the "Student Awareness" card uses a flat
 * dark wash that lightens on hover and has no excerpt. Both are preserved.
 *
 * The reveal-on-scroll effect that lived in the page's inline script now runs
 * per card, so cards appended by "Load Older Reflections" animate in too — the
 * original script only ever observed the cards present at first paint.
 *
 * "EXPLORE" now links to the post's detail page rather than "#".
 */
export default function BlogCard({ post }) {
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

  const isSolid = post.variant === 'solid';

  return (
    <div
      ref={ref}
      className={`${post.span} bento-card relative group overflow-hidden min-h-[400px] cursor-pointer ${
        post.accent ?? ''
      } transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <img
        className={`absolute inset-0 w-full h-full object-cover transition-transform ${
          isSolid ? 'duration-500 group-hover:scale-110' : 'duration-700 group-hover:scale-105'
        }`}
        data-alt={post.alt}
        alt={post.alt}
        src={post.image}
      />

      <div
        className={
          isSolid
            ? 'absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors'
            : 'absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent'
        }
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-2 block">
          {post.category}
        </span>

        <h4
          className={`${post.titleFont} text-display-md text-on-surface ${
            isSolid ? '' : 'mb-4 group-hover:text-primary transition-colors'
          }`}
        >
          {post.title}
        </h4>

        {post.excerpt && (
          <p className={`text-on-surface-variant font-body-md mb-6 ${post.clampExcerpt ? 'line-clamp-3 max-w-2xl' : ''}`}>
            {post.excerpt}
          </p>
        )}

        <Link
          to={`/blog/${post.slug}`}
          className={`flex items-center gap-2 font-label-sm uppercase text-primary hover:gap-4 transition-all ${
            isSolid ? 'mt-6' : ''
          }`}
        >
          EXPLORE <MaterialIcon name="arrow_right_alt" />
        </Link>
      </div>
    </div>
  );
}
