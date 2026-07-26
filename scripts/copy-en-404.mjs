// Postbuild: copy the rendered English 404 page to dist/en/404.html
// so static hosts (Netlify, etc.) serve it as the locale-aware error page
// for missing /en/* URLs. Astro emits it as /en/404/index.html.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const src = 'dist/en/404/index.html';
const dst = 'dist/en/404.html';

try {
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  console.log(`[copy-en-404] ${src} -> ${dst}`);
} catch (e) {
  console.warn('[copy-en-404] skipped:', e.message);
}
