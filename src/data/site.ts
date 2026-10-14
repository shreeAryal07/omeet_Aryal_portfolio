export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'facebook'
}

export type SkillGroup = {
  title: string
  description: string
  items: string[]
}

export type Project = {
  title: string
  status: 'Published project' | 'Project idea'
  objective: string
  description: string
  tools: string[]
  imageSrc: string
  imageAlt: string
  learned?: string[]
  projectUrl?: string
  sourceUrl?: string
  liveUrl?: string
}

export const profilePhotoPath = '/images/profile.jpg'

export const navigation: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/shreeAryal07',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/omeet-aryal-439619373/',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/omit.aryal',
    icon: 'facebook',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming and Analysis',
    description: 'Building analytical thinking through code and structured datasets.',
    items: ['Python', 'Pandas', 'NumPy'],
  },
  {
    title: 'Data Preparation',
    description: 'Cleaning raw information into usable, reliable datasets.',
    items: ['Microsoft Excel', 'Data Cleaning', 'Data Transformation'],
  },
  {
    title: 'Visualization',
    description: 'Turning numbers into clear stories and dashboard-driven insights.',
    items: ['Power BI', 'Matplotlib', 'Dashboard Development'],
  },
  {
    title: 'Foundations',
    description: 'Core skills supporting reproducible and collaborative data work.',
    items: ['SQL', 'Statistics', 'Git', 'GitHub'],
  },
]

export const projects: Project[] = [
  {
    title: 'Chennai Super Kings Cricket Analysis',
    status: 'Published project',
    objective: 'Compare international cricketers across key batting statistics.',
    description:
      'A beginner-level Python project that compares players’ total runs, batting averages, and centuries using charts to explore cricket statistics.',
    tools: ['Python', 'Matplotlib', 'Git', 'GitHub'],
    imageSrc: '/images/csk-cricket-analysis.png',
    imageAlt: 'Chennai Super Kings Power BI dashboard with player batting statistics',
    learned: [
      'Compare runs, batting averages, and centuries',
      'Create bar, pie, line, and histogram charts',
      'Present statistics in visual summaries',
    ],
    projectUrl:
      'https://github.com/shreeAryal07/Cricket-Data-Analysis/blob/main/README.md',
    sourceUrl: 'https://github.com/shreeAryal07/Cricket-Data-Analysis',
  },
  {
    title: 'Retail Sales Analysis',
    status: 'Project idea',
    objective: 'Possible direction: explore patterns in a practice retail dataset.',
    description:
      'A potential analysis of a practice retail dataset, once a suitable dataset is selected.',
    tools: ['Excel', 'Power BI', 'Data Cleaning'],
    imageSrc: '/images/retail-sales.png',
    imageAlt: 'Retail sales dashboard highlighting sales performance and trends',
  },
  {
    title: 'Nepal Airlines Corporation Financial Analysis',
    status: 'Project idea',
    objective: 'Potential goal: visualize public financial indicators once verified.',
    description:
      'A dashboard concept to explore public financial indicators after reliable source data is verified.',
    tools: ['Power BI', 'Excel', 'Statistics'],
    imageSrc: '/images/nepal-airlines.png',
    imageAlt: 'Nepal Airlines aircraft at an airport, representing the airline analysis idea',
  },
]

export const experienceItems = [
  {
    title: 'BSc CSIT Student',
    subtitle: 'Butwal Multiple Campus, Nepal',
    description:
      'Currently studying computer science and information technology with a focus on analytical thinking, programming, and problem solving.',
  },
  {
    title: 'CSIT Association of Butwal Multiple Campus',
    subtitle: 'Joint Secretary',
    description:
      'Supporting student engagement, coordination, and program planning while contributing to a collaborative campus community.',
  },
  {
    title: 'IdeaForge: BMC — Ideas to Impact',
    subtitle: 'Event coordination and hosting',
    description:
      'Taking part in idea-sharing and event execution, helping turn concepts into accessible, engaging discussions and experiences.',
  },
]

export const profileHighlights = [
  { label: 'Focus', value: 'Data analysis' },
  { label: 'Tools', value: 'Python + Excel' },
  { label: 'Goal', value: 'Data science path' },
]
