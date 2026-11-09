import { motion } from 'motion/react';

export default function Resume() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400">Resume content will be here.</p>
    </motion.div>
  );
}
