import BackgroundImage from './ui/BackgroundImage';
import { images } from '@/data/images';
import { alts } from '@/data/alts';

export default function MyStorySection() {
  return (
    <section
      id="my-story"
      className="py-section-gap px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
    >
      <div className="order-2 lg:order-1">
        <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-6">Origins</h2>
        <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 uppercase">
          From Chittorgarh to the World
        </h3>

        <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          <p>
            Every journey begins somewhere. Mine began in the historic city of Chittorgarh, Rajasthan—a land known for
            courage, sacrifice, honour, and the legacy of Maharana Pratap.
          </p>
          <p>
            Growing up surrounded by stories of bravery and responsibility taught me one lesson very early:{' '}
            <span className="text-on-surface font-bold">
              Great nations are built by people who choose responsibility over convenience.
            </span>
          </p>
          <p>
            Today, that same belief guides everything I do. Professionally, I lead business development at QeCAD.
            Personally, I travel across countries to understand what truly makes a nation great.
          </p>
        </div>
      </div>

      <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden group">
        <BackgroundImage
          src={images.chittorgarhFort}
          alt={alts.chittorgarhFort}
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
        <div className="absolute bottom-10 left-10 border-l-4 border-primary pl-6">
          <p className="font-headline-lg-mobile text-headline-lg-mobile uppercase">
            Heritage <br />&amp; Honor
          </p>
        </div>
      </div>
    </section>
  );
}
