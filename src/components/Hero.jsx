import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { useTypewriter } from "../hooks/useTypewriter";
import ParticleBackground from "./ParticleBackground";
import { personalInfo } from "../data/portfolio";

const Hero = () => {
  const typedText = useTypewriter(
    ["Java Web Developer", "Full-Stack Developer", "Spring Boot | React.js", "Passionate about Coding"],
    80,
    40,
    2500
  );

  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 150}px`;
        cursorRef.current.style.top = `${e.clientY - 150}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-gray-50 via-white to-marine-50 
                 dark:from-dark-500 dark:via-dark-400 dark:to-navy-950"
    >
      <div ref={cursorRef} className="cursor-glow hidden md:block" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-marine-400/10 dark:bg-marine-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy-400/10 dark:bg-navy-500/10 rounded-full blur-3xl animate-blob animate-delay-400" />
      </div>

      <ParticleBackground />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                       bg-marine-50 dark:bg-marine-900/30 border border-marine-200 
                       dark:border-marine-700/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-marine-700 dark:text-marine-300">
              Available for new opportunities
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black 
                       text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl font-light 
                             text-gray-500 dark:text-gray-400 mb-2">
              Hello, I'm
            </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-12 md:h-16 flex items-center justify-center mb-8"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-mono text-marine-600 dark:text-marine-400">
              {typedText}
            </span>
            <span className="w-0.5 h-8 md:h-10 bg-marine-500 ml-1 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 
                       max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Passionate Software Engineer specializing in designing and developing robust, scalable, and user-centric web applications. I bridge the gap between elegant front-end interfaces and solid back-end architectures to deliver high-quality digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a href={personalInfo.resumeEn || "#"} download="CV_Mhamed_Ouhanane_EN.pdf" className="btn-primary">
              Download CV (EN)
              <FaArrowDown className="animate-bounce" />
            </a>
            <a href={personalInfo.resumeFr || "#"} download="CV_Mhamed_Ouhanane_FR.pdf" className="btn-secondary">
              Télécharger CV (FR)
              <FaArrowDown className="animate-bounce" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn-secondary border-marine-200">
              <FaEnvelope />
              Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
              { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/80 dark:bg-dark-300/80 backdrop-blur 
                           border border-gray-200 dark:border-gray-700/50 
                           text-gray-600 dark:text-gray-400 
                           hover:text-marine-600 dark:hover:text-marine-400 
                           hover:border-marine-300 dark:hover:border-marine-600 
                           hover:shadow-lg hover:shadow-marine-500/10 
                           transition-all duration-300"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                title={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-marine-400/50 
                       flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-marine-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;