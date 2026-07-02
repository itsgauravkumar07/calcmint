import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  BookOpen,
} from "lucide-react";

import {
  Section,
  SectionHeader,
} from "@/components/common";

import { Container } from "@/components/layout/container";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <Section>

      <Container>

        <div className="relative overflow-hidden rounded-4xl border border-border bg-card px-6 py-16 text-center card-shadow md:px-12">

          {/* Background */}

          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">

            <SectionHeader
              center
              badge="🚀 Free Forever"
              title="Ready to Make Smarter Financial Decisions?"
              description="Explore accurate financial calculators and practical guides designed to help you save time, plan better, and make confident money decisions."
            />

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Button
                asChild
                size="lg"
              >
                <Link href="/calculators">

                  <Calculator className="mr-2 h-5 w-5" />

                  Explore Calculators

                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <Link href="/guides">

                  <BookOpen className="mr-2 h-5 w-5" />

                  Browse Guides

                  <ArrowRight className="ml-2 h-4 w-4" />

                </Link>
              </Button>

            </div>

            {/* Small Stats */}

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">

              <div>

                <h3 className="text-3xl font-bold text-primary">
                  50+
                </h3>

                <p className="mt-2 text-sm text-text-secondary">
                  Financial Calculators
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-primary">
                  100+
                </h3>

                <p className="mt-2 text-sm text-text-secondary">
                  Expert Guides
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-primary">
                  100%
                </h3>

                <p className="mt-2 text-sm text-text-secondary">
                  Free to Use
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}