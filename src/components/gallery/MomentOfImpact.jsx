import MaterialIcon from '../ui/MaterialIcon';
import { momentOfImpactImage } from '../../data/galleryItems';

/** Full-bleed philosophy quote over a fixed-attachment photograph. */
export default function MomentOfImpact() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mb-section-gap">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="w-full h-full bg-cover bg-fixed bg-center"
          data-alt={momentOfImpactImage.alt}
          role="img"
          aria-label={momentOfImpactImage.alt}
          style={{ backgroundImage: `url('${momentOfImpactImage.src}')` }}
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <MaterialIcon
          name="format_quote"
          className="text-primary text-6xl mb-8"
          style={{ fontVariationSettings: "'FILL' 1" }}
        />
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-[1] uppercase mb-12">
          "Every great nation is built twice. First in the <span className="text-primary">minds</span> of its people.
          Then in <span className="text-primary">reality</span>."
        </h2>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.4em]">
          The Core Philosophy
        </p>
      </div>
    </section>
  );
}
