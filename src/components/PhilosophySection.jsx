import MaterialIcon from './ui/MaterialIcon';

export default function PhilosophySection() {
  return (
    <section className="relative py-40 px-margin-mobile md:px-margin-desktop bg-surface text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <MaterialIcon name="format_quote" className="text-[400px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="font-headline-xl text-headline-lg-mobile md:text-[80px] uppercase leading-tight mb-12">
          "Every great nation is built twice. First in the minds of its people.{' '}
          <span className="text-primary">Then in reality.</span>"
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.5em]">Sam Rogers' Philosophy</p>
      </div>
    </section>
  );
}
