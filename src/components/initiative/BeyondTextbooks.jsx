import MaterialIcon from '../ui/MaterialIcon';
import { initiativeImages } from '../../data/initiativeImages';

const PILLARS = [
  {
    icon: 'auto_stories',
    title: 'Interactive Stories',
    body: 'Real-life examples from boardrooms and global travels that make lessons stick.',
  },
  {
    icon: 'diversity_3',
    title: 'Conversations, Not Lectures',
    body: 'Encouraging students to think critically about how their actions influence society.',
  },
  {
    icon: 'public',
    title: 'Global Perspective',
    body: 'Bringing the best values from UK, Australia, and beyond to Indian classrooms.',
  },
];

/** Asymmetric section: numbered watermark and list on the left, photo collage on the right. */
export default function BeyondTextbooks() {
  const { sessionEngagement, learningTool, assemblyHall, studentPortrait } = initiativeImages;

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-primary opacity-20 font-headline-xl text-[200px] pointer-events-none">
              01
            </div>

            <h2 className="font-headline-lg text-headline-lg leading-tight mb-10 relative z-10">
              BEYOND THE <br />
              TEXTBOOKS.
            </h2>

            <ul className="space-y-8 relative z-10">
              {PILLARS.map((pillar) => (
                <li key={pillar.title} className="flex items-start gap-4">
                  <MaterialIcon name={pillar.icon} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-display-md text-display-md text-on-surface">{pillar.title}</h4>
                    <p className="text-on-surface-variant">{pillar.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img
                className="w-full aspect-[3/4] object-cover mb-4"
                data-alt={sessionEngagement.alt}
                alt={sessionEngagement.alt}
                src={sessionEngagement.src}
              />
              <img
                className="w-full aspect-square object-cover"
                data-alt={learningTool.alt}
                alt={learningTool.alt}
                src={learningTool.src}
              />
            </div>

            <div>
              <img
                className="w-full aspect-square object-cover mb-4"
                data-alt={assemblyHall.alt}
                alt={assemblyHall.alt}
                src={assemblyHall.src}
              />
              <img
                className="w-full aspect-[3/4] object-cover"
                data-alt={studentPortrait.alt}
                alt={studentPortrait.alt}
                src={studentPortrait.src}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
