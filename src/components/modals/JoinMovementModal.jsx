import { useEffect, useRef, useState } from 'react';
import MaterialIcon from '../ui/MaterialIcon';
import { useJoinMovementModal } from '../../context/JoinMovementModalContext';

const EMPTY = { name: '', email: '', message: '' };

/**
 * "Join the Movement" — the site's one shared contact form, opened from
 * whichever button the visitor clicked.
 *
 * The source document's <main> held a dimmed mock of the homepage behind the
 * modal (a second, static copy of the nav and hero, blurred). That was a
 * design mockup for how the popup would look layered over a page — it isn't
 * needed here since this modal now renders over the real, live page. Only the
 * modal itself was ported.
 *
 * The source form's submit handler was `alert('Request Sent Successfully')`.
 * That's replaced with an inline success state, but the outcome — a clear
 * confirmation, no page reload — is the same.
 */
export default function JoinMovementModal() {
  const { isOpen, closeJoinModal } = useJoinMovementModal();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const firstFieldRef = useRef(null);
  const panelRef = useRef(null);

  // Reset to a clean form each time the modal opens.
  useEffect(() => {
    if (isOpen) {
      setForm(EMPTY);
      setErrors({});
      setSubmitted(false);
      // Focus after the enter animation's first frame.
      const id = requestAnimationFrame(() => firstFieldRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
    return undefined;
  }, [isOpen]);

  // Escape closes; body scroll locks while open.
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => e.key === 'Escape' && closeJoinModal();
    document.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeJoinModal]);

  if (!isOpen) return null;

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Say a little more about how we can help.';
    return next;
  };

  const submit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
    }
  };

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeJoinModal();
  };

  return (
    <div
      id="modal-overlay"
      onMouseDown={onOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-margin-mobile md:p-6 bg-black/60 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
    >
      <div ref={panelRef} className="relative w-full max-w-2xl glass-panel border border-outline-variant/30 overflow-hidden modal-enter shadow-2xl">
        <button
          type="button"
          onClick={closeJoinModal}
          aria-label="Close"
          className="absolute top-6 right-6 z-[110] text-on-surface-variant hover:text-primary transition-colors duration-300 transform hover:rotate-90"
        >
          <MaterialIcon name="close" className="text-display-md" />
        </button>

        <div className="relative z-10 p-8 md:p-12">
          {submitted ? (
            <div className="py-10 text-center">
              <MaterialIcon name="check_circle" className="text-primary text-6xl mb-6" />
              <h2 id="join-modal-title" className="font-headline-lg text-headline-lg-mobile text-primary uppercase tracking-tight mb-4">
                Request Sent
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-md mx-auto mb-10">
                Thank you — your message has reached Sam Rogers. Expect a reply within two working days.
              </p>
              <button
                type="button"
                onClick={closeJoinModal}
                className="bg-primary text-on-primary py-4 px-10 font-headline-lg text-body-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <header className="mb-10">
                <h2 id="join-modal-title" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight leading-none mb-4">
                  JOIN THE <br />
                  MOVEMENT
                </h2>
                <p className="font-body-lg text-on-surface-variant max-w-md">
                  Together, let's prepare the next generation of responsible citizens.
                </p>
              </header>

              <form className="space-y-6" onSubmit={submit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="join-name" className="font-label-sm text-label-sm text-primary uppercase">
                      Full Name
                    </label>
                    <input
                      ref={firstFieldRef}
                      id="join-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={update}
                      placeholder="Enter your name"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'join-name-error' : undefined}
                      className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-all duration-300 py-3 px-0 text-on-background placeholder:text-on-surface-variant/40 pink-glow"
                    />
                    {errors.name && (
                      <p id="join-name-error" className="font-label-sm text-label-sm text-error">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="join-email" className="font-label-sm text-label-sm text-primary uppercase">
                      Email Address
                    </label>
                    <input
                      id="join-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      placeholder="email@example.com"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'join-email-error' : undefined}
                      className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-all duration-300 py-3 px-0 text-on-background placeholder:text-on-surface-variant/40 pink-glow"
                    />
                    {errors.email && (
                      <p id="join-email-error" className="font-label-sm text-label-sm text-error">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="join-message" className="font-label-sm text-label-sm text-primary uppercase">
                    Message
                  </label>
                  <textarea
                    id="join-message"
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="How can we help you?"
                    required
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'join-message-error' : undefined}
                    className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-all duration-300 py-3 px-0 text-on-background placeholder:text-on-surface-variant/40 pink-glow min-h-[120px] resize-none"
                  />
                  {errors.message && (
                    <p id="join-message-error" className="font-label-sm text-label-sm text-error">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary py-5 font-headline-lg text-display-md uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 active:scale-95 shadow-[0_0_30px_rgba(255,176,202,0.2)]"
                  >
                    SEND REQUEST
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
