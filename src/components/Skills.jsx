import { motion } from 'framer-motion';

const skills = [
  { category: "Programming Languages", items: ["Java", "Advance Java", "Python", "JavaScript", "HTML/CSS"] },
  { category: "Frontend", items: ["React", "Tailwind CSS", "Framer Motion", "Vite"] },
  { category: "Backend & DB", items: ["Spring / Spring Boot", "Node.js", "Express", "MySQL", "MongoDB"] },
  { category: "Tools & Others", items: ["Git & GitHub", "VS Code", "Vercel", "Postman"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-6 border border-white/5 hover:border-primary/40 transition-all duration-300 group aspect-square flex flex-col justify-between shadow-lg"
            >
              <h3 className="text-lg xl:text-xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_10px_var(--tw-colors-primary)] transition-shadow"></span>
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm text-muted-text font-medium">
                      <span>{item}</span>
                    </div>
                    {/* Visual skill indicator bar */}
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.floor(Math.random() * 20) + 75}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                        className="bg-primary h-full rounded-full" 
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
