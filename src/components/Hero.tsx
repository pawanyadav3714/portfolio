import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Instagram, Download, SquarePlay } from 'lucide-react';
const profileImg = "./images/pro/pawanProfile.jpg";

export default function Hero() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-start justify-center relative overflow-hidden pt-12 md:pt-20 pb-5 md:pb-0 mt-5 md:mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-0 mt-4 md:mt-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          className="flex-[1.5] lg:flex-[1.5] text-center md:text-left mt-8 md:mt-0 ml-0 pt-0 w-full"
        >
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-indigo-500 mb-2 md:mb-2 ml-0 md:ml-10">Hello, I'm</h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 md:mb-4 ml-0 md:ml-10">Pawan Yadav</h1>
          
          <div className="text-base sm:text-xl md:text-3xl font-semibold mb-4 md:mb-6 h-[50px] md:h-[40px] ml-0 md:ml-10 flex justify-center md:justify-start">
            <TypeAnimation
              sequence={[
                'HackArena 2k26 1st runnerUp', 1000,
                'Backend Developer', 1000,
                'MernStack Developer', 1000,
                'B.Tech Student', 1000,
                'Open Source Enthusiast', 1000
              ]}
              wrapper="span"
              speed={60}
              repeat={200}
              className="text-slate-600 dark:text-slate-300"
            />
          </div>
          
          <motion.p 
            className="relative px-5 py-5 sm:px-8 sm:py-8 rounded-3xl w-full mb-8 leading-relaxed font-serif tracking-wide text-sm sm:text-base md:text-[clamp(0.9rem,1.5vw,1.15rem)] text-justify text-slate-700 dark:text-white transition-all duration-500 ease-out 
                       bg-white/80 dark:bg-white/5 backdrop-blur-xl 
                       border border-white/90 dark:border-white/20
                       shadow-[0_10px_30px_rgba(15,23,42,0.08),0_4px_10px_rgba(15,23,42,0.05)]
                       dark:shadow-[inset_0_2px_10px_rgba(255,255,255,0.1),0_4px_15px_rgba(0,0,0,0.5)]
                       group overflow-hidden"
          >
            <span className="absolute top-2 left-6 right-6 h-[8px] bg-gradient-to-b from-white/80 dark:from-white/30 to-transparent blur-[1px] rounded-full pointer-events-none transition-opacity duration-500"></span>
            <span key={refreshKey} className="relative z-10 block text-justify animate__infinite" style={{ wordSpacing: '0.1em' }}>
            {"HackArena 2K26 1st Runner-Up || CSE”29 || java || Full Stack || Backend Developer | Node.js | TypeScript • React (frontend) | Built & Deployed Multiple Full-Stack Applications | Intern @ Apex Planet |. Passionate about open-source and continuously learning new technologies to solve real-world problems.".split(" ").map((word, index) => (
              <motion.span
                key={`${refreshKey}-${index}`}
                className="inline-block opacity-90 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0, y: 15, filter: "blur(4px)", scale: 0.95 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.07 + 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
            </span>
          </motion.p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 ml-0 sm:ml-5 md:ml-10">
            {[
              { icon: <Github size={24} className="sm:w-7 sm:h-7" />, href: "https://github.com/pawanyadav3714" },
              { icon: <Linkedin size={24} className="sm:w-7 sm:h-7" />, href: "https://www.linkedin.com/in/pawanyadav3714/" },
              { icon: <Mail size={24} className="sm:w-7 sm:h-7" />, href: "mailto:pawanyadav3714@gmail.com" },
              { icon: <Instagram size={24} className="sm:w-7 sm:h-7" />, href: "https://www.instagram.com/unscripted_gecian_official/?__pwa=1" },
              { icon: <SquarePlay size={24} className="sm:w-7 sm:h-7" />, href: "https://www.youtube.com/@Unscripted_GECian" },              
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-slate-800 dark:text-white transition-all duration-300 ease-out 
                           bg-white/60 dark:bg-white/10 backdrop-blur-md 
                           border border-white/70 dark:border-white/20
                           shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(0,0,0,0.05)]
                           dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]
                           hover:bg-blue-400/30 hover:border-blue-300/60 hover:text-blue-800 dark:hover:text-blue-200
                           hover:shadow-[0_4px_20px_rgba(59,130,246,0.4),inset_0_4px_15px_rgba(255,255,255,0.8)]
                           dark:hover:bg-blue-500/30 dark:hover:border-blue-400/50 
                           dark:hover:shadow-[0_4px_20px_rgba(59,130,246,0.4),inset_0_4px_15px_rgba(255,255,255,0.3)]
                           group overflow-hidden"
              >
                <span className="absolute top-[2px] left-2 right-2 h-[6px] bg-gradient-to-b from-white/90 dark:from-white/40 to-transparent blur-[1px] rounded-full pointer-events-none transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  {social.icon}
                </span>
              </motion.a>
            ))}

            <button
              onClick={() => window.open('./images/pro/resume.pdf', '_blank')}
              className="px-5 py-2 sm:px-6 sm:py-2 rounded-full font-serif font-medium text-sm sm:text-base text-slate-800 dark:text-white transition-all duration-300 ease-out 
                         bg-white/60 dark:bg-white/10 backdrop-blur-md 
                         border border-white/70 dark:border-white/20
                         shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(0,0,0,0.05)]
                         dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]
                         hover:bg-blue-400/30 hover:border-blue-300/60 hover:text-blue-800 dark:hover:text-blue-200
                         hover:shadow-[0_4px_20px_rgba(59,130,246,0.4),inset_0_4px_15px_rgba(255,255,255,0.8)]
                         dark:hover:bg-blue-500/30 dark:hover:border-blue-400/50 
                         dark:hover:shadow-[0_4px_20px_rgba(59,130,246,0.4),inset_0_4px_15px_rgba(255,255,255,0.3)]
                         tracking-wide flex items-center justify-center gap-2 whitespace-nowrap ml-0 sm:ml-2 mt-2 sm:mt-0"
            >
              <Download size={16} />
              Resume
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center justify-center -mt-8 sm:-mt-12 md:-mt-10 mb-6 md:mb-0"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-pink-500 to-purple-500 animate-spin-slow opacity-20 blur-3xl group-hover:opacity-70 transition duration-500"></div>
            
            {/* Animated multi-color border on hover */}
            <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition duration-300 z-0 shadow-[0_0_50px_rgba(59,130,246,0.3)]"></div>

            <div className="w-full h-full rounded-full glass-card border-[4px] border-white/95 dark:border-white/10 overflow-hidden relative z-10 p-1 shadow-[0_30px_60px_rgba(99,102,241,0.25)] dark:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] bg-white dark:bg-slate-900/80 ring-1 ring-slate-200/50 dark:ring-white/5">
              <img 
                src={profileImg} 
                alt="Pawan Yadav" 
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 grayscale-[0.2] group-hover:grayscale-0 brightness-[1.02] contrast-[1.05] shadow-inner select-none ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 animate-pulse">
                  <div className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>

            {/* MernStack Developer Popup */}
            <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 md:left-auto md:-left-6 md:translate-x-0 z-30 pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
              <div className="relative">
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap backdrop-blur-md ring-1 ring-white/10
                                bg-white/60 dark:bg-white/10 border border-white/70 dark:border-white/20
                                shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(0,0,0,0.05)]
                                dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]
                                text-blue-600 dark:text-blue-400">
                  MernStack Developer
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 md:left-8 w-2.5 h-2.5 bg-white/60 dark:bg-slate-800 rotate-45 border-r border-b border-white/70 dark:border-white/20"></div>
                </div>
              </div>
            </div>


            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 sm:mt-8 w-[280px] sm:w-[320px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
              <div className="space-y-3 sm:space-y-4 bg-white/80 dark:bg-white/5 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-100 dark:border-slate-700 backdrop-blur-sm shadow-sm">
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">Name</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Pawan Yadav</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">Reg No</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">25021440034</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">Branch</span>
                  <span className="font-bold text-slate-900 dark:text-white text-[11px] sm:text-sm text-right px-2">Computer Science and Engineering</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">Session</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">2025-29</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
