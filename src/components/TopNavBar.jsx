import { NavLink } from "react-router-dom";
import MaterialIcon from "./ui/MaterialIcon";
import { useJoinMovementModal } from "../context/JoinMovementModalContext";

/**
 * Links with a `to` become real routes; the rest stay inert anchors, exactly as
 * they were in the source markup, until those pages exist.
 */
const NAV_LINKS = [
  { label: "My Journey", to: "/" },
  { label: "Global Journey", to: "/global-journey" },
  { label: "Lessons", to: "/lessons" },
  { label: "Initiative", to: "/initiative" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
];

const ACTIVE_LINK =
  "text-primary border-b-2 border-primary pb-1 font-body-md text-body-md transition-all hover:scale-105 duration-300";
const IDLE_LINK =
  "text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md hover:scale-105 duration-300";

export default function TopNavBar() {
  const { openJoinModal } = useJoinMovementModal();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface/80 backdrop-blur-md dark:bg-surface/80 border-b border-outline-variant">
      <NavLink
        to="/"
        className="font-headline-lg text-headline-lg-mobile tracking-tighter text-on-surface dark:text-on-surface uppercase"
      >
        SAM ROGERS
      </NavLink>

      <div className="hidden md:flex gap-8 items-center">
        {NAV_LINKS.map((link) =>
          link.to ? (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? ACTIVE_LINK : IDLE_LINK)}
            >
              {link.label}
            </NavLink>
          ) : (
            <a key={link.label} className={IDLE_LINK} href="#">
              {link.label}
            </a>
          ),
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Icon-only, no title text in the source to indicate what it should do — left
            inert rather than guessing at behaviour. See README. */}

        <button
          type="button"
          onClick={openJoinModal}
          className="bg-primary text-on-primary px-6 py-2 font-headline-lg-mobile text-[14px] uppercase tracking-wider hover:scale-105 active:opacity-80 transition-all"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
