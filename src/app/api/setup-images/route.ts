import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const artifactsDir =
    'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\422010b7-8240-4d30-b0d2-de55f5ac7fff';
  const publicDir = path.join(process.cwd(), 'public');

  const copies: Array<{ src: string; dest: string; name: string }> = [
    {
      src: path.join(artifactsDir, 'media__1783531809527.jpg'),
      dest: path.join(publicDir, 'vision_mission_cover.jpg'),
      name: 'Vision & Mission cover',
    },
    {
      src: path.join(artifactsDir, 'media__1783531809470.jpg'),
      dest: path.join(publicDir, 'leadership_cover.jpg'),
      name: 'Leadership cover',
    },
    {
      src: path.join(artifactsDir, 'media__1783531809438.jpg'),
      dest: path.join(publicDir, 'milestones_cover.jpg'),
      name: 'Milestones cover',
    },
    {
      src: 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\bbd65f1e-5b4e-4bca-abf2-8af26bf1d870\\media__1783874208161.jpg',
      dest: path.join(publicDir, 'life_at_therallen_cover.jpg'),
      name: 'Life at Therallen cover',
    },
    {
      src: 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\bbd65f1e-5b4e-4bca-abf2-8af26bf1d870\\media__1783874208162.jpg',
      dest: path.join(publicDir, 'current_openings_cover.jpg'),
      name: 'Current Openings cover',
    },
    {
      src: 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\fa84bb5b-1f44-4cb0-9230-7de64c427e25\\vials_cover_1784041596032.png',
      dest: path.join(publicDir, 'vials_cover.png'),
      name: 'Global Reach cover',
    },
    {
      src: 'C:\\Users\\User\\Downloads\\map.svg',
      dest: path.join(publicDir, 'world.svg'),
      name: 'World Map SVG',
    },
    {
      src: 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\fa84bb5b-1f44-4cb0-9230-7de64c427e25\\media__1784044183293.jpg',
      dest: path.join(publicDir, 'globe_cover.jpg'),
      name: 'Globe Cover Image',
    },
  ];

  const results: string[] = [];

  for (const { src, dest, name } of copies) {
    try {
      if (!fs.existsSync(src)) {
        results.push(`❌ Source not found: ${src}`);
        continue;
      }
      fs.copyFileSync(src, dest);
      results.push(`✅ Copied ${name} → ${path.basename(dest)}`);
    } catch (err) {
      results.push(`❌ Failed to copy ${name}: ${String(err)}`);
    }
  }

  // Check final state
  const publicFiles = fs
    .readdirSync(publicDir)
    .filter((f) => f.includes('cover'));

  return NextResponse.json({
    message: 'Image setup complete',
    results,
    coverImagesInPublic: publicFiles,
  });
}
