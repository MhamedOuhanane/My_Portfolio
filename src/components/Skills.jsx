import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/portfolio";

const categories = [
  { key: "all", label: "All" },
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "databases", label: "Databases" },
  { key: "tools", label: "Tools" },
];

const SkillCard = ({ skill, index, isInView }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card card-hover group p-5 flex flex-col items-center text-center"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 
                   transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
        style={{
          backgroundColor: `${skill.color}15`,
          border: `1px solid ${skill.color}30`,
        }}
      >
        <Icon size={28} style={{ color: skill.color }} />
      </div>
      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") {
      return [
        ...skills.languages,
        ...skills.frameworks,
        ...skills.databases,
        ...skills.tools,
      ];
    }
    return skills[activeCategory] || [];
  }, [activeCategory]);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-gray-50 dark:bg-dark-500 overflow-hidden"
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
            Skills
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            My technical <span className="gradient-text">arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-marine-600 to-navy-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-marine-600 text-white shadow-lg shadow-marine-600/30"
                  : "bg-white dark:bg-dark-300 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700/50 hover:border-marine-300 dark:hover:border-marine-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} isInView={isInView} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-6">
            Methodologies & Design
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile / Scrum",
              "REST API",
              "UML",
              "CI/CD",
              "Software Modeling",
              "GitHub Projects",
            ].map((item) => (
              <span key={item} className="tech-tag">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
