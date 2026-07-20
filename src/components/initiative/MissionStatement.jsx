import { initiativeImages } from '../../data/initiativeImages';

const portrait = initiativeImages.missionPortrait;

/** "Why I started this mission" — text left, framed portrait right. */
export default function MissionStatement() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-gutter items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-headline-lg text-headline-lg leading-tight mb-8">
            WHY I STARTED <br /> THIS MISSION
          </h2>

          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Every international trip left me inspired. But every flight back to India left me with one question:{' '}
              <span className="text-on-surface font-bold italic">
                What if our students could learn these values much earlier?
              </span>
            </p>
            <p>
              Instead of waiting for them to become professionals... Why not introduce these ideas while they are still
              in school? Today, I work towards creating awareness among students about civic responsibility,
              environmental consciousness, and nation-building.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 text-on-surface italic font-display-md">
              "Because tomorrow's India is sitting inside today's classrooms."
            </blockquote>
          </div>
        </div>

        <div className="order-1 md:order-2 relative aspect-square">
          <div className="absolute -inset-4 bg-primary-container/10 blur-3xl rounded-full" />
          <img
            className="relative z-10 w-full h-full object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700"
            data-alt={portrait.alt}
            alt={portrait.alt}
            src={portrait.src}
          />
          {/* Corner bracket, drawn as two rules. */}
          <div className="absolute top-0 left-0 w-24 h-1 bg-primary" />
          <div className="absolute top-0 left-0 w-1 h-24 bg-primary" />
        </div>
      </div>
    </section>
  );
}
