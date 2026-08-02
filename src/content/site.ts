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
    { label: "Projects", href: "/projects" },
    { label: "Education", href: "/education" },
    { label: "Team", href: "/team" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Talk to Us", href: "/contact" },
};

export const hero = {
  headline: "Technology that moves a nation forward.",
  sub: "We partner with governments and enterprises to formalise economies, widen the tax base and secure the systems that hold it all together.",
  ctaPrimary: { label: "Explore Our Work", href: "/projects" },
  ctaSecondary: { label: "Talk to Us", href: "/contact" },
  // Coordinates are % position within public/art/africa-map.png (trimmed to content bounds),
  // derived from each city's real lon/lat mapped onto the continent's lon/lat bounding box.
  map: {
    origin: { id: "kigali", x: 69.6, y: 54.1 },
    nodes: [
      { id: "kampala", x: 73.3, y: 51.0, primary: true },
      { id: "nairobi", x: 79.4, y: 53.2 },
      { id: "dar", x: 83.0, y: 60.8 },
      { id: "kinshasa", x: 48.3, y: 57.4 },
      { id: "lagos", x: 31.0, y: 42.3 },
      { id: "accra", x: 25.8, y: 43.6 },
      { id: "cairo", x: 71.4, y: 9.7 },
      { id: "johannesburg", x: 66.7, y: 87.8 },
    ],
  },
};

export const partners = {
  eyebrow: "Trusted by",
  // Requested order is RRA, Quik, RSwitch, BK, BPR, UB Tech, QT, Ambi Green, Ambi-Vision.
  // Quik, Ambi Green and Ambi-Vision logo files haven't been supplied yet, so they're
  // left out of this list rather than faked. Add them here once the assets arrive.
  logos: [
    { name: "Rwanda Revenue Authority", src: "/partners/rra.png" },
    { name: "RSwitch", src: "/partners/rswitch.png" },
    { name: "Bank of Kigali", src: "/partners/bank-of-kigali.png" },
    { name: "BPR Bank", src: "/partners/bpr-bank.png" },
    { name: "UB-Tech", src: "/partners/ub-tech.png" },
    { name: "QT Global Software", src: "/partners/qt-global.png" },
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
  values: ["Integrity", "Ambition", "Inclusion", "Collaboration", "Innovation", "Adaptability"],
};

export const statement = {
  kicker: "Why it matters",
  lines: [
    "Every economy runs on trust,",
    "in the systems, in the numbers, in the state.",
    "We build the technology that earns it.",
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

export type ProjectSection = {
  heading: string;
  body: string;
  flow?: string[];
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  partner: string | null;
  tint: "teal" | "aqua";
  image: string;
  summary: string;
  intro: string;
  sections?: ProjectSection[];
  tags?: string[];
  stats?: { value: number; suffix?: string; prefix?: string; isDecimal?: boolean; label: string }[];
  cta: { label: string; href: string; external?: boolean };
};

export const projects: {
  eyebrow: string;
  heading: string;
  items: Project[];
} = {
  eyebrow: "Our Projects",
  heading: "Proven at national scale",
  items: [
    {
      id: "tengamara-na-tva",
      name: "TENGAMARA na TVA",
      subtitle: "VAT Formalisation Programme",
      partner: "Rwanda Revenue Authority",
      tint: "teal",
      image: "/images/tengamara-hero.jpg",
      summary:
        "Turns VAT compliance from an obligation into an incentive, rewarding consumers for requesting an electronic invoice and pulling transactions into the formal tax net.",
      intro:
        "TENGAMARA na TVA turns VAT compliance from an obligation into an incentive. By rewarding consumers for requesting an electronic invoice, it pulls transactions out of the informal economy into the formal tax net, widening the base rather than raising the rate. The pilot outperformed every KPI, driving 640,000+ registrations, 5.3M+ invoices, and RWF 39.3B in VAT output. It's now the foundation of our expansion into Uganda's EFRIS environment.",
      sections: [
        {
          heading: "Why it matters",
          body: "Most tax-formalisation efforts push. This one pulls the citizen into the enforcement mechanism, and everybody wins.",
        },
        {
          heading: "Why your receipt matters",
          body: "VAT, or Value Added Tax, is a small amount added to the price of most things you buy. The shop collects it on behalf of the government, but it only reaches the government if the sale is recorded on a proper EBM receipt. No receipt, no record.\n\nThat receipt is what turns your everyday purchase into a contribution to the country. VAT funds roads, schools, clinics and the services we all use. When you ask for a receipt, you're making sure the money you already paid actually gets where it's meant to go.\n\nWe wanted asking for a receipt to be worth something to you too. So every EBM receipt you collect earns you cashback in your eNoti wallet, money back on shopping you were doing anyway. And every receipt also becomes an entry into TengaPromo, our rewards and lottery programme, so more receipts mean more chances to win.\n\nOne EBM receipt might carry a few hundred francs of VAT. On its own, that's nothing. But Rwandans have already collected 5.3 million receipts through TENGAMARA na TVA, and together those small amounts have put RWF 39.3 billion into the national purse: money that was always owed, but wasn't always arriving. That's classrooms. That's health centres. That's roads.",
          flow: ["Buy", "Ask for your receipt", "Get rewarded", "Everybody wins"],
        },
      ],
      stats: [
        { value: 640000, suffix: "+", label: "Registrations" },
        { value: 5.3, suffix: "M+", isDecimal: true, label: "Invoices processed" },
        { value: 39.3, prefix: "RWF ", suffix: "B", isDecimal: true, label: "VAT output" },
      ],
      cta: { label: "Explore eNoti", href: "/projects/enoti" },
    },
    {
      id: "tengapromo",
      name: "TengaPromo",
      subtitle: "Consumer Loyalty & Rewards",
      partner: null,
      tint: "aqua",
      image: "/images/tengapromo-hero.jpg",
      summary:
        "The engine that makes formalisation feel like a benefit, not a burden: a loyalty and lottery platform that turns a receipt into a chance and a habit into a reward.",
      intro:
        "The engine that makes formalisation feel like a benefit, not a burden. A loyalty and lottery platform that turns a receipt into a chance and a habit into a reward: a reason for consumers to ask for the invoice, repeat traffic for merchants, and millions of transactions moving from invisible to visible.",
      sections: [
        {
          heading: "A shared win",
          body: "For consumers, it's a reason to ask for the invoice: every receipt is a ticket, and every ticket is a chance to win. For merchants, it's repeat traffic and a direct channel to customers who now have a reason to come back and ask for a proper receipt every time. For the economy, it's millions of small transactions moving from invisible to visible, each one pulling a little more of the informal market into the formal tax net.\n\nThe prizes range from everyday cashback to headline draws, cars, electronics, and cash, so there's a reason to play whether you're buying groceries or making a big purchase. It's built to feel like a rewards programme first and a compliance tool second, which is exactly why it works.",
        },
        {
          heading: "How to enter",
          body: "Entering doesn't require an app, a sign-up form or any extra steps beyond what you're already doing when you shop.",
          flow: ["Buy", "Ask for your EBM receipt", "You're automatically entered", "Winners are drawn and announced"],
        },
      ],
      cta: { label: "Read the case study", href: "/projects/tengapromo" },
    },
    {
      id: "enoti",
      name: "eNoti",
      subtitle: "Digital Wallet & Financial Services",
      partner: null,
      tint: "teal",
      image: "/images/enoti-hero.jpg",
      summary:
        "Where the value lands: a digital wallet built for the African market, receiving VAT cashback and building a financial identity from transactions already being made.",
      intro:
        "Where the value lands. A digital wallet built for the African market: receive your VAT cashback, pay for what you need, and build a financial identity from the transactions you were already making.",
      tags: ["Wallet", "Payments", "Cashback", "Rewards", "Invoice-backed credit"],
      cta: { label: "Explore eNoti", href: "/projects/enoti" },
    },
  ],
};

export const collaborate = {
  eyebrow: "Let's Collaborate",
  heading: "Let's Collaborate",
  proven: {
    heading: "A Proven Partner",
    body: "Our experience spans high-stakes industries: Finance & Banking, Telecommunications, Government & Defense, Healthcare, and Energy & Utilities. We bring together certified specialists and a vetted partner network to deliver enterprise-grade work, from security assessments and vulnerability testing across mobile, cloud and IoT, to audits for AI systems, smart devices and connected infrastructure.",
    industries: [
      "Finance & Banking",
      "Telecommunications",
      "Government & Defense",
      "Healthcare",
      "Energy & Utilities",
    ],
  },
  why: {
    heading: "Work With Us",
    points: [
      {
        title: "Elite Expertise",
        body: "Certified professionals with deep cybersecurity and public-sector delivery experience.",
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
        "A rare team that understands both the engineering and the policy context. That combination is hard to find.",
      name: "Placeholder Name",
      role: "Placeholder Title, Financial Partner",
      isPlaceholder: true,
    },
  ],
};

export const finalCta = {
  heading: "Let's build something that lasts.",
  body: "Whether you're a government institution, a financial partner or a business ready to go digital, we'd like to hear what you're trying to solve.",
  ctaPrimary: { label: "Contact Us", href: "/contact" },
  ctaSecondary: { label: "Explore Our Work", href: "/projects" },
};

export const contactPage = {
  eyebrow: "Get in touch",
  heading: "Let's talk about what you're building.",
  body: "Government institution, financial partner, or business going digital: tell us what you're trying to solve and we'll get back to you.",
  details: {
    location: "KG 6 Av 34, Gishushu, Kigali, Rwanda",
    phone: "+250 788 000 000", // TODO(client): placeholder buffer number, replace with real business line
    generalEmail: "info@ambi-tech.rw",
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
      email: null,
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
    cta: { label: "Join the Team", href: "/careers" },
  },
};

export const careersPage = {
  eyebrow: "Careers",
  heading: "No open roles right now",
  body: "We don't have any open positions at the moment, but we're growing. Check back later, or reach out and introduce yourself. We're always glad to hear from engineers, designers and analysts who want to work on systems that matter at national scale.",
  cta: { label: "Get in touch", href: "/contact" },
};

export type NewsItem = {
  title: string;
  source: string;
  date: string | null;
  href: string;
  summary: string;
  image: string;
  featuredIn?: { label: string; href: string }[];
};

export const newsPage = {
  eyebrow: "In the News",
  heading: "Where AMBI Tech has been featured",
  sub: "Media coverage and updates from across our work.",
  items: [
    {
      title: "Tengamara na TVA: Turning Consumers into Champions of Tax Compliance",
      source: "Taarifa",
      date: "2026-03-09",
      href: "https://taarifa.rw/2026/03/09/tengamara-na-tva-turning-consumers-into-champions-of-tax-compliance/",
      summary:
        "Rwanda's VAT rewards scheme incentivises consumers to request electronic invoices with 10% cashback, turning tax compliance into a shared responsibility.",
      image: "/images/tengamara-hero.jpg",
    },
    {
      title: "Tengamara: How reward initiatives are transforming VAT compliance",
      source: "The New Times",
      date: "2025-11-26",
      href: "https://www.newtimes.co.rw/article/31520/news/featured/tengamara-how-reward-initiatives-are-transforming-vat-compliance",
      summary:
        "Featuring a Bugesera District winner of a Kia Sorento through TengaPromo, on how incentive-based rewards are improving tax compliance.",
      image: "/images/tengapromo-hero.jpg",
      featuredIn: [{ label: "AllAfrica", href: "https://allafrica.com/stories/202511260162.html" }],
    },
    {
      title: "Imbamutima z'abamaze kwegukana ibihembo muri Tengamara na TVA",
      source: "IGIHE",
      date: null,
      href: "https://www.igihe.com/amakuru/u-rwanda/article/imbamutima-z-abamaze-kwegukana-ibihembo-muri-tengamara-na-tva",
      summary: "Testimonies from Rwandans who have already won prizes through Tengamara na TVA.",
      image: "/gallery/tengapromo/photo-01.jpg",
    },
    {
      title: "More rewards for final consumers as new EBM invoice promo launches",
      source: "Rwanda Revenue Authority",
      date: "2025-07-17",
      href: "https://www.rra.gov.rw/en/details?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=2801&cHash=6cedd4b6717f6a44be01788d7075aaeb",
      summary:
        "RRA launches TengaPromo with QT Global Software and AMBI Tech, offering weekly cash prizes up to RWF 1 million for consumers who request electronic invoices.",
      image: "/gallery/tengapromo/photo-09.jpg",
    },
  ] satisfies NewsItem[],
  socials: {
    heading: "Around our socials",
    links: [
      { label: "Instagram @tenga_promo", href: "https://www.instagram.com/tenga_promo/" },
      { label: "X @ikubirelotto", href: "https://x.com/ikubirelotto" },
      { label: "LinkedIn", href: "#" }, // TODO(client): add AMBI Tech's real LinkedIn company page URL
    ],
  },
};

export const educationPage = {
  eyebrow: "Education & Capacity Building",
  heading: "Understanding Why It Matters",
  sub: "Asking for your receipt takes five seconds. Here's why it's worth it.",
  vat: {
    heading: "What is VAT?",
    body: "VAT, Value Added Tax, is a small amount added to the price of most things you buy. The shop collects it on behalf of the government. But it only reaches the government if the sale is recorded on a proper EBM receipt. No receipt, no record.",
  },
  whyReceiptMatters: {
    heading: "Why your receipt matters",
    body: "That receipt is what turns your everyday purchase into a contribution to the country. VAT funds roads, schools, clinics and the services we all use. When you ask for a receipt, you're making sure the money you already paid actually gets where it's meant to go.",
  },
  rewards: {
    heading: "How TENGAMARA na TVA rewards you",
    body: "We wanted asking for a receipt to be worth something to you too. So every EBM receipt you collect earns you cashback in your eNoti wallet, money back on shopping you were doing anyway.",
  },
  tengaPromo: {
    heading: "And TengaPromo makes it fun",
    body: "Every receipt also becomes an entry into TengaPromo, our rewards and lottery programme. More receipts, more chances to win.",
  },
  scale: {
    heading: "Your Receipt Is Small. Together, They're Not.",
    lead: "One EBM receipt might carry a few hundred francs of VAT. On its own, that's nothing, it won't build anything. But you're not on your own.",
    body: "Rwandans have already collected 5.3 million receipts through TENGAMARA na TVA. Together, those small amounts have put RWF 39.3 billion into the national purse, money that was always owed, but wasn't always arriving. That's classrooms. That's health centres. That's roads.",
    stats: [
      { value: 5.3, suffix: "M+", isDecimal: true, label: "Receipts collected" },
      { value: 39.3, prefix: "RWF ", suffix: "B", isDecimal: true, label: "Put into the national purse" },
    ],
  },
  flow: ["Buy", "Ask for your receipt", "Get rewarded", "Everybody wins"],
  flowNote:
    "You get cashback and a chance to win. The shop stays compliant. The country builds.",
  cta: { label: "Learn more about TENGAMARA na TVA", href: "/projects/tengamara-na-tva" },
};

export const appLinks = {
  playStore: "https://play.google.com/store/apps/details?id=com.softpi.enoti&hl=en",
  appStore: "https://apps.apple.com/us/app/enoti-app/id6755315872",
};

export const enotiScreens = [
  {
    kind: "payments",
    label: "Pay every biller in one tap",
    body: "Favourite billers up top, the full list below: Cash Power, RRA, MTN and Airtel Airtime, Canal+ and more.",
  },
  {
    kind: "transfer",
    label: "Move money your way",
    body: "Pay yourself or someone else. Pick a saved beneficiary or enter a number, and eNoti confirms the account holder before you send.",
  },
  {
    kind: "limits",
    label: "Stay in control of your limits",
    body: "Daily limits, amount transferred and what you have left are always one tap away, before you confirm a transfer.",
  },
  {
    kind: "schedule",
    label: "Schedule payments that repeat",
    body: "Set a transfer to run daily, weekly, monthly or yearly, with a start date and an optional end date.",
  },
] as const;

export const footer = {
  tagline: "Technology that moves a nation forward.",
  columns: [
    {
      heading: "Company",
      links: [
        { label: "Team", href: "/team" },
        { label: "Projects", href: "/projects" },
        { label: "News", href: "/news" },
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
    location: "KG 6 Av 34, Gishushu, Kigali, Rwanda",
    phone: "+250 788 000 000",
    email: "info@ambi-tech.rw",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/ambi_tech.rw/" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
  copyright: (year: number) => `© ${year} AMBI Tech Ltd. All rights reserved.`,
};

export const siteMeta = {
  name: "AMBI Tech",
  domain: "ambi-tech.rw",
  title: "AMBI Tech: Technology that moves a nation forward.",
  description:
    "AMBI Tech builds the fintech, GovTech and cybersecurity infrastructure that governments and businesses rely on. Proven at national scale. Engineered in Kigali, Rwanda.",
};
