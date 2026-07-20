/**
 * A div with a CSS background image, matching the original markup's pattern of
 * inline `background-image` plus a `data-alt` description.
 */
export default function BackgroundImage({ src, alt, className = '', children }) {
  return (
    <div className={className} data-alt={alt} style={{ backgroundImage: `url('${src}')` }}>
      {children}
    </div>
  );
}
