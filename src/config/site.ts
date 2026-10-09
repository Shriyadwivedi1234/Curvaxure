export const site = {
  name: 'Curvaxure',
  url: 'https://curvaxure.com', // update after domain purchase
  tagline: 'Data analytics and decision support for growing businesses',
  description:
    'Curvaxure connects your sales, marketing, financial, project and operational data into clear Power BI dashboards, then helps your team understand the insights and act on them.',
  contactEmail: 'hello@curvaxure.com', // placeholder until email is set up
  ctaLabel: 'Book a Free Data Assessment',
  ctaHref: '/book-consultation',
} as const;

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
] as const;

export const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  Industries: [
    { label: 'Construction', href: '/industries/construction-analytics' },
    { label: 'E-commerce', href: '/industries/ecommerce-analytics' },
    { label: 'Professional Services', href: '/industries/professional-services-analytics' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  ],
} as const;
