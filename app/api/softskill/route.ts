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

function parseSoftskill(notionData: any[]) {
  return notionData.map(item => ({
    name: item.properties.Name?.title?.[0]?.plain_text || 'Untitled',
    description: item.properties.Description?.rich_text?.[0]?.plain_text || 'Description',
    icon: item.properties.Icon?.rich_text?.[0]?.plain_text || '📦',
    color: item.properties.Color?.select?.name || 'from-yellow-400 to-blue-500',
  }));
}

export async function GET() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_SOFTSKILLS_DB) {
      return NextResponse.json([]);
    }

    const data = await fetchNotionDatabase(process.env.NOTION_SOFTSKILLS_DB);
    const softskill = parseSoftskill(data);

    console.log("After", softskill)
    
    return NextResponse.json(softskill);
  } catch (error) {
    console.error('Error fetching softskill:', error);
    return NextResponse.json([]);
  }
}