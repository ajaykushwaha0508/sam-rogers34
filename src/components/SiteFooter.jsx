import MaterialIcon from "./ui/MaterialIcon";

const FOOTER_LINKS = [
  { label: "My Journey", to: "/" },
  { label: "Global Journey", to: "/global-journey" },
  { label: "Lessons", to: "/lessons" },
  { label: "Initiative", to: "/initiative" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
];
const SOCIAL_ICONS = ["alternate_email", "public", "language"];

export default function SiteFooter() {
  return (
    <footer className="w-full py-20 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-unit text-center bg-surface border-t border-outline-variant mt-section-gap">
      <div className="font-headline-lg text-headline-lg-mobile text-primary uppercase mb-10">
        SAM ROGERS
      </div>

      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {FOOTER_LINKS.map((links) => (
          <a
            key={links.to}
            className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md hover:underline decoration-primary underline-offset-4"
            href={links.to}
          >
            {links.label}
          </a>
        ))}
      </div>

      <div className="flex gap-6 mb-12">
        {SOCIAL_ICONS.map((icon) => (
          <a
            key={icon}
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
            href="#"
          >
            <MaterialIcon name={icon} />
          </a>
        ))}
      </div>

      <div className="text-on-surface-variant opacity-50 font-body-md text-body-md uppercase tracking-widest">
        © 2024 SAM ROGERS. FUTURE CITIZEN MOVEMENT. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
