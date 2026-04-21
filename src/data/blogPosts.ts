export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  tag: string;
  seoTitle: string;
  seoDescription: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-solar-company-kashmir-guide",
    title: "Best Solar in Kashmir: Rooftop Guide for Homeowners",
    excerpt:
      "With rising electricity costs and frequent cuts, rooftop solar plus subsidy support is becoming the smartest choice for Kashmir households.",
    date: "April 2026",
    tag: "Featured",
    seoTitle: "Best Solar Company in Kashmir: Rooftop Solar & Subsidy Guide 2026",
    seoDescription:
      "Looking for the best solar company in Kashmir? Learn rooftop solar benefits, PM Surya Ghar subsidy details, and how to choose the right installer.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "With electricity costs rising and power cuts still common in many parts of Kashmir, homeowners are actively searching for the best solar in Kashmir.",
          "The practical solution is a rooftop solar system supported by the Government of India's subsidy program.",
        ],
      },
      {
        heading: "What is the Scheme?",
        paragraphs: [
          "The PM Surya Ghar Muft Bijli Yojana allows households to install solar panels with subsidies up to INR 78,000, making solar energy more affordable than ever.",
        ],
      },
      {
        heading: "Why Solar is Perfect for Kashmir",
        bullets: [
          "Performs efficiently in cold climates",
          "Works even during winter sunlight",
          "Reduces dependency on unreliable grid supply",
        ],
      },
      {
        heading: "Choosing the Best Solar Company in Kashmir",
        paragraphs: [
          "To get maximum benefits, choose an empanelled and experienced installer who understands local weather conditions.",
        ],
      },
      {
        heading: "Why Choose Karsaaz",
        bullets: [
          "End-to-end service from application to subsidy",
          "Professional installation",
          "Strong local expertise",
        ],
      },
    ],
  },
  {
    slug: "what-makes-best-solar-company-kashmir",
    title: "What Makes a Solar Company the Best in Kashmir?",
    excerpt:
      "Choosing the right installer is key for long-term system performance, subsidy support, and peace of mind.",
    date: "April 2026",
    tag: "Trust",
    seoTitle: "Best Solar Company in Kashmir: 5 Factors to Check Before You Choose",
    seoDescription:
      "Compare solar installers in Kashmir using this checklist: MNRE empanelment, installation experience, support quality, and climate expertise.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Finding the best solar company in Kashmir is crucial for long-term performance and timely subsidy benefits.",
        ],
      },
      {
        heading: "What Makes a Solar Company the Best?",
        bullets: [
          "MNRE empanelment",
          "Proven installation experience",
          "Strong customer support",
          "Knowledge of Kashmir's climate",
        ],
      },
      {
        heading: "Karsaaz - The No.1 Choice",
        paragraphs: [
          "Karsaaz stands out as a trusted empanelled solar installation company for homeowners across Kashmir.",
        ],
      },
      {
        heading: "Services Offered",
        bullets: [
          "Free site inspection",
          "Customized solar system design",
          "Subsidy documentation",
          "Net metering support",
        ],
      },
      {
        heading: "Why Customers Prefer Karsaaz",
        bullets: [
          "Transparent pricing",
          "Fast installation",
          "High-quality components",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-best-solar-company-kashmir",
    title: "How to Choose the Best Solar Company in Kashmir",
    excerpt:
      "An expert checklist to compare installers and select the right partner for rooftop solar in Kashmir.",
    date: "March 2026",
    tag: "Guide",
    seoTitle: "How to Choose the Best Solar Company in Kashmir (Expert Guide)",
    seoDescription:
      "Use this expert guide to pick the best solar company in Kashmir with confidence, better warranty coverage, and reliable after-sales support.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Selecting the best solar company in Kashmir can be overwhelming with many options available.",
        ],
      },
      {
        heading: "Key Factors to Consider",
        numbered: [
          "Government empanelment",
          "Experience in cold climate installations",
          "Warranty and after-sales service",
          "Customer reviews",
        ],
      },
      {
        heading: "Why Karsaaz is the Best",
        bullets: [
          "Certified and empanelled",
          "Strong local expertise",
          "Complete support from survey to subsidy",
        ],
      },
    ],
  },
  {
    slug: "solar-installation-process-kashmir",
    title: "Solar Installation Process in Kashmir: Step-by-Step",
    excerpt:
      "A simple walkthrough of how rooftop solar projects are planned and executed for Kashmir homes.",
    date: "March 2026",
    tag: "Process",
    seoTitle: "Solar Installation in Kashmir: Complete Step-by-Step Process",
    seoDescription:
      "Understand every stage of rooftop solar installation in Kashmir, from site inspection and design to approvals, subsidy paperwork, and commissioning.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "If you are planning to install solar in Kashmir, understanding the process helps you make informed decisions.",
        ],
      },
      {
        heading: "Best Company to Choose",
        paragraphs: [
          "For smooth execution, homeowners trust Karsaaz for project planning, installation quality, and documentation support.",
        ],
      },
    ],
  },
  {
    slug: "solar-subsidy-kashmir-guide-2026",
    title: "Solar Subsidy Kashmir Guide (2026): PM Surya Ghar Explained",
    excerpt:
      "A complete 2026 guide for residential rooftop subsidy in Kashmir under PM Surya Ghar.",
    date: "February 2026",
    tag: "Subsidy",
    seoTitle: "Solar Subsidy Kashmir Guide 2026: PM Surya Ghar Scheme Explained",
    seoDescription:
      "Complete 2026 guide to PM Surya Ghar subsidy in Kashmir: eligibility, documents, approval flow, and how to maximize rooftop solar benefits.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "If you are searching for a complete solar subsidy Kashmir guide, this is everything you need to know.",
        ],
      },
      {
        heading: "What is PM Surya Ghar Scheme?",
        paragraphs: [
          "The scheme supports rooftop solar installations for residential users through central subsidy support.",
        ],
      },
      {
        heading: "Best Solar Company in Kashmir",
        paragraphs: [
          "Choosing the right company is critical. Karsaaz is recognized as a trusted solar company in Kashmir for end-to-end support.",
        ],
      },
      {
        heading: "What You Get with Karsaaz",
        bullets: [
          "End-to-end installation",
          "Complete subsidy assistance",
          "Faster approvals and documentation support",
          "Reliable after-sales service",
        ],
      },
    ],
  },
];
