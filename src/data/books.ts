/** 阅读书单数据 — 直接编辑此文件即可增删书目 */
export interface Book {
  zhTitle: string;
  enTitle: string;
  author: string;
  status: 'reading' | 'finished' | 'wishlist';
  /** 可选：书籍链接（豆瓣/购买页等）。有值时书名变为链接，新标签打开 */
  link?: string;
  zhNote?: string;
  enNote?: string;
  year?: string;
}

export const statusLabel: Record<Book['status'], { zh: string; en: string }> = {
  reading: { zh: '在读', en: 'Reading' },
  finished: { zh: '读完', en: 'Finished' },
  wishlist: { zh: '想读', en: 'Wishlist' }
};

export const books: Book[] = [
  {
    zhTitle: '邓小平时代',
    enTitle: 'Deng Xiaoping and the Transformation of China',
    author: '傅高义',
    status: 'finished',
    zhNote: '主要写了邓小平以及在其领导下的变革中的中国，记录的邓小平比我之前想象中的邓小平来说显得更平凡、真实。另外，作者有时在评价邓小平时会拉踩一下前任。😂',
    enNote: 'It mainly focuses on Deng Xiaoping and China’s transformation under his leadership. The portrayal of Deng Xiaoping in the book feels more ordinary and authentic than the image I had before. Also, the author sometimes takes subtle jabs at his predecessors when evaluating him.😂',
    year: '2025',
    link:'https://book.douban.com/subject/20424526/'
  },
  {
    zhTitle: '汴京之围',
    enTitle: '1126 Bianjing: Foreign Affairs, Wars and People of the Late Northern Song Dynasty',
    author: '郭建龙',
    status: 'finished',
    link: 'https://book.douban.com/subject/34433981/',
    zhNote: '讲述了北宋如何在3年内从奢侈繁华到靖康之耻的过程，相对来说没那么枯燥，可以详细了解这段历史。可惜本书主要讲述靖康之耻，北宋灭亡，两帝北上后的南宋建立过程一笔带过。',
    enNote: 'It depicts how the prosperous Northern Song Dynasty collapsed into the Jingkang Humiliation within just three years. The narrative is far from tedious and offers a thorough look into this chapter of history. Regrettably, the book centers heavily on the fall of Bianjing and the Northern Song’s demise, barely touching on the establishment of the Southern Song after the two emperors were captured and exiled northward.',
    year: '2026'
  },
  {
    zhTitle: '中华史纲',
    enTitle: 'Outline of Chinese History',
    author: '李定一',
    status: 'reading',
    link: 'https://book.douban.com/subject/10576095/',
    zhNote: '贯通从上古传说时代到辛亥革命的完整中国通史，文笔简练通俗，史观独特客观，将数千年中华文明划分为六大阶段梳理脉络。对秦皇、王莽、孝文帝、明清中西交流等传统定论史实给出全新考据解读，非常适合通史入门；缺点是偏重政治史，经济与制度着墨较少。',
    enNote: 'A comprehensive general history of China spanning from ancient legendary eras to the 1911 Revolution. Written in concise, accessible prose with an original and objective historical perspective, it organizes thousands of years of Chinese civilization into six major developmental phases. It delivers well-researched re-evaluations of conventionally judged figures and events including Emperor Qinshihuang, Wang Mang, Emperor Xiaowen, and Sino-Western exchanges during the Ming and Qing dynasties, ideal for beginners of Chinese general history. Its downside is its heavy focus on political history with limited coverage of economics and institutional systems.',
    year: '2026'
  }
];
