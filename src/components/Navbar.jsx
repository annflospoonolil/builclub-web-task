import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BuildClubLogo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Join"];

  // Detect scroll position for subtle background/shadow change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 shadow-md backdrop-blur-md"
            : "bg-primary shadow-none"
        } text-background flex justify-between items-center px-6 sm:px-10 py-4`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
        >
          <img
            src={BuildClubLogo}
            alt="Buildclub logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
            Buildclub
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-secondary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl focus:outline-none text-secondary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-primary text-background flex flex-col items-center py-6 space-y-4 border-t border-secondary/20 mt-[64px] z-40 shadow-lg fixed w-full"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-lg font-medium hover:text-secondary transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
