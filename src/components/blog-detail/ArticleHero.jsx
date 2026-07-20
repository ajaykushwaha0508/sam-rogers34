import MaterialIcon from '../ui/MaterialIcon';

/**
 * Full-bleed article hero: badge, headline, date and read time.
 *
 * Uses `post.image` / `post.alt` — the same asset and description shown on the
 * post's listing card — rather than a separate hero image field, so a post can
 * never show one photo on the Blog page and a different one on its own detail
 * page.
 */
export default function ArticleHero({ post }) {
  const { article } = post;

  return (
    <section className="relative h-[90vh] flex items-end pb-section-gap overflow-hidden bg-fixed">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <div
          className="w-full h-full transform scale-105 hover:scale-100 transition-transform duration-[10000ms] bg-cover bg-center bg-no-repeat"
          data-alt={post.alt}
          role="img"
          aria-label={post.alt}
          style={{ backgroundImage: `url("${post.image}")` }}
        />
      </div>

      <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-4xl">
          <span className="inline-block bg-primary px-3 py-1 text-on-primary font-label-sm text-label-sm uppercase mb-6 tracking-widest">
            {article.detailBadge}
          </span>

          <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary-container leading-none mb-8 text-glow-pink uppercase">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-on-surface-variant">
            <div className="flex items-center gap-2">
              <MaterialIcon name="calendar_today" className="text-[20px]" />
              <span className="font-label-sm text-label-sm uppercase">{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MaterialIcon name="schedule" className="text-[20px]" />
              <span className="font-label-sm text-label-sm uppercase">{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
