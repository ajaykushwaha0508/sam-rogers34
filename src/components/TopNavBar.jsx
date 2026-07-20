import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MaterialIcon from "./ui/MaterialIcon";
import MobileMenu from "../MobileMenu";
import { useJoinMovementModal } from "../context/JoinMovementModalContext";

/**
 * Links with a `to` become real routes; the rest stay inert anchors, exactly as
 * they were in the source markup, until those pages exist.
 *
 * NAV_LINKS is exported so MobileMenu (wired below) always shows exactly the
 * same set as the desktop bar — one list, two renderings, never two lists that
 * can drift apart.
 */
export const NAV_LINKS = [
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  // Any route change closes the mobile menu, so it never stays open behind a new page.
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
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
                className={({ isActive }) =>
                  isActive ? ACTIVE_LINK : IDLE_LINK
                }
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
            className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2 font-headline-lg-mobile text-[14px] uppercase tracking-wider hover:scale-105 active:opacity-80 transition-all"
          >
            Contact
          </button>

          {/* Hamburger toggle — only visible below md, where the link row above is hidden. */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-on-surface hover:text-primary transition-colors"
          >
            <MaterialIcon name="menu" className="text-[32px]" />
          </button>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
        onContact={openJoinModal}
      />
    </>
  );
}
