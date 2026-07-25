export interface TimelineItem {
  /** 历程时间，如 2026-07 */
  date: string;
  /** 中文历程（一句话） */
  zh: string;
  /** 英文历程 */
  en: string;
}

export const timeline: TimelineItem[] = [
  {
    date: '2022-07',
    zh: '入职中国建筑土木建设有限公司',
    en: 'Started my career at China Construction Civil Engineering Co., Ltd.'
  },
  {
    date: '2022-07',
    zh: '取得统招普通高等学校本科毕业证书与学士学位证书',
    en: 'Earned a full-time undergraduate diploma and bachelor’s degree'
  },
  {
    date: '2018-06',
    zh: '参加高考，被河南理工大学交通工程专业录取',
    en: 'Took the Gaokao and was admitted to Henan Polytechnic University for Transportation Engineering'
  },
  {
    date: '2000-08',
    zh: '2000年8月18日出生',
    en: 'Born on August 18, 2000'
  }
];
