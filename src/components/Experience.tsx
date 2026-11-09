import { motion } from 'motion/react';
import { experiences } from '../data';
import { Briefcase, FileText, Award, FileBadge, Medal } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 relative flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-blue-500">Experience</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              <div className="absolute -left-[50px] md:-left-[66px] bg-blue-500 text-white p-2 rounded-full shadow-lg shadow-blue-500/30">
                <Briefcase size={20} />
              </div>
              
              <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
                
                <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-semibold mb-4">
                  {exp.duration}
                </span>
                
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <h4 className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-6">
                  {exp.organization}
                </h4>
                
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 list-disc list-inside mb-8">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mt-6">
                  {(exp as any).offerLetter && (
                    <a href={(exp as any).offerLetter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-blue-500/5 dark:hover:bg-blue-500/5 transition-all duration-300 group/btn shadow-sm hover:shadow-md backdrop-blur-sm">
                      <FileText size={18} className="text-blue-500 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Offer Letter</span>
                    </a>
                  )}
                  
                  {(exp as any).certification && (
                    <a href={(exp as any).certification} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-500/5 dark:hover:bg-emerald-500/5 transition-all duration-300 group/btn shadow-sm hover:shadow-md backdrop-blur-sm">
                      <Award size={18} className="text-emerald-500 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Certification</span>
                    </a>
                  )}
                  
                  {((exp as any).recommendationLetter || (exp as any).LatterOfRecommandation) && (
                    <a href={(exp as any).recommendationLetter || (exp as any).LatterOfRecommandation} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:bg-purple-500/5 dark:hover:bg-purple-500/5 transition-all duration-300 group/btn shadow-sm hover:shadow-md backdrop-blur-sm">
                      <FileBadge size={18} className="text-purple-500 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Letter of Recommendation</span>
                    </a>
                  )}

                  {(exp as any).appreciationLetter && (
                    <a href={(exp as any).appreciationLetter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:bg-amber-500/5 dark:hover:bg-amber-500/5 transition-all duration-300 group/btn shadow-sm hover:shadow-md backdrop-blur-sm">
                      <Medal size={18} className="text-amber-500 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Appreciation Letter</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
