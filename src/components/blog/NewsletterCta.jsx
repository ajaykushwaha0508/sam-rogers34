import { useJoinMovementModal } from '../../context/JoinMovementModalContext';

/**
 * Newsletter block.
 *
 * Note: the source document's <form> contained only a submit button — there was
 * no email input in the markup. That is reproduced as-is; "JOIN THE MOVEMENT"
 * now opens the shared contact modal, since that's the only working way this
 * page can capture a message until a real newsletter signup exists.
 */
export default function NewsletterCta() {
  const { openJoinModal } = useJoinMovementModal();

  return (
    <section className="bg-surface-container-low py-24 px-margin-desktop mb-section-gap">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="font-headline-lg text-headline-lg mb-6">JOIN THE CONVERSATION</h2>
          <p className="text-body-lg text-on-surface-variant">
            Monthly reflections on global leadership and grassroots mentorship delivered directly to your inbox. No
            noise, just insight.
          </p>
        </div>

        <form className="w-full max-w-md flex flex-col gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
          <button
            onClick={openJoinModal}
            className="bg-primary text-on-primary py-6 px-12 font-headline-lg text-display-md uppercase tracking-widest transition-all duration-300 glow-button hover:scale-105 w-full"
            type="button"
          >
            JOIN THE MOVEMENT
          </button>
        </form>
      </div>
    </section>
  );
}
