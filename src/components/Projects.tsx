import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X, Search, Video, Linkedin } from 'lucide-react';
import { projects } from '../data';

const getLinkedInEmbed = (url: string) => {
  const activityMatch = url.match(/activity-([0-9]+)/);
  if (activityMatch) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityMatch[1]}`;
  }
  const ugcMatch = url.match(/ugcPost-([0-9]+)/);
  if (ugcMatch) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${ugcMatch[1]}`;
  }
  return url;
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = ['All', 'Frontend', 'Full Stack', 'Backend'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.technologies.join(' ').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="min-h-screen py-20 bg-slate-50/50 dark:bg-slate-900/50 relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Successful <span className="text-blue-500">Projects</span></h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-[0_4px_15px_rgba(99,102,241,0.35)]' 
                      : 'glass-card hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full glass-card border focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: "blur(0px)",
                  // Specialized pulse animation for featured items
                  ...( ['Government Engineering College Palamu', 'HackArena 2k26', 'DISASTER MANAGEMENT', 'URL to QR shortner', 'Snake PC Game'].includes(project.title) ? {
                    boxShadow: [
                      '0 0 0px rgba(99, 102, 241, 0)',
                      '0 0 25px rgba(99, 102, 241, 0.25)',
                      '0 0 0px rgba(99, 102, 241, 0)'
                    ]
                  } : {})
                }}
                exit={{ 
                  opacity: 0, 
                  y: 10,
                  filter: "blur(5px)",
                  transition: { duration: 0.3, ease: "easeIn" } 
                }}
                transition={{ 
                  layout: { 
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1] 
                  },
                  opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 },
                  y: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 },
                  filter: { duration: 0.5, delay: index * 0.05 },
                  boxShadow: { 
                    repeat: Infinity, 
                    duration: 3, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
                key={project.id}
                className={`glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col h-full relative transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 ${
                  ['Government Engineering College Palamu', 'HackArena 2k26', 'DISASTER MANAGEMENT', 'URL to QR shortner', 'Snake PC Game'].includes(project.title) ? 'border-indigo-500/40 shadow-lg shadow-indigo-500/5' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {['Government Engineering College Palamu', 'HackArena 2k26', 'DISASTER MANAGEMENT', 'URL to QR shortner'].includes(project.title) && (
                  <motion.div 
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2, 
                      ease: "easeInOut",
                      delay: index * 0.2 // Stagger the start of blinking
                    }}
                    className="absolute top-3 left-4 z-20 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg border border-white/20"
                  >
                    {project.title === 'DISASTER MANAGEMENT' ? 'HackaTron 2k26' : project.title === 'URL to QR shortner' ? 'Internship Project' : 'HackArena 1st RunnerUp'}
                  </motion.div>
                )}
                {project.title === 'URL to QR shortner' && (
                  <motion.div 
                    animate={{ opacity: [1, 0.1, 1] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5, 
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="absolute top-3 right-4 z-20 px-3 py-1 bg-lime-400 text-rose-600 text-[12px] font-black uppercase tracking-widest rounded-full shadow-lg border border-black/5"
                  >
                    Product
                  </motion.div>
                )}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-black/5 dark:bg-white/5">
                    <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-slate-900/60 overflow-hidden">
                      {project.image.endsWith('.mp4') || project.image.endsWith('.webm') ? (
                        <video 
                          src={project.image} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement?.querySelector('.media-fallback');
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement?.querySelector('.media-fallback');
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      )}
                      <div className="media-fallback hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white">
                        <span className="text-4xl font-black mb-2 opacity-90">{project.title.charAt(0)}</span>
                        <span className="text-lg font-bold">{project.title}</span>
                      </div>
                    </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-end justify-between gap-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs font-mono font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-blue-500">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs font-mono font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-slate-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.video && (
                        <motion.a 
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.video} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()} 
                          className="relative w-12 h-12 rounded-full flex items-center justify-center text-indigo-500 dark:text-indigo-400 transition-all duration-300 ease-out 
                                     bg-white/60 dark:bg-white/10 backdrop-blur-md 
                                     border border-white/70 dark:border-white/20
                                     shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(0,0,0,0.05)]
                                     dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]
                                     hover:bg-indigo-400/30 hover:border-indigo-300/60 
                                     hover:shadow-[0_4px_20px_rgba(99,102,241,0.4),inset_0_4px_15px_rgba(255,255,255,0.8)]
                                     dark:hover:bg-indigo-500/30 dark:hover:border-indigo-400/50 
                                     group overflow-hidden"
                        >
                          <span className="absolute top-[2px] left-2 right-2 h-[6px] bg-gradient-to-b from-white/90 dark:from-white/40 to-transparent blur-[1px] rounded-full pointer-events-none transition-opacity duration-300"></span>
                          <Video size={22} className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                      )}
                      {project.linkedin && (
                        <motion.a 
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()} 
                          className="relative w-12 h-12 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-all duration-300 ease-out 
                                     bg-white/60 dark:bg-white/10 backdrop-blur-md 
                                     border border-white/70 dark:border-white/20
                                     shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(0,0,0,0.05)]
                                     dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]
                                     hover:bg-blue-400/30 hover:border-blue-300/60 
                                     hover:shadow-[0_4px_20px_rgba(59,130,246,0.4),inset_0_4px_15px_rgba(255,255,255,0.8)]
                                     dark:hover:bg-blue-500/30 dark:hover:border-blue-400/50 
                                     group overflow-hidden"
                        >
                          <span className="absolute top-[2px] left-2 right-2 h-[6px] bg-gradient-to-b from-white/90 dark:from-white/40 to-transparent blur-[1px] rounded-full pointer-events-none transition-opacity duration-300"></span>
                          <Linkedin size={22} className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-4 sm:px-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl glass-card border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
              >
                <div className="relative h-56 sm:h-80 flex-shrink-0 bg-black/5 dark:bg-white/5">
                  {selectedProject.video && selectedProject.video.includes('youtube.com') ? (
                    <iframe 
                      src={`https://www.youtube.com/embed/${selectedProject.video.includes('shorts/') ? selectedProject.video.split('shorts/')[1].split('?')[0] : selectedProject.video.split('v=')[1]?.split('&')[0]}?autoplay=1&mute=1&loop=1&playlist=${selectedProject.video.includes('shorts/') ? selectedProject.video.split('shorts/')[1].split('?')[0] : selectedProject.video.split('v=')[1]?.split('&')[0]}&controls=0`} 
                      className="w-full h-full object-cover pointer-events-none scale-[1.35] transform-origin-center" 
                      allow="autoplay; encrypted-media" 
                      title={selectedProject.title} 
                    />
                  ) : selectedProject.video && (selectedProject.video.endsWith('.mp4') || selectedProject.video.endsWith('.webm')) ? (
                    <video 
                      src={selectedProject.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      onEnded={(e) => { e.currentTarget.play(); }}
                      className="w-full h-full object-cover"
                    />
                  ) : selectedProject.image && (selectedProject.image.endsWith('.mp4') || selectedProject.image.endsWith('.webm')) ? (
                    <video 
                      src={selectedProject.image} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      onEnded={(e) => { e.currentTarget.play(); }}
                      poster={selectedProject.image.replace('.mp4', 'p.png').replace('.webm', 'p.png')}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-10 right-4 sm:top-12 sm:right-6 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition md:top-6"
                  >
                    <X size={20} />
                  </button>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 overflow-y-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="text-sm font-mono font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-blue-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">About the project</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-white dark:bg-black text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                      <Github size={20} />
                      Source Code
                    </a>
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
