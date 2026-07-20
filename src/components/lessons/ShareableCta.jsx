import { useJoinMovementModal } from '../../context/JoinMovementModalContext';

const SHARE_TEXT = 'Lessons the world taught Sam Rogers — and what they mean for India.';

export default function ShareableCta() {
  const { openJoinModal } = useJoinMovementModal();

  const shareOnLinkedIn = () => {
    const url = new URL('https://www.linkedin.com/sharing/share-offsite/');
    url.searchParams.set('url', window.location.href);
    window.open(url.toString(), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
      <div className="bg-primary text-on-primary-container p-12 md:p-24 flex flex-col items-center text-center">
        <h3 className="font-headline-lg text-4xl md:text-6xl uppercase mb-6">Which lesson resonates with you?</h3>
        <p className="font-body-lg text-on-primary-container/80 mb-10 max-w-2xl">
          Change begins with a single shared thought. Share one of these insights with your community and help build the
          future of India.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={shareOnLinkedIn}
            className="bg-on-primary-container text-primary font-headline-lg px-10 py-4 uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Share on LinkedIn
          </button>
          <button
            type="button"
            onClick={openJoinModal}
            className="border-2 border-on-primary-container text-on-primary-container font-headline-lg px-10 py-4 uppercase tracking-widest hover:bg-on-primary-container hover:text-primary transition-all"
          >
            Invite to Your School
          </button>
        </div>
      </div>
    </section>
  );
}
