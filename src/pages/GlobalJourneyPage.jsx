import JourneyHero from '../components/global-journey/JourneyHero';
import VisionBehindFlight from '../components/global-journey/VisionBehindFlight';
import CulturalImmersions from '../components/global-journey/CulturalImmersions';
import ObservationToInitiative from '../components/global-journey/ObservationToInitiative';
import { useSectionReveal } from '../hooks/useSectionReveal';

/**
 * "A Global Journey For Local Action".
 *
 * The source document's third section, "A Global Footprint" (the location list
 * and the world-map placeholder), was removed on request. Everything else is
 * unchanged.
 *
 * The nav bar and footer come from the shared Layout, not from here.
 */
export default function GlobalJourneyPage() {
  useSectionReveal();

  return (
    <main className="bg-background text-on-background font-body-md overflow-x-hidden">
      <JourneyHero />
      <VisionBehindFlight />
      <CulturalImmersions />
      <ObservationToInitiative />
    </main>
  );
}
