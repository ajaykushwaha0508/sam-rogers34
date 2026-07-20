import MaterialIcon from './ui/MaterialIcon';

const VISION_ITEMS = [
  'Children throw waste into dustbins even when nobody is watching.',
  'Young adults volunteer in their communities spontaneously.',
  'Citizens protect public property as their own personal treasure.',
  'People follow traffic rules because they value human life.',
];

export default function VisionSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-10 leading-none">
            Imagine An India <br />
            Where...
          </h2>

          <div className="space-y-8">
            {VISION_ITEMS.map((item) => (
              <div
                key={item}
                className="flex gap-6 pb-6 border-b border-outline-variant hover:border-primary transition-colors group"
              >
                <MaterialIcon name="check_circle" className="text-primary group-hover:scale-125 transition-transform" />
                <p className="font-body-lg text-xl md:text-2xl">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col justify-center bg-primary p-12 text-on-primary">
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile uppercase mb-6">
            The Dream Begins In Schools.
          </h3>
          <p className="font-body-lg text-lg opacity-90 leading-relaxed">
            This is the India I dream of. Every session I conduct is a step toward making this vision a collective
            reality.
          </p>
        </div>
      </div>
    </section>
  );
}
