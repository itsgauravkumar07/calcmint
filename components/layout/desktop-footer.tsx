import Link from "next/link";

import {
  Calculator,
  BookOpen,
  Building2,
  FileText,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Container } from "./container";
import { Logo } from "./logo";

import {
  CardTitle,
  Paragraph,
} from "@/components/typography";

const footerNavigation = {
  calculators: [
    {
      title: "EMI Calculator",
      href: "/calculators/emi-calculator",
    },
    {
      title: "SIP Calculator",
      href: "/calculators/sip-calculator",
    },
    {
      title: "GST Calculator",
      href: "/calculators/gst-calculator",
    },
    {
      title: "FD Calculator",
      href: "/calculators/fd-calculator",
    },
  ],

  guides: [
    {
      title: "Loan Guides",
      href: "/guides/loans",
    },
    {
      title: "Investment Guides",
      href: "/guides/investing",
    },
    {
      title: "Tax Guides",
      href: "/guides/tax",
    },
    {
      title: "Savings Guides",
      href: "/guides/savings",
    },
  ],

  company: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Privacy",
      href: "/privacy-policy",
    },
    {
      title: "Terms",
      href: "/terms",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],

  resources: [
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Sitemap",
      href: "/sitemap.xml",
    },
    {
      title: "Disclaimer",
      href: "/disclaimer",
    },
  ],
};

export function DesktopFooter() {
  return (
    <footer className="pb-8">

      <Container>

        <div className="grid gap-5 lg:grid-cols-12">

          {/* Brand */}

          <div className="rounded-4xl border bg-card p-8 card-shadow lg:col-span-5">

            <Logo />

            <Paragraph className="mt-6 max-w-md">
              Free financial calculators and practical
              financial guides designed to help you make
              smarter money decisions with confidence.
            </Paragraph>

            <Link
              href="/calculators"
              className="mt-8 inline-flex items-center gap-2 font-medium text-primary transition hover:gap-3"
            >
              Explore Calculators

              <ArrowUpRight className="h-4 w-4" />
            </Link>

          </div>

          {/* Company */}

          <FooterCard
            className="lg:col-span-3"
            title="Company"
            icon={<Building2 className="h-5 w-5" />}
            links={footerNavigation.company}
          />

          {/* Resources */}

          <FooterCard
            className="lg:col-span-4"
            title="Resources"
            icon={<FileText className="h-5 w-5" />}
            links={footerNavigation.resources}
          />

          {/* Calculators */}

          <FooterCard
            className="lg:col-span-4"
            title="Calculators"
            icon={<Calculator className="h-5 w-5" />}
            links={footerNavigation.calculators}
          />

          {/* Guides */}

          <FooterCard
            className="lg:col-span-4"
            title="Guides"
            icon={<BookOpen className="h-5 w-5" />}
            links={footerNavigation.guides}
          />

          {/* Bottom */}

          <div className="rounded-4xl border bg-card p-8 card-shadow lg:col-span-4">

            <CardTitle className="mb-6">
              Connect
            </CardTitle>

            <div className="flex gap-3">

              <SocialButton
                href="#"
                icon={<FaXTwitter />}
              />

              <SocialButton
                href="#"
                icon={<FaGithub />}
              />

              <SocialButton
                href="#"
                icon={<FaLinkedinIn />}
              />

            </div>

            <Paragraph className="mt-8">
              © {new Date().getFullYear()} CalcMint
            </Paragraph>

            <Paragraph className="mt-2 text-sm">
              Made with ❤️ in India.
            </Paragraph>

          </div>

        </div>

      </Container>

    </footer>
  );
}

interface FooterCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  links: {
    title: string;
    href: string;
  }[];
}

function FooterCard({
  title,
  icon,
  links,
  className,
}: FooterCardProps) {
  return (
    <div
      className={`rounded-4xl border bg-card p-8 card-shadow ${className}`}
    >
      <div className="mb-6 flex items-center gap-3">

        <div className="text-primary">
          {icon}
        </div>

        <CardTitle className="text-lg">
          {title}
        </CardTitle>

      </div>

      <nav className="space-y-4">

        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="block transition-colors hover:text-primary"
          >
            {link.title}
          </Link>
        ))}

      </nav>

    </div>
  );
}

function SocialButton({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex h-11 w-11 items-center justify-center rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
    >
      {icon}
    </Link>
  );
}