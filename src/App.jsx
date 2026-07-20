import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import GlobalJourneyPage from './pages/GlobalJourneyPage';
import InitiativePage from './pages/InitiativePage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';

/**
 * Layout renders the nav bar and footer once; each route supplies only its
 * own page content.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/global-journey" element={<GlobalJourneyPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/initiative" element={<InitiativePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
