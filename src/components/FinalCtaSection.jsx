import { useJoinMovementModal } from '../context/JoinMovementModalContext';

export default function FinalCtaSection() {
  const { openJoinModal } = useJoinMovementModal();

  return (
    <section className="py-40 px-margin-mobile md:px-margin-desktop text-center bg-surface-container-highest">
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-12 max-w-4xl mx-auto">
        Let's Build Responsible Future Citizens Together
      </h2>
      <p className="font-body-lg text-2xl mb-16 text-on-surface-variant">
        Ready to bring a global perspective to your institution?
      </p>
      <button
        type="button"
        onClick={openJoinModal}
        className="bg-primary text-on-primary px-16 py-8 font-headline-lg text-[24px] uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20"
      >
        Contact Sam Rogers
      </button>
    </section>
  );
}
