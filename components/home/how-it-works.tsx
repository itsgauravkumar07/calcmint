import {
  Calculator,
  Keyboard,
  BarChart3,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section, SectionHeader } from "@/components/common";

const steps = [
  {
    number: "01",
    icon: Calculator,
    title: "Choose Calculator",
    description:
      "Select the calculator that matches your financial goal.",
  },
  {
    number: "02",
    icon: Keyboard,
    title: "Enter Details",
    description:
      "Input loan amount, interest rate, investment or tax values.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "View Results",
    description:
      "Get instant calculations, charts and detailed financial insights.",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <Container>
        <SectionHeader
          center
          badge="How It Works"
          title="Calculate in Three Simple Steps"
          description="Fast, accurate and completely free financial calculations."
        />

        <div className="relative mt-20">

          {/* Desktop Journey */}

          <div className="hidden lg:grid grid-cols-3 items-start">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Connector */}

                  {index < steps.length - 1 && (
                    <div className="absolute left-[58%] top-14 w-full">
                      <svg
                        width="100%"
                        height="70"
                        viewBox="0 0 260 70"
                        fill="none"
                      >
                        <path
                          d="M10 20 C90 70 170 0 250 35"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="7 7"
                          className="text-border"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Step */}

                  <span className="mb-4 text-sm font-bold text-primary">
                    {step.number}
                  </span>

                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-primary/20 bg-background">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs leading-7 text-text-secondary">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile */}

          <div className="space-y-12 lg:hidden">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-primary/20 bg-background">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="mt-3 h-14 border-l-2 border-dashed border-border" />
                    )}
                  </div>

                  <div className="pt-2">
                    <span className="text-sm font-bold text-primary">
                      {step.number}
                    </span>

                    <h3 className="mt-1 text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}