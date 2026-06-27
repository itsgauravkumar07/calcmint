import {
  Landmark,
  PiggyBank,
  Receipt,
  Wallet,
  Briefcase,
  Shield,
  type LucideIcon,
} from "lucide-react";

export interface CategoryItem {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

export const categories: CategoryItem[] = [
  {
    title: "Loans",
    slug: "loans",
    description: "EMI, Home Loan, Personal Loan",
    icon: Landmark,
  },
  {
    title: "Investments",
    slug: "investments",
    description: "SIP, FD, RD, PPF",
    icon: PiggyBank,
  },
  {
    title: "Tax",
    slug: "tax",
    description: "GST & Income Tax",
    icon: Receipt,
  },
  {
    title: "Business",
    slug: "business",
    description: "Profit & Margin",
    icon: Briefcase,
  },
  {
    title: "Salary",
    slug: "salary",
    description: "CTC & In-Hand Salary",
    icon: Wallet,
  },
  {
    title: "Insurance",
    slug: "insurance",
    description: "Life & Health Insurance",
    icon: Shield,
  },
];