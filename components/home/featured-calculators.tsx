import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { calculators } from "@/data/calculator";
import { CalculatorCard } from "@/components/calculator/calculator-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";

export function FeaturedCalculators() {
  const featuredCalculators = calculators.filter(
    (calculator) => calculator.featured
  );

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Heading
            title="Featured Calculators"
            description="Explore our most popular finance calculators to make smarter financial decisions."
          />

          <Button asChild variant="outline">

            <Link href="/calculators">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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