import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <p className="text-primary font-medium tracking-wide">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Ashutosh Agrawal
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-text font-light">
            AIML Student | Java Full Stack Developer | ML Enthusiast
          </h2>
          <p className="text-muted-text max-w-lg leading-relaxed text-lg">
            I am a passionate developer creating modern, elegant, and highly performant web applications. Let's create something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="projects" smooth={true} duration={500}>
               <button className="bg-primary text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                 View Projects <ArrowRight size={18} />
               </button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-white/10 transition-all">
              <Download size={18} /> Download Resume
            </a>
            <a href="https://github.com/Ashutosh1448" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="border border-white/20 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-white/10 hover:border-primary hover:text-primary transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-agrawal-b90a9a296" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="border border-white/20 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-white/10 hover:border-primary hover:text-primary transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover relative z-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
