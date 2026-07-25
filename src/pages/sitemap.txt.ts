import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * 纯文本版 sitemap（Google 支持的标准格式之一）。
 * 自动扫描同目录 .astro 页面，无需手动维护路由列表。
 */
const modules = import.meta.glob('./*.astro', { eager: true });
const routes = Object.keys(modules)
  .map((f) => f.replace('./', '').replace(/\.astro$/, ''))
  .filter((name) => name !== '404') // 404 是错误页，不应进入 sitemap
  .map((name) => (name === 'index' ? '' : name))
  .sort();

export const GET: APIRoute = () => {
  const base = site.url.replace(/\/$/, '');
  const body = routes.map((r) => (r ? `${base}/${r}` : `${base}/`)).join('\n') + '\n';
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
