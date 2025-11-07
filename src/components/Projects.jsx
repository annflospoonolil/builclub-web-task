import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaGlobe, FaLeaf, FaRocket } from "react-icons/fa";

const projects = [
  {
    title: "Smart Campus Portal",
    desc: "A digital ecosystem connecting students and faculty with real-time updates and resources.",
    icon: <FaGlobe />,
    link: "https://example.com/smart-campus",
  },
  {
    title: "EcoTrack",
    desc: "An IoT-powered sustainability tracker built by our team for smarter energy use.",
    icon: <FaLeaf />,
    link: "https://example.com/ecotrack",
  },
  {
    title: "BuildWeek Hackathon",
    desc: "Our flagship event where teams build and launch IOT projects in just 48 hours!",
    icon: <FaRocket />,
    link: "https://example.com/buildweek",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-background text-text px-6 py-24 text-center relative overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-heading font-bold mb-14 relative z-10"
      >
        Our <span className="text-secondary">Projects</span>
      </motion.h2>

      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <ProjectCard key={proj.title} {...proj} delay={idx * 0.2} />
        ))}
      </div>
    </section>
  );
}
