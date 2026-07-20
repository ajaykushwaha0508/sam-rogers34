import { useJoinMovementModal } from '../../context/JoinMovementModalContext';

/** Closing call to action. */
export default function GalleryCta() {
  const { openJoinModal } = useJoinMovementModal();

  return (
    <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto py-section-gap border-t border-outline-variant">
      <div className="bg-surface-container-high p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary" />

        <div className="relative z-10">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-6">
            Join the Movement
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Whether you're a school principal, educator, or organization, I'd be honored to contribute to your students'
            journey. Let's prepare the next generation together.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              type="button"
              onClick={openJoinModal}
              className="bg-primary text-on-primary px-10 py-4 font-headline-lg text-label-sm uppercase tracking-widest primary-glow hover:scale-105 transition-transform duration-300"
            >
              Invite Me to Your School
            </button>
            <button
              type="button"
              onClick={openJoinModal}
              className="border-2 border-on-surface text-on-surface px-10 py-4 font-headline-lg text-label-sm uppercase tracking-widest hover:bg-on-surface hover:text-background transition-colors duration-300"
            >
              Contact for Collaborations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
