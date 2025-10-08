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

function parseBlog(notionData: any[]) {
  return notionData.map((item, index) => ({
    id: index,
    title: item.properties.Title?.title?.[0]?.plain_text || 'Untitled',
    description: item.properties.Description?.rich_text?.[0]?.plain_text || '',
    date: item.properties.Date?.date?.start || '',
    tags: item.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    category: item.properties.Category?.select?.name || '',
    link: item.url, 
  }));
}

export async function GET() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_BLOGS_DB) {
      return NextResponse.json([]);
    }

    const data = await fetchNotionDatabase(process.env.NOTION_BLOGS_DB);
    const blog = parseBlog(data);

    console.log("After", blog)
    
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json([]);
  }
}