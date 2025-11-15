const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    name: 'residential-aluminium-works.webp',
    url: 'https://images.unsplash.com/photo-1600607687939-ce428662c566?w=800&auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'aluminium-kitchen.webp',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'commercial-aluminium-works.webp',
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04ed?w=800&auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'church-religion.webp',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80&w=800'
  }
];

const downloadDir = path.join(__dirname, '..', 'public', 'images', 'projects');

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

images.forEach(image => {
  const filePath = path.join(downloadDir, image.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(image.url, response => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${image.name}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {}); // Delete the file if there's an error
    console.error(`Error downloading ${image.name}:`, err.message);
  });
});

console.log('Downloading placeholder images...');
