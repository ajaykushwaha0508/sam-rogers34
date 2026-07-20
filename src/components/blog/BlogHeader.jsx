/** Page title anchor. */
export default function BlogHeader() {
  return (
    <section className="pt-40 pb-12 px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-b border-outline-variant pb-8">
        <h1 className="font-headline-xl text-headline-xl leading-none">THE JOURNAL</h1>
        <p className="font-body-lg text-on-surface-variant max-w-md italic">
          Insights &amp; Reflections on leadership, global citizenship, and the future of a rising nation.
        </p>
      </div>
    </section>
  );
}
