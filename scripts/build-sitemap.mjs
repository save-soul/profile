// Post-build step: merge @astrojs/sitemap's split output
// (sitemap-index.xml + sitemap-0.xml ...) into a single root `sitemap.xml`,
// enrich each <url> with hreflang alternates (bilingual zh<->en), lastmod,
// changefreq and priority, rewrite robots.txt to point at it, and remove the
// split files. Satisfies SEO tools / search engines that expect /sitemap.xml.
//
// Site structure: zh = default locale (no path prefix), en = "/en" prefix.
// e.g. /about/  <->  /en/about/   and   /  <->  /en/

import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');
const TODAY = new Date().toISOString().slice(0, 10);

function read(p) {
  return fs.readFileSync(p, 'utf8');
}

// 1. Locate the shard files referenced by the index (fallback: any sitemap-N.xml).
let shardPaths = [];
const indexPath = path.join(distDir, 'sitemap-index.xml');
if (fs.existsSync(indexPath)) {
  const idx = read(indexPath);
  const locs = [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const loc of locs) {
    const fname = path.basename(new URL(loc).pathname);
    const p = path.join(distDir, fname);
    if (fs.existsSync(p)) shardPaths.push(p);
  }
}
if (shardPaths.length === 0) {
  shardPaths = fs
    .readdirSync(distDir)
    .filter((f) => /^sitemap-\d+\.xml$/.test(f))
    .map((f) => path.join(distDir, f));
}

if (shardPaths.length === 0) {
  console.warn('[build-sitemap] No sitemap shards found, skipping.');
  process.exit(0);
}

// 2. Collect every <loc> from the shards.
const locs = [];
for (const p of shardPaths) {
  const xml = read(p);
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) locs.push(m[1]);
}

// 3. Build a zh<->en pairing map keyed by the locale-neutral path.
//    "/about/" <-> "/en/about/", "/" <-> "/en/".
const pairs = {};
function classify(loc) {
  const pathname = new URL(loc).pathname;
  if (pathname === '/en/' || pathname.startsWith('/en/')) {
    const key = pathname.replace(/^\/en/, '') || '/';
    return { key, locale: 'en' };
  }
  return { key: pathname, locale: 'zh' };
}
for (const loc of locs) {
  const { key, locale } = classify(loc);
  (pairs[key] ||= {})[locale] = loc;
}

// 4. Enrich each URL with alternates + metadata.
const urls = [];
for (const loc of locs) {
  const { key } = classify(loc);
  const pair = pairs[key] || {};
  const zh = pair.zh || loc;
  const en = pair.en || loc;
  const priority = key === '/' ? '1.0' : '0.8';
  const alts = [
    `<xhtml:link rel="alternate" hreflang="zh-CN" href="${zh}"/>`,
    `<xhtml:link rel="alternate" hreflang="en" href="${en}"/>`,
    `<xhtml:link rel="alternate" hreflang="x-default" href="${zh}"/>`,
  ].join('');
  urls.push(
    `<url><loc>${loc}</loc><lastmod>${TODAY}</lastmod>` +
      `<changefreq>weekly</changefreq><priority>${priority}</priority>${alts}</url>`
  );
}

// 5. Write a single, standards-compliant sitemap.xml.
const ns =
  'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
  'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" ' +
  'xmlns:xhtml="http://www.w3.org/1999/xhtml" ' +
  'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" ' +
  'xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"';
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset ${ns}>\n${urls.join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

// 6. Rewrite robots.txt to reference only sitemap.xml.
const robotsPath = path.join(distDir, 'robots.txt');
let base = 'https://zwg.me/';
if (fs.existsSync(robotsPath)) {
  const robots = read(robotsPath);
  const m = robots.match(/Sitemap:\s*(\S+)/);
  if (m) {
    const u = new URL(m[1]);
    base = `${u.protocol}//${u.host}/`;
  }
}
let robotsOut = fs.existsSync(robotsPath) ? read(robotsPath) : 'User-agent: *\nAllow: /\n';
robotsOut = robotsOut
  .replace(/^Sitemap:.*$/gm, '')
  .replace(/\n{3,}/g, '\n\n')
  .trimEnd() + `\n\nSitemap: ${base}sitemap.xml\n`;
fs.writeFileSync(robotsPath, robotsOut);

// 7. Remove the now-redundant split files.
for (const f of ['sitemap-index.xml', 'sitemap.txt', ...shardPaths.map((p) => path.basename(p))]) {
  const p = path.join(distDir, f);
  if (fs.existsSync(p)) fs.rmSync(p);
}

console.log(
  `[build-sitemap] Merged ${shardPaths.length} shard(s) → sitemap.xml (${urls.length} URLs, ` +
    `with hreflang + lastmod). robots.txt → ${base}sitemap.xml`
);
