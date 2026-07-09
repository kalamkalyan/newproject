const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\422010b7-8240-4d30-b0d2-de55f5ac7fff';
const destDir = 'd:\\therllenPharma2\\public';

const copies = [
  ['media__1783531809438.jpg', 'vision_mission_cover.jpg'],
  ['media__1783531809470.jpg', 'leadership_cover.jpg'],
  ['media__1783531809527.jpg', 'milestones_cover.jpg'],
];

copies.forEach(([src, dest]) => {
  fs.copyFileSync(path.join(srcDir, src), path.join(destDir, dest));
  console.log(`Copied ${src} -> ${dest}`);
});
console.log('All done!');
