// Booking and form settings. Edit here; no secrets in this file.
export const booking = {
  callMinutes: 30,
  // Replace with your Cal.com booking link once the account exists.
  calUrl: 'https://cal.com/YOUR-USERNAME/discovery-call',
} as const;

export const industries = [
  { value: 'construction', label: 'Construction' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'professional-services', label: 'Professional services' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'other', label: 'Other' },
] as const;

// Values match the growth console scenarios, so the console can pre-select one.
export const focusAreas = [
  { value: 'increase-sales', label: 'Increase sales' },
  { value: 'improve-profitability', label: 'Improve profitability' },
  { value: 'control-project-costs', label: 'Control project costs' },
  { value: 'improve-marketing', label: 'Improve marketing' },
  { value: 'understand-customers', label: 'Understand customers' },
  { value: 'improve-operations', label: 'Improve operations' },
  { value: 'plan-future-growth', label: 'Plan future growth' },
  { value: 'other', label: 'Something else' },
] as const;
