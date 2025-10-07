// Fetch database using native fetch
export async function getDatabase(databaseId: string) {
  if (!process.env.NOTION_TOKEN) {
    console.error('Notion client not initialized - missing NOTION_TOKEN');
    return [];
  }
  
  if (!databaseId) {
    console.error('Database ID is missing');
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
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API request failed: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.results;
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