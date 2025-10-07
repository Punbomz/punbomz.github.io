import { Client } from '@notionhq/client'

// Only initialize if we have the token (server-side only)
let notion: Client | null = null;

if (process.env.NOTION_TOKEN) {
  notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
}

// Fetch database
export async function getDatabase(databaseId: string) {
  if (!notion) {
    console.error('Notion client not initialized - missing NOTION_TOKEN');
    return [];
  }
  
  if (!databaseId) {
    console.error('Database ID is missing');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  } catch (error) {
    console.error('Error fetching database:', error);
    return [];
  }
}

// Fetch each database
export async function getProjects() {
  const dbId = process.env.NOTION_PROJECTS_DB;
  if (!dbId) {
    console.error('NOTION_PROJECTS_DB environment variable is not set');
    return [];
  }
  return await getDatabase(dbId);
}

export async function getExperiences() {
  const dbId = process.env.NOTION_EXPERIENCES_DB;
  if (!dbId) {
    console.error('NOTION_EXPERIENCES_DB environment variable is not set');
    return [];
  }
  return await getDatabase(dbId);
}