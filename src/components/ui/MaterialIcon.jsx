/**
 * Material Symbols glyph. The font is loaded in index.html and styled by the
 * .material-symbols-outlined rule in index.css, exactly as in the original.
 */
export default function MaterialIcon({ name, className = '' }) {
  return <span className={`material-symbols-outlined ${className}`.trim()}>{name}</span>;
}
