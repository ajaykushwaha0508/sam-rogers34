import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import SiteFooter from './SiteFooter';
import ScrollToTop from './ScrollToTop';
import JoinMovementModal from './modals/JoinMovementModal';
import { JoinMovementModalProvider } from '../context/JoinMovementModalContext';

/**
 * The nav bar and footer live here, rendered once for every route.
 * Pages supply only their own sections.
 *
 * JoinMovementModalProvider wraps everything so any button on any page can
 * call openJoinModal(). The modal itself is mounted once, here, rather than
 * once per page — it renders on top of whichever route is active.
 */
export default function Layout() {
  return (
    <JoinMovementModalProvider>
      <ScrollToTop />
      <TopNavBar />
      <Outlet />
      <SiteFooter />
      <JoinMovementModal />
    </JoinMovementModalProvider>
  );
}
