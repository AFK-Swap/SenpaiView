const fs = require('fs');

// Path to the file with incorrect imports
const profilePath = 'src/pages/ProfilePage.jsx';

// Check if the file exists
if (fs.existsSync(profilePath)) {
  // Read the file content
  const content = fs.readFileSync(profilePath, 'utf8');
  
  // Fix the import paths
  const fixedContent = content
    .replace(/import Watchlist from/g, 'import WatchList from')
    .replace(/from ['"]\.\/components\/Watch/g, 'from \'../components/Watch')
    .replace(/<Watchlist /g, '<WatchList ');
  
  // Write the fixed content back to the file
  fs.writeFileSync(profilePath, fixedContent);
  
  console.log('Fixed import paths in ProfilePage.jsx');
}
