// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site';

export default defineConfig({
  site: site.url,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
