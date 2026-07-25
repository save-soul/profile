/** 作品数据 — 直接编辑此文件即可增删作品 */
export interface Work {
  zhTitle: string;
  enTitle: string;
  zhDesc: string;
  enDesc: string;
  year: string;
  tags: string[];
  link?: string;
}

export const works: Work[] = [
  {
    "zhTitle": "AstroPaper中文版",
    "enTitle": "Personal Homepage",
    "zhDesc": "AstroPaper博客主题汉化，更方便国人使用。",
    "enDesc": "A minimalist black-and-white personal blog theme powered by Astro. Fully bilingual, with all content managed via Markdown, optimized for Chinese users.",
    "year": "2026",
    "tags": ["Astro", "Web"],
    "link": "https://github.com/save-soul/blog"
  }
];
