// All site copy lives here. Components read from this file — do not hard-code copy in components.

export type NavLink = {
  label: string;
  href: string;
};

export const nav: {
  links: NavLink[];
  cta: NavLink;
} = {
  links: [
    { label: "Solutions", href: "/#solutions" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Talk to Us", href: "/contact" },
};

export const hero = {
  eyebrow: "Technology that moves a nation forward.",
  headline: "Powering Rwanda's digital economy — and Africa's next.",
  sub: "AMBI Tech builds the fintech, GovTech and cybersecurity infrastructure that governments and businesses rely on. Proven at national scale. Engineered in Kigali.",
  ctaPrimary: { label: "Explore Our Work", href: "/#projects" },
  ctaSecondary: { label: "Talk to Us", href: "/contact" },
  map: {
    origin: { id: "kigali", label: "Kigali", x: 47, y: 62 },
    nodes: [
      { id: "kampala", label: "Kampala", x: 58, y: 32, primary: true },
      { id: "nairobi", label: "Nairobi", x: 84, y: 46 },
      { id: "dar", label: "Dar es Salaam", x: 74, y: 80 },
      { id: "kinshasa", label: "Kinshasa", x: 14, y: 52 },
      { id: "lagos", label: "Lagos", x: 6, y: 20 },
    ],
  },
};

export const impact = {
  caption:
    "Results from TENGAMARA na TVA, our VAT formalisation programme with the Rwanda Revenue Authority.",
  stats: [
    { value: 640000, suffix: "+", label: "Registrations" },
    { value: 5.3, suffix: "M+", label: "Invoices processed", isDecimal: true },
    { value: 39.3, prefix: "RWF ", suffix: "B", label: "VAT output", isDecimal: true },
  ],
};

export const about = {
  eyebrow: "About AMBI Tech",
  heading: "About Us",
  body: "AMBI Tech is an emerging leader in innovative software solutions, systems integration, and technology services. We deliver intelligent solutions that empower businesses, organizations, governments, and people to reach their highest potential. AMBI Tech is a subsidiary of AMBIVISION Rwanda Holdings Limited, a private holding company registered in Rwanda in 2021 to invest across key sectors in the country and the continent.",
  vision: {
    label: "Our Vision",
    body: "Transforming Africa's future with innovative tech solutions that unlock limitless potential.",
  },
  mission: {
    label: "Our Mission",
    body: "To work alongside businesses and institutions to close digital gaps, harness innovation, and implement solutions that drive Africa's digital transformation.",
  },
  values: [
    {
      name: "Integrity",
      rationale: "We build systems people can trust, so we have to be people who can be trusted.",
    },
    {
      name: "Ambition",
      rationale: "We don't build for the pilot. We build for the country, then the continent.",
    },
    {
      name: "Inclusion",
      rationale: "If it only works for the connected, it hasn't worked.",
    },
    {
      name: "Collaboration",
      rationale: "Nothing at national scale gets built alone.",
    },
    {
      name: "Innovation",
      rationale: "We are always looking for new ways to use technology.",
    },
    {
      name: "Adaptability",
      rationale: "Africa's markets don't wait. Neither do we.",
    },
  ],
};

export const services = {
  eyebrow: "What We Do",
  heading: "Solutions built for national scale",
  items: [
    {
      number: "01",
      title: "Fintech & Digital Payments",
      body: "Digital wallets, payment rails, merchant tools and consumer incentive systems. We build financial products for the whole market.",
    },
    {
      number: "02",
      title: "GovTech & Revenue Technology",
      body: "Systems that help governments and municipalities collect what they're owed and serve citizens better: VAT and e-invoicing infrastructure, tax formalisation platforms, and municipal revenue systems.",
    },
    {
      number: "03",
      title: "Cybersecurity",
      body: "Security assessment, monitoring and hardening delivered through our specialist partner network. Public infrastructure is a target; we build and defend accordingly.",
    },
    {
      number: "04",
      title: "ICT Solutions & Systems Integration",
      body: "Custom software, platform engineering, integration with legacy systems, and the long-term maintenance and support that keeps national systems running.",
    },
  ],
};

export const projects = {
  eyebrow: "Our Projects",
  heading: "Proven at national scale",
  items: [
    {
      id: "tengamara",
      name: "TENGAMARA na TVA",
      subtitle: "VAT Formalisation Programme",
      partner: "Rwanda Revenue Authority",
      body: "TENGAMARA na TVA turns VAT compliance from an obligation into an incentive. By rewarding consumers for requesting an electronic invoice, it pulls transactions out of the informal economy into the formal tax net — widening the base rather than raising the rate. The pilot outperformed every KPI, driving 640,000+ registrations, 5.3M+ invoices, and RWF 39.3B in VAT output. It's now the foundation of our expansion into Uganda's EFRIS environment.",
      cta: { label: "Read the case study", href: "#" },
      tint: "teal",
    },
    {
      id: "tengapromo",
      name: "TengaPromo",
      subtitle: "Consumer Loyalty & Rewards",
      partner: null,
      body: "The engine that makes formalisation feel like a benefit, not a burden. A loyalty and lottery platform that turns a receipt into a chance and a habit into a reward — a reason for consumers to ask for the invoice, repeat traffic for merchants, and millions of transactions moving from invisible to visible.",
      cta: { label: "Read the case study", href: "#" },
      tint: "aqua",
    },
    {
      id: "enoti",
      name: "eNoti",
      subtitle: "Digital Wallet & Financial Services",
      partner: null,
      body: "Where the value lands. A digital wallet built for the African market: receive your VAT cashback, pay for what you need, and build a financial identity from the transactions you were already making.",
      tags: ["Wallet", "Payments", "Cashback", "Rewards", "Invoice-backed credit"],
      cta: { label: "Explore eNoti", href: "#" },
      tint: "teal",
    },
    {
      id: "sora",
      name: "SORA",
      subtitle: "Municipal Revenue Platform",
      partner: "City of Kigali",
      body: "SORA helps cities find, value and collect the property revenue they're entitled to — identifying gaps in the register, improving valuation accuracy, and closing the distance between what a city is owed and what it collects. Projected uplift for Kigali: RWF 18–39 billion in additional property tax.",
      cta: { label: "Read more", href: "#" },
      tint: "aqua",
    },
  ],
};

export const education = {
  heading: "Your receipt is small. Together, they're not.",
  body: "One EBM receipt might carry a few hundred francs of VAT — on its own, nothing. But you're not on your own. Rwandans have already collected 5.3 million receipts through TENGAMARA na TVA. Together, those small amounts have put RWF 39.3 billion into the national purse — money that was always owed, but wasn't always arriving. That's not an abstract number. That's classrooms. That's health centres. That's roads.",
  flow: ["Buy", "Ask for your receipt", "Get rewarded", "Everybody wins"],
  cta: { label: "Learn more", href: "#" },
};

export const whyChooseUs = {
  heading: "Why Choose Us",
  proven: {
    heading: "A Proven Partner",
    body: "Our experience spans high-stakes industries: Finance & Banking, Telecommunications, Government & Defense, Healthcare, Energy & Utilities. Through our partnership with ENKI WhiteHat, we've executed 85+ enterprise-level projects, including red team operations, vulnerability assessments across mobile/cloud/IoT, and security audits for AI, smart appliances and robotic systems.",
    industries: [
      "Finance & Banking",
      "Telecommunications",
      "Government & Defense",
      "Healthcare",
      "Energy & Utilities",
    ],
  },
  why: {
    heading: "Why AMBI Tech?",
    points: [
      {
        title: "Elite Expertise",
        body: "Certified professionals and award-winning ethical hackers.",
      },
      {
        title: "Tangible Results",
        body: "Validated by successful projects and official recognition from national authorities.",
      },
      {
        title: "Regulatory Assurance",
        body: "Compliant with national and international standards.",
      },
      {
        title: "Global-Local Advantage",
        body: "Deep local-market understanding combined with global technical capability.",
      },
    ],
  },
};

export const testimonials = {
  eyebrow: "Testimonials",
  heading: "What our partners and clients say",
  items: [
    {
      quote:
        "AMBI Tech delivered a system that held up under real national-scale load, on a timeline most vendors wouldn't commit to.",
      name: "Placeholder Name",
      role: "Placeholder Title, Partner Institution",
      isPlaceholder: true,
    },
    {
      quote:
        "What impressed us most was how they translated a compliance obligation into something citizens actually wanted to take part in.",
      name: "Placeholder Name",
      role: "Placeholder Title, Government Partner",
      isPlaceholder: true,
    },
    {
      quote:
        "A rare team that understands both the engineering and the policy context — that combination is hard to find.",
      name: "Placeholder Name",
      role: "Placeholder Title, Financial Partner",
      isPlaceholder: true,
    },
  ],
};

export const finalCta = {
  heading: "Let's build something that lasts.",
  body: "Whether you're a government institution, a financial partner or a business ready to go digital — we'd like to hear what you're trying to solve.",
  ctaPrimary: { label: "Contact Us", href: "/contact" },
  ctaSecondary: { label: "Explore Our Work", href: "/#projects" },
};

export const contactPage = {
  eyebrow: "Get in touch",
  heading: "Let's talk about what you're building.",
  body: "Government institution, financial partner, or business going digital — tell us what you're trying to solve and we'll get back to you.",
  details: {
    location: "Kigali, Rwanda",
    phone: "+250 788 542 784",
    generalEmail: "info@ambi-tech.rw", // TODO: client to confirm the general inbox address
    contactEmail: "patrick@ambi-vision.com",
  },
  form: {
    fields: {
      name: "Full name",
      org: "Organisation",
      email: "Email address",
      message: "How can we help?",
    },
    submitLabel: "Send Message",
  },
};

export const teamPage = {
  eyebrow: "Our Team",
  heading: "Meet the team running AMBI Tech",
  sub: "The people behind AMBI Tech.",
  leadership: [
    {
      name: "Patrick Ndahiro",
      role: "Executive Chairman",
      email: "patrick@ambi-vision.com",
      linkedin: "#", // TODO: add LinkedIn URL
      bio: "[bio to supply]",
    },
    {
      name: "[Full Name]",
      role: "Chief Technology Officer",
      email: null,
      linkedin: "#",
      bio: "[bio to supply]",
    },
    {
      name: "[Full Name]",
      role: "Chief Financial Officer / Finance Manager",
      email: null,
      linkedin: "#",
      bio: "[bio to supply]",
    },
  ],
  join: {
    heading: "Want to Build With Us?",
    body: "We're always looking for engineers, designers and analysts who want to work on systems that matter at national scale.",
    cta: { label: "Join the Team", href: "/contact" },
  },
};

export const footer = {
  tagline: "Technology that moves a nation forward.",
  columns: [
    {
      heading: "Company",
      links: [
        { label: "About", href: "/#about" },
        { label: "Team", href: "/team" },
        { label: "Projects", href: "/#projects" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        { label: "Fintech & Digital Payments", href: "/#solutions" },
        { label: "GovTech & Revenue Technology", href: "/#solutions" },
        { label: "Cybersecurity", href: "/#solutions" },
        { label: "ICT Solutions", href: "/#solutions" },
      ],
    },
  ],
  contact: {
    location: "Kigali, Rwanda",
    phone: "+250 788 542 784",
    email: "patrick@ambi-vision.com",
  },
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
  subsidiaryLine: "AMBI Tech Ltd is a subsidiary of AMBIVISION Rwanda Holdings Limited.",
  copyright: (year: number) => `© ${year} AMBI Tech Ltd. All rights reserved.`,
};

export const siteMeta = {
  name: "AMBI Tech",
  domain: "ambi-tech.rw",
  title: "AMBI Tech — Technology that moves a nation forward.",
  description:
    "AMBI Tech builds the fintech, GovTech and cybersecurity infrastructure that governments and businesses rely on. Proven at national scale. Engineered in Kigali, Rwanda.",
};
