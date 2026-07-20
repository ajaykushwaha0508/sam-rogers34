const LESSONS = [
  'People protect public property because they believe it belongs to them.',
  'Following rules is a habit—not a fear.',
  'Small actions create great societies.',
  'Citizens are the real brand ambassadors of a country.',
  'Life itself is the greatest classroom.',
];

export default function LessonsSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
      <h2 className="font-headline-lg text-headline-lg text-center mb-20 uppercase">
        Global Lessons <br />
        <span className="text-primary">For Local Action</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {LESSONS.map((lesson, index) => (
          <div
            key={lesson}
            className="flex items-center gap-10 p-8 glass-card hover:bg-primary transition-all duration-500 group"
          >
            <div className="text-4xl font-headline-lg-mobile text-primary group-hover:text-on-primary">{index + 1}</div>
            <p className="font-display-md text-display-md leading-tight group-hover:text-on-primary">{lesson}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
