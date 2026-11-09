import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Award, Search, Filter, X, Eye, Download, Calendar, Building, ExternalLink
} from 'lucide-react';

interface Achievement {
  id: string;
  userId: string;
  title: string;
  eventTitle?: string;
  description: string;
  organization?: string;
  date?: string;
  type: 'Hackathon' | 'Idea-Tribe' | 'Competition';
  fileUrl: string;
  fileType: 'pdf' | 'image';
  uploadDate: any;
}

const STATIC_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'static-under-1',
    userId: 'static',
    title: 'Webathon coding challenge',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h1.png',
    fileType: 'image',
    uploadDate: new Date('2026-03-01')
  },
  {
    id: 'static-under-2',
    userId: 'static',
    title: 'Idea Tribe Pitching Competition 2k25',
    eventTitle: 'Idea-Tribe 2025',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Idea-Tribe',
    fileUrl: './images/under/h2.png',
    fileType: 'image',
    uploadDate: new Date('2026-03-01')
  },
  {
    id: 'static-under-3',
    userId: 'static',
    title: '1st RunnerUp HackArena 2k26 (GFG Collaboration)',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h3.jpg',
    fileType: 'image',
    uploadDate: new Date('2026-05-10')
  },
  {
    id: 'static-under-4',
    userId: 'static',
    title: 'Idea Tribe prize distribution(Certification)',
    eventTitle: 'Idea-Tribe 2k25',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Idea-Tribe',
    fileUrl: './images/under/h4.png',
    fileType: 'image',
    uploadDate: new Date('2025-11-01')
  },
  {
    id: 'static-under-5',
    userId: 'static',
    title: '1st RunnerUp TEAM:- Code Crafter (HackArena 2k26)',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h5.jpg',
    fileType: 'image',
    uploadDate: new Date('2026-06-10')
  },
  {
    id: 'static-under-6',
    userId: 'static',
    title: 'Result celebration with seniors (HackArena 2k26)',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h6.jpg',
    fileType: 'image',
    uploadDate: new Date('2026-05-10')
  },
  {
    id: 'static-under-7',
    userId: 'static',
    title: '1st RunnerUp with 1st position in HackArena 2k26',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h7.jpg',
    fileType: 'image',
    uploadDate: new Date('2026-05-10')
  },
  {
    id: 'static-under-8',
    userId: 'static',
    title: 'After securing the keyboards in HackArena 2k26',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h8.jpg',
    fileType: 'image',
    uploadDate: new Date('2026-03-01')
  },
  {
    id: 'static-under-9',
    userId: 'static',
    title: 'Coding Round in HackArena 2k26 group photo',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h9.jpg',
    fileType: 'image',
    uploadDate: new Date('2026-03-01')
  },
  {
    id: 'static-under-15',
    userId: 'static',
    title: 'Coding Round in HackArena 2k26 Achievements',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h14.png',
    fileType: 'image',
    uploadDate: new Date('2026-05-12')
  },
  {
    id: 'static-under-16',
    userId: 'static',
    title: 'Coding HackArena 2k26 Certificate',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h15.png',
    fileType: 'image',
    uploadDate: new Date('2026-05-12')
  },
  {
    id: 'static-under-10',
    userId: 'static',
    title: 'Idea Tribe Certificate',
    eventTitle: 'Idea-Tribe 2k25',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Idea-Tribe',
    fileUrl: './images/under/h10.png',
    fileType: 'image',
    uploadDate: new Date('2026-03-01')
  },
  {
    id: 'static-under-11',
    userId: 'static',
    title: 'AI WorkShop @ Auditorium',
    eventTitle: 'Ai workshop',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Competition',
    fileUrl: './images/under/h11.png',
    fileType: 'image',
    uploadDate: new Date('2026-03-01')
  },
  {
    id: 'static-under-12',
    userId: 'static',
    title: 'Proud Moment @ Hostel C',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Hackathon',
    fileUrl: './images/under/h12.jpg',
    fileType: 'image',
    uploadDate: new Date('2026-03-01')
  },
  {
    id: 'static-under-13',
    userId: 'static',
    title: 'AI workshop certification',
    eventTitle: 'Aiworkshop @ Auditorium',
    description: 'Undergraduate milestone achievement.',
    organization: 'Government Engineering College, Palamu',
    type: 'Competition',
    fileUrl: './images/under/h13.jpg',
    fileType: 'image',
    uploadDate: new Date('2026-03-01')
  },
  {
    id: 'static-under-14',
    userId: 'static',
    title: 'GeekForGeeks HackArena-2026',
    eventTitle: 'HackArena 2k26',
    description: 'Undergraduate milestone achievement.',
    organization: 'GEC palamu Code-Hack Club',
    type: 'Hackathon',
    fileUrl: './images/under/gfg.png',
    fileType: 'image',
    uploadDate: new Date('2026-03-01')
  }
];


const ACHIEVEMENT_TYPES = ['Hackathon', 'Idea-Tribe', 'Competition'];

export default function Achievements() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('All');
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const filteredAchievements = STATIC_ACHIEVEMENTS.filter((ach) => {
    const matchesSearch = ach.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ach.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (ach.eventTitle && ach.eventTitle.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = selectedTypeFilter === 'All' || ach.type === selectedTypeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="min-h-screen py-20 bg-slate-50/50 dark:bg-slate-900/50 relative flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6"
          >
            <Award size={16} />
            <span>Honors & Awards</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mb-6"
          >
            Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Achievements</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A track record of continuous learning, competitive excellence, and verified skill validations.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between bg-white/60 dark:bg-slate-800/60 p-4 rounded-3xl backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="relative w-full md:w-96 flex">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border appearance-none outline-none border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm font-medium"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 md:justify-end w-full md:w-auto">
            <Filter size={18} className="text-slate-400 mr-2" />
            {(['All', ...ACHIEVEMENT_TYPES]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedTypeFilter(type)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedTypeFilter === type
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 -translate-y-0.5'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {filteredAchievements.length === 0 ? (
           <div className="text-center py-20">
              <p className="text-slate-500">No achievements found matching your criteria.</p>
           </div>
        ) : (
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredAchievements.map((ach) => (
                <motion.div
                  key={ach.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card break-inside-avoid rounded-2xl border border-slate-200/60 dark:border-white/10 overflow-hidden flex flex-col p-4 shadow-md bg-white/40 dark:bg-slate-900/40"
                >
                  <span className="absolute top-4 right-4 bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase z-20 backdrop-blur-md">
                    {ach.type}
                  </span>

                  <div className="w-full rounded-xl bg-slate-50 dark:bg-black/40 overflow-hidden border border-slate-100 dark:border-white/5 relative flex items-center justify-center mb-4 min-h-[150px] cursor-zoom-in" onClick={() => setSelectedImageUrl(ach.fileUrl)}>
                    {ach.fileType === 'pdf' ? (
                      <div className="w-full h-48 flex flex-col items-center justify-center relative bg-rose-50/20 dark:bg-rose-950/20">
                        <FileText size={32} className="text-rose-500" />
                        <span className="mt-2 text-xs font-semibold text-rose-700 dark:text-rose-400">PDF Credential</span>
                      </div>
                    ) : (
                      <img src={ach.fileUrl} alt={ach.title} className="w-full h-auto object-contain bg-slate-900" />
                    )}
                  </div>

                  <div className="px-2 pb-2">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 leading-tight">
                      {ach.title}
                    </h3>
                    {ach.eventTitle && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold text-xs mb-3">
                        <Award size={12} />
                        {ach.eventTitle}
                      </div>
                    )}
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                      {ach.description}
                    </p>
                    <div className="flex flex-col gap-2 mt-auto border-t border-slate-100 dark:border-slate-800/80 pt-4">
                      {ach.organization && (
                        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                          <Building size={14} className="mr-2 text-slate-400" />
                          <span className="truncate">{ach.organization}</span>
                        </div>
                      )}
                      {ach.date && (
                        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                          <Calendar size={14} className="mr-2 text-slate-400" />
                          <span>{ach.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedImageUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setSelectedImageUrl(null)}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                 <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-20">
                     <X size={24} />
                 </button>
                 <motion.img
                    src={selectedImageUrl}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                 />
                 <a href={selectedImageUrl} download target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition" onClick={(e) => e.stopPropagation()}>
                    <Download size={18} />
                    Download File
                 </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
