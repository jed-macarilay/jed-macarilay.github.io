export const personal = {
  name: 'Jedmark Macarilay',
  title: 'Full-Stack Developer',
  tagline: '8+ years building production web apps across fintech, banking, logistics, healthcare, and pet-care products.',
  email: 'jed.macarilay@gmail.com',
  phone: '09507475414',
  location: 'Philippines',
  linkedin: 'https://www.linkedin.com/in/jedmark-macarilay/',
  github: 'https://github.com/jed-macarilay',
  yearsExp: 8,
}

export const skills = [
  {
    category: 'Frontend',
    items: ['Vue.js', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vuetify', 'Bootstrap', 'GCash Miniprogram'],
  },
  {
    category: 'Backend',
    items: ['Laravel', 'Node.js', 'Express.js', 'RESTful APIs', 'PHP', 'SQL', 'NoSQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS S3', 'CloudFront', 'Azure Functions', 'Azure Pipelines', 'GitHub Actions', 'CI/CD'],
  },
  {
    category: 'Product Delivery',
    items: ['MVP ownership', 'Responsive UI', 'CMS workflows', 'Client communication', 'Code review', 'Documentation'],
  },
]

export const highlights = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Selected Projects', value: '4' },
  { label: 'Primary Stack', value: 'Vue/Laravel' },
  { label: 'Current Stack', value: 'React/TS' },
]

export const experience = [
  {
    title: 'Software Developer',
    company: 'CognitiveAI',
    period: 'Jun 2025 - Present',
    current: true,
    bullets: [
      'Served as main developer and single-handedly built the MVP of Scan2Win, a GCash Miniprogram app, independently architecting, developing, and delivering the full initial release as a third-party partner on one of the Philippines\' largest fintech platforms.',
      'Developing responsive web dashboards and applications using React and TypeScript for both internal and client-facing use cases.',
      'Managing and maintaining CMS platforms for branding clients, including content structure, customization, and ongoing feature updates.',
      'Building and deploying frontend assets via AWS S3 and CloudFront for fast, globally distributed delivery.',
      'Implementing automated deployment workflows using GitHub Actions for reliable and consistent CI/CD pipelines.',
    ],
    tags: ['React', 'TypeScript', 'AWS S3', 'CloudFront', 'GitHub Actions', 'Miniprogram', 'CMS'],
  },
  {
    title: 'Senior Developer',
    company: 'Diversified Robotics',
    period: 'Jan 2024 - Jun 2025',
    current: false,
    bullets: [
      'Served as main full-stack developer of a Maritime Logistics Platform, handling frontend and backend development end-to-end.',
      'Worked as one of the main developers on the Real-Time Transit Information System for the Washington Metropolitan Area Transit Authority (WMATA), contributing across multiple versions using Next.js, Node.js, and Azure Functions.',
      'Designed and implemented real-time transit data APIs and dashboard features for commuter information and route tracking.',
      'Built and optimized responsive Next.js interfaces for real-time transit updates and system monitoring.',
      'Participated in code reviews and collaborated with QA and Product teams to maintain quality and delivery pace.',
    ],
    tags: ['Vue.js', 'React', 'Next.js', 'Node.js', 'Laravel', 'Azure Functions', 'TypeScript'],
  },
  {
    title: 'Vue.js Developer',
    company: 'Questronix Corporation',
    period: 'Jun 2022 - Jul 2023',
    current: false,
    bullets: [
      'Assigned to a banking client as the sole frontend developer, maintaining multiple loan and insurance web applications used by customers and internal teams.',
      'Solely maintained and updated the bank\'s public-facing website, handling bug fixes, feature updates, and content changes.',
      'Served as the main point of contact for client concerns, coordinating directly with stakeholders to address issues and deliver updates on time.',
    ],
    tags: ['Vue 3', 'TypeScript', 'Banking', 'Frontend'],
  },
  {
    title: 'Full-Stack Developer (Part-Time)',
    company: 'Redmer Productions, LLC',
    period: 'Jul 2023 - Sep 2023',
    current: false,
    bullets: [
      'Built clinical training tools, gamified simulations, and virtual clinical environments.',
      'Developed assessment and certification platforms using Vue.js, Node.js, and MongoDB.',
    ],
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'QAIROS',
    period: 'Jul 2021 - Dec 2021',
    current: false,
    bullets: [
      'Designed and maintained a simulation platform with a modular backend architecture.',
      'Integrated Drupal CMS for flexible content management by non-technical teams.',
    ],
    tags: ['Vue.js', 'Node.js', 'Drupal'],
  },
  {
    title: 'Software Developer',
    company: 'Mobext Philippines',
    period: 'May 2019 - Dec 2021',
    current: false,
    bullets: [
      'Worked as main developer and maintainer across multiple client projects simultaneously, handling both frontend and backend using Laravel and Vue.js.',
      'Built and maintained a CMS application for managing content across client platforms, supporting non-technical users with a clean interface.',
      'Reviewed code across projects and kept internal documentation updated to help the team stay aligned.',
    ],
    tags: ['Laravel', 'Vue.js', 'CMS', 'PHP', 'MySQL'],
  },
  {
    title: 'Junior Web Developer',
    company: 'Jarvis Butler Property Management',
    period: 'Sep 2018 - Mar 2019',
    current: false,
    bullets: [
      'Built multiple web applications to support real estate operations, including a property selling and leasing platform and a tenant management system.',
      'Handled full-stack development using Laravel, PHP, JavaScript, and SQL, taking ownership of both frontend and backend.',
    ],
    tags: ['Laravel', 'PHP', 'JavaScript', 'SQL', 'Real Estate'],
  },
]

export const projects = [
  {
    id: 'cognitiveai-scan2win',
    title: 'Scan2Win GCash Miniprogram',
    company: 'CognitiveAI',
    description: 'A production GCash Miniprogram MVP delivered as a third-party partner project. I owned the frontend architecture, implementation, and release-ready experience while keeping private client details out of the public portfolio.',
    tags: ['React', 'TypeScript', 'GCash Miniprogram', 'AWS S3', 'CloudFront'],
    status: 'Work Project',
    link: null,
    linkLabel: null,
  },
  {
    id: 'diversified-wmata-real-time-transit',
    title: 'WMATA Real-Time Transit Platform',
    company: 'Diversified Robotics',
    description: 'A production transit information platform for WMATA where I contributed across multiple versions, building real-time route-status interfaces, API integrations, and Azure-backed services for high-frequency commuter information workflows.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Azure Functions', 'Transit Data'],
    status: 'Work Project',
    link: null,
    linkLabel: null,
    images: [
      '/images/wmata-map.png',
      '/images/wmata-rail.png',
      '/images/wmata-bus.png',
    ],
  },
  {
    id: 'personal-vet-clinic-care',
    title: 'Vet Clinic Care',
    company: 'Personal Project',
    description: 'A role-based veterinary care dashboard with client and clinic workspaces. Built booking, patient, record, queue, message, and care-summary flows to show how owners and clinic staff can work from the same product model.',
    tags: ['React 19', 'Tailwind CSS', 'Lucide Icons', 'Dashboard UX', 'Responsive UI'],
    status: 'Private Repo',
    link: null,
    linkLabel: null,
    images: [
      '/images/vet-client-dashboard.png',
      '/images/vet-clinic-dashboard.png',
    ],
  },
  {
    id: 'personal-pawkeep-app',
    title: 'PawKeep',
    company: 'Personal Project',
    description: 'A local-first pet care app for household pet profiles, vaccination tracking, reminders, import/export backups, and downloadable pet ID cards generated in the browser without a backend.',
    tags: ['React 19', 'TypeScript', 'Vite', 'localStorage', 'PNG Export'],
    status: 'Private Repo',
    link: null,
    linkLabel: null,
    images: [
      '/images/pawkeep-overview.png',
      '/images/pawkeep-pet-card.png',
      '/images/pawkeep-mobile-dashboard.png',
    ],
  },
]
