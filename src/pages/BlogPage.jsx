import BlogHeader from '../components/blog/BlogHeader';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogGrid from '../components/blog/BlogGrid';
import NewsletterCta from '../components/blog/NewsletterCta';

/**
 * "The Journal".
 * The nav bar and footer come from the shared Layout, not from here.
 */
export default function BlogPage() {
  return (
    <>
      <BlogHeader />
      <FeaturedPost />
      <BlogGrid />
      <NewsletterCta />
    </>
  );
}
