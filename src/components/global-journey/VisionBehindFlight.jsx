import { globalJourneyImages } from '../../data/globalJourneyImages';

const portrait = globalJourneyImages.visionPortrait;

/** Section 1 — portrait left, the question that started everything right. */
export default function VisionBehindFlight() {
  return (
    <section className="vertical-rhythm px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div
            className="relative aspect-[4/5] bg-cover bg-center grayscale rounded-sm border border-white/10"
            data-alt={portrait.alt}
            style={{ backgroundImage: `url('${portrait.src}')` }}
          />
        </div>

        <div className="space-y-8">
          <h2 className="font-headline-lg text-headline-lg leading-tight uppercase">
            The Vision <span className="text-primary">Behind</span> The Flight
          </h2>

          <div className="space-y-6">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Every international trip left me inspired. Seeing systems that work, communities that thrive, and
              discipline that feels second nature.
            </p>
            <p className="font-body-lg text-body-lg text-primary border-l-4 border-primary pl-6 italic">
              "But every flight back to India left me with one question: What if our students could learn these values
              much earlier?"
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              I realized that nation-building doesn't start in government offices; it starts in the hearts and minds of
              young students sitting in classrooms today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
