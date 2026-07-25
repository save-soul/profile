export interface NavLink {
  /** 唯一 key，内站页面用于 active 高亮（与页面的 active 属性对应） */
  key: string;
  /** 链接地址：内站以 / 开头；外站填完整 URL 并设 external: true */
  href: string;
  zh: string;
  en: string;
  /** 外站链接：新标签打开，并显示 ↗ 标识 */
  external?: boolean;
}

/**
 * 导航配置 —— 增删改这里即可，全站导航自动同步。
 * 内站：href 用相对路径（如 /works/），key 与页面 active 对应。
 * 外站（如博客）：href 用完整 URL，加 external: true，会在新标签打开并带 ↗。
 */
export const navLinks: NavLink[] = [
  { key: 'home', href: '/', zh: '首页', en: 'Home' },
  { key: 'works', href: '/works/', zh: '作品', en: 'Works' },
  { key: 'reading', href: '/reading/', zh: '书单', en: 'Reading' },
  { key: 'photos', href: '/photos/', zh: '相册', en: 'Photos' },
  { key: 'notes', href: '/notes/', zh: '记录', en: 'Notes' },
  { key: 'now', href: '/now/', zh: '现在', en: 'Now' },
  { key: 'about', href: '/about/', zh: '关于', en: 'About' }
  // 外站示例（取消注释并改成你的地址即可）：
  // { key: 'blog', href: 'https://blog.example.com', zh: '博客', en: 'Blog', external: true }
];
