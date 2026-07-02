import {
  Calculator,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section, SectionHeader } from "@/components/common";

const features = [
  {
    label: "Accuracy",
    icon: Calculator,
    title: "Accurate Calculations",
    description:
      "Every calculator uses industry-standard financial formulas to deliver reliable and precise results.",
  },
  {
    label: "Learning",
    icon: BookOpen,
    title: "Learn While You Calculate",
    description:
      "Understand every result with formulas, worked examples and frequently asked questions.",
  },
  {
    label: "Trust",
    icon: ShieldCheck,
    title: "100% Free Forever",
    description:
      "No sign-up, no subscriptions and no hidden charges. Everything is completely free.",
  },
];

export function WhyCalcMint() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <SectionHeader
          center
          badge="Why CalcMint?"
          title="More Than Just Financial Calculators"
          description="Powerful tools designed to help you calculate accurately, understand your results and make better financial decisions."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
                  {feature.label}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-text-secondary">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}