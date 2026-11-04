/**
 * Central Configuration for TEVRAA TECHNOLOGIES
 * Update company information, services, projects, industries, and settings here.
 */

export const siteConfig = {
  company: {
    name: 'TEVRAA TECHNOLOGIES',
    legalName: 'Tevraa Technologies Pvt. Ltd.',
    glyph: 'T.',
    tagline: 'Technology that moves you forward.',
    logo: {
      symbol: '/tevraa-symbol.png',
      full: '/tevraa-logo-dark.png'
    },
    eyebrow: 'INDEPENDENT DIGITAL & SOFTWARE ENGINEERING STUDIO',
    heroHeadline: 'WE ENGINEER THE FUTURE.',
    heroSubheading:
      'From high-performance web applications and mobile platforms to bespoke enterprise software, we build digital products that drive real commercial impact.',
    description:
      'Tevraa Technologies is a digital engineering studio partnering with ambitious businesses to build scalable web platforms, high-speed mobile apps, and robust software architectures — while empowering the next generation of engineers through hands-on internship programs.',
    email: 'info@tevraatechnologies.com',
    secondaryEmail: 'prathamatigre@tevraatechnologies.com',
    phone: '+91 85299 18181',
    address: 'F-45, Hingane Home colony, Karvenagar, Pune 411052',
    operatingStatus: 'OPERATIONAL — PUNE • GLOBAL REMOTE',
    establishedYear: 2024,
    socials: [
      { name: 'X / Twitter', url: 'https://x.com/Tevraa_Tech/status/2117693356990247320?s=20' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7523456076231503872' },
      { name: 'Instagram', url: 'https://www.instagram.com/tevraa_technologies?exln=MWtuZzZmZWw1d3Bldw%3D%3D' },
      { name: 'Facebook', url: 'https://www.facebook.com/people/Tevraa-Technologies/61596233580108/' }
    ]
  },

  // Contact integration config
  contact: {
    recipientEmail: 'info@tevraatechnologies.com',
    secondaryEmail: 'prathamatigre@tevraatechnologies.com',
    // Set an API endpoint URL (e.g. '/api/contact' or 'https://api.yourcompany.com/v1/inquiries')
    // If empty or null, the form gracefully falls back to generating a pre-filled mailto: link.
    apiEndpoint: '',
    budgetOptions: [
      'Internship Applicant / Student',
      '< $25,000',
      '$25,000 – $50,000',
      '$50,000 – $100,000',
      '$100,000 – $250,000',
      '$250,000+'
    ]
  },

  // Editable benchmark metrics (Sample / Illustrative)
  stats: [
    {
      value: '99.98%',
      label: 'Production SLA',
      detail: 'Fault-tolerant distributed cloud architecture'
    },
    {
      value: '50+',
      label: 'Digital Deployments',
      detail: 'Enterprise web, mobile & SaaS platforms'
    },
    {
      value: '< 0.8s',
      label: 'Median Load Time',
      detail: 'Sub-second Core Web Vitals & edge delivery'
    },
    {
      value: '120+',
      label: 'Interns Mentored',
      detail: 'Real-world engineering mentorship & career launchpad'
    }
  ],

  // Comprehensive service offerings
  services: [
    {
      id: 'web-dev',
      number: '01',
      title: 'Website & Web App Development',
      badge: 'FRONTEND & FULLSTACK',
      summary:
        'High-performance web applications and bespoke digital platforms engineered for conversion, speed, and seamless user experiences.',
      outcome:
        'Deliver lightning-fast, high-converting digital storefronts and web software that scale effortlessly without performance degradation.',
      tags: ['Next.js & React', 'High-Speed Web Platforms', 'E-Commerce Engines', 'Design Systems', 'Microfrontends'],
      deliverables: [
        'Production-grade SSR/SSG web application',
        'Headless CMS or bespoke backend integration',
        'Sub-second Core Web Vitals optimization',
        'Accessibility compliance (WCAG 2.1 AA)'
      ]
    },
    {
      id: 'custom-software',
      number: '02',
      title: 'Custom Software & SaaS Development',
      badge: 'ENTERPRISE ARCHITECTURE',
      summary:
        'Bespoke digital platforms, multi-tenant SaaS products, and resilient backend systems built to withstand rapid enterprise growth.',
      outcome:
        'Modernize legacy systems into high-margin SaaS products with modular codebases that your internal teams can maintain with pride.',
      tags: ['Multi-Tenant SaaS', 'Microservices', 'FastAPI & Node.js', 'Distributed Systems', 'PostgreSQL & Redis'],
      deliverables: [
        'Scalable cloud architecture with automated scaling',
        'Robust multi-tenant authorization & RBAC',
        'Comprehensive REST & GraphQL API specifications',
        'Automated CI/CD pipelines with zero-downtime deployment'
      ]
    },
    {
      id: 'mobile-apps',
      number: '03',
      title: 'Android & iOS Application Development',
      badge: 'MOBILE ENGINEERING',
      summary:
        'Native and cross-platform mobile experiences crafted with fluid 120Hz responsiveness and offline-first capabilities.',
      outcome:
        'Give your customers and workforce high-velocity mobile tools that work seamlessly anywhere, online or offline.',
      tags: ['React Native & Flutter', 'Native iOS (Swift)', 'Native Android (Kotlin)', 'Offline-First Sync', 'Biometric Security'],
      deliverables: [
        'Cross-platform iOS and Android production builds',
        'App Store and Google Play compliance and submission',
        'Push notification infrastructure and deep linking',
        'Offline local database synchronization'
      ]
    },
    {
      id: 'ui-ux-design',
      number: '04',
      title: 'UI/UX & Digital Product Design',
      badge: 'EXPERIENCE DESIGN',
      summary:
        'User research, high-fidelity wireframing, design systems, and interactive micro-interactions designed to convert and delight users.',
      outcome:
        'Transform complex product workflows into clear, frictionless digital journeys that increase retention and product adoption.',
      tags: ['Figma Design Systems', 'User Journey Mapping', 'Interactive Prototyping', 'Design Tokens', 'Usability Testing'],
      deliverables: [
        'Complete Figma design library & design tokens',
        'Clickable interactive prototypes',
        'User flow diagrams and information architecture',
        'Developer handoff documentation with component specs'
      ]
    },
    {
      id: 'cloud-devops',
      number: '05',
      title: 'Cloud Infrastructure & DevOps',
      badge: 'DATA INFRASTRUCTURE',
      summary:
        'Hardened cloud infrastructure across AWS, Azure, and Google Cloud with automated CI/CD pipelines, containerization, and monitoring.',
      outcome:
        'Achieve 99.98% uptime, eliminate deployment failures, and effortlessly scale compute capacity with zero manual overhead.',
      tags: ['AWS & Azure Cloud', 'Docker & Kubernetes', 'Terraform (IaC)', 'CI/CD Automation', 'Prometheus & Grafana'],
      deliverables: [
        'Terraform Infrastructure-as-Code blueprints',
        'Automated zero-downtime CI/CD deployment pipelines',
        'Real-time telemetry and monitoring (Prometheus/Grafana)',
        'SOC2 and GDPR-aligned cloud security configuration'
      ]
    },
    {
      id: 'automation-api',
      number: '06',
      title: 'Workflow Automation & API Integration',
      badge: 'SYSTEM INTEGRATION',
      summary:
        'End-to-end business process digitization that links your ERP, CRM, payment gateways, and third-party tools into a unified flow.',
      outcome:
        'Eliminate repetitive manual data entry, reduce human error to near-zero, and unlock instant operational synchronization.',
      tags: ['API Integration', 'ERP & CRM Bridges', 'Webhook Architecture', 'Event-Driven Queues', 'Legacy Modernization'],
      deliverables: [
        'Automated end-to-end integration pipelines',
        'Real-time webhook handlers with retry queues',
        'Legacy database ETL & synchronization',
        'Auditing dashboard for operational transactions'
      ]
    },
    {
      id: 'ecommerce',
      number: '07',
      title: 'Headless E-Commerce & Storefronts',
      badge: 'DIGITAL COMMERCE',
      summary:
        'Next-generation headless commerce solutions with instant sub-second checkout, global payment gateways, and omnichannel inventory management.',
      outcome:
        'Boost conversion rates and handle massive flash-sale traffic surges with zero slowdown or downtime.',
      tags: ['Shopify Plus Headless', 'Stripe Payments', 'Next.js Commerce', 'Cart Optimization', 'Omnichannel Sync'],
      deliverables: [
        'Custom headless storefront with edge caching',
        'Global multi-currency checkout & payment gateways',
        'Inventory & warehouse management integrations',
        'Advanced conversion tracking & analytics setup'
      ]
    },
    {
      id: 'consulting',
      number: '08',
      title: 'Technology Consulting & Architecture',
      badge: 'STRATEGIC ADVISORY',
      summary:
        'Senior technical guidance, fractional CTO advisory, architectural audits, and strategic roadmapping from discovery to IPO.',
      outcome:
        'Avoid multi-million dollar architectural mistakes, de-risk technology investments, and accelerate roadmap velocity.',
      tags: ['Fractional CTO', 'Architecture Audits', 'Vendor Feasibility', 'Security Assessment', 'Due Diligence'],
      deliverables: [
        'Comprehensive technical architecture specification',
        'System security and performance audit reports',
        'Multi-quarter technology roadmap and resource plan',
        'Vendor evaluation and stack selection matrix'
      ]
    },
    {
      id: 'internship-program',
      number: '09',
      title: 'Engineering Internship & Mentorship',
      badge: 'CAREERS & TALENT',
      summary:
        'Hands-on internship programs for aspiring engineers and designers. Gain real experience on live production applications with senior guidance.',
      outcome:
        'Accelerate your career trajectory by working on real client codebases, receiving daily code reviews, and building a standout engineering portfolio.',
      tags: ['Frontend & React', 'Backend & Node.js', 'Mobile Development', 'UI/UX Design', '1-on-1 Mentorship'],
      deliverables: [
        'Hands-on contributions to real production codebases',
        'Daily senior developer mentorship and code reviews',
        'Official certificate of completion & verified recommendation',
        'Pre-Placement Offer (PPO) opportunities for top performers'
      ]
    }
  ],

  // Illustrative sample projects / case studies (Clearly marked as illustrative)
  projects: [
    {
      id: 'nexus-commerce',
      title: 'Nexus Commerce Engine',
      client: 'Illustrative Retail Brand',
      category: 'Web & SaaS',
      tagline: 'Ultra-High Velocity Headless E-Commerce Platform',
      description:
        'A bespoke headless commerce architecture supporting multi-currency global transactions with sub-second page transitions and custom product visualizer.',
      challenge:
        'A legacy monolithic storefront suffered severe slow-downs during flash sales, causing high cart abandonment and lost revenue.',
      solution:
        'Rebuilt from the ground up on Next.js edge runtime with a distributed microservices backend, localized CDN caching, and an instant checkout pipeline.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'Stripe API', 'GraphQL', 'AWS CloudFront'],
      impactMetrics: [
        { label: 'Page Load Speed', value: '0.4s' },
        { label: 'Peak Concurrency', value: '50k RPS' },
        { label: 'Illustrative Note', value: 'Sample Case Study' }
      ]
    },
    {
      id: 'aegis-portal',
      title: 'Aegis Enterprise Portal',
      client: 'Illustrative Enterprise Client',
      category: 'Enterprise Systems',
      tagline: 'Unified Customer Service & Operations Platform',
      description:
        'An enterprise-grade customer operations and support platform that streamlines tier-2 technical triage, SLA tracking, and multi-department communication.',
      challenge:
        'The organization faced surging customer support volumes with ticket resolution times exceeding 48 hours across disconnected internal tools.',
      solution:
        'Designed a high-throughput unified portal with real-time WebSocket feeds, automated assignment queues, and custom integrations into internal databases.',
      technologies: ['React', 'Python FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
      impactMetrics: [
        { label: 'Resolution Speed', value: '3.5x Faster' },
        { label: 'Avg Triage Latency', value: '1.2s' },
        { label: 'Illustrative Note', value: 'Sample Case Study' }
      ]
    },
    {
      id: 'synthex-health',
      title: 'Synthex Clinical Portal',
      client: 'Illustrative Healthcare Network',
      category: 'Web & SaaS',
      tagline: 'HIPAA-Compliant Clinical Protocols & Records Platform',
      description:
        'A secure, zero-data-retention clinical records portal enabling medical researchers and clinicians to quickly search protocol guidelines and drug interactions.',
      challenge:
        'Clinicians spent up to 15 hours weekly searching through unindexed medical trial documents to verify rare drug interaction protocols.',
      solution:
        'Engineered an encrypted, high-speed document search and protocol management interface with verified citation grounding and strict access auditing.',
      technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'FastAPI', 'Docker', 'AWS KMS'],
      impactMetrics: [
        { label: 'Protocol Retrieval', value: '< 1.8s' },
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'Illustrative Note', value: 'Sample Case Study' }
      ]
    },
    {
      id: 'omnilogix-fleet',
      title: 'OmniLogix Supply Chain',
      client: 'Illustrative Logistics Operator',
      category: 'Enterprise Systems',
      tagline: 'Real-Time Multimodal Logistics & IoT Fleet Telemetry',
      description:
        'A centralized command portal tracking 12,000+ multimodal freight units in real time with automated route calculation and delay notification.',
      challenge:
        'Fragmented vendor GPS systems and port delays caused unpredictable freight scheduling and expensive demurrage penalties.',
      solution:
        'Built an event-driven telemetry ingest pipeline utilizing Apache Kafka and WebSockets, rendering live fleet geo-positions and automated delay alerts.',
      technologies: ['React', 'Node.js', 'Kafka', 'PostgreSQL', 'Mapbox GL', 'AWS ECS'],
      impactMetrics: [
        { label: 'Real-Time Telemetry', value: '12k units' },
        { label: 'Delay Warning Notice', value: '6h ahead' },
        { label: 'Illustrative Note', value: 'Sample Case Study' }
      ]
    },
    {
      id: 'krypton-finance',
      title: 'Krypton Payment Engine',
      client: 'Illustrative Fintech Institution',
      category: 'Web & SaaS',
      tagline: 'High-Throughput Financial Ledger & Instant Payments',
      description:
        'A resilient banking transaction pipeline scanning millions of ledger events per day with real-time audit logging and sub-millisecond reconciliation.',
      challenge:
        'Legacy transaction batch jobs resulted in multi-hour settlement delays and expensive operational overhead during high-volume market hours.',
      solution:
        'Engineered an in-memory transactional processing engine with distributed consensus, idempotent payment processing, and bank-grade encryption.',
      technologies: ['Go', 'TypeScript', 'FastAPI', 'Redis Cluster', 'Kubernetes', 'PostgreSQL'],
      impactMetrics: [
        { label: 'Settlement Latency', value: '18ms' },
        { label: 'Processing Reliability', value: '99.999%' },
        { label: 'Illustrative Note', value: 'Sample Case Study' }
      ]
    },
    {
      id: 'aura-automation',
      title: 'Aura Industrial Mobile App',
      client: 'Illustrative Manufacturing Conglomerate',
      category: 'Mobile Apps',
      tagline: 'Factory Floor Tablet App & Real-Time Sync',
      description:
        'A unified digital operating layer that connects on-premise ERP mainframes with ruggedized tablet devices used by factory technicians.',
      challenge:
        'Shop floor technicians relied on paper forms and end-of-shift desktop data re-entry, delaying inventory tracking by up to 24 hours.',
      solution:
        'Created a bidirectional offline-first tablet app offering barcode scanning, digital work orders, and instant synchronization with central databases.',
      technologies: ['React Native', 'Node.js', 'Express', 'SQL Server', 'Azure Cloud'],
      impactMetrics: [
        { label: 'Data Lag Reduction', value: '24h -> 0s' },
        { label: 'Floor Adoption', value: '100%' },
        { label: 'Illustrative Note', value: 'Sample Case Study' }
      ]
    }
  ],

  // Industries served
  industries: [
    {
      id: 'healthcare',
      number: '01',
      title: 'Healthcare & Life Sciences',
      description:
        'HIPAA-ready clinical portals, patient management applications, medical data dashboards, and laboratory automation workflows.',
      useCase: 'Clinical protocol search, automated patient intake, EHR/EMR interoperability.'
    },
    {
      id: 'finance',
      number: '02',
      title: 'Finance & Fintech',
      description:
        'High-security payment infrastructure, digital banking portals, automated compliance logging, and wealth management tools.',
      useCase: 'Real-time transaction settlement, automated regulatory reporting, secure client dashboards.'
    },
    {
      id: 'manufacturing',
      number: '03',
      title: 'Manufacturing & Industry 4.0',
      description:
        'Shop floor tablet apps, IoT sensor telemetry, inventory reconciliation, and plant operations software.',
      useCase: 'Equipment tracking, shop floor digital work orders, supply chain visibility.'
    },
    {
      id: 'retail',
      number: '04',
      title: 'Retail & E-Commerce',
      description:
        'High-converting headless storefronts, smart catalog management, dynamic pricing systems, and omnichannel synchronization.',
      useCase: 'Sub-second checkout experiences, responsive design systems, automated catalog enrichment.'
    },
    {
      id: 'logistics',
      number: '05',
      title: 'Logistics & Supply Chain',
      description:
        'Fleet tracking portals, automated dispatching, warehouse management platforms, and real-time cargo status notifications.',
      useCase: 'Dynamic route mapping, automated bill-of-lading processing, ETA prediction.'
    },
    {
      id: 'education',
      number: '06',
      title: 'Education & EdTech',
      description:
        'Interactive learning management platforms, student progress analytics, automated grading workflows, and campus portals.',
      useCase: 'Interactive learning interfaces, LMS integrations, course delivery platforms.'
    },
    {
      id: 'real-estate',
      number: '07',
      title: 'Real Estate & PropTech',
      description:
        'Property listing portals, tenant management ecosystems, digital lease agreements, and maintenance workflow dispatch.',
      useCase: 'Market trend analytics, automated lease processing, maintenance ticket tracking.'
    },
    {
      id: 'agriculture',
      number: '08',
      title: 'Agriculture & AgriTech',
      description:
        'Field sensor telemetry dashboards, crop monitoring software, automated yield reporting, and farm resource planning.',
      useCase: 'Irrigation scheduling dashboards, soil sensor telemetry, supply chain traceability.'
    }
  ],

  // Core differentiators / Why choose us
  differentiators: [
    {
      number: '01',
      title: 'Software Engineering Rigor',
      description:
        'We do not build fragile prototypes or throwaway code. Every architecture is designed for fault tolerance, enterprise maintainability, and clean code standards.'
    },
    {
      number: '02',
      title: 'Craftsmanship & Quality',
      description:
        'Every pixel, API endpoint, and database query is crafted with care. We deliver performant, modular systems that scale seamlessly without technical debt.'
    },
    {
      number: '03',
      title: 'Commercial & Business Understanding',
      description:
        'We speak the language of founders and corporate leaders. We align technical design with your unit economics, go-to-market speed, and compliance goals.'
    },
    {
      number: '04',
      title: 'Modern, High-Velocity Stack',
      description:
        'From Next.js and React to Node.js, Python, and distributed cloud systems, we leverage proven, future-proof technologies with zero vendor lock-in.'
    },
    {
      number: '05',
      title: 'Bespoke Brand & Digital Design',
      description:
        'We reject generic templates. We craft tailored, distinctive visual identities that position your business as an international authority.'
    },
    {
      number: '06',
      title: 'Internship & Talent Incubator',
      description:
        'We invest in the future of engineering. We run structured internship programs that train emerging talent on real codebases alongside senior architects.'
    }
  ],

  // The 4-stage engineering process
  process: [
    {
      step: '01',
      title: 'Discover & Deconstruct',
      subtitle: 'Clarify objectives, users & constraints',
      description:
        'We audit your current tech stack, interview key stakeholders, map out workflow friction points, and define non-negotiable success metrics.',
      milestones: ['Technical Feasibility Audit', 'Architecture Strategy Document', 'Scoping & Sprint Roadmap']
    },
    {
      step: '02',
      title: 'Architect & Strategize',
      subtitle: 'Precision blueprinting before code',
      description:
        'We establish the system architecture, database schemas, API contracts, UI/UX wireframes, and design the complete end-user journeys.',
      milestones: ['Data Models & Schema Design', 'API Specification & Contracts', 'High-Fidelity Wireframes']
    },
    {
      step: '03',
      title: 'Build & Iterate',
      subtitle: 'Sprint-based engineering with continuous CI/CD',
      description:
        'Modular, test-driven development in bi-weekly sprint cycles. You test real, working builds regularly with complete transparency.',
      milestones: ['Bi-Weekly Production Previews', 'Automated Unit & End-to-End Tests', 'Security & Load Validation']
    },
    {
      step: '04',
      title: 'Launch & Scale',
      subtitle: 'Zero-downtime release & ongoing telemetry',
      description:
        'Production rollout with continuous telemetry, error tracking, infrastructure scaling rules, and dedicated post-launch support.',
      milestones: ['Production Cloud Deployment', 'Comprehensive Telemetry Dashboard', 'Team Training & Handover']
    }
  ],

  // Technology Stack categorized
  techStack: {
    frontend: [
      { name: 'React', desc: 'Component Architecture' },
      { name: 'Next.js', desc: 'SSR & Edge Performance' },
      { name: 'TypeScript', desc: 'Type Safety & Scale' },
      { name: 'JavaScript', desc: 'Core Web Standards' },
      { name: 'Vite', desc: 'Ultra-Fast Tooling' },
      { name: 'Tailwind CSS', desc: 'Utility Design System' }
    ],
    mobile: [
      { name: 'React Native', desc: 'Cross-Platform iOS & Android' },
      { name: 'Flutter', desc: 'High-Performance UI Engine' },
      { name: 'Swift', desc: 'Native iOS Engineering' },
      { name: 'Kotlin', desc: 'Native Android Engineering' },
      { name: 'Expo', desc: 'Rapid Mobile Deployment' },
      { name: 'SQLite', desc: 'Offline-First Storage' }
    ],
    backend: [
      { name: 'Node.js', desc: 'High-Concurrency Backends' },
      { name: 'Python', desc: 'APIs & Microservices' },
      { name: 'FastAPI', desc: 'High-Speed Async Python APIs' },
      { name: 'Express', desc: 'Lightweight REST APIs' },
      { name: 'Go', desc: 'High-Throughput Systems' },
      { name: 'GraphQL', desc: 'Flexible Query Layer' }
    ],
    cloudAndDevOps: [
      { name: 'Docker', desc: 'Containerization Standard' },
      { name: 'AWS Cloud', desc: 'Enterprise Cloud Infrastructure' },
      { name: 'Azure Cloud', desc: 'Enterprise Cloud & Hybrid' },
      { name: 'Kubernetes', desc: 'Cluster Orchestration' },
      { name: 'PostgreSQL', desc: 'Robust Relational Database' },
      { name: 'Redis', desc: 'In-Memory Cache & Queues' }
    ]
  }
};
