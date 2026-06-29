import { Lightbulb } from "lucide-react";

import { InfoCard } from "@/components/calculator";
import { Section } from "@/components/common";
import { SectionHeader } from "@/components/common";
import { Paragraph } from "@/components/typography";

import { formatCurrency } from "../lib";

interface EmiExampleProps {
  principal: number;
  annualRate: number;
  tenureYears: number;
  emi: number;
}

export function EmiExample({
  principal,
  annualRate,
  tenureYears,
  emi,
}: EmiExampleProps) {
  return (
    <Section>
      <SectionHeader
        badge="Example"
        title="EMI Calculation Example"
        description="See how the EMI formula works with a practical example using the values you've entered."
      />

      <InfoCard
        icon={<Lightbulb className="h-5 w-5" />}
        title="Worked Example"
      >
        <div className="space-y-6">
          <Paragraph>
            Suppose you borrow{" "}
            <strong className="text-foreground">
              {formatCurrency(principal)}
            </strong>{" "}
            at an annual interest rate of{" "}
            <strong className="text-foreground">
              {annualRate}%
            </strong>{" "}
            for{" "}
            <strong className="text-foreground">
              {tenureYears} years
            </strong>
            .
          </Paragraph>

          <Paragraph>
            Based on these values, your monthly EMI will be{" "}
            <strong className="text-primary text-lg">
              {formatCurrency(emi)}
            </strong>
            .
          </Paragraph>

          <div className="rounded-2xl border border-border bg-surface-muted p-5">
            <Paragraph>
              Every monthly EMI includes two parts:
            </Paragraph>

            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

                <Paragraph>
                  During the initial months, a larger portion of your EMI
                  goes toward paying the interest.
                </Paragraph>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

                <Paragraph>
                  As the loan progresses, a larger portion of each EMI
                  goes toward reducing the principal amount.
                </Paragraph>
              </li>
            </ul>
          </div>
        </div>
      </InfoCard>
    </Section>
  );
}