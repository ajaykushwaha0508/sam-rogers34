import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import MaterialIcon from "./components/ui/MaterialIcon";
import { useLockBody } from "./hooks/useLockBody";

const ACTIVE_LINK = "text-primary";
const IDLE_LINK = "text-on-surface hover:text-primary";

/**
 * Full-screen slide-in menu for small screens.
 *
 * The nav bar's link row is `hidden md:flex`, so below that breakpoint there
 * was previously no way to reach any page but Home and Contact. This renders
 * the same NAV_LINKS list TopNavBar already has, so the two never drift apart
 * — see the wiring note in TopNavBar.jsx.
 */
export default function MobileMenu({ open, onClose, links, onContact }) {
  useLockBody(open);

  // Escape closes, same as the Join Movement modal.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={`fixed inset-0 z-[70] bg-surface transition-opacity duration-300 md:hidden ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between px-margin-mobile py-4 border-b border-outline-variant">
        <NavLink
          to="/"
          onClick={onClose}
          className="font-headline-lg text-headline-lg-mobile tracking-tighter text-on-surface uppercase"
        >
          SAM ROGERS
        </NavLink>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="text-on-surface hover:text-primary transition-colors"
        >
          <MaterialIcon name="close" className="text-[32px]" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex flex-col px-margin-mobile pt-10">
        {links.map((link, i) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === "/"}
            onClick={onClose}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            className={({ isActive }) =>
              `font-headline-lg text-headline-lg-mobile uppercase py-4 border-b border-outline-variant transition-all duration-300 ${
                isActive ? ACTIVE_LINK : IDLE_LINK
              } ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-margin-mobile pt-10">
        <button
          type="button"
          onClick={() => {
            onClose();
            onContact();
          }}
          className="w-full bg-primary text-on-primary py-4 font-headline-lg-mobile text-[16px] uppercase tracking-wider active:opacity-80 transition-all"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
