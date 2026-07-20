import { useJoinMovementModal } from '../context/JoinMovementModalContext';
import { images } from '@/data/images';
import { alts } from '@/data/alts';

export default function HeroSection() {
  const { openJoinModal } = useJoinMovementModal();

  const scrollToMission = () => {
    document.getElementById('my-story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-center items-start pt-32 pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-40"
          data-alt={alts.heroPortrait}
          style={{ backgroundImage: `url('${images.heroPortrait}')` }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-1" />

      <div className="relative z-10 max-w-4xl space-y-6">
        <div className="inline-block px-4 py-1 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest">
          Featured Movement
        </div>

        <h1 className="font-headline-xl text-headline-xl leading-none md:text-[140px] uppercase tracking-tighter">
          The Future of India <br /> <span className="text-primary text-glow">Begins Inside Every Classroom.</span>
        </h1>

        <p className="font-body-lg text-body-lg md:text-2xl max-w-2xl text-on-surface-variant">
          Inspiring students to become responsible citizens through global experiences, practical life lessons, and
          real-world leadership.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          <button
            type="button"
            onClick={openJoinModal}
            className="bg-primary text-on-primary px-10 py-5 font-headline-lg-mobile text-[18px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all"
          >
            Invite Me to Your School
          </button>
          <button
            type="button"
            onClick={scrollToMission}
            className="border-2 border-on-surface text-on-surface px-10 py-5 font-headline-lg-mobile text-[18px] uppercase tracking-wider hover:bg-on-surface hover:text-background active:scale-95 transition-all"
          >
            My Mission
          </button>
        </div>
      </div>
    </header>
  );
}
