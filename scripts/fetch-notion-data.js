// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const fs = require('fs');
const path = require('path');
const https = require('https');

// Verify environment variables
if (!process.env.NOTION_TOKEN) {
  console.error('❌ NOTION_TOKEN is not set in .env.local');
  process.exit(1);
}

if (!process.env.NOTION_PROJECTS_DB) {
  console.error('❌ NOTION_PROJECTS_DB is not set in .env.local');
  process.exit(1);
}

if (!process.env.NOTION_EXPERIENCES_DB) {
  console.error('❌ NOTION_EXPERIENCES_DB is not set in .env.local');
  process.exit(1);
}

if (!process.env.NOTION_ACHIEVEMENTS_DB) {
  console.error('❌ NOTION_ACHIEVEMENTS_DB is not set in .env.local');
  process.exit(1);
}

console.log('Environment variables loaded:');
console.log('- NOTION_TOKEN:', process.env.NOTION_TOKEN ? '✓ Set' : '✗ Missing');

// Function to make HTTP request to Notion API
function makeNotionRequest(databaseId) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({});
    
    const options = {
      hostname: 'api.notion.com',
      path: `/v1/databases/${databaseId}/query`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed.results);
          } catch (e) {
            reject(new Error(`Failed to parse response: ${e.message}`));
          }
        } else {
          reject(new Error(`API request failed with status ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

async function getDatabase(databaseId) {
  try {
    console.log(`\n📋 Querying database: ${databaseId}`);
    const results = await makeNotionRequest(databaseId);
    console.log(`✓ Received ${results.length} items`);
    return results;
  } catch (error) {
    console.error('❌ Error fetching database:', error.message);
    return [];
  }
}

function parseProjects(notionData) {
  return notionData.map(item => {
    const name = item.properties.Name?.title?.[0]?.plain_text || 'Untitled';
    console.log('  - Parsing project:', name);
    return {
      name,
      details: item.properties.Details?.rich_text?.[0]?.plain_text || '',
      icon: item.properties.Icon?.rich_text?.[0]?.plain_text || '📦',
      tags: item.properties.Tags?.multi_select?.map(tag => tag.name) || [],
      color: item.properties.Color?.select?.name || 'from-blue-500 to-cyan-500',
      achievements: item.properties.Achievements?.rich_text?.[0]?.plain_text
        ? item.properties.Achievements.rich_text[0].plain_text.split(',').map(a => a.trim())
        : []
    };
  });
}

function parseExperiences(notionData) {
  return notionData.map(item => {
    const title = item.properties.Title?.title?.[0]?.plain_text || 'Untitled';
    console.log('  - Parsing experience:', title);
    return {
      title,
      company: item.properties.Company?.rich_text?.[0]?.plain_text || '',
      period: item.properties.Period?.rich_text?.[0]?.plain_text || '',
      details: item.properties.Details?.rich_text?.[0]?.plain_text || '',
      icon: item.properties.Icon?.rich_text?.[0]?.plain_text || '💼',
      color: item.properties.Color?.select?.name || 'from-cyan-400 to-blue-500',
      highlights: item.properties.Highlights?.rich_text?.[0]?.plain_text
        ? item.properties.Highlights.rich_text[0].plain_text.split(',').map(h => h.trim())
        : []
    };
  });
}

function parseAchievements(notionData) {
  return notionData.map(item => {
    const name = item.properties.Name?.title?.[0]?.plain_text || 'Untitled';
    console.log('  - Parsing achievement:', name);
    return {
      name,
      icon: item.properties.Icon?.rich_text?.[0]?.plain_text || '🏆',
      details: item.properties.Details?.rich_text?.[0]?.plain_text || '',
      year: item.properties.Year?.rich_text?.[0]?.plain_text || '',
      link: item.properties.Link?.url || ''
    };
  });
}

async function fetchAndSaveData() {
  console.log('\n========================================');
  console.log('🚀 Fetching data from Notion...');
  console.log('========================================\n');
  
  try {
    // Fetch projects
    console.log('📦 Fetching projects...');
    const projectsData = await getDatabase(process.env.NOTION_PROJECTS_DB);
    const projects = parseProjects(projectsData);
    
    // Fetch experiences
    console.log('\n💼 Fetching experiences...');
    const experiencesData = await getDatabase(process.env.NOTION_EXPERIENCES_DB);
    const experiences = parseExperiences(experiencesData);

    // Fetch achievements
    console.log('\n🏆 Fetching achievements...');
    const achievementsData = await getDatabase(process.env.NOTION_ACHIEVEMENTS_DB);
    const achievements = parseAchievements(achievementsData);
    
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Save to JSON files
    fs.writeFileSync(
      path.join(dataDir, 'projects.json'),
      JSON.stringify(projects, null, 2)
    );
    
    fs.writeFileSync(
      path.join(dataDir, 'experiences.json'),
      JSON.stringify(experiences, null, 2)
    );

    fs.writeFileSync(
      path.join(dataDir, 'achievements.json'),
      JSON.stringify(achievements, null, 2)
    );
    
    console.log('\n========================================');
    console.log('✅ Data fetched and saved successfully!');
    console.log('========================================');
    console.log(`📊 Summary:`);
    console.log(`   - Projects: ${projects.length}`);
    console.log(`   - Experiences: ${experiences.length}`);
    console.log(`   - Achievements: ${achievements.length}`);
    console.log(`   - Saved to: ./data/`);
    console.log('========================================\n');
  } catch (error) {
    console.error('\n========================================');
    console.error('❌ Error fetching Notion data');
    console.error('========================================');
    console.error(error);
    process.exit(1);
  }
}

fetchAndSaveData();