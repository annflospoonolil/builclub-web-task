import { motion } from "framer-motion";
import DefaultImage from "../assets/placeholder.png"; 

export default function ProjectCard({
  title,
  desc,
  icon,
  link,
  image = DefaultImage, 
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 0 20px rgba(255, 247, 5, 0.25)",
      }}
      className="relative bg-background/80 border border-gray-200 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden text-left hover:border-secondary transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Icon bubble overlay */}
        <div className="absolute top-3 left-3 bg-secondary text-primary p-2 rounded-full shadow-md">
          <span className="text-xl">{icon}</span>
        </div>
      </div>

      {/* Text content */}
      <div className="p-6">
        <h3 className="text-2xl font-heading font-bold mb-3 text-primary">
          {title}
        </h3>
        <p className="text-accent mb-4">{desc}</p>

        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-secondary text-primary font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-primary hover:text-secondary transition-all duration-300"
          >
            View Project →
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
