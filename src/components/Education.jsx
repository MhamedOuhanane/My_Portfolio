import { motion } from "framer-motion";
import {FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "../hooks/useInView";
import { education } from "../data/portfolio";

const Education = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" ref={ref} className="relative bg-white dark:bg-dark-400 overflow-hidden">
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
            Education
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            My academic <span className="gradient-text">background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-marine-600 to-navy-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 
                         bg-gradient-to-b from-marine-600 via-marine-400 to-transparent" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 
                           ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                  <div className="w-full h-full rounded-full bg-marine-500 border-4 
                               border-white dark:border-dark-400 shadow-lg shadow-marine-500/50" />
                  <div className="absolute inset-0 rounded-full bg-marine-500 animate-ping opacity-20" />
                </div>

                <div className={`flex-1 ml-14 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card card-hover p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{edu.icon}</span>
                      <div>
                        <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-marine-600 dark:text-marine-400 font-semibold text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendar size={10} /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt size={10} /> {edu.location}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
