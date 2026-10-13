// Pure content derived strictly from:
// - Petrofeed Website requirements.docx
// - letterpad.docx
// - Businesscard.pptx

export const COMPANY = {
  name: 'PetroFeed',
  legalNameShort: 'Petrofeed Engineering & Consultancy Services Ltd',
  legalNameFull: 'PetroFeed Engineering and Consultancy private limited',
  tagline: 'Engineering, Advisory & Asset Management',
  summary:
    'We provide a wide range of consulting, optimized solutions and advisory services. Our integrated offerings cover full asset management services, design and engineering, procurement and project management capability.',
  deliveryPromise:
    'We deliver solutions with high business value, safe-economic and easy deployment.',
  differentiator:
    'Our team brings deep technical knowledge and insights across every engagement, creating clear differentiation in the market.',
  domain: 'petrofeed.net',
  website: 'https://www.petrofeed.net',
  contact: {
    email: 'info@petrofeed.net',
    phoneDisplay: '+91 95663 30696',
    phoneTel: '+919566330696',
    whatsappUrl: 'https://wa.me/919566330696',
    indiaOffice: {
      title: 'India Office & Operations',
      address:
        'Flat No A117, A-Block, 11th Floor, Old No 13, New No 4, CTH Road, Padi, Chennai - 600049',
    },
  },
  vision: {
    title: 'Our Vision',
    statement:
      'Zero environmental incidents and accidents. Zero Harm to people and assets.',
  },
  values: {
    title: 'Our Values',
    narrative:
      'Our efforts to create our values and behaviors took time. Our people were asked to share their thoughts and to speak from the heart, to tell their story of our new company values and behaviors.',
    commitment:
      "Tailored solutions to meet our customers' needs from the smallest advisory assignment to the entire project lifecycle.",
  },
  regions: [
    {
      country: 'India',
      code: 'IN',
      hub: 'Engineering & Operations',
      address:
        'Flat No A117, A-Block, 11th Floor, Old No 13, New No 4, CTH Road, Padi, Chennai - 600049',
      phones: [
        { display: '+91 95663 30696', tel: '+919566330696' },
      ],
    },
    { country: 'Oman', code: 'OM', hub: 'Middle East Advisory' },
    { country: 'Qatar', code: 'QA', hub: 'Regional Lead Office' },
    { country: 'UAE', code: 'AE', hub: 'Gulf Projects' },
    { country: 'Singapore', code: 'SG', hub: 'Asia-Pacific Hub' },
  ],
  associate: {
    name: 'StrucTech',
    role: 'Associate Company',
    website: 'https://www.strutechconsultancy.com',
    displayUrl: 'strutechconsultancy.com',
    description:
      'Collaborative engineering partner delivering specialized structural and multi-disciplinary solutions across shared markets.',
  },
}

export const MARKETS = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description:
      'Upstream, midstream, and downstream asset engineering, facility advisory, and lifecycle integrity management.',
    icon: 'Flame',
    tag: 'Core Sector',
  },
  {
    id: 'refinery-petrochemicals',
    name: 'Refinery & Petrochemicals',
    description:
      'Unit optimization, debottlenecking, revamps, and deep technical consulting for high-complexity processing units.',
    icon: 'Factory',
    tag: 'Processing',
  },
  {
    id: 'energy-utilities',
    name: 'Energy & Utilities',
    description:
      'Power generation, distribution infrastructure, utility balance, and comprehensive energy optimization schemes.',
    icon: 'Zap',
    tag: 'Infrastructure',
  },
  {
    id: 'chemical-fertilizers',
    name: 'Chemical & Fertilizers',
    description:
      'Specialized chemical process synthesis, safety integration, and economic facility design.',
    icon: 'FlaskConical',
    tag: 'Industrial',
  },
  {
    id: 'pipeline-infrastructure',
    name: 'Pipeline & Infrastructure',
    description:
      'Transmission network engineering, hydraulic modeling, corridor integrity, and civil-structural oversight.',
    icon: 'GitCommitHorizontal',
    tag: 'Networks',
  },
  {
    id: 'pharma-biopharma',
    name: 'Pharmaceuticals & Biopharma',
    description:
      'Clean process utilities, regulatory-aligned engineering, containment reviews, and facility scale-up.',
    icon: 'HeartPulse',
    tag: 'Life Sciences',
  },
  {
    id: 'food-agro',
    name: 'Food, Beverage & Agro',
    description:
      'Hygienic process design, utility efficiency, water recovery, and sustainable agro-processing facilities.',
    icon: 'Wheat',
    tag: 'Agro & Food',
  },
]

export const CORE_SERVICES = [
  {
    id: 'consultancy',
    number: '01',
    title: 'Consultancy',
    short: 'Strategic and technical advisory across asset life cycles.',
    bullets: [
      'Concept and feasibility evaluation',
      'Technology selection and advisory',
      'Due diligence and independent reviews',
    ],
  },
  {
    id: 'design-engineering',
    number: '02',
    title: 'Design and Engineering',
    short: 'Multidisciplinary engineering from FEED through detailed design.',
    bullets: [
      'Conceptual, FEED & detailed engineering',
      'Process, mechanical, piping & instrumentation',
      'Equipment specifications & datasheets',
    ],
  },
  {
    id: 'project-management',
    number: '03',
    title: 'Project Management',
    short: 'End-to-end governance ensuring schedule, cost, and safety benchmarks.',
    bullets: [
      'Schedule control & progress monitoring',
      'Interface and stakeholder coordination',
      'Quality assurance & risk mitigation',
    ],
  },
  {
    id: 'procurement',
    number: '04',
    title: 'Procurement',
    short: 'Strategic sourcing and vendor surveillance for mission-critical packages.',
    bullets: [
      'Vendor evaluation and technical bid analysis',
      'Expediting and inspection oversight',
      'Package management & FAT attendance',
    ],
  },
  {
    id: 'construction-management',
    number: '05',
    title: 'Construction Management',
    short: 'Constructability, field supervision, and handover coordination.',
    bullets: [
      'Constructability reviews during design',
      'Field engineering & QA/QC oversight',
      'Pre-commissioning and handover support',
    ],
  },
]

export const SPECIAL_SERVICES = [
  {
    id: 'energy-opt',
    title: 'Energy Optimization Solutions',
    category: 'Optimization',
    desc: 'Thermal balance, waste heat recovery, and utility pinch analysis.',
  },
  {
    id: 'process-opt',
    title: 'Process Optimization Solutions',
    category: 'Optimization',
    desc: 'Throughput maximization, yield improvement, and operational debottlenecking.',
  },
  {
    id: 'troubleshooting',
    title: 'Onsite Troubleshooting',
    category: 'Field Advisory',
    desc: 'Root-cause diagnosis of operating bottlenecks, vibration, and flow issues.',
  },
  {
    id: 'safety-studies',
    title: 'Safety Studies',
    category: 'HSE & Risk',
    desc: 'Comprehensive process safety diagnostics, QRA, and asset hazard assessments.',
  },
  {
    id: 'safety-trainings',
    title: 'Safety Trainings',
    category: 'HSE & Risk',
    desc: 'Targeted workforce and leadership safety capability programs.',
  },
  {
    id: 'facilitations',
    title: 'Facilitations (HAZOP, SIL, Design Review)',
    category: 'HSE & Risk',
    desc: 'Independent facilitation of HAZOP, SIL determination/verification, and formal design reviews.',
  },
  {
    id: 'cost-control',
    title: 'Cost Control Services',
    category: 'Governance',
    desc: 'CAPEX/OPEX benchmarking, value engineering, and lifecycle cost tracking.',
  },
  {
    id: 'modeling-analytics',
    title: 'Process Modeling, Simulations & Data Analytics',
    category: 'Digital Engineering',
    desc: 'Rigorous steady-state and dynamic simulations paired with operational data analysis.',
  },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Markets', href: '#markets' },
  { label: 'Services', href: '#services' },
  { label: 'Values', href: '#values' },
  { label: 'Presence', href: '#presence' },
]
