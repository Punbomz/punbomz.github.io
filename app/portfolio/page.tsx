import PortfolioClient from './PortfolioClient';
import fs from 'fs';
import path from 'path';

interface Project {
  name: string;
  details: string;
  icon: string;
  tags: string[];
  color: string;
  achievements: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  details: string;
  icon: string;
  color: string;
  highlights: string[];
}

interface Achievement {
  name: string;
  icon: string;
  details: string;
  year: string;
  link: string;
}

// Fallback data if JSON files don't exist
const defaultProjects: Project[] = [
  {
    name: 'E-Commerce Platform',
    details: 'A full-stack e-commerce platform built with Next.js, featuring product management, shopping cart, and secure payment integration. Implemented responsive design and optimized performance.',
    icon: '🛒',
    tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    color: 'from-blue-500 to-cyan-500',
    achievements: ['40% faster load times', 'Secure payment processing', 'Mobile-first design']
  }
];

const defaultExperiences: Experience[] = [
  {
    title: 'Frontend Developer Intern',
    company: 'Tech Startup Co.',
    period: '2023 - 2024',
    details: 'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components. Improved website performance by 40%.',
    icon: '💻',
    color: 'from-cyan-400 to-blue-500',
    highlights: ['Built 15+ reusable components', 'Reduced bundle size by 35%', 'Led UI/UX redesign']
  }
];

const defaultAchievements: Achievement[] = [
  {
    name: 'Best Innovation Award',
    icon: '🏆',
    details: 'Recognized for developing an innovative IoT solution that reduced energy consumption by 30%',
    year: '2024',
    link: ''
  }
];

function loadData() {
  let projects = defaultProjects;
  let experiences = defaultExperiences;
  let achievements = defaultAchievements;

  try {
    const projectsPath = path.join(process.cwd(), 'data', 'projects.json');
    const experiencesPath = path.join(process.cwd(), 'data', 'experiences.json');
    const achievementsPath = path.join(process.cwd(), 'data', 'achievements.json');

    if (fs.existsSync(projectsPath)) {
      const projectsData = fs.readFileSync(projectsPath, 'utf-8');
      projects = JSON.parse(projectsData);
    }

    if (fs.existsSync(experiencesPath)) {
      const experiencesData = fs.readFileSync(experiencesPath, 'utf-8');
      experiences = JSON.parse(experiencesData);
    }

    if (fs.existsSync(achievementsPath)) {
      const achievementsData = fs.readFileSync(achievementsPath, 'utf-8');
      achievements = JSON.parse(achievementsData);
    }
  } catch (error) {
    console.log('Using default data (Notion data not available)');
  }

  return { projects, experiences, achievements };
}

// Server Component - loads data at build time
export default function Portfolio() {
  const { projects, experiences, achievements } = loadData();

  // Pass data to Client Component
  return <PortfolioClient projects={projects} experiences={experiences} achievements={achievements} />;
}