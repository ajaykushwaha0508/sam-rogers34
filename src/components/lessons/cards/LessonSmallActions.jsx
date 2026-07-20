import { images } from '../../../data/lessonImages';

/** Lesson 03 — narrow card, image above, text below. */
export default function LessonSmallActions() {
  return (
    <div className="md:col-span-4 bg-surface-container lesson-card group border-t-2 border-primary">
      <div className="h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          data-alt={images.seedlingAsphalt.alt}
          alt={images.seedlingAsphalt.alt}
          src={images.seedlingAsphalt.src}
        />
      </div>

      <div className="p-8">
        <span className="font-label-sm text-primary mb-4 block">LESSON 03</span>
        <h2 className="font-headline-lg text-3xl mb-4">Small actions create great societies.</h2>
        <p className="font-body-md text-on-surface-variant">
          Nation-building isn't always about massive policy shifts; it's about the million tiny decisions we make every
          day—from waste disposal to helping a neighbor.
        </p>
      </div>
    </div>
  );
}
