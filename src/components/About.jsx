import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-muted-text text-lg leading-relaxed"
          >
            <p>
              I am a driven and forward-thinking developer focused on creating smooth, interactive, and beautiful user experiences. I specialize in modern web technologies, always looking to optimize performance and push the boundaries of design.
            </p>
            <p>
              My journey began with a curiosity for how things work, leading me down the path of software engineering. Today, I build scalable solutions that make a tangible impact. With a strong attention to detail, I strive to write clean, maintainable code.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-8 border-l-2 border-white/10 pl-6 relative">
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full bg-primary -left-[31px] top-1 shadow-[0_0_10px_var(--tw-colors-primary)]"></div>
                <h4 className="text-xl font-bold text-white">B.Tech in Computer Science (AIML)</h4>
                <p className="text-primary font-medium my-1">Oriental College of Technology, Bhopal • 2023 - Present</p>
                <p className="text-muted-text">Current CGPA: 8.93</p>
              </div>
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full bg-primary/50 -left-[31px] top-1"></div>
                <h4 className="text-xl font-bold text-white">12th Standard</h4>
                <p className="text-primary/70 font-medium my-1">Angels Abode Public School, Tikamgarh • 2023</p>
                <p className="text-muted-text">CBSE Board</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
