/** Editorial body: drop-cap opener, a pull quote, a subheading, and tags. */
export default function ArticleBody({ post }) {
  const { article } = post;

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
      <div className="space-y-12 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        <p className="reveal-on-scroll first-letter:text-7xl first-letter:font-headline-lg first-letter:text-primary first-letter:mr-3 first-letter:float-left">
          {article.intro}
        </p>

        {article.body.map((paragraph) => (
          <p key={paragraph.slice(0, 30)} className="reveal-on-scroll">
            {paragraph}
          </p>
        ))}

        <div className="py-12 border-y border-outline-variant/30 my-16 group">
          <blockquote className="reveal-on-scroll font-headline-lg text-display-md md:text-headline-lg text-on-surface italic relative text-center">
            <span aria-hidden="true" className="absolute -top-8 left-0 text-primary opacity-20 font-headline-xl">
              "
            </span>
            {article.pullQuote}
            <span aria-hidden="true" className="absolute -bottom-12 right-0 text-primary opacity-20 font-headline-xl">
              "
            </span>
          </blockquote>
        </div>

        <h3 className="reveal-on-scroll font-display-md text-display-md text-on-surface pt-8">
          {article.subheading}
        </h3>

        {article.closing.map((paragraph) => (
          <p key={paragraph.slice(0, 30)} className="reveal-on-scroll">
            {paragraph}
          </p>
        ))}

        <div className="flex flex-wrap gap-4 pt-12">
          {article.tags.map((tag) => (
            <span key={tag} className="px-4 py-2 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
