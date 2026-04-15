import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { navLinks, personalInfo } from "../data/portfolio";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    const sections = navLinks.map((l) => l.href.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 100) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const scrollTo = (href) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-lg shadow-marine-900/5 dark:shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.button
              onClick={() => scrollTo("#home")}
              className="relative group flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-marine-500/50 bg-white">
                <img src="/portfolio_logo.jpg" alt="M'Hamed Ouhanane" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl md:text-2xl font-display font-bold gradient-text hidden sm:block">
                {"<MO />"}
              </span>
            </motion.button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const section = link.href.replace("#", "");
                const isActive = activeSection === section;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-marine-600 dark:text-marine-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-marine-600 dark:hover:text-marine-300"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-marine-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 
                           hover:text-marine-600 dark:hover:text-marine-300 
                           hover:bg-marine-50 dark:hover:bg-marine-900/30 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="GitHub"
              >
                <FaGithub size={20} />
              </motion.a>

              <motion.button
                onClick={toggleTheme}
                className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-dark-300 
                           text-gray-600 dark:text-gray-400 hover:text-marine-600 
                           dark:hover:text-marine-300 transition-all overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={isDark ? "Mode clair" : "Mode sombre"}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isDark ? "moon" : "sun"}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="block"
                  >
                    {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              <motion.button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-gray-600 dark:text-gray-400 
                           hover:bg-marine-50 dark:hover:bg-marine-900/30 transition-all"
                whileTap={{ scale: 0.9 }}
              >
                {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white dark:bg-dark-400 
                         shadow-2xl z-50 lg:hidden p-6 pt-24"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const section = link.href.replace("#", "");
                  const isActive = activeSection === section;
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollTo(link.href)}
                      className={`text-left px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                        isActive
                          ? "bg-marine-50 dark:bg-marine-900/30 text-marine-600 dark:text-marine-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-300"
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
