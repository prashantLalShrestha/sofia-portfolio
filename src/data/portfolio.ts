import type { Experience, Story } from "./types";
export const profile = {
  name: "Sofia Gusakova",
  email: "sgusakovas17@gmail.com",
  location: "Amsterdam, Netherlands",
  linkedin: "https://www.linkedin.com/in/sofia-gusakova/",
  cv: "/sofia-gusakova-cv.pdf",
  picture: "/sofia-gusakova-picture.jpg",
  intro:
    "Hi, I’m Sofia. I enjoy getting to know people, finding common ground, and turning a good conversation into a lasting partnership.",
  summary:
    "With eight years across sales, business development, and client relationships, I help businesses grow by understanding what matters to the people behind them.",
  workPermit: "Netherlands work permit · No sponsorship required",
};
export const experience: Experience[] = [
  {
    company: "GD Media",
    role: "Business Development Manager",
    dates: "Dec 2025 — Jun 2026",
    location: "Amsterdam · On-site",
    sector: "Performance marketing",
    highlights: [
      "Used performance data to coordinate daily priorities across six media buyers.",
      "Onboarded three advertiser partners, from contract signature to campaign launch.",
      "Used data-backed negotiation to double partner compensation within two months.",
      "Applied landing-page insights from Microsoft Clarity, increasing revenue on those pages by 15%.",
    ],
  },
  {
    company: "Betatransfer",
    role: "Sales Manager",
    dates: "Jun 2025 — Nov 2025",
    location: "Remote",
    sector: "Fintech · Payments",
    highlights: [
      "Built a pipeline of 30+ prospects and converted five into signed partners, supporting onboarding and technical integration.",
      "Expanded four key accounts through negotiation and cross-selling; one account reached 4× transaction volume.",
      "Helped retain the largest client at risk of leaving, maintaining transaction volume for two additional months.",
      "Represented the company at five industry expos, strengthening relationships and finding new opportunities.",
    ],
  },
  {
    company: "Weltrade",
    role: "Country Manager",
    dates: "Sep 2024 — May 2025",
    location: "Remote",
    sector: "Fintech · Trading",
    highlights: [
      "Built a new regional market from zero deposits to fourth place company-wide within three months, reaching 2× KPI targets.",
      "Mentored a new team member for four months, contributing to a 20% increase in partner-onboarding KPIs.",
      "Organised five or more regional events and negotiated a partnership structure that supported new-user growth.",
    ],
  },
  {
    company: "Deriv",
    role: "Senior Business Development Manager",
    dates: "Jan 2023 — Aug 2024",
    location: "Minsk, Belarus · On-site",
    sector: "Fintech · Trading",
    highlights: [
      "Grew a new market from 42nd to fifth position company-wide through long-term client relationships.",
      "Sourced and qualified 15 institutional leads for the B2B division.",
      "Delivered 10 seminars reaching 750 attendees, supporting client relationships and new engagement.",
      "Combined regional business trips, cutting flight costs by 35% and market-development time by 20%.",
    ],
  },
  {
    company: "BASF",
    role: "Customer Support Specialist",
    dates: "Dec 2019 — Jan 2023",
    location: "Minsk, Belarus · On-site",
    sector: "Chemicals",
    highlights: [
      "Automated preparation of 100 recurring annual contracts, making the process eight times faster.",
      "Coordinated shipments and documentation for 10–12 clients; supported delivery of over one million litres in 2021.",
      "Received a Bronze Award for client service excellence.",
      "Worked with authorities, laboratories, Finance, and IT to support approvals and improve document workflows.",
    ],
  },
  {
    company: "Avanta & K",
    role: "Sales Manager",
    dates: "Nov 2018 — Nov 2019",
    location: "Minsk, Belarus · On-site",
    sector: "Laboratory equipment",
    highlights: [
      "Acquired five or more clients in a new market segment and won three tenders within six months.",
    ],
  },
];
export const stories: Story[] = [
  {
    slug: "new-market",
    title: "Finding a place in a new market.",
    company: "Deriv",
    category: "BUSINESS DEVELOPMENT",
    metric: "42nd → 5th",
    metricLabel: "Market position company-wide",
    description:
      "Building a market starts with building trust. At Deriv, that meant relationships, local events, and staying close to clients.",
    context:
      "A new regional market with plenty of room to grow. My role was to build visibility and develop lasting client relationships.",
    actions: [
      "Built long-term relationships with clients and prospects.",
      "Organised 10 seminars reaching 750 attendees.",
      "Sourced 15 qualified institutional leads for the B2B team.",
      "Coordinated regional business trips to make time and budget go further.",
    ],
    outcome:
      "The market grew from 42nd to fifth position company-wide. Combining business trips also reduced flight costs by 35% and the market-development timeline by 20%.",
    tone: "rose",
  },
  {
    slug: "account-growth",
    title: "More than a signed contract.",
    company: "Betatransfer",
    category: "ACCOUNT GROWTH",
    metric: "4×",
    metricLabel: "Transaction volume in one account",
    description:
      "A signed partnership is the beginning. Listening, following through, and spotting the next opportunity keep it growing.",
    context:
      "Managing relationships in fintech payments meant understanding each partner’s needs, supporting their onboarding, and helping them grow.",
    actions: [
      "Built a pipeline of 30+ prospects and signed five partners.",
      "Guided new partners through onboarding and technical integration.",
      "Deepened four key accounts through direct negotiation and cross-selling.",
      "Worked with commercial leadership to retain the largest client when it was at risk of leaving.",
    ],
    outcome:
      "One account reached four times its previous transaction volume. The largest at-risk client stayed for two additional months, maintaining its transaction volume.",
    tone: "sage",
  },
  {
    slug: "better-processes",
    title: "A little less admin. A lot more time.",
    company: "BASF",
    category: "CLIENT SERVICE",
    metric: "8×",
    metricLabel: "Faster contract preparation",
    description:
      "Good client service also happens behind the scenes. Sometimes the best improvement is making a repetitive task much easier.",
    context:
      "Preparing 100 recurring annual contracts involved updating company details, signatories, banking information, and product data.",
    actions: [
      "Built an automated system connecting Excel and Word.",
      "Made recurring contract details update with one click.",
      "Supported shipment coordination and documentation for 10–12 clients.",
      "Collaborated with Finance and IT on requirements for digital document workflows.",
    ],
    outcome:
      "Contract preparation became eight times faster. My client-service work at BASF was recognised with a Bronze Award.",
    tone: "sand",
  },
];
export const strengths = [
  {
    title: "Opening doors",
    description:
      "Finding new clients and partners, researching markets, and starting conversations that lead somewhere.",
    skills: [
      "Prospecting",
      "Market research",
      "Partner development",
      "Consultative selling",
    ],
  },
  {
    title: "Growing relationships",
    description:
      "Getting clients settled in, keeping promises, and finding opportunities that work for both sides.",
    skills: [
      "Account management",
      "Onboarding",
      "Retention",
      "Upselling & cross-selling",
    ],
  },
  {
    title: "Making things happen",
    description:
      "Turning plans into action with the team, using data to guide decisions, and making the everyday work simpler.",
    skills: [
      "Negotiation",
      "Performance insights",
      "Cross-team collaboration",
      "Coaching & playbooks",
    ],
  },
];
export const languages = [
  { name: "Russian", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "German", level: "Intermediate" },
  { name: "Dutch", level: "Beginner" },
];
export const education = [
  {
    title: "Master’s in Chemistry",
    institution: "Belarusian State University",
    dates: "2018–2019",
  },
  {
    title: "Bachelor’s in Chemistry",
    institution: "Belarusian State University",
    dates: "2012–2017",
  },
];
export const certificates = [
  "Project Management · IT Academy, 2022",
  "Business Analysis · IT Academy, 2021",
  "Sales · Thunderbird School of Global Management, 2021",
  "Argumentation Skills · 4Brain, 2021",
];
export const tools = [
  "CRM",
  "LinkedIn",
  "Jira",
  "ClickUp",
  "SAP",
  "Microsoft Office",
  "Microsoft Clarity",
  "AI tools",
];
