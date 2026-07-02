import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Logo } from "./logo";

import { Paragraph, Label } from "@/components/typography";

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
};

export function MobileFooter() {
  return (
    <footer className="border-t bg-background lg:hidden">

      <div className="px-5 py-10">

        {/* Logo */}

        <div className="flex justify-center">

          <Logo />

        </div>

        <Paragraph className="mx-auto mt-5 max-w-sm text-center">
          Free financial calculators and practical
          guides to help you make smarter financial
          decisions.
        </Paragraph>

        {/* Navigation */}

        <Accordion
          type="multiple"
          className="mt-8"
        >

          <FooterAccordion
            title="Calculators"
            links={footerNavigation.calculators}
          />

          <FooterAccordion
            title="Guides"
            links={footerNavigation.guides}
          />

          <FooterAccordion
            title="Company"
            links={footerNavigation.company}
          />

        </Accordion>

        {/* Social */}

        <div className="mt-8 flex justify-center gap-4">

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

        {/* Copyright */}

        <div className="mt-8 border-t border-border pt-5 text-center">

          <Label>
            © {new Date().getFullYear()} CalcMint
          </Label>

          <Paragraph className="mt-2 text-sm">
            Made with ❤️ in India
          </Paragraph>

        </div>

      </div>

    </footer>
  );
}

interface FooterAccordionProps {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}

function FooterAccordion({
  title,
  links,
}: FooterAccordionProps) {
  return (
    <AccordionItem value={title}>

      <AccordionTrigger>
        {title}
      </AccordionTrigger>

      <AccordionContent>

        <div className="flex flex-col gap-3">

          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-text-secondary hover:text-primary"
            >
              {link.title}
            </Link>
          ))}

        </div>

      </AccordionContent>

    </AccordionItem>
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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-white"
    >
      {icon}
    </Link>
  );
}