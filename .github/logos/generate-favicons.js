// Generates the favicon set from the avatar tile SVGs, into
// `.storybook/assets` and `site/public`, where Storybook and the site serve
// them:
//
// - favicon-16.png, favicon-32.png and favicon-48.png from
//   slab-favicon-16.svg, -32.svg and -48.svg, each drawn on whole pixels at
//   its size, the 16 with the small variant of the mark
// - apple-touch-icon.png (180) and favicon-512.png from slab-favicon.svg, which
//   is large enough there that its edges falling between pixels doesn't show
// - favicon.ico holding the 16, 32 and 48 PNGs
//
// Run it with `node .github/logos/generate-favicons.js` after changing any of
// those SVGs. It renders them in Playwright's Chromium, which is already installed
// for the tests.

import { Buffer } from 'node:buffer';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const root = path.resolve(import.meta.dirname, '../..');

const destinations = [
  path.join(root, '.storybook/assets'),
  path.join(root, 'site/public'),
];

const write = (file, data) =>
  Promise.all(
    destinations.map((destination) =>
      writeFile(path.join(destination, file), data),
    ),
  );

const read = (file) => readFile(path.join(root, file), 'utf8');
const large = await read('.github/logos/slab-favicon.svg');

const sizes = [
  {
    file: 'favicon-16.png',
    size: 16,
    svg: await read('.github/logos/slab-favicon-16.svg'),
  },
  {
    file: 'favicon-32.png',
    size: 32,
    svg: await read('.github/logos/slab-favicon-32.svg'),
  },
  {
    file: 'favicon-48.png',
    size: 48,
    svg: await read('.github/logos/slab-favicon-48.svg'),
  },
  { file: 'apple-touch-icon.png', size: 180, svg: large },
  { file: 'favicon-512.png', size: 512, svg: large },
];

const browser = await chromium.launch();
const pngs = new Map();

for (const { file, size, svg } of sizes) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
  });

  // The SVG's own width and height are replaced, so it fills the viewport at
  // whatever size is asked for.
  const sized = svg.replace(
    /<svg([^>]*?) width="[^"]*" height="[^"]*"/,
    `<svg$1 width="${size}" height="${size}"`,
  );

  await page.setContent(
    `<style>* { margin: 0; } svg { display: block; }</style>${sized}`,
  );

  const png = await page.locator('svg').screenshot({ omitBackground: true });

  pngs.set(size, png);
  await write(file, png);
  await page.close();
}

await browser.close();

// An ICO is a header, a directory entry per image, then the images. Each
// image can be a whole PNG, which every browser that reads ICOs supports.
const icoSizes = [16, 32, 48];
const images = icoSizes.map((size) => pngs.get(size));
const header = Buffer.alloc(6);

header.writeUInt16LE(0, 0); // Reserved
header.writeUInt16LE(1, 2); // 1 is an icon
header.writeUInt16LE(images.length, 4);

let offset = header.length + 16 * images.length;

const entries = images.map((image, index) => {
  const entry = Buffer.alloc(16);
  const size = icoSizes[index];

  entry.writeUInt8(size, 0); // Width
  entry.writeUInt8(size, 1); // Height
  entry.writeUInt8(0, 2); // No palette
  entry.writeUInt8(0, 3); // Reserved
  entry.writeUInt16LE(1, 4); // Color planes
  entry.writeUInt16LE(32, 6); // Bits per pixel
  entry.writeUInt32LE(image.length, 8);
  entry.writeUInt32LE(offset, 12);

  offset += image.length;

  return entry;
});

await write('favicon.ico', Buffer.concat([header, ...entries, ...images]));
