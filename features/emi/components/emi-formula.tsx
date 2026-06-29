import { Calculator, Sigma } from "lucide-react";

import {
  InfoCard,
  ResultGrid,
  ResultCard,
} from "@/components/calculator";

import { SectionHeader } from "@/components/common";

import { formatCurrency } from "../lib";

interface EmiFormulaProps {
  principal: number;
  annualRate: number;
  tenureYears: number;
  emi: number;
}

export function EmiFormula({
  principal,
  annualRate,
  tenureYears,
  emi,
}: EmiFormulaProps) {
  const monthlyRate = annualRate / 12;

  return (
    <section className="mt-20">
      <SectionHeader
        badge="Formula"
        title="How EMI is Calculated"
        description="The Equated Monthly Installment (EMI) is calculated using a standard mathematical formula based on your loan amount, interest rate, and repayment tenure."
      />

      <InfoCard
        icon={<Calculator className="h-5 w-5" />}
        title="EMI Formula"
      >
        <div className="mt-8 rounded-2xl bg-surface-muted p-8 text-center">
          <div className="overflow-x-auto">
            <p className="text-3xl font-bold tracking-tight text-foreground">
              EMI = P × R × (1 + R)
              <sup>N</sup>
            </p>

            <p className="my-4 text-xl text-text-muted">
              ───────────────────────────────
            </p>

            <p className="text-3xl font-bold tracking-tight text-foreground">
              (1 + R)
              <sup>N</sup>
              − 1
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ResultGrid>
            <ResultCard
              title="Principal (P)"
              value={formatCurrency(principal)}
            />

            <ResultCard
              title="Monthly Rate (R)"
              value={`${monthlyRate.toFixed(4)}%`}
            />

            <ResultCard
              title="Tenure (N)"
              value={`${tenureYears * 12} Months`}
            />

            <ResultCard
              title="Monthly EMI"
              value={formatCurrency(emi)}
              highlight
            />
          </ResultGrid>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-primary/5 p-5">
          <Sigma className="mt-0.5 h-5 w-5 text-primary" />

          <p className="text-sm leading-7 text-text-secondary">
            <strong className="text-foreground">Where:</strong>{" "}
            <strong>P</strong> is the loan amount,
            <strong> R</strong> is the monthly interest rate, and
            <strong> N</strong> is the total number of monthly installments.
          </p>
        </div>
      </InfoCard>
    </section>
  );
}