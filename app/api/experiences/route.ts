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

function parseExperiences(notionData: any[]) {
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

export async function GET() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_EXPERIENCES_DB) {
      return NextResponse.json([]);
    }

    const data = await fetchNotionDatabase(process.env.NOTION_EXPERIENCES_DB);
    const experiences = parseExperiences(data);
    
    return NextResponse.json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return NextResponse.json([]);
  }
}