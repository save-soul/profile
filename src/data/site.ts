/**
 * 站点级配置 —— 全站文案、SEO、社交分享的单一数据源。
 * 部署前请把 url / author / email / twitter 改成你的真实信息。
 */
export interface SiteConfig {
  /** 站点中文名 */
  name: string;
  /** 站点英文名 */
  nameEn: string;
  /** 线上域名（用于 canonical / sitemap / OG）。部署前改成真实域名 */
  url: string;
  /** 默认（中文）站点描述 */
  descriptionZh: string;
  /** 英文站点描述 */
  descriptionEn: string;
  /** 作者中文名 */
  author: string;
  /** 作者英文名 */
  authorEn: string;
  /** 联系邮箱 */
  email: string;
  /** 社交分享图（放 public/ 下，建议 1200×630） */
  ogImage: string;
  /** 主语言 locale，用于 og:locale（zh_CN / en_US） */
  locale: string;
  /** 备用语言 locale */
  localeAlt: string;
  /** Twitter 账号（含 @） */
  twitter: string;
  /** GitHub 主页地址（用于首页 hero 链接） */
  github: string;
  /** 站点级关键词（中文 / 英文），用于 meta keywords 兜底 */
  keywordsZh: string;
  keywordsEn: string;
}

export const site: SiteConfig = {
  name: '赵文光',
  nameEn: 'Zhao Wenguang',
  url: 'https://zwg.me',
  descriptionZh:
    '赵文光的个人主页 —— 这里记录我做过的小软件作品、正在读与想读的书、旅途中的相册，以及此刻把时间花在哪里的日常历程。',
  descriptionEn:
    'Zhao Wenguang’s personal homepage — a quiet place gathering the software I’ve built, books I’m reading, travel photos, and a running timeline of where my time goes.',
  author: '赵文光',
  authorEn: 'Zhao Wenguang',
  email: 'withzeal@outlook.com',
  ogImage: '/og-index.png',
  locale: 'zh_CN',
  localeAlt: 'en_US',
  twitter: '',
  github: 'https://github.com/save-soul',
  keywordsZh: '赵文光, 个人主页, 作品, 阅读, 相册, 博客, 软件工程师',
  keywordsEn: 'Zhao Wenguang, personal homepage, works, reading, photos, blog, software engineer'
};
