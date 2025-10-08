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

function parseAchievements(notionData: any[]) {
  return notionData.map(item => ({
    name: item.properties.Name?.title?.[0]?.plain_text || 'Untitled',
    icon: item.properties.Icon?.rich_text?.[0]?.plain_text || '🏆',
    details: item.properties.Details?.rich_text?.[0]?.plain_text || '',
    year: item.properties.Year?.rich_text?.[0]?.plain_text || '',
    link: item.properties.Link?.url || ''
  }));
}

export async function GET() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_ACHIEVEMENTS_DB) {
      return NextResponse.json([]);
    }

    const data = await fetchNotionDatabase(process.env.NOTION_ACHIEVEMENTS_DB);
    const achievements = parseAchievements(data);
    
    return NextResponse.json(achievements);
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return NextResponse.json([]);
  }
}