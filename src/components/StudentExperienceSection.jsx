import BackgroundImage from './ui/BackgroundImage';
import MaterialIcon from './ui/MaterialIcon';
import { images } from '@/data/images';
import { alts } from '@/data/alts';

const FEATURES = [
  { icon: 'diversity_3', label: 'Interactive Games' },
  { icon: 'psychology', label: 'Personal Reflection' },
  { icon: 'travel_explore', label: 'Global Insights' },
  { icon: 'forum', label: 'Deep Discussions' },
];

export default function StudentExperienceSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative grid grid-cols-2 gap-4">
          <BackgroundImage
            src={images.classroomDebate}
            alt={alts.classroomDebate}
            className="h-64 bg-cover bg-center rounded-xl"
          />
          <BackgroundImage
            src={images.mindMapDrawing}
            alt={alts.mindMapDrawing}
            className="h-64 bg-cover bg-center rounded-xl mt-12"
          />
          <BackgroundImage
            src={images.campusStorytelling}
            alt={alts.campusStorytelling}
            className="h-64 bg-cover bg-center rounded-xl col-span-2"
          />
        </div>

        <div className="space-y-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">
            Beyond The <br />
            <span className="text-primary italic">Lecture Hall.</span>
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Students don't attend another lecture. They experience conversations. Stories. Discussions. Activities.
            Questions. Real-life examples.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.label} className="flex items-start gap-4">
                <MaterialIcon name={feature.icon} className="text-primary" />
                <p className="font-display-md text-xl uppercase">{feature.label}</p>
              </div>
            ))}
          </div>

          <p className="font-body-md text-on-surface-variant italic">
            "The objective is not to teach students what to think. The objective is to encourage them to think about how
            their actions influence society."
          </p>
        </div>
      </div>
    </section>
  );
}
