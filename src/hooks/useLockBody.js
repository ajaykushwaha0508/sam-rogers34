import { useEffect } from "react";

/** Freezes background scroll while `locked` is true — used by modals and the mobile menu. */
export function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
