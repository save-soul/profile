/**
 * 多语言基础设施 —— 方案 B（子目录多语言）的单一数据源。
 * 约定：中文（默认）无前缀，如 /now/；英文带 /en/ 前缀，如 /en/now/。
 */
export type Locale = 'zh' | 'en';

/** 按当前语言取对应文案/字段 */
export function pick<T>(locale: Locale, zh: T, en: T): T {
  return locale === 'zh' ? zh : en;
}

/** 取对方语言 */
export function otherLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}

/**
 * 根据当前 pathname 与目标语言，生成对应语言的 URL。
 * - 中文版：去掉 /en 前缀（/en/notes/ → /notes/，/en/ → /）
 * - 英文版：加 /en 前缀（/notes/ → /en/notes/，/ → /en/）
 */
export function localizedUrl(locale: Locale, pathname: string): string {
  // 先去掉可能已有的 /en 前缀，归一到无前缀形式，避免双重前缀
  const base = pathname.replace(/^\/en/, '') || '/';
  const clean = base.replace(/\/+$/, '') || '/';
  if (locale === 'zh') {
    return clean === '/' ? '/' : `${clean}/`;
  }
  return clean === '/' ? '/en/' : `/en${clean}/`;
}

/** 每页独立的中英文标题与描述，供 BaseLayout 按 locale 取用 */
export interface PageMeta {
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
}

export const pageMeta: Record<string, PageMeta> = {
  home: {
    titleZh: '首页',
    titleEn: 'Home',
    descZh: '作品、阅读、相册与历程。',
    descEn: 'Works, reading, photos, and a timeline of everyday moments.',
  },
  about: {
    titleZh: '关于',
    titleEn: 'About',
    descZh: '关于作者：简历、技能与联系方式。',
    descEn: 'About the author: résumé, skills, and contact.',
  },
  works: {
    titleZh: '作品',
    titleEn: 'Works',
    descZh: '做过的一些小东西，大多源于自己的需求。',
    descEn: 'Things I’ve made, mostly born out of my own needs.',
  },
  photos: {
    titleZh: '相册',
    titleEn: 'Photos',
    descZh: '一些片刻，悬停查看详情，点击放大。',
    descEn: 'Some moments. Hover for details, click to enlarge.',
  },
  reading: {
    titleZh: '阅读书单',
    titleEn: 'Reading List',
    descZh: '在读、读完与想读的书。',
    descEn: 'Books I’m reading, have finished, or want to read.',
  },
  now: {
    titleZh: '现在',
    titleEn: 'Now',
    descZh: '此刻我把时间花在哪里。',
    descEn: 'Where my time goes right now.',
  },
  notes: {
    titleZh: '记录',
    titleEn: 'Notes',
    descZh: '一些值得记下的时刻与历程。',
    descEn: 'Moments and milestones worth noting.',
  },
};
