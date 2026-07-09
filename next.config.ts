import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// ─── Auto-copy cover images from brain artifacts to public ────────────────────
const ARTIFACTS_DIR =
  "C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\422010b7-8240-4d30-b0d2-de55f5ac7fff";

const coverImages = [
  { src: "media__1783531809527.jpg", dest: "vision_mission_cover.jpg" },
  { src: "media__1783531809470.jpg", dest: "leadership_cover.jpg" },
  { src: "media__1783531809438.jpg", dest: "milestones_cover.jpg" },
];

for (const { src, dest } of coverImages) {
  const srcPath = path.join(ARTIFACTS_DIR, src);
  const destPath = path.join(process.cwd(), "public", dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`\x1b[32m✓ Cover image ready:\x1b[0m ${dest}`);
    } else {
      console.warn(`\x1b[33m⚠ Source not found:\x1b[0m ${srcPath}`);
    }
  } catch (e) {
    console.error(`\x1b[31m✗ Failed to copy ${dest}:\x1b[0m`, e);
  }
}
// ─────────────────────────────────────────────────────────────────────────────

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
