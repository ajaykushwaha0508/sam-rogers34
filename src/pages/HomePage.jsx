import HeroSection from '../components/HeroSection';
import MyStorySection from '../components/MyStorySection';
import ImpactVerticalsSection from '../components/ImpactVerticalsSection';
import GlobalJourneySection from '../components/GlobalJourneySection';
import LessonsSection from '../components/LessonsSection';
import InitiativeSection from '../components/InitiativeSection';
import StudentExperienceSection from '../components/StudentExperienceSection';
import PhilosophySection from '../components/PhilosophySection';
import VisionSection from '../components/VisionSection';
import WhySchoolsSection from '../components/WhySchoolsSection';
import BeyondBusinessSection from '../components/BeyondBusinessSection';
import FinalCtaSection from '../components/FinalCtaSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * The original landing page. Sections appear in their original order.
 * The nav bar and footer are not here — the shared Layout renders them once.
 */
export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <MyStorySection />
      <ImpactVerticalsSection />
      <GlobalJourneySection />
      <LessonsSection />
      <InitiativeSection />
      <StudentExperienceSection />
      <PhilosophySection />
      <VisionSection />
      <WhySchoolsSection />
      <BeyondBusinessSection />
      <FinalCtaSection />
    </>
  );
}
