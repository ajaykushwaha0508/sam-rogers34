import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Sends the window back to the top on navigation, which the router does not do. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
