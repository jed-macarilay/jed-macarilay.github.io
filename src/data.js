export const personal = {
  name: 'Jedmark Macarilay',
  title: 'Full-Stack Developer',
  tagline: '8 years shipping scalable web apps across fintech, banking, industrial, and branding.',
  email: 'jed.macarilay@gmail.com',
  phone: '09507475414',
  location: 'Philippines',
  linkedin: 'https://www.linkedin.com/in/jedmark-macarilay/',
  github: 'https://github.com/', // TODO: update with your real GitHub username
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
    title: 'Scan2Win GCash Miniprogram App',
    company: 'CognitiveAI',
    description: 'Served as main developer and single-handedly built the full MVP of Scan2Win, a Miniprogram app running on the GCash platform. Independently handled architecture, development, and delivery as a third-party partner.',
    tags: ['React', 'TypeScript', 'Miniprogram', 'AWS S3', 'CloudFront'],
    status: 'In Production',
    link: "https://gcashapp.page.link/?link=https://gcash.splashscreen/?redirect%3Dgcash%3A%2F%2Fcom.mynt.gcash%2Fapp%2F006300121300%3FappId%3D2170020233750696%2526page%253Dpages%252Finitial%252Finitial&apn=com.globe.gcash.android&isi=520020791&ibi=com.globetel.gcash",
  },
  {
    title: 'CMS Platforms for Branding Clients',
    company: 'CognitiveAI',
    description: 'Managing and maintaining CMS dashboards for branding clients, handling content architecture, custom features, and ongoing updates.',
    tags: ['CMS', 'React', 'TypeScript'],
    status: 'In Production',
    link: null,
  },
  {
    title: 'Maritime Logistics Platform',
    company: 'Diversified Robotics',
    description: 'Served as main full-stack developer independently handling both frontend and backend development end-to-end for a maritime operations management platform.',
    tags: ['Vue.js', 'React', 'Laravel', 'Node.js'],
    status: 'In Production',
    link: null,
    images: [
      '/images/maritime-dashboard.png',
      '/images/maritime-terminals.png',
      '/images/maritime-ships.png',
    ],
  },
  {
    title: 'Real-Time Transit Information System',
    company: 'Diversified Robotics',
    description: 'One of the main developers on the Real-Time Transit Information System for the Washington Metropolitan Area Transit Authority (WMATA), contributing across multiple versions. Built real-time APIs, commuter dashboards, and route tracking using Next.js, Node.js, and Azure Functions.',
    tags: ['Next.js', 'Node.js', 'Azure Functions', 'TypeScript'],
    status: 'In Production',
    link: null,
    images: [
      '/images/wmata-rail.png',
      '/images/wmata-bus.png',
      '/images/wmata-map.png',
    ],
  },
  {
    title: 'Banking Loan & Insurance Apps',
    company: 'Questronix Corporation',
    description: 'Sole frontend developer assigned to a banking client, maintaining multiple loan and insurance web applications and the bank\'s public-facing website. Also acted as the main point of contact for client concerns.',
    tags: ['Vue 3', 'TypeScript', 'Banking'],
    status: 'Delivered',
    link: null,
  },
  {
    title: 'Multi-Client Web Projects + CMS',
    company: 'Mobext Philippines',
    description: 'Main developer and maintainer across multiple client projects simultaneously handling both frontend and backend. Also built a CMS application for managing content across client platforms.',
    tags: ['Laravel', 'Vue.js', 'CMS', 'PHP'],
    status: 'Delivered',
    link: null,
  },
  {
    title: 'Real Estate Web Applications',
    company: 'Jarvis Butler Property Management',
    description: 'Built multiple web applications to support real estate operations including a property selling and leasing platform, a tenant management system, and other internal tools.',
    tags: ['Laravel', 'PHP', 'JavaScript', 'SQL'],
    status: 'Delivered',
    link: null,
  },
  {
    title: 'Clinical Training & Gamulation Platform',
    company: 'Redmer Productions',
    description: 'Built web-based clinical training tools, gamified simulations, assessment and certification programs, and virtual clinical environments for healthcare education.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    status: 'Delivered',
    link: null,
  },
  {
    title: 'Simulation Platform',
    company: 'QAIROS',
    description: 'Designed and maintained a modular simulation platform with a flexible backend architecture. Integrated Drupal CMS to enable non-technical teams to manage content independently.',
    tags: ['Vue.js', 'Node.js', 'Drupal'],
    status: 'Delivered',
    link: null,
  },
  // Uncomment and fill in as you build personal projects:
  // {
  //   title: 'My Component Library',
  //   company: 'Personal',
  //   description: 'A collection of reusable Vue 3 / React components.',
  //   tags: ['Vue 3', 'React', 'TypeScript'],
  //   status: 'Open Source',
  //   link: 'https://github.com/yourhandle/your-repo',
  // },
]
