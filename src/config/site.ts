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
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
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
    { label: 'Ecommerce', href: '/book-consultation?industry=ecommerce&source=footer' },
    { label: 'Construction', href: '/book-consultation?industry=construction&source=footer' },
    { label: 'Professional services', href: '/book-consultation?industry=professional-services&source=footer' },
    { label: 'Small brands', href: '/book-consultation?industry=small-brands&source=footer' },
  ],
  Contact: [
    { label: 'Book a growth call', href: '/book-consultation' },
    { label: 'Email us', href: 'mailto:hello@curvaxure.com' },
  ],
} as const;
