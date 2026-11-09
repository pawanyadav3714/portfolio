import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Download, Eye, X } from 'lucide-react';

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "Aug 2023",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "Oct 2023",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="certifications" className="min-h-screen py-20 bg-slate-50/50 dark:bg-slate-900/50 relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-blue-500">Certifications</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-white/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button onClick={() => setSelectedCert(cert)} className="p-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition">
                    <Eye size={20} />
                  </button>
                  <a href="#" className="p-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition">
                    <Download size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="text-sm">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-3xl w-full glass-card border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-10"
              >
                <div className="p-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                  <button onClick={() => setSelectedCert(null)} className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition">
                    <X size={24} />
                  </button>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-800">
                  <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto rounded-lg shadow-inner" />
                </div>
                <div className="p-4 flex justify-end">
                  <a href="#" className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <Download size={18} /> Download PDF
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
