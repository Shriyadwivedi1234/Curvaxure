// Booking and form settings. Edit here; no secrets in this file.
export const booking = {
  callMinutes: 30,
  // Replace with your Cal.com booking link once the account exists.
  calUrl: 'https://cal.com/YOUR-USERNAME/discovery-call',
} as const;

export const industries = [
  { value: 'ecommerce', label: 'E-commerce & D2C' },
  { value: 'construction', label: 'Construction & Real Estate' },
  { value: 'professional-services', label: 'Professional Services & B2B' },
  { value: 'small-brands', label: 'Small Brands & Startups' },
  { value: 'logistics', label: 'Logistics & Supply Chain' },
  { value: 'other', label: 'Other Industry' },
] as const;

// Values match the growth console scenarios and main service categories
export const focusAreas = [
  { value: 'low-online-visibility', label: 'Search Visibility (SEO / GEO / AEO)' },
  { value: 'low-conversion-rate', label: 'Website & Conversion Rate (CRO)' },
  { value: 'poor-lead-quality', label: 'Marketing & Brand Positioning' },
  { value: 'manual-operations', label: 'Workflow & AI Automation (n8n / Zapier)' },
  { value: 'no-data-visibility', label: 'Custom CRM & Business Intelligence' },
  { value: 'stalled-growth', label: 'Comprehensive Growth Strategy' },
  { value: 'other', label: 'Something else' },
] as const;
