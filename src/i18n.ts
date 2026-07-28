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

/** 每页独立的中英文标题、描述与关键词，供 BaseLayout 按 locale 取用 */
export interface PageMeta {
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  keywordsZh: string;
  keywordsEn: string;
}

export const pageMeta: Record<string, PageMeta> = {
  home: {
    titleZh: '赵文光的个人主页：软件作品、阅读与旅行相册',
    titleEn: "Zhao Wenguang — works, reading & travel",
    descZh:
      '欢迎来到我的个人主页。这里汇集了我的软件作品、阅读书单、旅行相册，以及记录日常此刻的「现在」页面。',
    descEn:
      'Welcome to my personal homepage — a quiet place gathering the software I’ve built, books I’m reading, travel photos, and a “Now” page.',
    keywordsZh: '赵文光, 个人主页, 作品, 阅读, 相册, 现在, 记录',
    keywordsEn: 'Zhao Wenguang, personal homepage, works, reading, photos, now, notes',
  },
  about: {
    titleZh: '赵文光的简历：教育背景、工作经历与技能栈介绍',
    titleEn: "Zhao Wenguang's résumé: education & skills",
    descZh:
      '关于赵文光：一份简洁的简历，涵盖教育背景、工作经历、技能栈与联系方式，帮你快速了解我是谁、能做什么。',
    descEn:
      'About Zhao Wenguang — a concise résumé covering education, work experience, skills, and how to get in touch.',
    keywordsZh: '赵文光, 简历, 关于, 技能, 联系方式, 工程师',
    keywordsEn: 'Zhao Wenguang, résumé, about, skills, contact, engineer',
  },
  works: {
    titleZh: '赵文光开发的软件作品集：工具、脚本与实验项目',
    titleEn: "Zhao Wenguang's works: tools & experiments",
    descZh:
      '我做过的一些小作品，大多源于自己的真实需求：工具、脚本与实验性项目，附上简介、技术栈与链接。',
    descEn:
      'Small things I’ve made, mostly born from my own needs — tools, scripts, and experiments, with notes, stacks, and links.',
    keywordsZh: '作品, 项目, 开源, 工具, 软件, 实验',
    keywordsEn: 'works, projects, open source, tools, software, experiments',
  },
  photos: {
    titleZh: '赵文光的旅行与生活在途摄影相册，定格光影瞬间',
    titleEn: "Zhao Wenguang's photo gallery: travel & life",
    descZh:
      '旅途与生活中的片刻集合。悬停查看拍摄信息与说明，点击可放大查看大图，记录光影里的寻常瞬间。',
    descEn:
      'Moments from trips and daily life. Hover for captions and click to enlarge — ordinary instants caught in light and shadow.',
    keywordsZh: '相册, 摄影, 旅行, 照片, 光影',
    keywordsEn: 'photos, photography, travel, gallery, moments',
  },
  reading: {
    titleZh: '赵文光的阅读书单：在读、已读与想读的好书推荐',
    titleEn: "Zhao Wenguang's reading list: books & notes",
    descZh: '我的阅读书单：正在读、已经读完，以及排在清单里想读的书，附上简短的感想与评分。',
    descEn:
      'My reading list — what I’m reading, what I’ve finished, and what’s queued up next, with brief notes and ratings.',
    keywordsZh: '阅读, 书单, 读书, 笔记, 推荐',
    keywordsEn: 'reading, book list, books, notes, recommendations',
  },
  now: {
    titleZh: '赵文光的现在页面：此刻把时间花在哪、关注什么',
    titleEn: "Zhao Wenguang's Now page: time & focus",
    descZh:
      '现在（Now）页面：记录此刻我把时间花在哪里、最近在关注什么，以及正在进行的事，随构建时间更新。',
    descEn:
      'The Now page — where my time goes right now, what I’m focused on, and what’s in progress, refreshed with each build.',
    keywordsZh: '现在, 近况, 动态, 关注',
    keywordsEn: 'now, currently, status, focus',
  },
  notes: {
    titleZh: '赵文光的记录：项目节点与生活片段的时间轴日志',
    titleEn: "Zhao Wenguang's notes: project & life log",
    descZh: '一些值得记下的时刻与历程：从项目节点到生活片段，按时间倒序排列的轻松记录。',
    descEn:
      'Moments and milestones worth noting — from project checkpoints to life snippets, listed newest first.',
    keywordsZh: '记录, 日志, 历程, 时间轴',
    keywordsEn: 'notes, journal, timeline, milestones',
  },
};
