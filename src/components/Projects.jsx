import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: "AI Job Detector",
    description: "An advanced machine learning system that detects fake job postings with high accuracy using deep learning (BERT) and UI explainability.",
    tags: ["Python", "Streamlit", "BERT", "Scikit-Learn"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Mobile AI Crop Advisor",
    description: "A localized and explainable crop recommendation system with yield forecasting, designed for small-scale farmers in low-connectivity regions.",
    tags: ["React Native", "Python API", "Machine Learning"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A premium, fully fleshed personal portfolio website with glassmorphism, Framer Motion animations, and dark mode design aesthetics.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden flex flex-col group relative border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="h-48 bg-muted w-full relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background/90 z-10 opacity-60 group-hover:opacity-30 transition-opacity"></div>
                <h3 className="text-2xl font-bold text-white/50 z-0 select-none">Project Preview</h3>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-muted-text flex-1 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 border-t border-white/10 pt-6">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-text hover:text-white transition-colors">
                    <Code size={20} /> <span className="text-sm font-medium">Code</span>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-text hover:text-primary transition-colors ml-auto">
                    <span className="text-sm font-medium">Live Demo</span> <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
