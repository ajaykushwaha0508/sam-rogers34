/** Closing call to action on the primary pink field. */
export default function ObservationToInitiative() {
  return (
    <section className="vertical-rhythm bg-primary text-on-primary">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center space-y-12">
        <div className="space-y-4">
          <span className="font-label-sm text-label-sm uppercase tracking-widest bg-on-primary text-primary px-4 py-1">
            The Climax
          </span>
          <h2 className="font-headline-xl text-headline-xl uppercase text-white leading-none">
            From Observation
            <br />
            To <span className="text-on-primary-container">Initiative</span>
          </h2>
        </div>

        <p className="font-display-md text-display-md max-w-3xl mx-auto text-on-primary-container">
          All these miles travelled and lessons learned converged into one single purpose: The Future Citizen
          Initiative.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            className="bg-black text-white px-10 py-5 font-headline-lg text-display-md uppercase hover:scale-105 transition-all bloom-effect"
            href="#"
          >
            Explore the Lessons
          </a>
          <a
            className="border-2 border-black text-black px-10 py-5 font-headline-lg text-display-md uppercase hover:bg-black hover:text-white transition-all"
            href="#"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
}
