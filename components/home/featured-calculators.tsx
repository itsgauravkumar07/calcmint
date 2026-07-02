import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { calculators } from "@/data/calculator";

import {
  CalculatorCard,
} from "@/components/calculator";

import { Container } from "@/components/layout/container";

import {
  Section,
  SectionHeader,
} from "@/components/common";

import { Button } from "@/components/ui/button";

export function FeaturedCalculators() {
  const featuredCalculators = calculators.filter(
    (calculator) => calculator.featured
  );

  return (
    <Section className="bg-surface-muted">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            badge="Popular Tools"
            title="Featured Calculators"
            description="Explore our most popular financial calculators to make smarter borrowing, investing, and tax decisions."
          />

          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/calculators">
              View All Calculators
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCalculators.map((calculator) => (
            <CalculatorCard
              key={calculator.id}
              calculator={calculator}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}