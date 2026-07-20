import MaterialIcon from '../ui/MaterialIcon';
import { initiativeImages } from '../../data/initiativeImages';

const hands = initiativeImages.communityHands;

/**
 * "Imagine an India where..." — a four-tile bento grid.
 * Each tile has its own span and treatment, so they are written out rather
 * than driven from a single array.
 */
export default function VisionBento() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg mb-4">IMAGINE AN INDIA WHERE...</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We aren't just building careers; we are building characters that define the soul of our nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          <div className="md:col-span-8 md:row-span-1 bg-surface-container-high p-8 flex flex-col justify-end group hover:bg-primary-container transition-colors duration-500 overflow-hidden relative">
            <MaterialIcon
              name="recycling"
              className="text-primary group-hover:text-on-primary-container text-5xl mb-4 transition-colors"
            />
            <h3 className="font-headline-lg text-display-md group-hover:text-on-primary-container transition-colors">
              WASTE BELONGS IN DUSTBINS
            </h3>
            <p className="font-body-md text-on-surface-variant group-hover:text-on-primary-container/80 transition-colors">
              Even when nobody is watching, because public spaces are our shared home.
            </p>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MaterialIcon name="delete_outline" className="text-[120px]" />
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-2 bg-surface-container p-8 flex flex-col border-t-2 border-primary">
            <MaterialIcon name="volunteer_activism" className="text-primary text-5xl mb-4" />
            <h3 className="font-headline-lg text-display-md mb-4">COMMUNITY LEADERSHIP</h3>
            <p className="font-body-md text-on-surface-variant mb-8">
              Young adults volunteering in their communities, proving that service is the highest form of leadership.
            </p>
            <div className="mt-auto overflow-hidden h-48">
              <img
                className="w-full h-full object-cover grayscale"
                data-alt={hands.alt}
                alt={hands.alt}
                src={hands.src}
              />
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-1 bg-surface-container-high p-8 flex flex-col justify-between border-l-2 border-primary">
            <h3 className="font-headline-lg text-display-md">TRAFFIC ETIQUETTE</h3>
            <p className="font-body-md text-on-surface-variant">
              Following rules because we value life, not because we fear the fine.
            </p>
            <MaterialIcon name="traffic" className="text-primary text-4xl" />
          </div>

          <div className="md:col-span-4 md:row-span-1 bg-primary-container p-8 flex flex-col justify-between">
            <h3 className="font-headline-lg text-display-md text-on-primary-container">NATION BUILDING</h3>
            <p className="font-body-md text-on-primary-container/90 italic">
              "Citizens are the real brand ambassadors of a country."
            </p>
            <MaterialIcon
              name="flag"
              className="text-on-primary-container text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
