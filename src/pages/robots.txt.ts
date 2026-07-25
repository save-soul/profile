import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * 动态生成 robots.txt，Sitemap 地址随 site.url 自动变化，避免硬编码。
 */
export const GET: APIRoute = () => {
  const sitemapURL = new URL('/sitemap-index.xml', site.url).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
