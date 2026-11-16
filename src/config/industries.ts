// Content for /industries and /industries/[slug]. Edit text here; the page layout is shared.
export type Industry = {
  slug: string;
  name: string;
  short: string;
  audience: string[];
  question: string;
  summary: string;
  hero: { title: string; highlight: string; description: string };
  pains: { t: string; d: string }[];
  gap: { service: string; href: string; without: string; withUs: string }[];
  funnel: { stage: string; d: string }[];
  metrics: { name: string; why: string }[];
  advantages: { t: string; d: string }[];
  start: { title: string; items: string[] };
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: 'construction',
    name: 'Construction',
    short: 'Builders, contractors, interior and renovation firms, developers.',
    audience: ['Builders & contractors', 'Interior & renovation firms', 'Real estate developers', 'Architecture & design studios'],
    question: 'Where is your margin slipping, and where are your leads going?',
    summary: 'Construction runs on trust, timing and cost control. Enquiries arrive on calls and WhatsApp, project data lives in notebooks and sheets, and problems surface when it is already expensive.',
    hero: {
      title: 'Win more projects.',
      highlight: 'Keep every rupee visible.',
      description: 'From the first enquiry to the final handover, we connect your website, marketing, lead follow-up and project numbers into one clear system.',
    },
    pains: [
      { t: 'Leads depend on referrals', d: 'When referrals slow down, so does the pipeline, and you have no other steady source to lean on.' },
      { t: 'Enquiries go cold', d: 'A call or WhatsApp message is not followed up in time, and the client signs with whoever replied first.' },
      { t: 'No proof online', d: 'Buyers search Google and Instagram before they call. If your finished projects are not easy to see, they assume you have none.' },
      { t: 'Costs surface too late', d: 'Material, labour and site costs sit in different places, so overruns are discovered after the money is gone.' },
      { t: 'Slow quotations', d: 'Quotes take days to prepare and chase, and the client has moved on by the time they arrive.' },
      { t: 'Payments tracked by memory', d: 'Pending payments and milestones depend on who remembers, which hurts cash flow.' },
    ],
    gap: [
      { service: 'Digital Presence', href: '/services/digital-presence', without: 'Clients searching "builders near me" find your competitors, with galleries and reviews, and not you.', withUs: 'A project-led website, local SEO and Google Business Profile that show your work where buyers look.' },
      { service: 'Marketing & Growth', href: '/services/marketing-growth', without: 'Marketing is occasional posts and word of mouth. You cannot say which effort brought a project.', withUs: 'Google Ads for people ready to build now, and Meta and social to showcase projects and stay remembered.' },
      { service: 'Data & Intelligence', href: '/services/data-intelligence', without: 'Leads in phones, costs in sheets, progress in chat groups. Nobody sees the full picture.', withUs: 'One lead CRM and project dashboards showing cost against budget, progress and pending payments.' },
      { service: 'Automation', href: '/services/automation', without: 'Every enquiry waits for someone to pick up the phone and remember to call back.', withUs: 'Instant WhatsApp replies, site-visit reminders and quote follow-ups that run on their own.' },
    ],
    funnel: [
      { stage: 'Attract', d: 'Project-led website, local SEO, Google Ads for high-intent searches, Meta for project showcases.' },
      { stage: 'Capture', d: 'Enquiry forms, click-to-WhatsApp and call tracking, all landing in one place.' },
      { stage: 'Organise', d: 'A CRM with stages from enquiry to site visit, quote and order.' },
      { stage: 'Understand', d: 'Dashboards for lead sources, conversion and project cost against budget.' },
      { stage: 'Nurture', d: 'Automated replies, visit reminders, quote follow-ups and post-handover referral requests.' },
    ],
    metrics: [
      { name: 'Cost per lead', why: 'Shows which channel brings enquiries at a sensible price.' },
      { name: 'Enquiry to site-visit rate', why: 'Reveals how many enquiries are real and how well follow-up works.' },
      { name: 'Quote to order conversion', why: 'Tells you if pricing, speed or trust is losing deals.' },
      { name: 'Project cost vs budget', why: 'Flags overruns while they can still be fixed.' },
      { name: 'Schedule variance', why: 'Shows delays before they turn into disputes.' },
      { name: 'Receivables ageing', why: 'Keeps cash flow healthy by showing who owes what and for how long.' },
    ],
    advantages: [
      { t: 'More trust before the first call', d: 'A strong online portfolio lets buyers pre-qualify you.' },
      { t: 'Faster response than competitors', d: 'Automated first replies keep serious leads engaged.' },
      { t: 'Fewer cost surprises', d: 'Live project numbers help you act early.' },
      { t: 'A pipeline you can predict', d: 'Multiple lead sources reduce dependence on referrals.' },
    ],
    start: { title: 'A sensible starting point', items: ['Project-led website with local SEO and Google Business Profile', 'Lead CRM with WhatsApp enquiry capture', 'Google Ads for one or two high-intent services', 'Cost and lead dashboard for your active projects'] },
    faqs: [
      { q: 'We get most work from referrals. Do we really need this?', a: 'Referrals are valuable but hard to scale or predict. A digital system adds a second source of leads and also helps referred clients check you out before they call.' },
      { q: 'Can you track costs on live sites?', a: 'Yes. We start from the sheets and forms your team already uses, then build dashboards on top so site teams do not need to learn new complex tools.' },
      { q: 'Do you work with real estate developers as well?', a: 'Yes. Project launches, site-visit scheduling and buyer enquiry follow-up are a strong fit for the same funnel.' },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce',
    short: 'Online stores, D2C brands and marketplace sellers.',
    audience: ['D2C brands', 'Online stores', 'Marketplace sellers', 'Subscription products'],
    question: 'What is really driving profit, not just traffic?',
    summary: 'Ecommerce is a numbers game of acquisition cost, conversion and repeat orders. Data sits in your store, ad accounts, WhatsApp and email tools, and rarely agrees across them.',
    hero: {
      title: 'Turn traffic into profit.',
      highlight: 'Turn buyers into repeat buyers.',
      description: 'We connect your store, ads, search visibility, customer data and messaging so you can see what makes money and automate what keeps customers coming back.',
    },
    pains: [
      { t: 'Paying for traffic that does not convert', d: 'Ad spend rises while the store conversion rate stays flat, and it is unclear whether the ad or the site is at fault.' },
      { t: 'Profit hidden behind revenue', d: 'Revenue looks fine, but after ads, returns and shipping, some channels lose money.' },
      { t: 'Abandoned carts', d: 'Shoppers add products and leave, and nobody follows up with them.' },
      { t: 'Scattered customer data', d: 'Store, Meta, Google, WhatsApp and email each tell a different story.' },
      { t: 'Low repeat purchases', d: 'Every sale has to be paid for again because there is no system bringing customers back.' },
      { t: 'Repetitive support', d: 'The team spends hours answering order status and delivery questions.' },
    ],
    gap: [
      { service: 'Digital Presence', href: '/services/digital-presence', without: 'Product pages are thin, slow or invisible in search, and AI assistants do not mention your brand.', withUs: 'Fast, conversion-focused store pages, product SEO, and GEO and AEO so you appear when people ask for recommendations.' },
      { service: 'Marketing & Growth', href: '/services/marketing-growth', without: 'Ads run without a clear funnel, and creative gets refreshed on guesswork.', withUs: 'Google and Meta campaigns tied to margin, with a content rhythm that builds the brand between sales.' },
      { service: 'Data & Intelligence', href: '/services/data-intelligence', without: 'You open four dashboards and still cannot say which channel is profitable.', withUs: 'One view of acquisition cost, contribution margin, repeat rate and returns by channel and product.' },
      { service: 'Automation', href: '/services/automation', without: 'Abandoned carts, reviews and reorders depend on someone remembering to act.', withUs: 'Cart recovery, order updates, review requests and reorder reminders on WhatsApp and email, automatically.' },
    ],
    funnel: [
      { stage: 'Attract', d: 'Product SEO, GEO and AEO, Google and Meta ads, content and social.' },
      { stage: 'Capture', d: 'Tracking and pixels set up properly, with email and WhatsApp opt-ins at key moments.' },
      { stage: 'Organise', d: 'Customers, orders and campaign data unified into one customer view.' },
      { stage: 'Understand', d: 'Dashboards for acquisition cost, margin by channel, cohorts and repeat rate.' },
      { stage: 'Nurture', d: 'Cart recovery, post-purchase flows, reviews, win-back and reorder campaigns.' },
    ],
    metrics: [
      { name: 'Customer acquisition cost', why: 'What it really costs to win a customer, by channel.' },
      { name: 'Contribution margin by channel', why: 'Shows profit after ads, shipping and returns, not just revenue.' },
      { name: 'Conversion rate', why: 'Reveals how well the store turns visits into orders.' },
      { name: 'Average order value', why: 'Guides bundles, thresholds and offers.' },
      { name: 'Repeat purchase rate', why: 'Shows whether customers come back without new ad spend.' },
      { name: 'Cart abandonment and return rate', why: 'Points to lost revenue and product or expectation issues.' },
    ],
    advantages: [
      { t: 'Spend where it makes money', d: 'Cut channels that look busy but lose margin.' },
      { t: 'Lower dependence on ads', d: 'Repeat flows lift revenue from customers you already paid for.' },
      { t: 'A smaller support load', d: 'Automated order and delivery updates answer common questions.' },
      { t: 'Visible to AI shoppers', d: 'GEO and AEO help your products show up in AI-assisted shopping answers.' },
    ],
    start: { title: 'A sensible starting point', items: ['Tracking and analytics audit, so numbers can be trusted', 'Store conversion and product page SEO fixes', 'One consolidated channel profitability dashboard', 'Abandoned cart and post-purchase flows on WhatsApp and email'] },
    faqs: [
      { q: 'Which store platforms do you work with?', a: 'We work with the common platforms such as Shopify and WooCommerce, and with custom stores. We confirm compatibility during the discovery call.' },
      { q: 'Can you reduce our ad costs?', a: 'We cannot promise a specific number. What we do is find waste, fix tracking and conversion issues, and shift spend towards channels that are profitable once all costs are counted.' },
      { q: 'Will WhatsApp and email flows annoy customers?', a: 'We use opt-in contacts, sensible frequency and helpful messages such as order updates and relevant reminders, with an easy way to opt out.' },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    short: 'Salons, nail spas, bakeries and food brands, doctors and clinics.',
    audience: ['Salons & spas', 'Nail studios', 'Bakeries & food brands', 'Doctors & clinics', 'Studios, trainers & consultants'],
    question: 'Are your best customers finding you, and coming back?',
    summary: 'Local service businesses live on Google Maps, Instagram, word of mouth and a full diary. Bookings arrive in DMs and calls, slots go empty, and regulars are never nudged to return.',
    hero: {
      title: 'Fill your diary.',
      highlight: 'Keep your regulars coming back.',
      description: 'We help local service businesses get found nearby, take bookings without the back-and-forth, and bring clients back automatically.',
    },
    pains: [
      { t: 'Missed bookings', d: 'DMs, calls and WhatsApp messages pile up during work hours, and unanswered ones go to a competitor.' },
      { t: 'Empty slots, no-shows', d: 'Unfilled gaps and last-minute cancellations cost income you cannot recover.' },
      { t: 'Invisible on Google Maps', d: 'People nearby search and choose from the top three results, and if you are not there, you are not considered.' },
      { t: 'Few reviews, little trust', d: 'New customers pick the business with more recent, better reviews.' },
      { t: 'No client records', d: 'Who visited, what they bought and when they are due again is held in memory or a notebook.' },
      { t: 'Social posting on and off', d: 'Posts happen when time allows, so attention and bookings rise and fall.' },
    ],
    gap: [
      { service: 'Digital Presence', href: '/services/digital-presence', without: 'No website, or one that does not load well on phones. Local searches go to someone else.', withUs: 'A fast mobile website with booking, Google Business Profile, local SEO, and clear answers for AI search.' },
      { service: 'Marketing & Growth', href: '/services/marketing-growth', without: 'Posts are irregular and offers are announced with no way to see what worked.', withUs: 'A steady content calendar, local Meta and Google campaigns, and seasonal offers planned ahead.' },
      { service: 'Data & Intelligence', href: '/services/data-intelligence', without: 'Clients in phone contacts, bookings in a diary, nothing joined together.', withUs: 'A simple client CRM and dashboard for bookings, repeat visits, busy and slow periods, and top services.' },
      { service: 'Automation', href: '/services/automation', without: 'Staff reply to every message by hand and send reminders when they remember.', withUs: 'WhatsApp booking replies, reminders to cut no-shows, review requests and "time for your next visit" nudges.' },
    ],
    funnel: [
      { stage: 'Attract', d: 'Google Maps and local SEO, Instagram and Facebook content, local ads.' },
      { stage: 'Capture', d: 'Online booking, click-to-WhatsApp, and enquiry forms in one inbox.' },
      { stage: 'Organise', d: 'Client records with visit history, preferences and next-visit dates.' },
      { stage: 'Understand', d: 'See bookings, busy and quiet times, repeat rate and best-selling services.' },
      { stage: 'Nurture', d: 'Reminders, review requests, birthday and festival offers, and rebooking prompts.' },
    ],
    metrics: [
      { name: 'Bookings per week', why: 'The simplest view of whether demand is growing.' },
      { name: 'Slot utilisation', why: 'Shows empty time you can fill with offers or ads.' },
      { name: 'No-show and cancellation rate', why: 'Measures the effect of reminders and booking rules.' },
      { name: 'New vs returning clients', why: 'Shows how much growth depends on repeat business.' },
      { name: 'Review count and rating', why: 'A direct driver of Google Maps ranking and trust.' },
      { name: 'Enquiry response time', why: 'Quick replies win bookings.' },
    ],
    advantages: [
      { t: 'Show up in the nearby search', d: 'Stronger local visibility brings walk-ins and bookings.' },
      { t: 'Fewer no-shows', d: 'Reminders and easy rescheduling protect your income.' },
      { t: 'More reviews, more trust', d: 'Asking at the right moment raises both numbers.' },
      { t: 'Time back for the work itself', d: 'Automation answers routine messages so your team can focus on clients.' },
    ],
    start: { title: 'A sensible starting point', items: ['Google Business Profile and a mobile-friendly booking website', 'WhatsApp booking replies and appointment reminders', 'Simple client list with visit history', 'A weekly content rhythm for Instagram and Facebook'] },
    faqs: [
      { q: 'I am a clinic. Is it safe to automate messages?', a: 'We keep sensitive health details out of marketing and messaging tools, use clear consent and limit automation to appointments, reminders and general information. We do not claim regulatory compliance, and we agree on data handling with you in writing.' },
      { q: 'I run a bakery. Can this handle custom orders?', a: 'Yes. Order enquiries via WhatsApp can be captured with a simple form flow (item, date, budget), logged in one place and confirmed automatically, which is helpful during festival rushes.' },
      { q: 'I am a small salon with two staff. Is this too much?', a: 'No. We start small, usually with Google visibility and WhatsApp bookings, and add pieces only when they clearly pay off.' },
    ],
  },
  {
    slug: 'small-brands',
    name: 'Startups & Small Brands',
    short: 'Home businesses wanting to expand and small brands ready to step up.',
    audience: ['Home-based businesses', 'New startups', 'Small brands scaling up', 'Solo founders'],
    question: 'What should you build first, with the budget you have?',
    summary: 'Small brands have a good product and limited time and money. Options are overwhelming, so many end up with random posts, an unplanned website and sales run entirely from WhatsApp.',
    hero: {
      title: 'Step up from side hustle.',
      highlight: 'Build a brand that runs on a system.',
      description: 'We help small brands start with the right foundations, a clear position and a simple funnel, then add data and automation as they grow.',
    },
    pains: [
      { t: 'Too many options, too little budget', d: 'Every agency, tool and platform sounds necessary, and it is hard to tell what to do first.' },
      { t: 'No clear position', d: 'You are one of many similar sellers, and customers cannot tell why to pick you.' },
      { t: 'Sales live in WhatsApp chats', d: 'Orders and enquiries are scrolled through manually, and follow-ups get missed.' },
      { t: 'Ads without a landing page', d: 'Money goes into boosted posts with nowhere to send people to buy or enquire.' },
      { t: 'No idea what works', d: 'Followers go up, but you cannot link any effort to actual sales.' },
      { t: 'The founder is the bottleneck', d: 'Everything from posting to replying depends on one person, which stops growth.' },
    ],
    gap: [
      { service: 'Digital Presence', href: '/services/digital-presence', without: 'Instagram is your only storefront, and anyone who wants to check you out finds very little.', withUs: 'A focused website and Google presence that make you look established and let ads and search work.' },
      { service: 'Marketing & Growth', href: '/services/marketing-growth', without: 'Posting is random and boosts are tried without a plan or a clear message.', withUs: 'A clear position, a GTM plan and a content and ad rhythm that fits a small budget.' },
      { service: 'Data & Intelligence', href: '/services/data-intelligence', without: 'Orders and leads are in chats, and you cannot say where your best customers come from.', withUs: 'A simple CRM and a one-page dashboard so you know sources, sales and repeat buyers.' },
      { service: 'Automation', href: '/services/automation', without: 'You answer the same questions all day and forget to follow up.', withUs: 'Light automation for replies, order confirmations and follow-ups so you can run it alongside other work.' },
    ],
    funnel: [
      { stage: 'Attract', d: 'A clear position, a simple website, Google Business Profile, and one paid channel done well.' },
      { stage: 'Capture', d: 'Every enquiry from site, ads, social and WhatsApp routed into one place.' },
      { stage: 'Organise', d: 'A lightweight CRM that matches how you actually sell.' },
      { stage: 'Understand', d: 'A simple dashboard showing what brings customers and what does not.' },
      { stage: 'Nurture', d: 'Basic WhatsApp and email flows, then more as the business grows.' },
    ],
    metrics: [
      { name: 'Enquiries per week', why: 'A simple early signal that marketing is working.' },
      { name: 'Cost per enquiry', why: 'Keeps small ad budgets honest.' },
      { name: 'Enquiry to customer rate', why: 'Shows if the offer and follow-up are working.' },
      { name: 'Sales by source', why: 'Tells you where to put the next rupee.' },
      { name: 'Repeat customers', why: 'The base of a sustainable small brand.' },
      { name: 'Response time', why: 'Fast replies turn more enquiries into orders.' },
    ],
    advantages: [
      { t: 'Start lean, scale in stages', d: 'Pay for foundations first and add more only when it pays back.' },
      { t: 'Look bigger than you are', d: 'A proper site and consistent branding build trust quickly.' },
      { t: 'Know what works', d: 'Even simple tracking stops guesswork.' },
      { t: 'Free the founder', d: 'Light automation gives back hours each week.' },
    ],
    start: { title: 'A sensible starting point', items: ['Brand position and a compact website with tracking', 'Google Business Profile and one paid or social channel', 'A simple lead sheet or CRM, with WhatsApp enquiry capture', 'One or two basic automations for follow-ups'] },
    faqs: [
      { q: 'I only have a small budget. Where do we begin?', a: 'We pick the smallest set that creates a working funnel: a clear message, a place to send people and a way to capture and track enquiries. Everything else can come later.' },
      { q: 'Do I need a CRM this early?', a: 'Not always. We might start with a structured sheet and WhatsApp capture, then move to a CRM once volume grows.' },
      { q: 'Can you work with a home-based business?', a: 'Yes. Many of our best-fit clients start from home. We design around your capacity, not around a large team.' },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
