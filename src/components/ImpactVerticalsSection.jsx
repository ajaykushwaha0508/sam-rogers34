import MaterialIcon from './ui/MaterialIcon';

const VERTICALS = [
  {
    icon: 'trending_up',
    title: 'Business Leadership',
    body: 'Leading growth for an international engineering company while managing a high-performing sales team.',
  },
  {
    icon: 'explore',
    title: 'Global Learning',
    body: 'Travelling across Australia and the UK to understand education systems and leadership practices.',
  },
  {
    icon: 'school',
    title: 'Student Awareness',
    body: 'Helping schools inspire responsible, disciplined and socially aware future citizens.',
  },
  {
    icon: 'record_voice_over',
    title: 'Public Speaking',
    body: 'Conducting interactive sessions where students learn through stories instead of lectures.',
  },
];

export default function ImpactVerticalsSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="text-center mb-20">
        <h2 className="font-headline-lg text-headline-lg uppercase mb-4">Impact Verticals</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Bridging the gap between corporate excellence and social responsibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {VERTICALS.map((card) => (
          <div
            key={card.title}
            className="glass-card p-10 flex flex-col h-full hover:border-primary transition-colors duration-500"
          >
            <MaterialIcon name={card.icon} className="text-primary text-5xl mb-8" />
            <h4 className="font-display-md text-display-md mb-4 uppercase tracking-tight">{card.title}</h4>
            <p className="font-body-md text-on-surface-variant mt-auto">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
