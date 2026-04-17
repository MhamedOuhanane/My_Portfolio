import {
  FaReact,
  FaLaravel,
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaJs,
  FaVolleyballBall,
  FaFutbol,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiDjango,
  SiAngular,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiHibernate,
  SiJira,
  SiTrello,
  SiVercel,
  SiSwagger,
} from "react-icons/si";
import { SiC } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const personalInfo = {
  name: "M'Hamed Ouhanane",
  title: "Java Web Developer",
  subtitle: "Full-Stack Developer",
  email: "mhmdeouhnan60@gmail.com",
  phone: "",
  github: "https://github.com/MhamedOuhanane",
  linkedin: "https://www.linkedin.com/in/m-hamed-ouhanane-986688340",
  location: "Marrakech, Morocco",
  bio: `Passionate Full-Stack Web Developer building modern and performant web applications. Trained at YouCode (OCP | UM6P), I master technologies like Java/Spring Boot, React.js, Django, and Laravel. I'm driven by technical challenges and continuous learning.`,
  resumeEn: "/CV_Mhamed_Ouhanane_EN.pdf",
  resumeFr: "/CV_Mhamed_Ouhanane_FR.pdf",
};

export const skills = {
  languages: [
    { name: "Java", icon: FaJava, level: 85, color: "#f89820" },
    { name: "JavaScript", icon: FaJs, level: 82, color: "#f7df1e" },
    { name: "PHP", icon: FaPhp, level: 78, color: "#777bb4" },
    { name: "Python", icon: FaPython, level: 75, color: "#3776ab" },
    { name: "C", icon: SiC, level: 65, color: "#00599c" },
    { name: "HTML5", icon: FaHtml5, level: 92, color: "#e34f26" },
    { name: "CSS3", icon: FaCss3Alt, level: 88, color: "#1572b6" },
  ],
  frameworks: [
    { name: "Spring Boot", icon: SiSpringboot, level: 80, color: "#6db33f" },
    { name: "Spring Security", icon: SiSpringsecurity, level: 72, color: "#6db33f" },
    { name: "React.js", icon: FaReact, level: 85, color: "#61dafb" },
    { name: "Angular", icon: SiAngular, level: 70, color: "#dd0031" },
    { name: "Django", icon: SiDjango, level: 75, color: "#092e20" },
    { name: "Laravel", icon: FaLaravel, level: 78, color: "#ff2d20" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "#06b6d4" },
    { name: "Bootstrap", icon: FaBootstrap, level: 85, color: "#7952b3" },
  ],
  databases: [
    { name: "MySQL", icon: SiMysql, level: 82, color: "#4479a1" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 78, color: "#4169e1" },
    { name: "JPA/Hibernate", icon: SiHibernate, level: 75, color: "#59666c" },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "#f05032" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "Docker", icon: FaDocker, color: "#2496ed" },
    { name: "VS Code", icon: VscVscode, color: "#007acc" },
    { name: "Figma", icon: FaFigma, color: "#f24e1e" },
    { name: "Jira", icon: SiJira, color: "#0052cc" },
    { name: "Trello", icon: SiTrello, color: "#0052cc" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Swagger", icon: SiSwagger, color: "#85ea2d" },
  ],
};

export const experiences = [
  {
    title: "Full-Stack Web Developer | Internship",
    company: "EYSI - Digital Agency",
    location: "Marrakech, Morocco",
    period: "May - July 2025",
    project: "Furfid - Pet insurance platform",
    description: [
      "Developed a REST API using Django/Python for service management (authentication, appointments, reimbursements)",
      "Created a responsive interface with React.js and Tailwind CSS",
      "Designed the MySQL database",
      "Implemented a multi-role system",
      "Managed pets, appointments, and reimbursements",
      "Developed a custom dashboard",
    ],
    technologies: ["React.js", "Django", "Python", "MySQL", "Tailwind CSS", "REST API", "Git"],
  },
];

export const projects = [
  // --- FEATURED PROJECTS ---
  {
    title: "Desert Akal",
    subtitle: "Travel & Culture Management",
    description: "A specialized solution for managing cultural resources related to desert exploration. It centralizes multimedia content and expedition documents.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Angular", "Tailwind CSS", "Docker"],
    github: "https://github.com/MhamedOuhanane/DesertAkal",
    demo: "#",
    image: "/projects/desertakal.png",
    color: "from-orange-500 to-yellow-500",
    featured: true,
  },
  {
    title: "Biblionix",
    subtitle: "Library Management Ecosystem",
    description: "A complete platform managing book lifecycles, dynamic reservations, and loans. Includes advanced administration and statistical tools.",
    technologies: ["Laravel", "React.js", "UML", "PostgreSQL", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/MhamedOuhanane/Fil-Rouge-Biblionix",
    demo: "#",
    image: "/projects/biblionix.jpg",
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    title: "Furfid",
    subtitle: "Pet Insurance Platform",
    description: "A comprehensive protection system for domestic animals featuring multi-role management, appointment scheduling, and reimbursement tracking.",
    technologies: ["Django", "React.js", "MySQL", "Tailwind CSS", "REST API"],
    github: "https://github.com/MhamedOuhanane/pet_insurance_furfid",
    demo: "#",
    image: "/projects/furfid.png",
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },

  // --- OTHER PROJECTS (SYNCED WITH REPOS.JSON) ---
  {
    title: "Al Baraka",
    subtitle: "Secure Banking Backend",
    description: "Management of deposits and transfers with validation workflows and JWT/Spring Security protection.",
    technologies: ["Java", "Spring Boot", "JWT", "Docker"],
    github: "https://github.com/MhamedOuhanane/Al_Baraka",
    color: "from-blue-600 to-indigo-700",
    featured: false
  },
  {
    title: "Al Baraka Front",
    subtitle: "Angular Banking Interface",
    description: "Client and agent dashboard for tracking banking operations developed with Angular 21.",
    technologies: ["TypeScript", "Angular", "Tailwind CSS"],
    github: "https://github.com/MhamedOuhanane/Al-Baraka-Front",
    color: "from-cyan-500 to-blue-600",
    featured: false
  },
  {
    title: "Africa Geo Junior",
    subtitle: "Interactive Educational Tool",
    description: "An edutainment platform to discover African geography with a built-in content management system.",
    technologies: ["PHP", "MySQL", "CSS"],
    github: "https://github.com/MhamedOuhanane/Africa-Geo-Junior",
    color: "from-green-400 to-blue-500",
    featured: false
  },
  {
    title: "Art Culinaire",
    subtitle: "Gastronomic Showcase",
    description: "A platform for booking home culinary experiences, connecting chefs directly with their clients.",
    technologies: ["PHP", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/MhamedOuhanane/Art-Culinaire",
    color: "from-red-500 to-orange-600",
    featured: false
  },
  {
    title: "Auchan",
    subtitle: "Dynamic E-commerce",
    description: "An interactive catalog featuring a smart cart and data persistence for a seamless shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MhamedOuhanane/Auchan",
    color: "from-red-600 to-red-800",
    featured: false
  },
  {
    title: "Youdemy MVC",
    subtitle: "Open Source E-learning",
    description: "A learning ecosystem connecting teachers and students through a robust MVC architecture.",
    technologies: ["PHP", "MVC", "PostgreSQL"],
    github: "https://github.com/MhamedOuhanane/Youdemy-MVC",
    color: "from-indigo-500 to-purple-600",
    featured: false
  },
  {
    title: "Smart Shop",
    subtitle: "B2B Hardware Backend",
    description: "Management of customers, products, and automated loyalty for an IT hardware distributor.",
    technologies: ["Java", "JDBC", "Design Patterns"],
    github: "https://github.com/MhamedOuhanane/SmartShop",
    color: "from-slate-700 to-slate-900",
    featured: false
  },
  {
    title: "Medi Expert",
    subtitle: "Medical Tele-expertise",
    description: "A remote consultation platform between general practitioners and medical specialists.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/MhamedOuhanane/MediExpert",
    color: "from-teal-500 to-emerald-600",
    featured: false
  },
  {
    title: "Park It",
    subtitle: "Parking Reservation",
    description: "A Laravel REST API allowing real-time searching and booking of parking spaces.",
    technologies: ["Laravel", "PostgreSQL", "Sanctum"],
    github: "https://github.com/MhamedOuhanane/Park-It",
    color: "from-slate-500 to-slate-700",
    featured: false
  },
  {
    title: "TouriStay 2030",
    subtitle: "Global Seasonal Rental",
    description: "A platform developed for the 2030 World Cup featuring Stripe payments and advanced search.",
    technologies: ["Laravel", "Blade", "PostgreSQL", "Stripe"],
    github: "https://github.com/MhamedOuhanane/TouriStay-2030",
    color: "from-emerald-400 to-cyan-500",
    featured: false
  },
  {
    title: "Supply Tricol",
    subtitle: "Supply Chain Management",
    description: "A backend module driving the order lifecycle and inventory valuation (FIFO/AVCO).",
    technologies: ["Spring Boot 3", "Spring Data JPA", "PostgreSQL"],
    github: "https://github.com/MhamedOuhanane/Gestion-des-Approvisionnements-pour-Tricol---Module-Fournisseurs",
    color: "from-green-500 to-emerald-500",
    featured: false
  },
  {
    title: "Job Finder",
    subtitle: "Job Search SPA",
    description: "An Angular application using international APIs to search for job opportunities.",
    technologies: ["Angular", "TypeScript", "JSON Server"],
    github: "https://github.com/MhamedOuhanane/JobFinder",
    color: "from-indigo-600 to-blue-500",
    featured: false
  },
  {
    title: "PeAPIniere",
    subtitle: "Nursery Management API",
    description: "A JWT-secured API with RBAC role systems for complete nursery management.",
    technologies: ["Laravel", "JWT", "Swagger"],
    github: "https://github.com/MhamedOuhanane/PeAPIniere",
    color: "from-lime-600 to-green-700",
    featured: false
  },
  {
    title: "PeAPIniere Frontend",
    subtitle: "Nursery Dashboard",
    description: "A reactive interface with real-time order tracking and WCAG accessibility compliance.",
    technologies: ["JavaScript", "Tailwind CSS", "PWA"],
    github: "https://github.com/MhamedOuhanane/PeAPIniere_V2",
    color: "from-green-500 to-teal-600",
    featured: false
  },
  {
    title: "Ramad'On",
    subtitle: "Community Platform",
    description: "Sharing experiences and recipes with multimedia content management under Laravel.",
    technologies: ["Laravel", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/MhamedOuhanane/Ramad_On",
    color: "from-rose-500 to-pink-600",
    featured: false
  },
  {
    title: "Micro Credit Scoring",
    subtitle: "Credit Risk Algorithm",
    description: "An automated system for assessing credit risk via an intelligent decision engine.",
    technologies: ["Java", "Design Patterns", "JDBC"],
    github: "https://github.com/MhamedOuhanane/Scoring-_Micro-Credit",
    color: "from-amber-600 to-yellow-700",
    featured: false
  },
  {
    title: "Task Flow",
    subtitle: "Startup Productivity",
    description: "An organizational tool for prioritizing and filtering daily missions for teams.",
    technologies: ["JavaScript", "HTML", "Local Storage"],
    github: "https://github.com/MhamedOuhanane/TaskFlow",
    color: "from-violet-500 to-purple-700",
    featured: false
  },
  {
    title: "Champions League",
    subtitle: "Live Sports Dashboard",
    description: "A match-tracking application consuming real-time APIs with pagination features.",
    technologies: ["JavaScript", "REST API", "Jira"],
    github: "https://github.com/MhamedOuhanane/UEFA-Champions-League",
    color: "from-blue-800 to-blue-900",
    featured: false
  },
  {
    title: "EA FC 25",
    subtitle: "Tactical Football Mgmt",
    description: "Dream team optimization with automatic chemistry calculation.",
    technologies: ["JavaScript", "Local Storage", "CSS"],
    github: "https://github.com/MhamedOuhanane/EA-FC-25",
    color: "from-lime-500 to-green-600",
    featured: false
  },
  {
    title: "Java 8 Insurance",
    subtitle: "Contract Management",
    description: "An application using Stream API and Lambdas for secure contract processing.",
    technologies: ["Java 8", "Streams", "JDBC"],
    github: "https://github.com/MhamedOuhanane/Gestion-de-contrats-d-assurance",
    color: "from-sky-500 to-blue-700",
    featured: false
  },
  {
    title: "Cinema",
    subtitle: "Immersive Showcase",
    description: "Consultation of movie schedules and transparent pricing for cinema enthusiasts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MhamedOuhanane/CINEMA",
    color: "from-neutral-700 to-neutral-900",
    featured: false
  },
  {
    title: "SOS Services",
    subtitle: "Home Maintenance",
    description: "A detailed catalog of interventions and connections for local neighborhood services.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MhamedOuhanane/Brief1",
    color: "from-blue-400 to-blue-600",
    featured: false
  },
  {
    title: "Desert Akal Docs",
    subtitle: "Resource Management",
    description: "Centralization of documents and digital assets for desert expeditions.",
    technologies: ["HTML", "JavaScript", "Storage"],
    github: "https://github.com/MhamedOuhanane/DesertAkal",
    color: "from-orange-600 to-red-700",
    featured: false
  },
  {
    title: "Geo Junior Global",
    subtitle: "Geography Education",
    description: "Exploration of countries and cultures through an ergonomic interface for teachers.",
    technologies: ["PHP", "MySQL", "Tailwind"],
    github: "https://github.com/MhamedOuhanane/Geo-Junior",
    color: "from-cyan-400 to-teal-500",
    featured: false
  },
  {
    title: "Youdemy Lite",
    subtitle: "Interactive Learning",
    description: "A simplified online course delivery system for trainers and learners.",
    technologies: ["PHP", "HTML", "MySQL"],
    github: "https://github.com/MhamedOuhanane/Cours-en-Ligne-Youdemy",
    color: "from-indigo-400 to-blue-600",
    featured: false
  }
];

export const education = [
  {
    degree: "Web Development",
    institution: "YouCode (OCP | UM6P)",
    location: "Safi",
    period: "2024 - 2026",
    description: "Intensive full-stack web development training with Agile/Scrum methodologies.",
    icon: "💻",
  },
  {
    degree: "Mathematical Sciences - Computer Science & Apps",
    institution: "Moulay Ismail University",
    location: "Meknes",
    period: "2022 - 2024",
    description: "University degree in mathematics and applied computer science.",
    icon: "🎓",
  },
  {
    degree: "High School Diploma in Mathematical Sciences",
    institution: "Princess Lalla Salma High School",
    location: "Rissani",
    period: "2021 - 2022",
    description: "High school diploma with a focus on mathematical sciences.",
    icon: "📐",
  },
];

export const languages = [
  { name: "Arabic", level: "Native", percentage: 100 },
  { name: "French", level: "Intermediate (A2)", percentage: 40 },
];

export const interests = [
  { name: "Football", icon: FaFutbol },
  { name: "Volleyball", icon: FaVolleyballBall },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
