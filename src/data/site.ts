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
}

export const site: SiteConfig = {
  name: '赵文光',
  nameEn: 'Zhao Wenguang',
  url: 'https://zwg.me',
  descriptionZh: '一个极简的个人主页 —— 记录作品、阅读、相册与日常历程。',
  descriptionEn:
    'A minimal personal homepage — works, reading, photos, and a timeline of everyday moments.',
  author: '赵文光',
  authorEn: 'Zhao Wenguang',
  email: 'withzeal@outlook.com',
  ogImage: '/og-index.png',
  locale: 'zh_CN',
  localeAlt: 'en_US',
  twitter: '',
  github: 'https://github.com/save-soul'
};
