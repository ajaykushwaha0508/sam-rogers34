import MaterialIcon from '../ui/MaterialIcon';
import { globalJourneyImages } from '../../data/globalJourneyImages';

const hero = globalJourneyImages.heroAirplaneWing;

/** Full-height opening banner with the bouncing scroll cue. */
export default function JourneyHero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <div
          className="w-full h-full bg-cover bg-center grayscale contrast-125"
          data-alt={hero.alt}
          style={{ backgroundImage: `url('${hero.src}')` }}
        />
      </div>

      <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-5xl">
        <h1 className="font-headline-xl text-headline-xl uppercase leading-none mb-6">
          A <span className="text-primary">Global Journey</span>
          <br />
          For Local Action
        </h1>
        <p className="font-display-md text-display-md max-w-3xl mx-auto opacity-90">
          I travelled to understand why some nations succeed and how India can learn from them.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <MaterialIcon name="expand_more" className="text-primary text-4xl" />
      </div>
    </header>
  );
}
