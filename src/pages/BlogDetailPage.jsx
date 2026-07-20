import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MaterialIcon from '../components/ui/MaterialIcon';
import ArticleHero from '../components/blog-detail/ArticleHero';
import ArticleBody from '../components/blog-detail/ArticleBody';
import ArticleComingSoon from '../components/blog-detail/ArticleComingSoon';
import MoreInsights from '../components/blog-detail/MoreInsights';
import { useArticleReveal } from '../hooks/useArticleReveal';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';

/**
 * "The Journal" — one article.
 * The nav bar and footer come from the shared Layout, not from here.
 */
export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const hasFullArticle = Boolean(post?.article);

  // Only wire up the reveal-on-scroll effect once the article body it targets
  // is actually in the DOM.
  useArticleReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-40 pb-section-gap">
        <h1 className="font-headline-lg text-headline-lg-mobile text-on-surface uppercase mb-6">
          That post isn't here.
        </h1>
        <p className="text-on-surface-variant mb-10">It may have moved, or the link may be incomplete.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase text-primary hover:gap-4 transition-all"
        >
          <MaterialIcon name="arrow_back" /> Back to The Journal
        </Link>
      </section>
    );
  }

  if (!hasFullArticle) {
    return <ArticleComingSoon post={post} />;
  }

  return (
    <>
      <ArticleHero post={post} />
      <ArticleBody post={post} />
      <MoreInsights posts={getRelatedPosts(post.article.relatedSlugs)} />
    </>
  );
}
