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
