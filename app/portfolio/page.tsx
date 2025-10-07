import PortfolioClient from '../components/PortfolioClient';

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

// Fallback data
const defaultProjects: Project[] = [
  {
    name: 'E-Commerce Platform',
    details: 'A full-stack e-commerce platform built with Next.js, featuring product management, shopping cart, and secure payment integration.',
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
    details: 'Developed responsive web applications using React and TypeScript.',
    icon: '💻',
    color: 'from-cyan-400 to-blue-500',
    highlights: ['Built 15+ reusable components', 'Reduced bundle size by 35%', 'Led UI/UX redesign']
  }
];

const defaultAchievements: Achievement[] = [
  {
    name: 'Best Innovation Award',
    icon: '🏆',
    details: 'Recognized for developing an innovative IoT solution',
    year: '2024',
    link: ''
  }
];

// Fetch from Notion API
async function fetchNotionDatabase(databaseId: string) {
  if (!process.env.NOTION_TOKEN) {
    console.log('No NOTION_TOKEN found');
    return [];
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
      cache: 'no-store' // Always fetch fresh data
    });

    if (!response.ok) {
      console.error(`Notion API error: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching from Notion:', error);
    return [];
  }
}

function parseProjects(notionData: any[]): Project[] {
  return notionData.map(item => ({
    name: item.properties.Name?.title?.[0]?.plain_text || 'Untitled',
    details: item.properties.Details?.rich_text?.[0]?.plain_text || '',
    icon: item.properties.Icon?.rich_text?.[0]?.plain_text || '📦',
    tags: item.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    color: item.properties.Color?.select?.name || 'from-blue-500 to-cyan-500',
    achievements: item.properties.Achievements?.rich_text?.[0]?.plain_text
      ? item.properties.Achievements.rich_text[0].plain_text.split(',').map((a: string) => a.trim())
      : []
  }));
}

function parseExperiences(notionData: any[]): Experience[] {
  return notionData.map(item => ({
    title: item.properties.Title?.title?.[0]?.plain_text || 'Untitled',
    company: item.properties.Company?.rich_text?.[0]?.plain_text || '',
    period: item.properties.Period?.rich_text?.[0]?.plain_text || '',
    details: item.properties.Details?.rich_text?.[0]?.plain_text || '',
    icon: item.properties.Icon?.rich_text?.[0]?.plain_text || '💼',
    color: item.properties.Color?.select?.name || 'from-cyan-400 to-blue-500',
    highlights: item.properties.Highlights?.rich_text?.[0]?.plain_text
      ? item.properties.Highlights.rich_text[0].plain_text.split(',').map((h: string) => h.trim())
      : []
  }));
}

function parseAchievements(notionData: any[]): Achievement[] {
  return notionData.map(item => ({
    name: item.properties.Name?.title?.[0]?.plain_text || 'Untitled',
    icon: item.properties.Icon?.rich_text?.[0]?.plain_text || '🏆',
    details: item.properties.Details?.rich_text?.[0]?.plain_text || '',
    year: item.properties.Year?.rich_text?.[0]?.plain_text || '',
    link: item.properties.Link?.url || ''
  }));
}

async function loadData() {
  let projects = defaultProjects;
  let experiences = defaultExperiences;
  let achievements = defaultAchievements;

  if (process.env.NOTION_TOKEN && 
      process.env.NOTION_PROJECTS_DB && 
      process.env.NOTION_EXPERIENCES_DB && 
      process.env.NOTION_ACHIEVEMENTS_DB) {
    
    try {
      console.log('Fetching data from Notion...');
      
      const [projectsData, experiencesData, achievementsData] = await Promise.all([
        fetchNotionDatabase(process.env.NOTION_PROJECTS_DB),
        fetchNotionDatabase(process.env.NOTION_EXPERIENCES_DB),
        fetchNotionDatabase(process.env.NOTION_ACHIEVEMENTS_DB)
      ]);

      if (projectsData.length > 0) {
        projects = parseProjects(projectsData);
        console.log(`✓ Loaded ${projects.length} projects from Notion`);
      }

      if (experiencesData.length > 0) {
        experiences = parseExperiences(experiencesData);
        console.log(`✓ Loaded ${experiences.length} experiences from Notion`);
      }

      if (achievementsData.length > 0) {
        achievements = parseAchievements(achievementsData);
        console.log(`✓ Loaded ${achievements.length} achievements from Notion`);
      }
    } catch (error) {
      console.error('Error loading Notion data:', error);
    }
  } else {
    console.log('Using default data - Notion env vars not set');
  }

  return { projects, experiences, achievements };
}

// Force dynamic rendering - fetch on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Portfolio() {
  const { projects, experiences, achievements } = await loadData();

  return <PortfolioClient projects={projects} experiences={experiences} achievements={achievements} />;
}