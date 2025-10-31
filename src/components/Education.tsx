import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Texas at Arlington, TX",
      period: "Aug 2023 - May 2025",
      description: "Advanced studies in AI/ML, distributed systems, and software engineering",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Visvesvaraya Technological University, India",
      period: "Aug 2019 - July 2023",
      description: "Foundation in computer science, algorithms, and software development",
    },
  ];

  return (
    <section id="education" className="py-32 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-medium mb-4 tracking-wide">EDUCATION</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-accent font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.period}</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
