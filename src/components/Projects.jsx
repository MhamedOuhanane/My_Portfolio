import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/portfolio";

const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card card-hover overflow-hidden flex flex-col h-full"
    >
      <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden shrink-0`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        <motion.div
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img 
            src={project.image && (project.image.includes('.') || project.image.startsWith('http')) ? project.image : "/default-project.jpg"} 
            alt={project.title} 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = "/default-project.jpg" }}
          />
        </motion.div>

        {project.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold 
                         bg-white/20 backdrop-blur-sm text-white border border-white/30">
            ⭐ Featured
          </span>
        )}

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm 
                         flex items-center justify-center gap-4"
            >
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/20 text-white 
                           hover:bg-white/30 transition-all"
              >
                <FaGithub size={22} />
              </motion.a>
              {project.demo && project.demo !== "#" && (
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/20 text-white 
                             hover:bg-white/30 transition-all"
                >
                  <FaExternalLinkAlt size={20} />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-marine-600 dark:text-marine-400 font-medium">
            {project.subtitle}
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag text-xs">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold 
                     text-marine-600 dark:text-marine-400 
                     hover:text-marine-700 dark:hover:text-marine-300 
                     transition-all group mt-auto"
        >
          View code
          <FaChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [currentPage, setCurrentPage] = useState(1);

  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(otherProjects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOtherProjects = otherProjects.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      document.querySelector("#more-projects").scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      document.querySelector("#more-projects").scrollIntoView({ behavior: "smooth" });
    }
  };

  const getPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
        items.push(i);
      } else if (items[items.length - 1] !== "...") {
        items.push("...");
      }
    }
    return items;
  };

  return (
    <section id="projects" ref={ref} className="relative bg-gray-50 dark:bg-dark-500 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-marine-500/30 to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono font-semibold text-marine-600 dark:text-marine-400 
                         tracking-widest uppercase mb-4 block">
            Projects
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            My <span className="gradient-text">work</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Concrete projects built with passion and technical rigor
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-marine-600 to-navy-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Featured Projects (Top 3) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div id="more-projects" className="pt-8 border-t border-gray-200 dark:border-gray-700/50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                More <span className="gradient-text">Projects</span>
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentOtherProjects.map((project, i) => (
                <ProjectCard key={project.title + i} project={project} index={i} isInView={true} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-6 mt-12">
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="p-3 rounded-xl bg-white dark:bg-dark-300 border border-gray-200 dark:border-gray-700 
                               text-gray-600 dark:text-gray-400 hover:text-marine-600 dark:hover:text-marine-400 
                               hover:border-marine-300 disabled:opacity-50 disabled:hover:border-gray-200 
                               transition-all focus:outline-none"
                  >
                    <FaChevronLeft />
                  </button>
                  
                  <div className="flex gap-2">
                    {getPaginationItems().map((page, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (page !== "...") {
                            setCurrentPage(page);
                            document.querySelector("#more-projects").scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        disabled={page === "..."}
                        className={`w-10 h-10 rounded-xl font-semibold transition-all ${
                          page === "..."
                            ? "bg-transparent text-gray-400 dark:text-gray-500 cursor-default"
                            : currentPage === page
                            ? "bg-marine-600 text-white shadow-lg shadow-marine-600/30"
                            : "bg-white dark:bg-dark-300 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-marine-300"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="p-3 rounded-xl bg-white dark:bg-dark-300 border border-gray-200 dark:border-gray-700 
                               text-gray-600 dark:text-gray-400 hover:text-marine-600 dark:hover:text-marine-400 
                               hover:border-marine-300 disabled:opacity-50 disabled:hover:border-gray-200 
                               transition-all focus:outline-none"
                  >
                    <FaChevronRight />
                  </button>
                </div>
                
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-dark-400/50 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                  <span className="font-bold text-marine-600 dark:text-marine-400">{projects.length}</span> projets au total
                </p>
              </div>
            )}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/MhamedOuhanane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaGithub />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
