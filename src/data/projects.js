export const projects = [
  {
    id: 1,
    title: 'Sounds of Kolachi',
    categories: ['music'],
    tags: ['Ensemble', 'Composition', 'Performance', 'Music Direction'],
    featured: true,
    highlight: 'Centrestage',
    role: 'Principal ensemble · Composition · Performance · Music Direction',
    description:
      'A contemporary musical collective bridging South Asian classical and folk traditions with global contemporary expression.',
    icon: 'Music',
    path: '/sounds-of-kolachi',
  },
  {
    id: 2,
    title: 'Trance of Darvesh',
    categories: ['music'],
    tags: ['Live', 'Ensemble', 'Composition'],
    featured: true,
    role: 'Contemporary artistic practice',
    description:
      'An immersive musical experience by Ahsan Bari in collaboration with Global Synk — Sufi philosophy meets EDM and Rock & Roll.',
    icon: 'Sparkles',
    path: '/trance-of-darvesh',
  },
  {
    id: 3,
    title: 'RUZHN',
    categories: ['music', 'production'],
    tags: ['Artist Development', 'Production', 'Music'],
    featured: true,
    role: 'Music · Production · Artist Development',
    description:
      'A contemporary music and artist-development platform focused on developing artists and music outside conventional commercial models.',
    icon: 'Disc3',
    href: 'https://www.ruzhn.com/',
  },
  {
    id: 4,
    title: 'Guzarish',
    categories: ['music', 'production'],
    tags: ['Solo', 'Composition', 'Production'],
    featured: true,
    role: 'Solo Music · Debut EP',
    description:
      "Ahsan Bari's debut solo EP — composer, producer, and artist.",
    icon: 'Headphones',
  },
  {
    id: 5,
    title: 'Dhaka Say Karachi',
    categories: ['commissions', 'music', 'production'],
    tags: ['Cross-cultural', 'Composition', 'Production', 'International'],
    featured: true,
    role: 'Cross-cultural collaboration · Composition · Production',
    description:
      'A Transforming Narratives collaboration with Bangladeshi singer/composer Sheikh Dina exploring shared histories between Pakistan and Bangladesh through music, poetry, film and conversation.',
    icon: 'Globe',
  },
  {
    id: 6,
    title: 'Southasia Ensemble',
    categories: ['curation', 'music'],
    tags: ['International', 'Curation', 'Ensemble', 'Cross-cultural'],
    featured: true,
    role: 'Music · Curation · International Exchange',
    description:
      'Cross-border musical collaboration exploring South Asian traditions through contemporary practice.',
    icon: 'Users',
  },
  {
    id: 7,
    title: 'Mukalma',
    categories: ['curation'],
    tags: ['Cultural Programming', 'Curation', 'Music'],
    featured: true,
    role: 'Music · Cultural Dialogue · Curation',
    description:
      'Music and dialogue series exploring music, Sufism, Pakistani musical traditions, contemporary practice, cultural history and intergenerational exchange.',
    icon: 'MessagesSquare',
  },
  {
    id: 8,
    title: 'Sound Spirit',
    categories: ['curation'],
    tags: ['Education', 'Artist Development', 'Cultural Programming'],
    featured: true,
    role: 'Music · Education · Emerging Artist Development',
    description:
      'A platform connecting emerging musicians and students with established Pakistani artists through concerts, mentorship, collaborations and performance development.',
    icon: 'Sparkle',
  },
  {
    id: 9,
    title: 'Selected Screen & Stage Work',
    categories: ['commissions', 'production'],
    tags: ['Film', 'Theatre', 'Composition', 'Production'],
    featured: true,
    role: 'Film · Theatre · Immersive',
    description:
      "Moor · Mah-e-Mir · Rangreza · I'll Meet You There · Nayab · Betaali Prem Katha · Conversations 2016",
    icon: 'Clapperboard',
  },
  {
    id: 10,
    title: 'Music Curation & Festivals',
    categories: ['curation'],
    tags: ['Cultural Programming', 'Institutional'],
    featured: false,
    description:
      'Curating large-scale cultural festivals and music programs that bridge tradition and contemporary expression.',
    icon: 'Music2',
  },
  {
    id: 11,
    title: 'Cultural Collaborations',
    categories: ['curation'],
    tags: ['Cross-cultural', 'International'],
    featured: false,
    description:
      'Cross-cultural artistic partnerships spanning South Asia, the Middle East, and Western classical traditions.',
    icon: 'Globe',
  },
  {
    id: 12,
    title: 'Live Concert Productions',
    categories: ['production'],
    tags: ['Live', 'Production', 'Music Direction'],
    featured: false,
    description:
      'End-to-end live concert design — from concept and arrangement to stage production and sound engineering.',
    icon: 'Mic2',
  },
  {
    id: 13,
    title: 'Sound Design Projects',
    categories: ['commissions'],
    tags: ['Film', 'Theatre', 'Composition'],
    featured: false,
    description:
      'Original soundscapes for theatre, film, and interdisciplinary performance rooted in raga and tala systems.',
    icon: 'Headphones',
  },
];

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'music', label: 'Music' },
  { id: 'production', label: 'Production' },
  { id: 'curation', label: 'Curation' },
  { id: 'commissions', label: 'Commissions' },
];

export const featuredProjects = projects.filter((p) => p.featured);
