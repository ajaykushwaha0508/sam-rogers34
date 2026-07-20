import { Link } from 'react-router-dom';
import MaterialIcon from '../ui/MaterialIcon';
import RelatedPostCard from './RelatedPostCard';

/** "More Insights" — related posts plus a link back to the full listing. */
export default function MoreInsights({ posts }) {
  if (!posts.length) return null;

  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline-lg text-display-md text-on-surface uppercase mb-4">More Insights</h2>
            <div className="h-1 w-24 bg-primary" />
          </div>

          <Link
            to="/blog"
            className="text-primary font-label-sm text-label-sm uppercase flex items-center gap-2 hover:gap-4 transition-all group"
          >
            Explore All <MaterialIcon name="arrow_forward" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {posts.map((post) => (
            <RelatedPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
