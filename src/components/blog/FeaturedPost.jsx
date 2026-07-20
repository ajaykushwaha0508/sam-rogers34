import { useNavigate } from 'react-router-dom';
import MaterialIcon from '../ui/MaterialIcon';
import { featuredPost } from '../../data/blogPosts';

/**
 * The full-width "Latest Reflection" article above the grid.
 * "Read Article" now navigates to the post's detail page — this was left
 * unwired in the previous pass because no detail route existed yet.
 */
export default function FeaturedPost() {
  const navigate = useNavigate();

  return (
    <main className="px-margin-desktop max-w-container-max mx-auto mb-section-gap">
      <article
        onClick={() => navigate(`/blog/${featuredPost.slug}`)}
        className="relative h-[80vh] w-full overflow-hidden group cursor-pointer"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          data-alt={featuredPost.alt}
          role="img"
          aria-label={featuredPost.alt}
          style={{ backgroundImage: `url('${featuredPost.image}')` }}
        />

        <div className="absolute inset-0 cinematic-overlay" />

        <div className="absolute bottom-0 left-0 p-12 md:p-20 flex flex-col items-start gap-6 max-w-4xl">
          <span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-4 py-1 uppercase tracking-widest">
            {featuredPost.badge}
          </span>

          <h2 className="font-headline-lg text-headline-lg leading-tight text-on-surface group-hover:text-primary transition-colors duration-300">
            {featuredPost.title}
          </h2>

          <p className="font-body-lg text-on-surface-variant max-w-2xl">{featuredPost.excerpt}</p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/blog/${featuredPost.slug}`);
            }}
            className="bg-primary text-on-primary font-headline-lg text-body-lg px-12 py-4 uppercase tracking-wider flex items-center gap-3 transition-all hover:gap-6"
          >
            {featuredPost.cta}
            <MaterialIcon name="arrow_forward" />
          </button>
        </div>
      </article>
    </main>
  );
}
