import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Copy, FileText, Download, Loader2 } from 'lucide-react';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

const studentData = {
  name: "Pawan Yadav",
  regNumber: "25021440034",
  branch: "Computer Science and Engineering",
  session: "2025-29",
  college: "Government Engineering College, Palamu",
  university: "Jharkhand University of Technology (JUT)",
  email: "pawanyadav@example.com",
  skills: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB"
};

export default function StudentProfileCard() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const copyRegNumber = () => {
    navigator.clipboard.writeText(studentData.regNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsDownloading(true);
    try {
      const element = cardRef.current;
      // Temporarily stash the buttons so they don't appear in the PDF
      const actionButtons = element.querySelector('#profile-actions') as HTMLElement | null;
      if (actionButtons) actionButtons.style.display = 'none';

      const dataUrl = await toPng(element, { 
        backgroundColor: '#ffffff',
        pixelRatio: 2
      });
      
      if (actionButtons) actionButtons.style.display = 'flex';

      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve) => { img.onload = resolve; });

      const orientation = img.width > img.height ? 'l' : 'p';
      const pdf = new jsPDF(orientation, 'mm', 'a4');
      
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      const margin = 5; // 5mm minimal margin for maximum size
      const maxPdfWidth = pageWidth - 2 * margin;
      const maxPdfHeight = pageHeight - 2 * margin;
      
      let finalPdfWidth = maxPdfWidth;
      let finalPdfHeight = (img.height * maxPdfWidth) / img.width;
      
      if (finalPdfHeight > maxPdfHeight) {
        finalPdfHeight = maxPdfHeight;
        finalPdfWidth = (img.width * finalPdfHeight) / img.height;
      }
      
      // Center horizontally, push towards top
      const x = (pageWidth - finalPdfWidth) / 2;
      const y = (pageHeight - finalPdfHeight) / 2;
      
      pdf.addImage(dataUrl, 'PNG', x, y, finalPdfWidth, finalPdfHeight);
      pdf.save(`${studentData.name}_Profile.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-6 md:p-10 bg-white dark:bg-[#0B0B0F] rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 mt-10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Profile Information</h2>
        <div className="inline-flex self-start sm:self-auto items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] font-bold text-blue-600 dark:text-blue-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>RTDB Connect: portfolio-dc423</span>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Picture */}
        <div className="flex-shrink-0 relative group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 md:w-[150px] md:h-[150px] rounded-full border-4 border-blue-400 shadow-lg overflow-hidden bg-slate-100 dark:bg-slate-800"
          >
            <img 
              src="./images/pro/pawanProfile.jpg" 
              alt={studentData.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* MernStack Developer Popup */}
          <div className="absolute top-1/2 left-full z-30 pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2 -translate-y-1/2">
            <div className="relative">
              <div className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap backdrop-blur-md
                              bg-white/60 dark:bg-white/10 border border-white/70 dark:border-white/20
                              shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(0,0,0,0.05)]
                              dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)]
                              text-blue-600 dark:text-blue-400">
                MernStack Developer
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-white/60 dark:bg-slate-800 rotate-45 border-l border-b border-white/70 dark:border-white/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Grid */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <p className="text-[#64748b] text-lg font-medium">Name</p>
            <p className="text-[#0f172a] dark:text-white text-2xl font-bold">{studentData.name}</p>
          </div>
          <div className="relative">
            <p className="text-[#64748b] text-lg font-medium">Registration Number</p>
            <div className="flex items-center gap-2">
                <p className="text-[#0f172a] dark:text-white text-2xl font-bold">{studentData.regNumber}</p>
                <button onClick={copyRegNumber} className="text-slate-400 hover:text-blue-500 transition-colors">
                    <Copy size={18} />
                </button>
                {copied && <span className="text-sm text-green-500 absolute -top-5 right-0">Copied!</span>}
            </div>
          </div>
          <div>
            <p className="text-[#64748b] text-lg font-medium">Branch</p>
            <p className="text-[#0f172a] dark:text-white text-2xl font-bold">{studentData.branch}</p>
          </div>
          <div>
            <p className="text-[#64748b] text-lg font-medium">Session</p>
            <p className="text-[#0f172a] dark:text-white text-2xl font-bold">{studentData.session}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[#64748b] text-lg font-medium">College</p>
            <p className="text-[#0f172a] dark:text-white text-2xl font-bold">{studentData.college}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[#64748b] text-lg font-medium">University</p>
            <p className="text-[#0f172a] dark:text-white text-2xl font-bold">{studentData.university}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[#64748b] text-lg font-medium">Skills</p>
            <p className="text-[#0f172a] dark:text-white text-xl font-semibold">{studentData.skills}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar & Actions */}
      <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center mb-2">
          <p className="text-slate-600 dark:text-slate-400 font-medium">Profile Completion: 90%</p>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-6">
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                transition={{ duration: 0.5 }}
                className="bg-blue-500 h-3 rounded-full"
            />
        </div>

        <div id="profile-actions" className="flex gap-4">
            <button 
                onClick={() => window.open('./images/pro/resume.pdf', '_blank')}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
                <FileText size={18} /> Resume
            </button>
            <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />} 
                {isDownloading ? "Generating PDF..." : "Download Profile"}
            </button>
        </div>
      </div>
    </motion.div>
  );
}
