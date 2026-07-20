import { initiativeImages } from '../../data/initiativeImages';
import { useJoinMovementModal } from '../../context/JoinMovementModalContext';

const hero = initiativeImages.heroClassroom;

/** Full-height opening with the cinematic gradient wash. */
export default function InitiativeHero() {
  const { openJoinModal } = useJoinMovementModal();

  return (
    <section className="relative min-h-screen flex items-center pt-24">
      <div className="absolute inset-0 z-0">
        <img
          alt={hero.alt}
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
          src={hero.src}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
      </div>

      <div className="absolute inset-0 cinematic-gradient z-0" />

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
        <div className="max-w-4xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">
            THE FUTURE CITIZEN INITIATIVE
          </span>
          <h1 className="font-headline-xl text-headline-xl leading-none mb-8 tracking-tighter">
            THE FUTURE OF INDIA BEGINS INSIDE <span className="text-primary-container">EVERY CLASSROOM.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Inspiring students to become responsible citizens through global experiences, practical life lessons, and
            real-world leadership.
          </p>

          <div className="flex flex-wrap gap-6">
            <button
              type="button"
              onClick={openJoinModal}
              className="bg-primary-container text-on-primary-container px-10 py-5 font-headline-lg text-[20px] uppercase tracking-widest hover:scale-105 transition-all glow-hover"
            >
              Invite Me to Your School
            </button>
            <button
              type="button"
              onClick={openJoinModal}
              className="border-2 border-on-surface text-on-surface px-10 py-5 font-headline-lg text-[20px] uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all"
            >
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
