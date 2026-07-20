const LESSONS = [
  {
    number: '01.',
    title: 'Rules are Habits',
    body: 'Following rules should be a habit, not a fear-based reaction to authority.',
  },
  {
    number: '02.',
    title: 'Shared Ownership',
    body: 'People protect public property because they truly believe it belongs to them.',
  },
  {
    number: '03.',
    title: 'Small Actions',
    body: 'Great societies are not built by grand gestures, but by the accumulation of small, daily decencies.',
  },
];

/** Three-column summary of the lessons, each under a hairline rule. */
export default function LessonsHighlights() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg mb-16">LESSONS THE WORLD TAUGHT ME</h2>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {LESSONS.map((lesson) => (
            <div key={lesson.number} className="border-t border-outline-variant pt-8">
              <span className="text-primary font-headline-lg text-4xl block mb-4">{lesson.number}</span>
              <h4 className="font-display-md text-display-md mb-4">{lesson.title}</h4>
              <p className="text-on-surface-variant">{lesson.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
