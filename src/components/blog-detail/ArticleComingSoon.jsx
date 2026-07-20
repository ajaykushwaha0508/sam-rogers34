import { Link } from 'react-router-dom';
import MaterialIcon from '../ui/MaterialIcon';

/**
 * Shown for any post reached at /blog/:slug that doesn't carry full article
 * content (everything except the one featured post — see the README for why).
 * The excerpt and image still render, so the visit isn't wasted, and the path
 * back to the listing is obvious rather than a dead end.
 */
export default function ArticleComingSoon({ post }) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-40 pb-section-gap">
      <div className="max-w-3xl">
        <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-4 block">
          {post.category}
        </span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase leading-tight mb-8">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">{post.excerpt}</p>
        )}

        <div className="flex items-center gap-3 text-on-surface-variant border-t border-outline-variant pt-8">
          <MaterialIcon name="draft" />
          <p className="font-label-sm text-label-sm uppercase tracking-widest">
            The full article isn't published yet — check back soon.
          </p>
        </div>

        <Link
          to="/blog"
          className="mt-10 inline-flex items-center gap-2 font-label-sm text-label-sm uppercase text-primary hover:gap-4 transition-all"
        >
          <MaterialIcon name="arrow_back" /> Back to The Journal
        </Link>
      </div>
    </section>
  );
}
