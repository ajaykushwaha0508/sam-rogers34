const REASONS = [
  { title: 'Global Exposure', body: 'Bringing real-world international insights directly to the classroom.' },
  { title: 'Corporate Insight', body: 'Practical leadership experience from the international engineering sector.' },
  { title: 'Youth Engagement', body: 'Communication styles that resonate with students, not lecture them.' },
  { title: 'Interactive Methods', body: 'Learning through doing, questioning, and reflecting.' },
  { title: 'Civic Awareness', body: "Developing a sense of ownership for the nation's progress." },
  { title: 'Nation-Building', body: 'Planting the seeds of responsibility in the minds of future leaders.' },
];

export default function WhySchoolsSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      <div className="col-span-full mb-12">
        <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-center">Why Schools Partner With Me</h2>
      </div>

      {REASONS.map((reason) => (
        <div
          key={reason.title}
          className="p-8 border border-outline-variant hover:border-primary transition-all hover:-translate-y-2"
        >
          <h4 className="font-display-md text-xl uppercase mb-4 text-primary">{reason.title}</h4>
          <p className="font-body-md text-on-surface-variant">{reason.body}</p>
        </div>
      ))}
    </section>
  );
}
