import { useEffect } from 'react';

/**
 * Port of the Initiative document's button feedback script.
 * Pressing scales a button to 0.95; releasing scales it to 1.05, matching the
 * inline styles the original wrote.
 *
 * The original attached these listeners permanently. This version removes them
 * on unmount and clears the inline transform, so a button in the shared nav bar
 * is not left mid-press after navigating away.
 */
export function useButtonPressFeedback() {
  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll('button'));

    const down = (e) => {
      e.currentTarget.style.transform = 'scale(0.95)';
    };
    const up = (e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
    };

    buttons.forEach((btn) => {
      btn.addEventListener('mousedown', down);
      btn.addEventListener('mouseup', up);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('mousedown', down);
        btn.removeEventListener('mouseup', up);
        btn.style.transform = '';
      });
    };
  }, []);
}
