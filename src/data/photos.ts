export interface Photo {
  /** 图片地址：本地放 public/ 下用 / 开头；图床用完整 http(s) URL */
  src: string;
  /** 标题（中） */
  zh: string;
  /** 标题（英） */
  en: string;
  /** 描述（中，可选）—— 悬停与点击放大时展示 */
  zhDesc?: string;
  /** 描述（英，可选） */
  enDesc?: string;
  /** 拍摄日期（可选，如 2024-05-03） */
  date?: string;
}

export const photos: Photo[] = [
  {
    src: 'https://i.imgant.com/v2/Eq9SaAy.jpeg',
    zh: '钱塘江',
    en: 'Qiantang River',
    zhDesc: '60公里骑行途中，拍摄于钱塘江大桥之上。',
    enDesc: 'Taken on Qiantang River Bridge during a 60km ride.',
    date: '2024-05-03'
  },
  {
    src: 'https://i.imgant.com/v2/itEu9Gz.jpeg',
    zh: '雁荡山之行',
    en: 'Yandang Mountain Trip',
    zhDesc: '项目组织团建，雁荡山一日游',
    enDesc: 'Team building trip to Yandang Mountain',
    date: '2023-04-29'
  },
  {
    src: 'https://i.imgant.com/v2/fkd9kGc.jpeg',
    zh: '在建中的灵江特大桥',
    en: 'Lingjiang Grand Bridge Under Construction',
    zhDesc: '在建的灵江特大桥于晨雾缭绕之中',
    enDesc: 'Lingjiang Grand Bridge under construction amid morning mist.',
    date: '2023-01-12'
  }
];
