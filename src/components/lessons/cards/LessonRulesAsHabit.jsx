import { images } from '../../../data/lessonImages';

/** Lesson 02 — narrow card, text above, image band below. */
export default function LessonRulesAsHabit() {
  return (
    <div className="md:col-span-4 bg-surface-container lesson-card group flex flex-col border-t-2 border-primary">
      <div className="p-8 flex-1">
        <span className="font-label-sm text-primary mb-4 block">LESSON 02</span>
        <h2 className="font-headline-lg text-3xl mb-6">Following rules is a habit—not a fear.</h2>
        <p className="font-body-md text-on-surface-variant mb-6">
          Standing at a red light in London at 2 AM with no cars in sight, I saw people wait. It wasn't about the fine;
          it was about the rhythm of a functioning society. Discipline is the quiet engine of progress.
        </p>
      </div>

      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          data-alt={images.londonTrafficLight.alt}
          alt={images.londonTrafficLight.alt}
          src={images.londonTrafficLight.src}
        />
      </div>
    </div>
  );
}
