import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 用显式 glob loader 为两个集合分别指定 base 目录。
// 否则默认的 type:'content' 会以 src/content 为根扫描两个集合，
// 且 id 仅取文件名（en/zh），导致 about/en.md 与 now/en.md 的 id 冲突，
// 触发 [glob-loader] Duplicate id 警告。
// about / now 的 Markdown 均无 frontmatter，schema 留空。
// 页面仍通过 `import { Content } from '../content/...md'` 直接引入，不受影响。
const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({}),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({}),
});

export const collections = { about, now };
