const fs = require('fs');

const readmes = JSON.parse(fs.readFileSync('readmes_summary.json', 'utf-8'));
const repos = JSON.parse(fs.readFileSync('repos.json', 'utf-8'));

const knownTechs = [
  'React', 'Angular', 'Vue', 'PHP', 'Laravel', 'Spring Boot', 'Java', 'Python', 'Django',
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'PostgreSQL',
  'Tailwind', 'Bootstrap', 'C', 'C++', 'C#', 'SQL', 'MongoDB'
];

for (let r of repos) {
  const readme = readmes[r.title];
  if (!readme) {
    if (!r.technologies) r.technologies = r.lang ? [r.lang] : ['Web Development'];
    continue;
  }
  
  // Extract description
  if (!r.description) {
    const lines = readme.split('\n');
    let desc = '';
    for (let line of lines) {
      const trimmed = line.trim();
      // look for first text paragraph
      if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('!') && !trimmed.startsWith('[') && !trimmed.startsWith('<') && !trimmed.startsWith('-') && !trimmed.startsWith('*') && !trimmed.startsWith('|')) {
        desc = trimmed;
        break;
      }
    }
    // Remove bold markdown and other markdown syntax if present
    desc = desc.replace(/\*\*/g, '').replace(/__/g, '').replace(/` /g, '');
    r.description = desc;
  }
  
  // Extract technologies
  if (!r.technologies) {
    const found = new Set();
    if (r.lang && r.lang !== 'null') found.add(r.lang);
    
    // Check specific section first if we can (e.g. Technologies)
    const lowerReadme = readme.toLowerCase();
    for (const tech of knownTechs) {
      let techStr = tech.toLowerCase().replace(/\./g, '\\.');
      // Special case for C and C++ to not match just any 'c' letter
      if (tech === 'C') {
        techStr = '\\bc\\b(?!\\+|\\#)';
      } else if (tech === 'HTML' || tech === 'CSS') {
          techStr = `\\b${techStr}\\b`;
      } else {
        techStr = `\\b${techStr}\\b`;
      }
      const regex = new RegExp(techStr, 'g');
      if (regex.test(lowerReadme)) {
        found.add(tech);
      }
    }

    if (found.has('Tailwind')) {
      found.delete('Tailwind');
      found.add('Tailwind CSS');
    }

    r.technologies = Array.from(found);
    if(r.technologies.length === 0){
        r.technologies = ['Web Development'];
    }
  }
}

fs.writeFileSync('repos.json', JSON.stringify(repos, null, 2));

console.log("Updated repos.json!");
