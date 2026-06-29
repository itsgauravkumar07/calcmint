import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { calculatorRegistry } from "@/data/calculator-registry";

import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";

import { CalculatorCard } from "./calculator-card";

interface RelatedCalculatorsProps {
  currentSlug: string;
  limit?: number;
}

export function RelatedCalculators({
  currentSlug,
  limit = 3,
}: RelatedCalculatorsProps) {
  const calculators = Object.values(calculatorRegistry)
    .filter((calculator) => calculator.slug !== currentSlug)
    .slice(0, limit);

  return (
    <Section className="mt-24">
      <SectionHeader
        badge="Explore More"
        title="Related Calculators"
        description="Continue planning your finances with our other free financial calculators."
        center
      />

      <div className="grid gap-6 md:grid-cols-3">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.slug}
            calculator={calculator}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/calculators"
          className="inline-flex items-center font-semibold text-emerald-600 transition hover:text-emerald-700"
        >
          View All Calculators

          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}