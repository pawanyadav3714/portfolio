import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ArrowUp, Home, User, Code, FolderHeart, Briefcase, Mail, MoreHorizontal, LogIn, LogOut, Award, MessageSquare, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const MotionLink = motion.create(Link);

export default function Navbar({ isDark, onHomeClick }: { isDark: boolean, onHomeClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', path: '/projects', icon: <FolderHeart size={14} /> },
    { name: 'Skills', path: '/skills', icon: <Code size={14} /> },
    { name: 'Experience', path: '/experience', icon: <Briefcase size={14} /> },
    { name: 'Profile', path: '/profile', icon: <User size={14} /> },
    { name: 'Achievements', path: '/achievements', icon: <Award size={14} /> },
    { name: 'Qualification', path: '/qualification', icon: <GraduationCap size={14} /> },
    { name: 'About', path: '/about', icon: <User size={14} /> },    
  ];

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/85 dark:bg-[#0B0B0F]/85 backdrop-blur-[18px] py-1 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-none' : 'py-2 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="relative group/nav-home">
              <Link 
                to="/" 
                onClick={onHomeClick} 
                className={`p-2 rounded-full backdrop-blur-md border transition-all duration-300 -ml-2 flex items-center justify-center
                           ${location.pathname === '/' 
                             ? 'bg-[#152e6d] text-white shadow-[0_4px_15px_rgba(21,46,109,0.4)] border-blue-400/30' 
                             : 'bg-white/60 dark:bg-white/10 text-blue-600 dark:text-blue-400 border-white/70 dark:border-white/20 shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]'
                           }
                           hover:bg-blue-400/30 dark:hover:bg-blue-500/30`}
              >
                <Home size={20} />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover/nav-home:opacity-100 transition-all duration-300 translate-y-2 group-hover/nav-home:translate-y-0 pointer-events-none z-50">
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 translate-x-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <MotionLink 
                    key={link.name} 
                    to={link.path}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-3 xl:px-4 py-1.5 rounded-full font-serif font-semibold text-xs xl:text-sm transition-all duration-300 ease-out 
                               ${isActive 
                                 ? 'bg-[#152e6d] text-white shadow-[0_4px_15px_rgba(21,46,109,0.4)] border-blue-400/30' 
                                 : 'bg-white/60 dark:bg-white/10 text-slate-800 dark:text-white border-white/70 dark:border-white/20'
                               } 
                               backdrop-blur-md border
                               shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(0,0,0,0.05)]
                               dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]
                               hover:bg-blue-400/30 hover:border-blue-300/60 hover:text-blue-800 dark:hover:text-blue-200
                               hover:shadow-[0_4px_20px_rgba(59,130,246,0.4),inset_0_4px_15px_rgba(255,255,255,0.8)]
                               dark:hover:bg-blue-500/30 dark:hover:border-blue-400/50 
                               dark:hover:shadow-[0_4px_20px_rgba(59,130,246,0.4),inset_0_4px_15px_rgba(255,255,255,0.3)]
                               group flex items-center justify-center gap-2 tracking-wide overflow-hidden`}
                  >
                    <span className={`absolute top-[2px] left-3 right-3 h-[8px] ${isActive ? 'bg-white/20' : 'bg-gradient-to-b from-white/90 dark:from-white/40 to-transparent'} blur-[1px] rounded-full pointer-events-none transition-opacity duration-300`}></span>
                    <span className="relative z-10 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      {link.icon}
                    </span>
                    <span className="relative z-10 mx-1">{link.name}</span>
                    <span className="relative z-10 opacity-30 group-hover:opacity-100 transition-opacity ml-1">
                      <MoreHorizontal size={14} />
                    </span>
                  </MotionLink>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 w-full glass-card border-t border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col items-center justify-center gap-2 pt-2 pb-4 shadow-xl rounded-b-2xl">
                <Link
                  to="/"
                  onClick={() => {
                    onHomeClick();
                    setIsOpen(false);
                  }}
                  className={`text-[10px] sm:text-xs tracking-[0.2em] font-semibold transition-all uppercase relative pb-1
                             ${location.pathname === '/' ? 'text-blue-500 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400'}`}
                >
                  HOME
                  {location.pathname === '/' && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                  )}
                </Link>
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-[10px] sm:text-xs tracking-[0.2em] font-semibold transition-all uppercase relative pb-1
                                 ${isActive ? 'text-blue-500 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400'}`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Back to top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition z-50"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
