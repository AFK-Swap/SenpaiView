import puppeteer from 'puppeteer';

export async function fetchEpisodeLinks(animeTitle) {
  console.log('[Scraper] Starting episode fetch...');
  
  const headless = process.env.PUPPETEER_HEADLESS === 'true';
  console.log(`[Scraper] Launching browser in headless mode: ${headless}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  console.log('[Scraper] Browser launched');

  const baseUrl = 'https://storage.kanzaki.ru/ANIME___/';
  const formattedTitle = animeTitle.toLowerCase().replace(/ /g, '_');
  console.log(`[Scraper] Formatted anime title: "${formattedTitle}"`);

  const page = await browser.newPage();
  console.log('[Scraper] New page opened');

  console.log(`[Scraper] Navigating to ${baseUrl}`);
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  console.log('[Scraper] Base URL loaded');

  console.log('[Scraper] Extracting folder list...');
  const folders = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a'))
      .map(a => a.getAttribute('href'))
      .filter(href => href.endsWith('/'))
  );
  console.log(`[Scraper] Folders found: ${folders.length}`);

  const matchedFolder = folders.find(folder => folder.slice(0, -1).toLowerCase() === formattedTitle);
  console.log(`[Scraper] Matched folder: ${matchedFolder || 'None'}`);

  if (!matchedFolder) {
    await browser.close();
    console.log('[Scraper] Browser closed due to no match');
    throw new Error('Anime not found');
  }

  const fullFolderUrl = baseUrl + matchedFolder;
  console.log(`[Scraper] Navigating to folder URL: ${fullFolderUrl}`);
  await page.goto(fullFolderUrl, { waitUntil: 'domcontentloaded' });
  console.log('[Scraper] Folder page loaded');

  console.log('[Scraper] Extracting episode links...');
  const episodeLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a'))
      .map(a => a.getAttribute('href'))
      .filter(href => href.endsWith('.mkv'))
  );
  console.log(`[Scraper] Episodes found: ${episodeLinks.length}`);

  await browser.close();
  console.log('[Scraper] Browser closed');

  const fullLinks = episodeLinks.map(link => baseUrl + matchedFolder + link);
  console.log('[Scraper] Returning episode links');
  
  return fullLinks;
}
