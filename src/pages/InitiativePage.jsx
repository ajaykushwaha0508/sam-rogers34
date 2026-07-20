import InitiativeHero from '../components/initiative/InitiativeHero';
import MissionStatement from '../components/initiative/MissionStatement';
import VisionBento from '../components/initiative/VisionBento';
import BeyondTextbooks from '../components/initiative/BeyondTextbooks';
import LessonsHighlights from '../components/initiative/LessonsHighlights';
import JoinMovementCta from '../components/initiative/JoinMovementCta';
import { useButtonPressFeedback } from '../hooks/useButtonPressFeedback';

/**
 * "The Future Citizen Initiative".
 * The nav bar and footer come from the shared Layout, not from here.
 */
export default function InitiativePage() {
  useButtonPressFeedback();

  return (
    <main>
      <InitiativeHero />
      <MissionStatement />
      <VisionBento />
      <BeyondTextbooks />
      <LessonsHighlights />
      <JoinMovementCta />
    </main>
  );
}
