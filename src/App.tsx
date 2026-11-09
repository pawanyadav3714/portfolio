import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Qualification from './components/Qualification';
import Resume from './components/Resume';
import StudentProfileCard from './components/StudentProfileCard';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-r-4 border-purple-500 animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full border-b-4 border-pink-500 animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout isDark={isDark} onHomeClick={() => setAnimationKey(k => k + 1)} />}>
          <Route index element={<Hero key={animationKey} />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="resume" element={<Resume />} />
          <Route path="profile" element={<StudentProfileCard />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="qualification" element={<Qualification />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
