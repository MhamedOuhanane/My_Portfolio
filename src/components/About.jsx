import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { useInView } from "../hooks/useInView";
import { personalInfo, languages, interests, projects, experiences, skills } from "../data/portfolio";

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

    const projectsCount = projects.length;
  const totalSkills = 
    skills.languages.length + 
    skills.frameworks.length + 
    skills.databases.length + 
    skills.tools.length;
  const internshipCount = experiences.filter(exp => 
    exp.title.toLowerCase().includes('intern') || 
    exp.title.toLowerCase().includes('stage')
  ).length;

  const stats = [
    { 
      label: "Projects", 
      value: `${projectsCount}+`, 
      icon: "🚀" 
    },
    { 
      label: "Technologies", 
      value: `${totalSkills}+`, 
      icon: "⚡" 
    },
    { 
      label: "Internships", 
      value: internshipCount, 
      icon: "💼" 
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-white dark:bg-dark-400 overflow-hidden"
    >
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
            About
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Who am <span className="gradient-text">I</span> ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-marine-600 to-navy-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 mx-auto mb-10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-marine-500 to-navy-700 rotate-6 opacity-20" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-marine-600 to-navy-800 -rotate-3 opacity-30" />
              <div
                className="relative w-full h-full rounded-3xl bg-gradient-to-br 
                           from-marine-600 via-marine-700 to-navy-900 
                           overflow-hidden shadow-2xl shadow-marine-700/30 p-1"
              >
                <div className="w-full h-full rounded-[20px] overflow-hidden bg-white dark:bg-dark-300">
                  <img src="/portfolio_logo.jpg" alt="M'Hamed Ouhanane" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { icon: FaMapMarkerAlt, text: personalInfo.location, color: "text-red-500" },
                { icon: FaEnvelope, text: personalInfo.email, color: "text-marine-500" },
                { icon: FaPhone, text: personalInfo.phone, color: "text-green-500" },
                { icon: FaGithub, text: "MhamedOuhanane", color: "text-gray-700 dark:text-gray-300" },
              ].map(({ icon: Icon, text, color }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl 
                             hover:bg-gray-50 dark:hover:bg-dark-300 transition-all"
                >
                  <div className={`p-2 rounded-lg bg-gray-100 dark:bg-dark-300 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="card card-hover p-4 text-center"
                >
                  <span className="text-2xl mb-1 block">{stat.icon}</span>
                  <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
                🌍 Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {lang.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-gradient-to-r from-marine-600 to-navy-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
                🏆 Interests
              </h3>
              <div className="flex gap-3 flex-wrap">
                {interests.map(({ name, icon: Icon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                               bg-marine-50 dark:bg-marine-900/30 text-marine-700 
                               dark:text-marine-300 border border-marine-200 
                               dark:border-marine-700/50 font-medium text-sm"
                  >
                    <Icon /> {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
