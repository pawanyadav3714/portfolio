import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { statistics } from '../data';

// Custom Counter Component
const Counter: React.FC<{ value: number, label: string }> = ({ value, label }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    let totalMilSecDur = 1000;
    let incrementTime = (totalMilSecDur / end) | 0;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="glass-card p-6 rounded-2xl text-center">
      <h3 className="text-4xl font-bold text-blue-500 mb-2">{count}+</h3>
      <p className="text-slate-600 dark:text-slate-400 font-medium">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-blue-500">Me</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get to know me</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a dedicated B.Tech student with a strong passion for Backend Development and Open Source. 
              My journey started with a curiosity about how things work behind the scenes, leading me to dive deep into Node.js, Express, and databases like MongoDB and Firebase.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I enjoy creating scalable architecture and writing clean, maintainable code. My career goal is to become a versatile Full Stack Developer who can tackle complex problems and deliver impactful solutions. 
              When I'm not coding, you can find me contributing to open-source projects or learning new technologies.
            </p>
            
            <ul className="mb-8 space-y-2 text-slate-700 dark:text-slate-300">
              <li><strong className="min-w-[100px] inline-block">Education:</strong> B.Tech in Computer Science</li>
              <li><strong className="min-w-[100px] inline-block">Focus:</strong> Backend & Web APIs</li>
              <li><strong className="min-w-[100px] inline-block">Location:</strong> India</li>
              <li><strong className="min-w-[100px] inline-block">Contact us:</strong> 7856039041</li>
              <li><strong className="min-w-[100px] inline-block">Email:</strong> pawanyadav3714@gmail.com</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {statistics.map((stat, index) => (
              <Counter key={index} value={stat.value} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
