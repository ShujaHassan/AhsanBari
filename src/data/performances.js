import { parseYouTubeUrl } from '../utils/youtube';

const rawPerformances = [
  {
    url: 'https://www.youtube.com/watch?v=3CJQGf7ldZU',
    type: 'performance',
    venue: 'Coke Studio',
    featured: true,
  },
  {
    url: 'https://www.youtube.com/watch?v=eWCvqOSt3mE',
    type: 'video',
    featured: false,
  },
  {
    url: 'https://www.youtube.com/watch?v=kTkWEZihQlg',
    type: 'video',
    featured: false,
  },
  {
    url: 'https://www.youtube.com/watch?v=HzUcqvg6TVI&t=2130s',
    type: 'performance',
    venue: 'The Kennedy Center',
    date: 'March 2017',
    featured: true,
  },
  {
    url: 'https://www.youtube.com/watch?v=T8VIHWvjXHY&t=2516s',
    type: 'performance',
    venue: "Joe's Pub, New York",
    featured: true,
  },
  {
    url: 'https://www.youtube.com/watch?v=NdTvs2pbOvY',
    type: 'performance',
    venue: 'Women of the World Festival',
    date: 'May 2016',
    featured: false,
  },
  {
    url: 'https://www.youtube.com/watch?v=HnWpkCwfa9I',
    type: 'performance',
    venue: 'Local Memphis — Live On Local 24',
    featured: false,
  },
  {
    url: 'https://www.youtube.com/watch?v=xigHYPDaJqo',
    type: 'video',
    featured: false,
  },
  {
    url: 'https://www.youtube.com/watch?v=yq0mbHuV3PM',
    type: 'video',
    featured: false,
  },
  {
    url: 'https://www.youtube.com/watch?v=1C_UaPcW7p4',
    type: 'video',
    featured: true,
  },
  {
    url: 'https://www.youtube.com/watch?v=l_9uxXtptmw&t=4s',
    type: 'video',
    featured: false,
  },
  {
    url: 'https://www.youtube.com/watch?v=83lkbWV73Kw',
    type: 'video',
    featured: false,
  },
];

const titles = {
  '3CJQGf7ldZU': 'Ilallah — Coke Studio Season 11 | Sounds of Kolachi',
  eWCvqOSt3mE: 'Allah Hi Dey Ga — Sounds Of Kolachi',
  kTkWEZihQlg: 'Tarana — Sounds Of Kolachi feat. Various Artists',
  HzUcqvg6TVI: 'Sounds of Kolachi at The Kennedy Center',
  T8VIHWvjXHY: "Sounds of Kolachi LIVE from Joe's Pub",
  NdTvs2pbOvY: 'Sounds of Kolachi — Women of the World Festival Karachi',
  HnWpkCwfa9I: 'Sounds Of Kolachi — Live On Local 24, Memphis',
  xigHYPDaJqo: 'Raag Sunaway',
  yq0mbHuV3PM: 'Jannab Dey — Ahsan Bari x Adnan Dhool',
  '1C_UaPcW7p4': 'Pani Dana — Nayab (Official Video)',
  l_9uxXtptmw: 'Dhaka Say Karachi — A Tale Of Two Lost Souls',
  '83lkbWV73Kw': 'Jalta Rahun — By Ahsan Bari',
};

export const performances = rawPerformances
  .map((item, index) => {
    const parsed = parseYouTubeUrl(item.url);
    if (!parsed) return null;

    return {
      id: index + 1,
      title: titles[parsed.videoId] || 'Performance',
      type: item.type,
      venue: item.venue || null,
      date: item.date || null,
      featured: item.featured,
      ...parsed,
    };
  })
  .filter(Boolean);

export const performanceCategories = [
  { id: 'all', label: 'All' },
  { id: 'performance', label: 'Live Performances' },
  { id: 'video', label: 'Music Videos' },
];

export const featuredPerformances = performances.filter((p) => p.featured);
