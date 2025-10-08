import { NextResponse } from 'next/server';

async function fetchNotionDatabase(databaseId: string) {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
    cache: 'no-store'
  });

  if (!response.ok) throw new Error('Failed to fetch');
  const data = await response.json();
  return data.results;
}

function parseProjects(notionData: any[]) {
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

export async function GET() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_PROJECTS_DB) {
      return NextResponse.json([]);
    }

    const data = await fetchNotionDatabase(process.env.NOTION_PROJECTS_DB);
    const projects = parseProjects(data);
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json([]);
  }
}