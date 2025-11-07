import { motion } from "framer-motion";
import BuildClubLogo from "../assets/logo.png";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-primary text-background flex justify-between items-center px-8 py-4 shadow-md sticky top-0 z-50"
    >
      <a href="" className="flex items-center gap-3">
          <img src={BuildClubLogo} alt="Buildclub logo" className="h-10 w-10" />
          <h1 className="text-2xl font-heading font-bold tracking-tight">
          Buildclub
          </h1>
      </a>

      <nav className="hidden md:flex gap-8 text-base font-medium">
        {["Home", "About", "Projects", "Join"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-secondary transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
