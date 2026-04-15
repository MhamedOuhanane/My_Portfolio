import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { personalInfo, navLinks } from "../data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-dark-600 text-gray-400 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-marine-600 via-marine-400 to-navy-500" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-marine-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="text-2xl font-display font-bold text-white mb-4 block">
              {"<MO />"}
            </span>
            <p className="text-sm leading-relaxed max-w-xs">
              Passionate Full-Stack Web Developer building modern and performant applications.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:text-marine-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-4">Socials</h4>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: personalInfo.github },
                { icon: FaLinkedin, href: personalInfo.linkedin },
                { icon: FaEnvelope, href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-800 hover:bg-marine-600 
                             text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm flex items-center gap-1">
            © {new Date().getFullYear()} M'Hamed Ouhanane. Made with
            <span className="text-marine-400">React.js</span>
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl bg-marine-600 text-white 
                       hover:bg-marine-500 transition-all shadow-lg shadow-marine-600/30"
          >
            <FaArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
