import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skills } from '../data';

export default function Skills() {
  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="min-h-screen py-20 bg-slate-50/50 dark:bg-slate-900/50 relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-blue-500">Skills</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category 
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-[0_4px_15px_rgba(99,102,241,0.35)]' 
                    : 'glass-card hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.1 }}
                key={skill.name}
                className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-blue-500 font-mono font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-xs text-slate-500 mt-3 text-right">{skill.category}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
