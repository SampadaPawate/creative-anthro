import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Learnify",
      description: "Comprehensive learning management platform with content delivery, progress tracking, and e-commerce capabilities. Increased user engagement by 30% and session duration by 25%.",
      tags: ["Next.js", "Clerk", "Prisma", "Stripe", "Cypress", "TailwindCSS"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Maverick Market",
      description: "Real-time Android e-commerce application featuring wishlist management, dynamic pricing, and image optimization. Improved app responsiveness by 50% through optimized database queries.",
      tags: ["React Native", "Firebase", "Real-time DB", "E-commerce"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "COVID-19 Detection System",
      description: "Deep learning CNN model for medical image analysis achieving 94% accuracy in COVID-19 detection from X-ray images, outperforming traditional methods by 15%. Enhanced training dataset by 300%.",
      tags: ["TensorFlow", "Keras", "CNN", "Transfer Learning", "Medical AI"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-medium mb-4 tracking-wide">PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative p-8 md:p-10">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn border-accent/30 hover:bg-accent/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn border-accent/30 hover:bg-accent/10"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
