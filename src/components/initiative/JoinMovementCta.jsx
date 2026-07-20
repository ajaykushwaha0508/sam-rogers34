import { useJoinMovementModal } from '../../context/JoinMovementModalContext';

/** Closing call to action on the primary container field. */
export default function JoinMovementCta() {
  const { openJoinModal } = useJoinMovementModal();

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-primary-container text-on-primary-container relative overflow-hidden">
      <div className="max-w-container-max mx-auto relative z-10 text-center">
        <h2 className="font-headline-xl text-headline-lg leading-none mb-8 tracking-tighter">
          BUILDING A STRONGER NATION, <br /> ONE CLASSROOM AT A TIME.
        </h2>
        <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-12 text-on-primary-container/90">
          Whether you're a school principal, educator, or parent—let's prepare the next generation to be responsible
          citizens.
        </p>
        <button
          type="button"
          onClick={openJoinModal}
          className="bg-surface text-on-surface px-12 py-6 font-headline-lg text-2xl uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl"
        >
          JOIN THE MOVEMENT
        </button>
      </div>
    </section>
  );
}
