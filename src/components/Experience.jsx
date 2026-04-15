import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import { useInView } from "../hooks/useInView";
import { experiences } from "../data/portfolio";

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="relative bg-white dark:bg-dark-400 overflow-hidden">
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
            Experience
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            My professional <span className="gradient-text">journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-marine-600 to-navy-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="card card-hover overflow-hidden"
            >
              <div className="h-1.5 bg-gradient-to-r from-marine-600 via-marine-400 to-navy-500" />

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2.5 rounded-xl bg-marine-50 dark:bg-marine-900/30 text-marine-600 dark:text-marine-400">
                        <FaBriefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-marine-600 dark:text-marine-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 ml-14">
                      <span className="flex items-center gap-1.5">
                        <FaCalendar size={12} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {exp.project && (
                  <div className="mb-4 p-3 rounded-xl bg-marine-50 dark:bg-marine-900/20 
                                border border-marine-200 dark:border-marine-700/50">
                    <span className="text-sm font-semibold text-marine-700 dark:text-marine-300">
                      🎯 Project: {exp.project}
                    </span>
                  </div>
                )}

                <ul className="space-y-2.5 mb-6">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-marine-500 shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
