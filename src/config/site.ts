export const site = {
  name: 'Curvaxure',
  url: 'https://curvaxure.com', // update after domain purchase
  tagline: 'Data analytics and decision support for growing businesses',
  description:
    'Curvaxure connects sales, finance, project and operations data into Power BI dashboards, then helps growing teams decide where to focus.',
  contactEmail: 'hello@curvaxure.com', // placeholder until email is set up
  ctaLabel: 'Book a free data assessment',
  ctaHref: '/book-consultation',
} as const;

export const nav = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Sample decisions', href: '/#console' },
  { label: 'Plans', href: '/#plans' },
] as const;

export const footerLinks = {
  Explore: [
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Sample decisions', href: '/#console' },
    { label: 'Plans', href: '/#plans' },
  ],
  Industries: [
    {
      label: 'Construction',
      href: '/book-consultation?industry=construction&focus=control-project-costs&source=footer',
    },
    {
      label: 'E-commerce',
      href: '/book-consultation?industry=ecommerce&focus=improve-marketing&source=footer',
    },
    {
      label: 'Professional services',
      href: '/book-consultation?industry=professional-services&focus=improve-profitability&source=footer',
    },
  ],
  Contact: [
    { label: 'Book a consultation', href: '/book-consultation' },
    { label: 'Email us', href: 'mailto:hello@curvaxure.com' },
  ],
} as const;
