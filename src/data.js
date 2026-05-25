export const personal = {
  name: 'Jedmark Macarilay',
  title: 'Full-Stack Developer',
  tagline: '8 years shipping scalable web apps across fintech, banking, industrial, and branding.',
  email: 'jed.macarilay@gmail.com',
  phone: '09507475414',
  location: 'Philippines',
  linkedin: 'https://www.linkedin.com/in/jedmark-macarilay/',
  github: 'https://github.com/jedmark',
  yearsExp: 8,
}

export const skills = [
  {
    category: 'Frontend',
    items: ['Vue.js', 'React', 'Next.js', 'TypeScript', 'Vuetify', 'Tailwind CSS', 'Bootstrap', 'Miniprogram'],
  },
  {
    category: 'Backend',
    items: ['Laravel', 'Node.js', 'Express.js', 'RESTful APIs', 'PHP'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS S3', 'CloudFront', 'Azure Functions', 'Azure Pipelines', 'GitHub Actions', 'CI/CD'],
  },
  {
    category: 'Tools & Other',
    items: ['Git', 'GitHub', 'GitLab', 'JWT', 'OAuth2', 'MongoDB', 'MySQL', 'PostgreSQL', 'OctoberCMS', 'Drupal'],
  },
]

export const highlights = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Industries Shipped', value: '4' },
  { label: 'Core Stacks', value: 'Vue/Laravel + React/TS' },
  { label: 'Cloud Platforms', value: 'AWS + Azure' },
]

export const experience = [
  {
    title: 'Software Developer',
    company: 'CognitiveAI',
    period: 'Jun 2025 – Present',
    current: true,
    bullets: [
      'Served as main developer and single-handedly built the MVP of Scan2Win, a GCash Miniprogram app, independently architecting, developing, and delivering the full initial release as a third-party partner on one of the Philippines\' largest fintech platforms.',
      'Developing responsive web dashboards and applications using React and TypeScript, serving both internal and client-facing use cases.',
      'Managing and maintaining CMS platforms for branding clients, handling content structure, customizations, and ongoing feature updates.',
      'Building and deploying frontend assets via AWS S3 and CloudFront for fast, globally distributed content delivery.',
      'Implementing automated deployment workflows using GitHub Actions for reliable and consistent CI/CD pipelines.',
    ],
    tags: ['React', 'TypeScript', 'AWS S3', 'CloudFront', 'GitHub Actions', 'Miniprogram', 'CMS'],
  },
  {
    title: 'Senior Developer',
    company: 'Diversified Robotics',
    period: 'Jan 2024 – Jun 2025',
    current: false,
    bullets: [
      'Served as main developer (full-stack) of a Maritime Logistics Platform handling both frontend and backend development end-to-end.',
      'Worked as one of the main developers on the Real-Time Transit Information System for the Washington Metropolitan Area Transit Authority (WMATA) contributing across multiple versions using Next.js, Node.js, and Azure Functions.',
      'Designed and implemented real-time transit data APIs and dashboard features for commuter information and route tracking, and owned backend services using Azure Functions for scalable, event-driven data processing.',
      'Built and optimized a responsive Next.js web interface for real-time transit updates and system monitoring, improving data delivery speed through API refactoring and cloud-based architecture enhancements.',
      'Championed coding standards, participated in code reviews, and collaborated cross-functionally with QA and Product teams to ensure quality and timely delivery.',
    ],
    tags: ['Vue.js', 'React', 'Next.js', 'Node.js', 'Laravel', 'Azure Functions', 'TypeScript'],
  },
  {
    title: 'Vue.js Developer',
    company: 'Questronix Corporation',
    period: 'Jun 2022 – Jul 2023',
    current: false,
    bullets: [
      'Assigned to a banking client as the sole frontend developer, maintaining multiple loan and insurance web applications used by the client\'s customers and internal teams.',
      'Solely maintained and updated the bank\'s public-facing website, handling bug fixes, feature updates, and content changes.',
      'Served as the main point of contact for client concerns, coordinating directly with stakeholders to address issues and deliver updates on time.',
    ],
    tags: ['Vue 3', 'TypeScript', 'Banking', 'Frontend'],
  },
  {
    title: 'Full-Stack Developer (Part-Time)',
    company: 'Redmer Productions, LLC',
    period: 'Jul 2023 – Sep 2023',
    current: false,
    bullets: [
      'Built clinical training tools, gamified simulations (\'Gamulations\'), and virtual clinical environments.',
      'Developed assessment and certification platforms using Vue.js, Node.js, and MongoDB.',
    ],
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'QAIROS',
    period: 'Jul 2021 – Dec 2021',
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
    period: 'May 2019 – Dec 2021',
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
    period: 'Sep 2018 – Mar 2019',
    current: false,
    bullets: [
      'Built multiple web applications to support the company\'s real estate operations, including a property selling and leasing platform and a tenant management system.',
      'Handled full-stack development using Laravel, PHP, JavaScript, and SQL, taking ownership of both frontend and backend.',
    ],
    tags: ['Laravel', 'PHP', 'JavaScript', 'SQL', 'Real Estate'],
  },
]

export const projects = [
  {
    id: 'cognitiveai-scan2win',
    title: 'Scan2Win GCash Miniprogram App',
    company: 'CognitiveAI',
    description: 'Problem: deliver a production-ready promo mini program under tight timelines. Action: owned MVP frontend architecture, implementation, and release coordination with partner stakeholders. Outcome: shipped a stable launch-ready experience in the GCash ecosystem.',
    tags: ['React', 'TypeScript', 'Miniprogram', 'AWS S3', 'CloudFront'],
    status: 'In Production',
    link: null,
  },
  {
    id: 'confidential-brand-cms-platforms',
    title: 'Brand CMS Platform Suite',
    company: 'Confidential Client',
    description: 'Problem: branding teams needed faster content operations across multiple properties. Action: maintained and extended CMS implementations, improving content structures and editorial workflows. Outcome: enabled more reliable and efficient day-to-day publishing.',
    tags: ['CMS', 'React', 'TypeScript'],
    status: 'In Production',
    link: null,
  },
  {
    id: 'confidential-maritime-operations-platform',
    title: 'Maritime Operations Platform',
    company: 'Confidential Enterprise Client',
    description: 'Problem: operations teams required clearer visibility and dependable platform workflows. Action: delivered full-stack features across dashboards, backend services, and deployment support. Outcome: improved platform usability and release stability for operational users.',
    tags: ['Vue.js', 'React', 'Laravel', 'Node.js'],
    status: 'In Production',
    link: null,
  },
  {
    id: 'confidential-real-time-transit-platform',
    title: 'Real-Time Transit Platform',
    company: 'Confidential Public Transport Client',
    description: 'Problem: commuters relied on timely and accurate real-time updates. Action: implemented route-status UI features, backend integrations, and performance-focused improvements for high-frequency feeds. Outcome: delivered faster and more dependable transit information experiences.',
    tags: ['Next.js', 'Node.js', 'Azure Functions', 'TypeScript'],
    status: 'In Production',
    link: null,
  },
  {
    id: 'confidential-banking-app-suite',
    title: 'Banking App Suite',
    company: 'Confidential Banking Client',
    description: 'Problem: financial products required continuous enhancements while maintaining reliability. Action: maintained and upgraded multiple loan and insurance web apps based on business priorities. Outcome: sustained feature delivery with stable user-facing experiences.',
    tags: ['Vue 3', 'TypeScript', 'Banking'],
    status: 'Delivered',
    link: null,
  },
  {
    id: 'confidential-multi-client-web-cms',
    title: 'Multi-Client Web Delivery + CMS',
    company: 'Agency Portfolio',
    description: 'Problem: multiple client products needed parallel delivery and maintainability. Action: led frontend/backend implementation across engagements and built CMS tooling for non-technical teams. Outcome: improved delivery consistency across concurrent projects.',
    tags: ['Laravel', 'Vue.js', 'CMS', 'PHP'],
    status: 'Delivered',
    link: null,
  },
  {
    id: 'confidential-real-estate-platforms',
    title: 'Real Estate Operations Apps',
    company: 'Confidential Property Client',
    description: 'Problem: property workflows were fragmented across manual steps. Action: built web apps for listing processes and internal management operations. Outcome: streamlined day-to-day operational tasks for business users.',
    tags: ['Laravel', 'PHP', 'JavaScript', 'SQL'],
    status: 'Delivered',
    link: null,
  },
  {
    id: 'confidential-clinical-training-platform',
    title: 'Clinical Training Platform',
    company: 'Confidential Healthcare Client',
    description: 'Problem: clinical education teams needed engaging digital training workflows. Action: developed web-based assessment and simulation-oriented learning modules. Outcome: delivered scalable training experiences for healthcare-focused programs.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    status: 'Delivered',
    link: null,
  },
  {
    id: 'personal-metropulse-app',
    title: 'MetroPulse App',
    company: 'Personal Project',
    description: 'Problem: riders need clearer and faster commute visibility. Action: built a personal real-time transit app powered by the WMATA public API for route status and arrival predictions. Outcome: delivered an accessible live tracker focused on daily rider decision-making.',
    tags: ['Next.js', 'TypeScript', 'WMATA Public API', 'Node.js'],
    status: 'Open Source',
    link: 'https://dc-transit-tracker.vercel.app/',
  },
]
