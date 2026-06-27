import {
  Calculator,
  Landmark,
  PiggyBank,
  Receipt,
  Home,
  type LucideIcon,
} from "lucide-react";

export interface CalculatorItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  featured: boolean;
  icon: LucideIcon;
}

export const calculators: CalculatorItem[] = [
  {
    id: 1,
    title: "EMI Calculator",
    slug: "emi-calculator",
    description: "Calculate your monthly loan EMI instantly.",
    featured: true,
    icon: Landmark,
  },
  {
    id: 2,
    title: "SIP Calculator",
    slug: "sip-calculator",
    description: "Estimate your SIP investment returns.",
    featured: true,
    icon: PiggyBank,
  },
  {
    id: 3,
    title: "FD Calculator",
    slug: "fd-calculator",
    description: "Calculate Fixed Deposit maturity amount.",
    featured: true,
    icon: Calculator,
  },
  {
    id: 4,
    title: "GST Calculator",
    slug: "gst-calculator",
    description: "Calculate GST instantly.",
    featured: true,
    icon: Receipt,
  },
  {
    id: 5,
    title: "Home Loan Calculator",
    slug: "home-loan-calculator",
    description: "Estimate your Home Loan EMI.",
    featured: true,
    icon: Home,
  },
];