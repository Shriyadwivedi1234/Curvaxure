export const site = {
  name: 'Curvaxure',
  url: 'https://curvaxure.com',
  tagline: 'Shape your growth curve',
  description:
    'Curvaxure helps businesses understand and shape their growth curve through web presence, search visibility, marketing, data intelligence, and workflow automation.',
  contactEmail: 'hello@curvaxure.com',
  ctaLabel: 'Book a growth call',
  ctaHref: '/book-consultation',
} as const;

export const nav = [
  { label: 'Services', href: '/services', menu: 'services' },
  { label: 'Industries', href: '/industries', menu: 'industries' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Plans', href: '/#plans' },
] as const;

export const footerLinks = {
  Services: [
    { label: 'Digital Presence', href: '/services/digital-presence' },
    { label: 'Marketing & Growth', href: '/services/marketing-growth' },
    { label: 'Data & Intelligence', href: '/services/data-intelligence' },
    { label: 'Automation', href: '/services/automation' },
  ],
  Industries: [
    { label: 'Ecommerce', href: '/industries#ecommerce' },
    { label: 'Construction', href:  '/industries#construction' },
    { label: 'Professional services', href: '/industries#professional-services' },
    { label: 'Small brands', href:'/industries#small-brands' },
  ],
  Contact: [
    { label: 'Book a growth call', href: '/book-consultation' },
    { label: 'Email us', href: 'mailto:hello@curvaxure.com' },
  ],
} as const;

// Header dropdown content (desktop hover menu + mobile sub-links)
export const serviceMenu = [
  {
    label: 'Digital Presence',
    blurb: 'Get found on Google and in AI answers.',
    href: '/services/digital-presence',
    items: ['Websites', 'SEO', 'GEO', 'AEO'],
  },
  {
    label: 'Marketing & Growth',
    blurb: 'Position the brand and win customers.',
    href: '/services/marketing-growth',
    items: ['Digital Marketing & Brand Positioning', 'Social Media Handling', 'GTM Strategies'],
  },
  {
    label: 'Data & Intelligence',
    blurb: 'Turn scattered data into decisions.',
    href: '/services/data-intelligence',
    items: ['Data Engineered Pipelines', 'Customized CRM', 'Data Analytics'],
  },
  {
    label: 'Automation',
    blurb: 'Remove manual work with AI agents.',
    href: '/services/automation',
    items: ['WhatsApp, Email & LinkedIn Automation', 'AI SDR', 'AI Calling Agent'],
  },
] as const;

export const industryMenu = [
  { label: 'E-commerce & D2C', blurb: 'Channels, conversion and repeat revenue.', href: '/industries#ecommerce' },
  { label: 'Construction & Real Estate', blurb: 'Project costs, leads and site-to-office flow.', href: '/industries#construction' },
  { label: 'Professional Services & B2B', blurb: 'Pipeline, capacity and referrals.', href: '/industries#professional-services' },
  { label: 'Small Brands & Startups', blurb: 'Launch, presence and first customers.', href: '/industries#small-brands' },
  { label: 'Logistics & Supply Chain', blurb: 'Operations visibility and quoting speed.', href: '/industries#logistics' },
] as const;
