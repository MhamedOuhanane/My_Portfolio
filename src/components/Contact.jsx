import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaGithub, FaCheck, FaSpinner } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useInView } from "../hooks/useInView";
import { personalInfo } from "../data/portfolio";

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ÉTAPE IMPORTANTE : Remplacez par vos vrais IDs EmailJS que vous aurez créés
    const serviceId = "service_665zmfl";
    const templateId = "template_rb6xdgg";
    const publicKey = "bXOx7sNiXDVzlA9LV";

    try {
      // Envoi réel via EmailJS
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-blue-500 to-cyan-500",
    },
    // {
    //   icon: FaPhone,
    //   label: "Phone",
    //   value: personalInfo.phone,
    //   href: `tel:${personalInfo.phone.replace(/-/g, "")}`,
    //   color: "from-green-500 to-emerald-500",
    // },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "MhamedOuhanane",
      href: personalInfo.github,
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Localisation",
      value: personalInfo.location,
      href: "#",
      color: "from-red-500 to-orange-500",
    },
  ];

  const inputClasses = (field) =>
    `w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark-300 
     border-2 transition-all duration-300 outline-none text-gray-900 dark:text-white 
     placeholder-gray-400 dark:placeholder-gray-500 
     ${
       focused === field
         ? "border-marine-500 dark:border-marine-400 shadow-lg shadow-marine-500/10"
         : "border-gray-200 dark:border-gray-700/50 hover:border-marine-300 dark:hover:border-marine-600"
     }`;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-gray-50 dark:bg-dark-500 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-marine-500/30 to-transparent" />

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-marine-400/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy-400/5 rounded-full blur-3xl" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono font-semibold text-marine-600 dark:text-marine-400 
                         tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Feel free to reach out to discuss your projects
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-marine-600 to-navy-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                Get in touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I am always open to new opportunities and collaborations. Feel free to contact me!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl card card-hover group"
                  >
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${info.color} 
                                text-white shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {info.label}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="Your name"
                    required
                    className={inputClasses("name")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="votre@email.com"
                    required
                    className={inputClasses("email")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  placeholder="Message subject"
                  required
                  className={inputClasses("subject")}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className={`${inputClasses("message")} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg flex items-center 
                           justify-center gap-3 transition-all duration-300 ${
                             status === "sent"
                               ? "bg-green-500 text-white"
                               : status === "error"
                               ? "bg-red-500 text-white"
                               : "bg-gradient-to-r from-marine-700 to-navy-800 text-white shadow-lg shadow-marine-700/30 hover:shadow-xl hover:shadow-marine-600/40"
                           }`}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <FaPaperPlane /> Send message
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <FaSpinner className="animate-spin" /> Sending...
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <FaCheck /> Message sent!
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Error, try again
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
