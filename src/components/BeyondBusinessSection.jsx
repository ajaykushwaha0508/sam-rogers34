import MaterialIcon from './ui/MaterialIcon';

export default function BeyondBusinessSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative">
      <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <MaterialIcon name="favorite" className="text-9xl" />
        </div>

        <h2 className="font-display-md text-display-md uppercase mb-8">Beyond Business</h2>

        <p className="font-body-lg text-xl text-on-surface-variant leading-relaxed mb-10">
          Many know me as a Business Development Manager or an international traveller. But the work closest to my heart
          is helping young people discover the power they already possess.
        </p>

        <p className="font-headline-lg-mobile text-headline-lg-mobile text-primary uppercase">
          Changing one student's thinking today can change an entire community tomorrow.
        </p>
      </div>
    </section>
  );
}
