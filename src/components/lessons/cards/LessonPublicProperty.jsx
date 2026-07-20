import { useState } from 'react';
import MaterialIcon from '../../ui/MaterialIcon';
import { images } from '../../../data/lessonImages';
import { shareOrCopy } from '../../../utils/share';

const INSIGHT = 'People protect public property because they believe it belongs to them.';

/** Lesson 01 — wide card, text left, square image right. */
export default function LessonPublicProperty() {
  const [status, setStatus] = useState(null);

  const share = async () => {
    const result = await shareOrCopy({ title: 'A lesson from Sam Rogers', text: INSIGHT });
    if (result === 'shared' || result === 'copied') {
      setStatus(result);
      setTimeout(() => setStatus(null), 2500);
    }
  };

  return (
    <div className="md:col-span-8 bg-surface-container lesson-card group relative overflow-hidden border-t-2 border-primary">
      <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <span className="font-label-sm text-primary mb-4 block">LESSON 01</span>
          <h2 className="font-headline-lg text-3xl md:text-headline-lg-mobile mb-6 leading-tight">{INSIGHT}</h2>
          <p className="font-body-md text-on-surface-variant mb-8">
            In Tokyo, I watched a commuter pick up a stray wrapper that wasn't theirs. When I asked why, they didn't
            understand the question. "It's my city," they said. In India, we treat our homes like temples and our
            streets like bins. The shift happens when the 'My' expands beyond the front door.
          </p>
          <button
            type="button"
            onClick={share}
            className="border-2 border-white text-white font-headline-lg text-label-sm px-6 py-2 uppercase hover:bg-white hover:text-surface transition-all flex items-center gap-2"
          >
            {status === 'copied' ? 'Copied to clipboard' : status === 'shared' ? 'Shared' : 'Share Insight'}
            <MaterialIcon name="share" className="text-[16px]" />
          </button>
        </div>

        <div className="w-full md:w-1/3 aspect-square relative shrink-0">
          <img
            className="w-full h-full object-cover"
            data-alt={images.tokyoStation.alt}
            alt={images.tokyoStation.alt}
            src={images.tokyoStation.src}
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
}
