import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * 纯文本版 sitemap（Google 支持的标准格式之一）。
 * 中英文双路由：中文默认无前缀，英文带 /en/ 前缀，分别收录便于搜索引擎独立索引。
 */
const pages = ['', 'about', 'works', 'photos', 'reading', 'now', 'notes'];

export const GET: APIRoute = () => {
  const base = site.url.replace(/\/$/, '');
  const urls = pages.flatMap((p) => {
    const zh = p === '' ? `${base}/` : `${base}/${p}/`;
    const en = p === '' ? `${base}/en/` : `${base}/en/${p}/`;
    return [zh, en];
  });
  const body = urls.join('\n') + '\n';
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
