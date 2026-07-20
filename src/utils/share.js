/**
 * Uses the native share sheet where available (mobile browsers, some desktop
 * browsers), and falls back to copying the text to the clipboard everywhere
 * else. Returns a status string so callers can show feedback.
 */
export async function shareOrCopy({ title, text, url = window.location.href }) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return 'shared';
    } catch (err) {
      // AbortError means the person cancelled the share sheet — not a failure.
      if (err.name === 'AbortError') return 'cancelled';
    }
  }

  try {
    await navigator.clipboard.writeText(`${text} ${url}`);
    return 'copied';
  } catch {
    return 'failed';
  }
}
