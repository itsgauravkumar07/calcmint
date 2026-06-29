"use client";

import { CalculatorInput, InfoCard } from "@/components/calculator";

interface EmiFormProps {
  principal: number;
  rate: number;
  years: number;

  onPrincipalChange: (value: number) => void;
  onRateChange: (value: number) => void;
  onYearsChange: (value: number) => void;
}

export function EmiForm({
  principal,
  rate,
  years,
  onPrincipalChange,
  onRateChange,
  onYearsChange,
}: EmiFormProps) {
  return (
    <InfoCard
      title="Loan Details"
      description="Adjust the loan amount, interest rate, and tenure to instantly calculate your monthly EMI."
    >
      <div className="space-y-8">
        <CalculatorInput
          label="Loan Amount"
          type="currency"
          value={principal}
          min={10000}
          max={50000000}
          step={10000}
          onChange={onPrincipalChange}
        />

        <CalculatorInput
          label="Interest Rate"
          type="percentage"
          value={rate}
          min={1}
          max={25}
          step={0.1}
          onChange={onRateChange}
        />

        <CalculatorInput
          label="Loan Tenure"
          type="years"
          value={years}
          min={1}
          max={30}
          step={1}
          onChange={onYearsChange}
        />
      </div>
    </InfoCard>
  );
}