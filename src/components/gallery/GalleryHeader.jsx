/** Page masthead. */
export default function GalleryHeader() {
  return (
    <header className="pt-40 pb-20 px-6 md:px-margin-desktop max-w-container-max mx-auto">
      <div className="border-l-4 border-primary pl-6 mb-8">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Visual Documentary</span>
        <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl leading-none mt-4 uppercase">
          Chronicles of a <br />
          <span className="text-primary">Movement</span>
        </h1>
      </div>

      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        A new perspective on the journey from Chittorgarh to the world. Capturing the spirit of global leadership and
        the heartbeat of India's future classrooms.
      </p>
    </header>
  );
}
