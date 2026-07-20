import { images } from '../../../data/lessonImages';
import { useJoinMovementModal } from '../../../context/JoinMovementModalContext';

/**
 * Lesson 04 — wide card, reversed row so the image sits on the left.
 *
 * No PDF exists for "Download Reflection Guide" to actually download. Rather
 * than fake a file, this opens the Join the Movement modal instead — a real,
 * working action in the same spirit as the label, until an actual guide is
 * produced and this can become a real <a href="..." download> link.
 */
export default function LessonBrandAmbassadors() {
  const { openJoinModal } = useJoinMovementModal();

  return (
    <div className="md:col-span-8 bg-surface-container lesson-card group relative overflow-hidden border-t-2 border-primary">
      <div className="p-8 md:p-12 flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="flex-1">
          <span className="font-label-sm text-primary mb-4 block">LESSON 04</span>
          <h2 className="font-headline-lg text-3xl md:text-headline-lg-mobile mb-6 leading-tight">
            Citizens are the real brand ambassadors of a country.
          </h2>
          <p className="font-body-md text-on-surface-variant mb-8">
            When I was in Australia, people didn't judge India by our GDP; they judged us by my behavior and the
            behavior of every Indian they met. Every one of us carries the flag, whether we realize it or not. We are
            the marketing department for our nation's reputation.
          </p>
          <button
            type="button"
            onClick={openJoinModal}
            className="bg-primary text-on-primary font-headline-lg text-label-sm px-8 py-3 uppercase hover:scale-105 transition-all"
          >
            Download Reflection Guide
          </button>
        </div>

        <div className="w-full md:w-2/5 aspect-video relative shrink-0">
          <img
            className="w-full h-full object-cover"
            data-alt={images.indianStudents.alt}
            alt={images.indianStudents.alt}
            src={images.indianStudents.src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
        </div>
      </div>
    </div>
  );
}
