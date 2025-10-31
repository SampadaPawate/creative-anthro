import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "C++", "TypeScript", "JavaScript", "R", "Ruby", "HTML", "CSS"],
    },
    {
      category: "Machine Learning",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "NLP"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Flask", "Streamlit", "RESTful APIs", "Express"],
    },
    {
      category: "Databases",
      skills: ["SQL Server", "MySQL", "PostgreSQL", "Prisma", "Firebase"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "Vercel", "Ansible", "CI/CD", "Docker"],
    },
  ];

  return (
    <section id="skills" className="py-32 gradient-subtle" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-medium mb-4 tracking-wide">SKILLS & EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Technical Proficiency
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 text-foreground rounded-lg text-sm font-medium border border-accent/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent) / 0.2)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
