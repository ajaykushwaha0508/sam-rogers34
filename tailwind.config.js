/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';
// Theme ported verbatim from the tailwind.config block in the original HTML.
// Values are unchanged so every existing utility class resolves identically.
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
              "colors": {
                      "surface": "#131313",
                      "error-container": "#93000a",
                      "on-primary-fixed": "#3e001f",
                      "secondary-fixed": "#e2e2e2",
                      "primary-fixed": "#ffd9e3",
                      "on-background": "#e5e2e1",
                      "on-tertiary": "#2f3131",
                      "surface-container-highest": "#353534",
                      "secondary-fixed-dim": "#c6c6c7",
                      "on-tertiary-fixed": "#1a1c1c",
                      "background": "#131313",
                      "on-surface-variant": "#e3bdc7",
                      "on-error": "#690005",
                      "inverse-surface": "#e5e2e1",
                      "surface-container-lowest": "#0e0e0e",
                      "on-primary-fixed-variant": "#8d004e",
                      "secondary-container": "#454747",
                      "tertiary-container": "#909191",
                      "surface-container-low": "#1c1b1b",
                      "on-surface": "#e5e2e1",
                      "outline-variant": "#5b3f48",
                      "surface-tint": "#ffb0ca",
                      "on-primary": "#640036",
                      "on-secondary": "#2f3131",
                      "primary-container": "#ff479c",
                      "error": "#ffb4ab",
                      "on-secondary-fixed-variant": "#454747",
                      "secondary": "#c6c6c7",
                      "on-secondary-container": "#b4b5b5",
                      "surface-container-high": "#2a2a2a",
                      "surface-variant": "#353534",
                      "surface-container": "#201f1f",
                      "surface-bright": "#3a3939",
                      "on-primary-container": "#58002f",
                      "tertiary-fixed-dim": "#c7c6c6",
                      "on-secondary-fixed": "#1a1c1c",
                      "on-tertiary-container": "#292a2a",
                      "on-error-container": "#ffdad6",
                      "tertiary": "#c7c6c6",
                      "inverse-primary": "#b90068",
                      "primary-fixed-dim": "#ffb0ca",
                      "tertiary-fixed": "#e3e2e2",
                      "outline": "#aa8892",
                      "surface-dim": "#131313",
                      "on-tertiary-fixed-variant": "#464747",
                      "inverse-on-surface": "#313030",
                      "primary": "#ffb0ca"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "margin-mobile": "20px",
                      "margin-desktop": "64px",
                      "gutter": "24px",
                      "unit": "8px",
                      "container-max": "1280px",
                      "section-gap": "120px"
              },
              "fontFamily": {
                      "display-md": ["Hanken Grotesk"],
                      "headline-xl": ["Anton"],
                      "label-sm": ["Hanken Grotesk"],
                      "body-lg": ["Hanken Grotesk"],
                      "body-md": ["Hanken Grotesk"],
                      "headline-lg-mobile": ["Anton"],
                      "headline-lg": ["Anton"]
              },
              "fontSize": {
                      "display-md": ["32px", {"lineHeight": "120%", "fontWeight": "700"}],
                      "headline-xl": ["96px", {"lineHeight": "100%", "fontWeight": "400"}],
                      "label-sm": ["12px", {"lineHeight": "100%", "letterSpacing": "0.1em", "fontWeight": "700"}],
                      "body-lg": ["18px", {"lineHeight": "160%", "fontWeight": "400"}],
                      "body-md": ["16px", {"lineHeight": "150%", "fontWeight": "400"}],
                      "headline-lg-mobile": ["40px", {"lineHeight": "110%", "fontWeight": "400"}],
                      "headline-lg": ["64px", {"lineHeight": "110%", "fontWeight": "400"}]
              }
            },
  },
  plugins: [forms, containerQueries],
};
