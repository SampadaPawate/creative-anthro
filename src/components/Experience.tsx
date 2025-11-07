import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Research Assistant",
      company: "University of Texas at Arlington",
      period: "May 2025 - Present",
      achievements: [
        "Migrated site from Jekyll to Next.js 14 with TypeScript and Tailwind CSS",
        "Built responsive UI and converted YAML content to typed JSON",
        "Implemented structured, filterable Team/News/Publications sections",
        "Set up GitHub to Vercel CI/CD with ESLint and Analytics",
      ],
    },
    {
      title: "Resident Assistant",
      company: "Centennial Court Apartments, UTA",
      period: "Aug 2024 – May 2025",
      achievements: [
        "Hosted community-building events to enhance student engagement and promote campus involvement",
        "Supported residents with academic, personal, and housing-related concerns to ensure a positive living experience",
        "Maintained a safe and inclusive residential environment through effective communication and policy enforcement",
        "Collaborated with housing staff to coordinate events, manage documentation, and handle emergency situations responsibly",
      ],
    },
    {
      title: "Resident Assistant",
      company: "Upward Bound Math & Science (UBMS) Summer Program, UTA",
      period: "Jun 2024 – Jul 2024",
      achievements: [
        "Supervised high school students during a six-week residential academic program",
        "Facilitated educational and recreational activities to foster leadership, teamwork, and personal growth",
        "Monitored student well-being and enforced program policies to ensure safety and discipline",
        "Coordinated with faculty and staff to organize workshops, mentoring sessions, and evening events",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Gangavathiexports",
      period: "Jan 2024 - June 2024",
      achievements: [
        "Automated Magento installation with Ansible, reducing deployment time by 75%",
        "Integrated mobile-friendly theme improving inventory management by 40%",
        "Implemented secure payment gateway and SEO best practices",
        "Enhanced search engine visibility to drive organic traffic",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Maruti Constructions",
      period: "Sep 2021 - Aug 2022",
      achievements: [
        "Developed ML system achieving 92% prediction accuracy in real estate pricing",
        "Engineered data preprocessing pipelines improving model performance by 38%",
        "Architected scalable Flask RESTful API for real-time predictions",
        "Reduced estimation time by 75% through automated ML analysis",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-medium mb-4 tracking-wide">EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Professional Journey
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="relative pl-8 md:pl-20"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-2 w-5 h-5 bg-accent rounded-full border-4 border-background shadow-glow" />

                <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-lg text-accent font-medium">{exp.company}</p>
                      <p className="text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      >
                        <span className="text-accent mt-1">▸</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
