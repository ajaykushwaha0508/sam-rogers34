import BackgroundImage from './ui/BackgroundImage';
import { images } from '@/data/images';
import { alts } from '@/data/alts';

const STOPS = [
  { number: '01', place: 'Australia', line: 'Understanding discipline beyond rules.' },
  { number: '02', place: 'United Kingdom', line: 'Learning how history shapes modern society.' },
  { number: '03', place: 'India', line: 'Returning home with ideas worth sharing.' },
];

export default function GlobalJourneySection() {
  return (
    <section className="relative min-h-screen flex items-center py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-10 uppercase leading-none">
            A Journey of <br />
            <span className="text-primary italic">Observation.</span>
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-12">
            "I travelled to understand why some nations succeed and how India can learn from them."
          </p>

          <div className="space-y-12">
            {STOPS.map((stop) => (
              <div key={stop.number} className="flex gap-8 group">
                <div className="font-headline-lg-mobile text-headline-lg-mobile text-primary/30 group-hover:text-primary transition-colors duration-300">
                  {stop.number}
                </div>
                <div>
                  <h5 className="font-display-md text-display-md uppercase mb-2">{stop.place}</h5>
                  <p className="font-body-md text-on-surface-variant">{stop.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <BackgroundImage
            src={images.sydneyOperaHouse}
            alt={alts.sydneyOperaHouse}
            className="w-full h-80 bg-cover bg-center rounded-lg mt-12"
          />
          <BackgroundImage
            src={images.londonRain}
            alt={alts.londonRain}
            className="w-full h-80 bg-cover bg-center rounded-lg"
          />
          <div className="col-span-2 relative h-96 overflow-hidden rounded-lg">
            <BackgroundImage
              src={images.indianMetropolis}
              alt={alts.indianMetropolis}
              className="w-full h-full bg-cover bg-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
