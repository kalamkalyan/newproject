export async function register() {
  // Only run in Node.js runtime (not Edge), and only copy if files are missing
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { default: fs } = await import('fs');
    const { default: path } = await import('path');

    const artifactsDir =
      'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\422010b7-8240-4d30-b0d2-de55f5ac7fff';

    const publicDir = path.join(process.cwd(), 'public');

    const copies: Array<{ src: string; dest: string }> = [
      {
        src: path.join(artifactsDir, 'media__1783531809527.jpg'),
        dest: path.join(publicDir, 'vision_mission_cover.jpg'),
      },
      {
        src: path.join(artifactsDir, 'media__1783531809470.jpg'),
        dest: path.join(publicDir, 'leadership_cover.jpg'),
      },
      {
        src: path.join(artifactsDir, 'media__1783531809438.jpg'),
        dest: path.join(publicDir, 'milestones_cover.jpg'),
      },
      {
        src: 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\bbd65f1e-5b4e-4bca-abf2-8af26bf1d870\\media__1783874208161.jpg',
        dest: path.join(publicDir, 'life_at_therallen_cover.jpg'),
      },
      {
        src: 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\bbd65f1e-5b4e-4bca-abf2-8af26bf1d870\\media__1783874208162.jpg',
        dest: path.join(publicDir, 'current_openings_cover.jpg'),
      },
    ];

    for (const { src, dest } of copies) {
      try {
        if (fs.existsSync(src) && !fs.existsSync(dest)) {
          fs.copyFileSync(src, dest);
          console.log(`[setup] Copied cover image → ${path.basename(dest)}`);
        }
      } catch (err) {
        console.error(`[setup] Failed to copy ${path.basename(dest)}:`, err);
      }
    }
  }
}
