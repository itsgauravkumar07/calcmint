import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Calculator,
} from "lucide-react";

import { Section, SectionHeader } from "@/components/common";
import { Container } from "@/components/layout/container";

import { Button } from "@/components/ui/button";

import {
  CardTitle,
  Paragraph,
  Label,
} from "@/components/typography";

const highlights = [
  "Instant EMI Calculation",
  "Interactive Charts",
  "Amortization Schedule",
  "Formula Included",
];

export function CalculatorOfWeek() {
  return (
    <Section>
      <Container>

        <div className="relative overflow-hidden rounded-4xl bg-primary px-8 py-10 lg:px-14 lg:py-16">

          {/* Background Blur */}

          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-14 lg:grid-cols-2">

            {/* Left */}

            <div>

              <SectionHeader
                badge="⭐ Calculator of the Week"
                title="EMI Calculator"
                description="Calculate your monthly EMI with interactive charts, repayment schedules, formulas and detailed explanations."
                titleClassName="text-primary-foreground"
                descriptionClassName="text-primary-foreground/80"
                badgeClassName="bg-white/10 border border-white/20 text-primary-foreground"
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-white" />

                    <Label className="text-primary-foreground">
                      {item}
                    </Label>
                  </div>
                ))}

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button
                  asChild
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90"
                >
                  <Link href="/calculators/emi-calculator">
                    Try Calculator

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"
                >
                  <Link href="/calculators">
                    Browse All
                  </Link>
                </Button>

              </div>

            </div>

            {/* Right */}

            <div className="flex justify-center lg:justify-end">

              <div className="w-full max-w-md rounded-3xl bg-card p-8 card-shadow">

                <div className="flex items-center justify-between">

                  <div>

                    <Label>
                      Monthly EMI
                    </Label>

                    <CardTitle className="mt-2 text-primary text-4xl">
                      ₹24,562
                    </CardTitle>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Calculator className="h-7 w-7" />
                  </div>

                </div>

                <div className="mt-8 space-y-6">

                  <div>

                    <div className="mb-2 flex items-center justify-between">

                      <Paragraph className="text-sm">
                        Principal
                      </Paragraph>

                      <Label>
                        ₹10,00,000
                      </Label>

                    </div>

                    <div className="h-3 rounded-full bg-border overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-primary" />
                    </div>

                  </div>

                  <div>

                    <div className="mb-2 flex items-center justify-between">

                      <Paragraph className="text-sm">
                        Interest
                      </Paragraph>

                      <Label>
                        ₹3,24,900
                      </Label>

                    </div>

                    <div className="h-3 rounded-full bg-border overflow-hidden">
                      <div className="h-full w-1/4 rounded-full bg-chart-5" />
                    </div>

                  </div>

                  <div className="rounded-2xl bg-surface-muted p-5">

                    <div className="flex items-center justify-between">

                      <div>

                        <Paragraph className="text-sm">
                          Total Payment
                        </Paragraph>

                        <CardTitle className="mt-2 text-primary">
                          ₹13,24,900
                        </CardTitle>

                      </div>

                      <Award className="h-9 w-9 text-primary" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}