import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import BubbleBackground from './BubbleBackground';
import SectionContainer from './SectionContainer';

export default function Layout({ isDark, onHomeClick }: { isDark: boolean, onHomeClick: () => void }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:bg-blue-500/30 dark:selection:text-blue-400">
      <CustomCursor />
      <BubbleBackground />
      <Navbar isDark={isDark} onHomeClick={onHomeClick} />
      
      <main className="pt-20">
        <SectionContainer>
          <Outlet />
        </SectionContainer>
      </main>

      {isHomePage && <Footer />}
    </div>
  );
}
