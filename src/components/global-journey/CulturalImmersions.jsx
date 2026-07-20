import DestinationCard from './DestinationCard';
import { globalJourneyImages } from '../../data/globalJourneyImages';

const DESTINATIONS = [
  {
    image: globalJourneyImages.australiaStreetscape,
    label: 'Australia',
    title: 'Discipline Beyond Rules',
    body: "Understanding how intrinsic responsibility shapes a nation's public life and infrastructure.",
  },
  {
    image: globalJourneyImages.ukWestminster,
    label: 'United Kingdom',
    title: 'Legacy & Modernity',
    body: 'Learning how a deep respect for history provides a stable foundation for modern societal progress.',
  },
  {
    image: globalJourneyImages.indiaClassroom,
    label: 'India',
    title: 'Returning Home',
    body: 'Applying global lessons to local classrooms to empower the future citizens of our nation.',
  },
];

/** Section 2 — three destination tiles. */
export default function CulturalImmersions() {
  return (
    <section className="bg-surface-container-lowest vertical-rhythm">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">
            Cultural <span className="text-primary">Immersions</span>
          </h2>
          <p className="text-on-surface-variant font-display-md max-w-md text-right">
            Key insights gathered from across the globe, distilled for the Indian classroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {DESTINATIONS.map((d) => (
            <DestinationCard key={d.label} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}
