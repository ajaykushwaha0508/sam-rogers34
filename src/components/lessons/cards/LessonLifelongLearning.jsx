import MaterialIcon from '../../ui/MaterialIcon';

// Staggered delays reproduce the inline animation-delay values.
const FLOATING_ICONS = [
  { name: 'map', delay: null },
  { name: 'flight_takeoff', delay: '1s' },
  { name: 'history_edu', delay: '2s' },
];

/** Lesson 05 — full-width closing card, centred, with floating icons. */
export default function LessonLifelongLearning() {
  return (
    <div className="md:col-span-12 bg-surface-container lesson-card group border-t-2 border-primary relative">
      <div className="p-8 md:p-20 text-center max-w-3xl mx-auto relative z-10">
        <span className="font-label-sm text-primary mb-4 block">LESSON 05</span>
        <h2 className="font-headline-lg text-4xl md:text-headline-lg mb-8 uppercase italic">
          Education doesn't stop after school. Life itself is the greatest classroom.
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-10 italic">
          "The world is a book, and those who do not travel read only one page." My greatest degrees weren't handed to
          me on a stage; they were earned in conversations with strangers across three continents.
        </p>

        <div className="flex justify-center gap-6">
          {FLOATING_ICONS.map((icon) => (
            <MaterialIcon
              key={icon.name}
              name={icon.name}
              className="text-primary text-4xl animate-float"
              style={icon.delay ? { animationDelay: icon.delay } : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
