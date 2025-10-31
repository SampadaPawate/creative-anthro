import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Sparkles } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in React, Next.js, Node.js, and modern web technologies",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Specialized in TensorFlow, PyTorch, and AI-powered solutions",
    },
    {
      icon: Sparkles,
      title: "Problem Solver",
      description: "Passionate about building scalable, efficient systems",
    },
  ];

  return (
    <section id="about" className="py-32 gradient-subtle" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-medium mb-4 tracking-wide">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Crafting Digital Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science graduate student at UT Arlington with a passion for building innovative solutions that blend elegant design with powerful functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently working as a Research Assistant, I've successfully migrated complex systems to modern tech stacks, implemented scalable architectures, and developed ML models with industry-leading accuracy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans full-stack development, machine learning, and cloud technologies. I thrive on transforming complex problems into intuitive, performant solutions.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index + 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
