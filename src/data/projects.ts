// Project data types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'ai' | 'data';
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  results: string;
  metrics?: string;
  category: string;
  detailUrl?: string;
}

// Featured Projects Data
export const featuredProjects: Project[] = [
  {
    id: 'mooody',
    title: 'Mooody',
    description: 'AI movie recommendation platform that suggests films based on your mood, energy, and context. No more endless Netflix scrolling.',
    image: 'https://images.unsplash.com/photo-1489599843853-3ec3cafa8ad9?w=500&h=300&fit=crop&crop=focalpoint&auto=format',
    technologies: ['AI/ML', 'React', 'Replit'],
    liveUrl: '#',
    category: 'ai'
  },
  {
    id: 'ai-portfolio-builder',
    title: 'AI Portfolio Builder',
    description: 'ChatGPT-style portfolio websites where visitors can have natural conversations with your professional story.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=focalpoint&auto=format',
    technologies: ['Next.js', 'AI Chat', 'TypeScript'],
    liveUrl: '#',
    category: 'ai'
  },
  {
    id: 'nokia-bounce',
    title: 'Nokia Bounce Recreation',
    description: 'My first AI breakthrough - rebuilt the classic Nokia game in one night using just prompts. This project changed everything.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop&crop=focalpoint&auto=format',
    technologies: ['JavaScript', 'Cursor', 'Game Dev'],
    liveUrl: '#',
    category: 'ai'
  }
];

// Case Studies Data
export const caseStudies: CaseStudy[] = [
  {
    id: 'collective-roots-apg',
    title: 'Collective Roots APG',
    description: 'Accessibility-first redesign that transformed digital barriers into bridges for community engagement, achieving measurable impact for families in recovery.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=focalpoint&auto=format',
    results: '162% increase in conversion rate',
    metrics: '58% accessibility improvement, 25% bounce rate reduction',
    category: 'UX Design & Accessibility',
    detailUrl: '/case-studies/collective-roots-apg'
  },
  {
    id: 'vanishing-seattle',
    title: 'Vanishing Seattle',
    description: 'Transformed a confusing nonprofit website into a donation-generating machine through strategic UX improvements and user-focused design.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=focalpoint&auto=format',
    results: '4x increase in donations',
    metrics: '50% reduction in bounce rate, 30% increase in organic traffic',
    category: 'UX Optimization'
  },
  {
    id: 'level11-technology',
    title: 'Level11 Technology Projects',
    description: 'Redesigned multiple nonprofit websites to make them more accessible, better for SEO, and easier for everyone to use through evidence-based design improvements.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=focalpoint&auto=format',
    results: 'WCAG 2.2 compliance achieved',
    metrics: 'Improved SEO performance, Better user experience for all abilities',
    category: 'Accessibility Transformation'
  },
  {
    id: 'job-market-research',
    title: 'Job Market Transformation Research',
    description: 'Conducted extensive research with 15+ industry professionals to understand hiring challenges and explore AI solutions for human-centered recruitment.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=focalpoint&auto=format',
    results: '15+ professional interviews conducted',
    metrics: '8 thought leadership articles published, 5,741+ LinkedIn impressions generated',
    category: 'AI Research'
  }
];

// Skills data
export const skills = {
  technical: [
    'AI Development',
    'Prompt Engineering',
    'UX Design',
    'Accessibility Design',
    'User Research',
    'Rapid Prototyping'
  ],
  tools: [
    'Cursor',
    'Replit',
    'Figma',
    'Next.js',
    'React',
    'Salesforce'
  ],
  soft: [
    'Cross-functional Collaboration',
    'Market Research',
    'Stakeholder Management',
    'Content Creation',
    'Photography',
    'Mindfulness'
  ]
}; 