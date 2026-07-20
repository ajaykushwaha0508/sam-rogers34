/** One destination tile: image desaturates back to colour on hover. */
export default function DestinationCard({ image, label, title, body }) {
  return (
    <div className="group relative bg-surface overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500">
      <div
        className="h-80 w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
        data-alt={image.alt}
        style={{ backgroundImage: `url('${image.src}')` }}
      />

      <div className="p-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-1 bg-primary" />
          <span className="font-label-sm text-label-sm text-primary uppercase">{label}</span>
        </div>
        <h3 className="font-headline-lg text-display-md uppercase">{title}</h3>
        <p className="text-on-surface-variant font-body-md">{body}</p>
      </div>
    </div>
  );
}
