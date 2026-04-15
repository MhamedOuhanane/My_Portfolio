const fs = require('fs');
// Charger les repos filtrés (ceux qui ont une description)
const repos = JSON.parse(fs.readFileSync('repos.json'));
let portfolioPath = 'src/data/portfolio.js';
let portfolioContent = fs.readFileSync(portfolioPath, 'utf8');

// Configuration des couleurs par langage pour l'esthétique
const langColors = {
    'Java': 'from-red-600 to-orange-700',
    'PHP': 'from-indigo-500 to-purple-600',
    'TypeScript': 'from-blue-500 to-cyan-600',
    'JavaScript': 'from-yellow-400 to-orange-500',
    'HTML': 'from-orange-500 to-red-500',
    'Blade': 'from-red-500 to-pink-600'
};

const newEntries = repos.map(r => {
  return {
    title: r.title,
    subtitle: r.lang || 'Full Stack Project',
    description: r.description,
    technologies: r.lang ? [r.lang] : ["Web Dev"],
    github: r.url,
    demo: "#", // À compléter manuellement si besoin
    image: `/projects/${r.title.toLowerCase()}.jpg`, // Chemin prédictif
    color: langColors[r.lang] || "from-gray-500 to-slate-500",
    featured: r.title.includes('Al_Baraka') || r.title.includes('MediExpert') // Auto-featured
  };
});

// Transformation en chaîne de caractères propre
const entriesString = JSON.stringify(newEntries, null, 2);

// Remplacement ciblé dans le fichier data (remplace tout le tableau 'projects')
const updatedPortfolio = portfolioContent.replace(
    /export const projects = \[\s*[\s\S]*?\];/,
    `export const projects = ${entriesString};`
);

fs.writeFileSync(portfolioPath, updatedPortfolio);