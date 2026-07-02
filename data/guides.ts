export interface GuideItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  featured?: boolean;
}

export const guides: GuideItem[] = [
  {
    id: 1,
    title: "How to Calculate Home Loan EMI",
    slug: "how-to-calculate-home-loan-emi",
    description:
      "Learn how banks calculate EMI using the standard formula and understand the factors that affect your monthly payment.",
    image: "/guides/home-loan-emi.jpg",
    category: "Loans",
    readingTime: "6 min read",
    publishedAt: "2 Jul 2026",
    featured: true,
  },
  {
    id: 2,
    title: "SIP vs FD: Which Investment is Better?",
    slug: "sip-vs-fd",
    description:
      "Compare SIP and Fixed Deposits based on returns, risk, liquidity and investment goals.",
    image: "/guides/sip-vs-fd.jpg",
    category: "Investing",
    readingTime: "5 min read",
    publishedAt: "28 Jun 2026",
  },
  {
    id: 3,
    title: "Income Tax Saving Tips for Beginners",
    slug: "income-tax-saving-tips",
    description:
      "Simple strategies to reduce your tax liability using deductions and smart financial planning.",
    image: "/guides/tax-saving.jpg",
    category: "Tax",
    readingTime: "7 min read",
    publishedAt: "25 Jun 2026",
  },
  {
    id: 4,
    title: "What is Compound Interest?",
    slug: "what-is-compound-interest",
    description:
      "Understand the power of compounding and how it helps grow your wealth over time.",
    image: "/guides/compound-interest.jpg",
    category: "Investing",
    readingTime: "4 min read",
    publishedAt: "20 Jun 2026",
  },
    {
    id: 5,
    title: "What is Compound money?",
    slug: "what-is-compound-money",
    description:
      "Understand the power of compounding and how it helps grow your wealth over time.",
    image: "/guides/compound-interest.jpg",
    category: "Investing",
    readingTime: "4 min read",
    publishedAt: "20 Jun 2026",
  },
];