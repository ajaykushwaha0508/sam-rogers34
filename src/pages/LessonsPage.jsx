import LessonsHero from '../components/lessons/LessonsHero';
import LessonsGrid from '../components/lessons/LessonsGrid';
import QuoteTransition from '../components/lessons/QuoteTransition';
import ShareableCta from '../components/lessons/ShareableCta';
import { useLessonCardReveal } from '../hooks/useLessonCardReveal';

/**
 * "Lessons the World Taught Me".
 * The <main class="pt-32"> wrapper is kept from the source document, since this
 * page's hero has no top padding of its own and sits under the fixed nav bar.
 */
export default function LessonsPage() {
  useLessonCardReveal();

  return (
    <main className="pt-32 bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <LessonsHero />
      <LessonsGrid />
      <QuoteTransition />
      <ShareableCta />
    </main>
  );
}
