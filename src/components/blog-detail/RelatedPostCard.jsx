import { Link } from 'react-router-dom';
import MaterialIcon from '../ui/MaterialIcon';

/** One "More Insights" tile — simpler and uniform, unlike the listing page's bento cards. */
export default function RelatedPostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="relative group overflow-hidden min-h-[400px] cursor-pointer transition-transform duration-300 hover:-translate-y-2 block"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={post.image}
        alt={post.alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-2 block">
          {post.category}
        </span>
        <h4 className="font-display-md text-display-md mb-4 text-on-surface group-hover:text-primary transition-colors">
          {post.title}
        </h4>
        {post.excerpt && (
          <p className="text-on-surface-variant font-body-md line-clamp-3 mb-6">{post.excerpt}</p>
        )}
        <span className="flex items-center gap-2 font-label-sm uppercase text-primary group-hover:gap-4 transition-all">
          EXPLORE <MaterialIcon name="arrow_right_alt" />
        </span>
      </div>
    </Link>
  );
}
