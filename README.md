# 🚀 M'Hamed Ouhanane - Professional Portfolio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

A modern, highly responsive, and interactive personal portfolio built specifically to showcase my skills as a **Java Full-Stack Developer**. The project leverages modern React features, smooth animations, and a polished design system to provide an engaging user experience.

## ✨ Features

- **Modern UI/UX**: Clean aesthetic with dynamic glassmorphism and animated backgrounds.
- **Dark/Light Mode**: Full theme-switching support implemented via Context API and Tailwind CSS, with local storage persistence.
- **Smooth Animations**: Page transitions, scroll reveals, and interactive micro-animations powered by Framer Motion.
- **Dynamic Projects Section**: Integrated pagination system dividing featured "Top 3" projects from the rest of the portfolio.
- **Interactive Hero Section**: Custom typewriter hook and glowing particle effects.
- **CV Download Integration**: Direct PDF download implementation for multilingual resumes (EN/FR).
- **Responsive Design**: Flawless display across mobile, tablet, and desktop viewports.

## 🛠️ Technologies Used

- **Framework**: [React.js](https://reactjs.org/) (Create React App + functional components & hooks)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 📂 Project Structure

```text
my_portfolio/
├── public/                 # Static assets, images, CVs, and index.html
└── src/
    ├── components/         # Modular React components (Hero, About, Projects, etc.)
    ├── context/            # React Context for Dark/Light mode state
    ├── data/               # Centralized data file (portfolio.js)
    ├── hooks/              # Custom React hooks (useInView, useTypewriter)
    ├── App.jsx             # Main application layout and routes
    ├── index.css           # Global Tailwind imports & custom classes
    └── index.js            # React DOM entry point
```

## 🚀 Getting Started

Follow these steps to run the portfolio on your local machine:

### Prerequisites

You need Node.js and npm installed.
- Node.js (v14 or higher recommended)

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/MhamedOuhanane/my_portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd my_portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`

## 📝 Configuration & Content

All portfolio data (name, bio, skills, projects, and experiences) is strictly centralized in `src/data/portfolio.js`. You can easily update your profile by modifying this single file without ever touching the UI components!

To handle your contact form properly via email, you'll want to configure **EmailJS** in the `Contact.jsx` component using your own API credentials.

## 📫 Contact

**M'Hamed Ouhanane** 
- Email: [mhmdeouhnan60@gmail.com](mailto:mhmdeouhnan60@gmail.com)
- LinkedIn: [in/m-hamed-ouhanane](https://www.linkedin.com/in/m-hamed-ouhanane-986688340)
- GitHub: [@MhamedOuhanane](https://github.com/MhamedOuhanane)

---
*Developed by M'Hamed Ouhanane*
