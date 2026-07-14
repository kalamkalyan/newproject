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

// ─── Auto-copy cover images from CURRENT brain artifacts to public ───────────
const CURRENT_ARTIFACTS_DIR =
  "C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\0bb0b256-eb67-4b9a-ad66-891f38c7924f";

const newCoverImages = [
  { src: "media__1783966768210.jpg", dest: "pre_formulation_cover_v2.jpg" },
  { src: "media__1783967580482.jpg", dest: "finished_dose_cover_v2.jpg" },
  { src: "media__1783967580514.jpg", dest: "therapeutic_areas_cover_v2.jpg" },
];

for (const { src, dest } of newCoverImages) {
  const srcPath = path.join(CURRENT_ARTIFACTS_DIR, src);
  const destPath = path.join(process.cwd(), "public", dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`\x1b[32m✓ New cover image ready:\x1b[0m ${dest}`);
    } else {
      console.warn(`\x1b[33m⚠ New source not found:\x1b[0m ${srcPath}`);
    }
  } catch (e) {
    console.error(`\x1b[31m✗ Failed to copy new ${dest}:\x1b[0m`, e);
  }
}

try {
  const srcMap = 'C:\\Users\\User\\Downloads\\map.svg';
  const destMap = path.join(process.cwd(), 'public', 'world.svg');
  if (fs.existsSync(srcMap)) {
    fs.copyFileSync(srcMap, destMap);
    console.log('\x1b[32m✓ World map SVG copied to public/world.svg!\x1b[0m');
  } else {
    console.warn('\x1b[33m⚠ Downloaded map.svg not found in Downloads directory:\x1b[0m', srcMap);
  }
} catch (e) {
  console.error('\x1b[31m✗ Failed to copy world.svg:\x1b[0m', e);
}

// ─── Auto-copy cover images for Global Reach ──────────────────────────────
const GLOBAL_REACH_ARTIFACTS_DIR =
  "C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\fa84bb5b-1f44-4cb0-9230-7de64c427e25";

const globalReachImages = [
  { src: "vials_cover_1784041596032.png", dest: "vials_cover.png" },
  { src: "media__1784044183293.jpg", dest: "globe_cover.jpg" }
];

for (const { src, dest } of globalReachImages) {
  const srcPath = path.join(GLOBAL_REACH_ARTIFACTS_DIR, src);
  const destPath = path.join(process.cwd(), "public", dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`\x1b[32m✓ Global Reach image ready:\x1b[0m ${dest}`);
    } else {
      console.warn(`\x1b[33m⚠ Global Reach source not found:\x1b[0m ${srcPath}`);
    }
  } catch (e) {
    console.error(`\x1b[31m✗ Failed to copy global reach ${dest}:\x1b[0m`, e);
  }
}
// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
