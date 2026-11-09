import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Calendar, Award, BookOpen, Building, CheckCircle2, Star, Sparkles, X } from 'lucide-react';

export default function Qualification() {
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string, title?: string, type?: 'qualification' | 'gallery' | 'standalone' } | null>(null);
  const [filter, setFilter] = useState<'All' | 'Undergraduate' | 'Intermediate' | 'Matriculation'>('All');

  const galleryImages = [
    { src: './images/pro/t1.jpg', title: 'Prize distribution Of District-Topper 2024', institution: 'RLSY jhumri telaiya', category: 'Intermediate' },
    { src: './images/under/h1.png', title: 'Webathon coding challenge', institution: 'Government Engineering College, Palamu(SeminarHall)', category: 'Undergraduate' },
    { src: './images/under/h2.png', title: 'Idea Tribe Pitching Competition 2k25', institution: 'Government Engineering College, Palamu(Auditorium)', category: 'Undergraduate' },
    { src: './images/under/h3.jpg', title: '1st RunnerUp HackArena 2k26 (GFG Collaboration)', institution: 'Government Engineering College, Palamu', category: 'Undergraduate' },
    { src: './images/under/h4.png', title: 'Idea Tribe prize distribution(Certification)', institution: 'Government Engineering College, Palamu', category: 'Undergraduate' },
    { src: './images/under/h5.jpg', title: '1st RunnerUp TEAM:- Code Crafter (HackArena 2k26)', institution: 'Government Engineering College, Palamu(CS Lab)', category: 'Undergraduate' },
    { src: './images/under/h6.jpg', title: 'Result celebration with seniors (HackArena 2k26)', institution: 'Government Engineering College, Palamu', category: 'Undergraduate' },
    { src: './images/under/h7.jpg', title: '1st RunnerUp with 1st position in HackArena 2k26', institution: 'Government Engineering College, Palamu', category: 'Undergraduate' },
    { src: './images/under/h8.jpg', title: 'After securing the keyboards in HackArena 2k26', institution: 'Government Engineering College, Palamu', category: 'Undergraduate' },
    { src: './images/under/h9.jpg', title: 'Coding Round in HackArena 2k26 group photo', institution: 'Government Engineering College, Palamu', category: 'Undergraduate' },
    { src: './images/under/h10.png', title: 'Idea Tribe Certificate', institution: 'Government Engineering College, Palamu', category: 'Undergraduate' },
    { src: './images/under/h11.png', title: 'AI WorkShop @ Auditorium', institution: 'Government Engineering College, Palamu', category: 'Undergraduate' },
    { src: './images/under/h13.jpg', title: 'AI workshop certification', institution: 'Government Engineering College, Palamu', category: 'Undergraduate' },
    { src: './images/under/h12.jpg', title: 'Proud Moment @ Hostel C', institution: 'Government Engineering College, Palamu (Hostel-C)', category: 'Undergraduate' },
    { src: './images/under/gfg.png', title: 'GeekForGeeks HackArena-2026', institution: 'GEC palamu Code-Hack Club', category: 'Undergraduate' },
    { src: './images/pro/t2.jpg', title: 'Prize distribution Of District-Topper 2024', institution: 'RLSY jhumri telaiya', category: 'Intermediate' },
    { src: './images/pro/t3.jpg', title: 'Prize distribution Of District-Topper 2024', institution: 'RLSY jhumri telaiya', category: 'Intermediate' },
    { src: './images/pro/t4.jpg', title: 'Prize distribution Of District-Topper 2024', institution: 'RLSY jhumri telaiya', category: 'Intermediate' },
    { src: './images/pro/t5.jpg', title: 'Prize distribution Of District-Topper 2024', institution: 'RLSY jhumri telaiya', category: 'Intermediate' },
    { src: './images/pro/t6.jpg', title: 'Received medal by Dr. NEERA YADAV (MLA of Koderma (BJP))', institution: 'Ram Lakhan Singh Yadav College Koderma (Shiv Vaateeka)', category: 'Intermediate' },
    { src: './images/pro/t7.jpg', title: 'Day 2 Prize distribution of District-Topper 2k24', institution: 'Ram Lakhan Singh Yadav College (RLSY)', category: 'Intermediate' },
    { src: './images/pro/t8.jpg', title: 'Day 2 Prize distribution of District-Topper 2k24', institution: 'Ram Lakhan Singh Yadav College (RLSY)', category: 'Intermediate' },
    { src: './images/pro/t9.jpg', title: 'Prize received by SHALINI GUPTA(social leader koderma(JMM))', institution: 'The chief guest honored the student with a prize.', category: 'Intermediate' },
    { src: './images/pro/t10.jpg', title: 'Received medal by Dr. NEERA YADAV (MLA of Koderma (BJP))', institution: 'Ram Lakhan Singh Yadav College Koderma (Shiv Vaateeka)', category: 'Intermediate' },
    { src: './images/pro/t11.jpg', title: 'Awarded for Excellence', institution: 'RLSY jhumri telaiya(shiv vaateeka)', category: 'Intermediate' },
    { src: './images/pro/t12.jpeg', title: 'District Topper-List of Intermediate 2k24', institution: 'Ram Lakhan Singh Yadav College(RLSY)', category: 'Intermediate' },
    { src: './images/pro/t13.jpg', title: 'Celebration Hall Prize ceremony', institution: 'Shiv Vaateeka jhumri telaiya', category: 'Intermediate' },
    { src: './images/pro/t14.png', title: 'Board Secondary Education Science Exhibition Topper', institution: 'Adarsh +2 Uchacha Vidyalaya Madhwatand (koderma)', category: 'Matriculation' }
  ];

  const filteredGalleryImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const qualifications = [
    {
      id: 'undergrad',
      type: 'Undergraduate',
      title: 'Bachelor of Technology (B.Tech)',
      specialization: 'Computer Science and Engineering',
      institution: 'Government Engineering College, Palamu',
      board: 'Jharkhand University of Technology (JUT)',
      duration: '2025 - 2029 (Ongoing)',
      status: 'Current Status: Pursuing',
      grade: 'First Year Student (Semester I/II)',
      description: 'Focusing on fundamentals of computer science, algorithmic thinking, database concepts, and modern full-stack web applications. Actively developing projects using the MERN stack (MongoDB, Express.js, React, Node.js) and cloud database technologies.',
      subjects: ['Data Structures & Algorithms', 'Web Development (React, Node, TypeScript)', 'Object-Oriented Programming', 'Database Management', 'Engineering Mathematics', 'Computer System Architecture'],
      score: 'Pursuing (CSE Track)',
      color: 'from-blue-500 to-indigo-600',
      link: 'https://gecpalamu.ac.in/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwhgjeA4E01J9CON6wRZOgC3qgUj4q6B-6WGWVcIfZg&s=10'
    },
    {
      id: 'intermediate',
      type: 'Intermediate',
      title: 'Senior Secondary School (XII - Science)',
      specialization: 'Physics, Chemistry, Mathematics & CS',
      institution: 'Ram Lakhan Singh Yadav College (RLSY-jhumri telaiya)',
      board: 'Jharkhand Academic Council (JAC)',
      duration: '2022 - 2024',
      status: 'Completed',
      grade: 'Passed with First Division',
      description: 'Acquired core competencies in science (Physics). Specialized heavily in Magnetism and Modern Physics , computer sciences problem-solving, which built a solid springboard for pursuing engineering.',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science (C++/Python)', 'English Core'],
      score: '441 Marks (88.2%)',
      color: 'from-purple-500 to-pink-600',
      link: 'https://www.justdial.com/Jhumritelaiya/Ram-Lakhan-Sing-Yadav-College-Bhandarwa/9999P6534-6534-190119224247-K4F9_BZDET',
      image: './images/pro/rlsy.png',
      certImage: './images/pro/12th marksheet .jpg'
    },
    {
      id: 'matriculation',
      type: 'Matriculation',
      title: 'Secondary School Certification (X)',
      specialization: 'General Subjects (Math, Science, Social Science)',
      institution: 'Adarsh +2 Uchacha Vidyalaya Madhwatand koderma',
      board: 'Central Board of Secondary Education',
      duration: '2021 - 2022',
      status: 'Completed',
      grade: 'Distinction / Passed with Honors',
      description: 'Laid down the analytical foundation with academic excellence in Mathematics and General Sciences. Engaged in multiple science exhibitors, debate clubs, and local mathematical olympiad forums.',
      subjects: ['Mathematics Standard', 'Science (Physics/Chemistry/Biology)', 'Social Science', 'English Language and Literature', 'Hindi', 'Information Technology'],
      score: '417 Marks (83.4%)',
      color: 'from-emerald-500 to-teal-600',
      link: 'https://www.google.com/local/place/fid/0x39f30be60fa8ea93:0x3f6452adc2c9a114/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DI8Y8Hyozzw3BJloeCJRGaA%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D4.273837%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFkk4WThIeW96enczQkpsb2VDSlJHYUE%3D&sa=X&ved=2ahUKEwjjyJmawP6UAxUAR2wGHV5gCoEQpx96BAgYEBI',
      image: './images/pro/madhwatand.png',
      pdfUrl: './images/pro/10th marksheet .pdf'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen font-sans"
    >
      {/* Header section with decorative graphics */}
      <div className="text-center relative max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4"
        >
          <GraduationCap size={14} className="animate-pulse" />
          <span>Academic Records & Portfolio</span>
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-4">
          Academic <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Qualifications</span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Developing a robust foundation in Computer Science and Engineering while mapping an active track of persistent academic progress and milestone achievements.
        </p>
      </div>

      {/* Grid containing the three core sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {qualifications.map((qual, index) => (
          <motion.div
            key={qual.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className="flex flex-col relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/75 dark:bg-[#0B0B0F]/75 hover:bg-white dark:hover:bg-[#0D0D12] shadow-lg dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300"
          >
            {/* Design accents */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${qual.color} z-10`} />
            
            {/* Institution Representative Banner Image */}
            <div 
              onClick={() => setSelectedImage({ src: qual.image, alt: qual.institution, title: qual.title, type: 'qualification' })}
              className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-150 dark:border-slate-800/80 group cursor-zoom-in"
            >
              <img 
                src={qual.image} 
                alt={qual.institution} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent transition-opacity" />
              
              {/* Blur design View overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-slate-200/20">
                  <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Image</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-5 md:pt-6 flex-grow flex flex-col">
              {/* Type tag & Score badge */}
              <div className="flex justify-between items-center mb-6">
                <span className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg bg-gradient-to-r ${qual.color} text-white`}>
                  {qual.type}
                </span>
                {qual.pdfUrl ? (
                  <a href={qual.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-2.5 py-1 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors cursor-pointer group/pdf" title="Open PDF">
                    <Award size={13} className="text-amber-500 group-hover/pdf:scale-110 transition-transform" />
                    {qual.score}
                  </a>
                ) : qual.certImage ? (
                  <button onClick={() => setSelectedImage({ src: qual.certImage!, alt: qual.type + ' Marksheet', title: qual.type + ' Marksheet', type: 'standalone' })} className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-2.5 py-1 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors cursor-pointer group/pdf" title="View Image">
                    <Award size={13} className="text-amber-500 group-hover/pdf:scale-110 transition-transform" />
                    {qual.score}
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                    <Award size={13} className="text-amber-500" />
                    {qual.score}
                  </span>
                )}
              </div>

              {/* Title & Specialization */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {qual.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 inline-flex items-center gap-1.5">
                <BookOpen size={14} />
                {qual.specialization}
              </p>

              {/* Institute details */}
              <div className="space-y-2.5 mb-6 text-sm text-slate-600 dark:text-slate-400 border-b border-dashed border-slate-200 dark:border-slate-800 pb-5">
                <div className="flex items-start gap-2.5">
                  <Building size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    {qual.link ? (
                      <a 
                        href={qual.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline inline-flex items-center gap-1 group transition-colors duration-200"
                      >
                        <span>{qual.institution}</span>
                        <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{qual.institution}</span>
                    )}
                    <p className="text-xs text-slate-500 mt-0.5">{qual.board}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar size={16} className="text-slate-400 flex-shrink-0" />
                  <span className="font-medium text-xs">{qual.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-450 leading-relaxed mb-6">
                {qual.description}
              </p>

              {/* Subjects / Syllabus Track */}
              <div className="mt-auto">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles size={12} className="text-blue-500" />
                  Featured Modules
                </h4>
                <div className="flex flex-wrap gap-2">
                  {qual.subjects.map((subj) => (
                    <span
                      key={subj}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-white/5 flex items-center gap-1"
                    >
                      <CheckCircle2 size={10} className="text-indigo-500 dark:text-indigo-400" />
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom decoration bar */}
            <div className="p-4 bg-slate-50/50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Star size={12} className="text-amber-500 fill-amber-500" />
                {qual.grade}
              </span>
              <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                {qual.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Document Archive & Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-24 border-t border-slate-200 dark:border-slate-800/80 pt-16"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            <Sparkles size={14} className="animate-pulse" />
            <span>Academic Image & Document Archive</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Academic Portfolios & <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Milestone Memories</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
            Browse through verified document snapshots, textbooks, class records, and academic milestones from matriculation to my ongoing undergraduate track.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {(['All', 'Undergraduate', 'Intermediate', 'Matriculation'] as const).map((cat) => {
            const count = cat === 'All' ? galleryImages.length : galleryImages.filter(img => img.category === cat).length;
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-[1.03] cursor-pointer shadow-sm ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white/80 dark:bg-[#0E0F14]/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{cat === 'All' ? 'All Archive Documents' : cat}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  isSelected 
                    ? 'bg-white/25 text-white' 
                    : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Masonry 3-Columns Grid */}
        <div className="columns-1 md:columns-3 gap-8 [column-fill:balance] w-full">
          <AnimatePresence mode="popLayout">
            {filteredGalleryImages.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                whileHover={{ y: -6 }}
                className="break-inside-avoid inline-block w-full mb-8 group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-[#07080C]/50 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-zoom-in hover:border-indigo-500/30 dark:hover:border-indigo-500/20"
                onClick={() => setSelectedImage({ src: img.src, alt: img.category, title: img.title, type: 'gallery' })}
              >
                {/* Image Showcase - naturally adapts to the image aspect ratio */}
                <div className="relative w-full max-h-[400px] sm:max-h-[450px] flex items-center justify-center overflow-hidden bg-slate-900 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/50 transition-all duration-300">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto max-h-[400px] sm:max-h-[450px] object-contain transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Glowing Floating View button overlay */}
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-slate-200/20">
                      <svg className="w-4 h-4 text-indigo-500 dark:text-indigo-400 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Preview Record</span>
                    </div>
                  </div>

                  {/* Top Category Badge */}
                  <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md text-white shadow-sm ${
                    img.category === 'Undergraduate'
                      ? 'bg-blue-600'
                      : img.category === 'Intermediate'
                      ? 'bg-purple-600'
                      : 'bg-emerald-600'
                  }`}>
                    {img.category}
                  </span>
                </div>

                {/* Info Footer within the Card */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold tracking-wider text-indigo-500 dark:text-indigo-400 uppercase mb-1 block">
                      {img.category} Snapshot
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-1 mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" title={img.title}>
                      {img.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Building size={12} className="text-slate-400 shrink-0" />
                      <span className="truncate">{img.institution}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>


      {/* Lightbox / Float Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 border border-white/10 shadow-lg cursor-pointer"
              title="Close"
            >
              <X size={24} />
            </button>

            {/* Modal Card holding information and image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full max-h-[95vh] bg-white dark:bg-[#0E0F14] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 cursor-default flex flex-col ${selectedImage.type === 'standalone' ? 'max-w-[95vw] 2xl:max-w-[90vw] h-[95vh] lg:h-[90vh]' : 'max-w-[95vw] lg:max-w-[85vw] xl:max-w-[80vw] h-auto lg:h-[85vh]'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-grow bg-slate-950 overflow-hidden flex flex-col justify-end min-h-[50vh] md:min-h-[60vh]">
                {/* Image Wrapper with AnimatePresence to transition between images */}
                <div className={`absolute inset-x-0 top-0 bg-slate-950 flex items-center justify-center p-2 ${selectedImage.type === 'standalone' ? 'bottom-0' : 'bottom-32 sm:bottom-28'}`}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage.src}
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`max-w-full max-h-full object-contain drop-shadow-xl ${selectedImage.type === 'standalone' ? 'w-full h-full' : ''}`}
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>
                
                {/* Visual Gradient overlay at bottom with image metadata details and thumbnails */}
                {selectedImage.type !== 'standalone' && (
                  <div className="relative bg-gradient-to-t from-black/95 via-black/85 to-transparent p-4 sm:p-6 text-white pt-24 sm:pt-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 z-10">
                    <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-1 truncate drop-shadow-md">
                      {selectedImage.alt}
                    </p>
                    <h3 className="text-lg sm:text-2xl font-bold tracking-tight truncate drop-shadow-md">
                      {selectedImage.title}
                    </h3>
                  </div>

                  {/* Horizontal Thumbnail strip with glowing transition layout */}
                  <div className="flex items-center gap-2 bg-white/5 dark:bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-xl shrink-0 self-start sm:self-auto max-w-full overflow-x-auto scrollbar-none">
                    {selectedImage.type === 'qualification' ? (
                      qualifications.map((q) => {
                        const isActive = q.image === selectedImage.src;
                        return (
                          <button
                            key={q.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage({ src: q.image, alt: q.institution, title: q.title, type: 'qualification' });
                            }}
                            className={`relative w-12 h-12 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 ${
                              isActive 
                                ? 'ring-2 ring-indigo-500 scale-105 shadow-[0_0_12px_rgba(99,102,241,0.6)]'  
                                : 'opacity-50 hover:opacity-100 hover:scale-105 hover:shadow-lg'
                            }`}
                            title={`Switch to ${q.institution}`}
                          >
                            <img
                              src={q.image}
                              alt={q.institution}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            {isActive && (
                              <div className="absolute inset-0 bg-indigo-500/10 flex items-center justify-center">
                                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping absolute" />
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 relative" />
                              </div>
                            )}
                          </button>
                        );
                      })
                    ) : (
                      filteredGalleryImages.map((g) => {
                        const isActive = g.src === selectedImage.src;
                        return (
                          <button
                            key={g.src}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage({ src: g.src, alt: g.category, title: g.title, type: 'gallery' });
                            }}
                            className={`relative w-11 h-11 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 ${
                              isActive 
                                ? 'ring-2 ring-indigo-500 scale-105 shadow-[0_0_10px_rgba(99,102,241,0.6)]' 
                                : 'opacity-40 hover:opacity-100 hover:scale-105'
                            }`}
                            title={`Switch to ${g.title}`}
                          >
                            <img
                              src={g.src}
                              alt={g.title}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
