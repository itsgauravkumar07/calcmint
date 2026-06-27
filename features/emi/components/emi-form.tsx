"use client";

import { useMemo, useState } from "react";
import {
  calculateEMI,
  generateEmiSchedule,
} from "@/features/emi/lib";

import { EmiSummary } from "./emi-summary";

import { CalculatorInput } from "@/components/common/calculator-input";
import { AmortizationTable } from "./amortization-table";
import { CalculatorLayout } from "@/components/calculator/calculator-layout";

export function EmiForm() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    return calculateEMI({
      principal,
      annualRate: rate,
      tenureYears: years,
    });
  }, [principal, rate, years]);

  const schedule = useMemo(() => {
  return generateEmiSchedule({
    principal,
    annualRate: rate,
    tenureYears: years,
  });
}, [principal, rate, years]);

  return (
  <CalculatorLayout
    left={
      <div className="space-y-8 rounded-2xl border bg-white p-6 shadow-sm">

        <CalculatorInput
          label="Loan Amount"
          type="currency"
          value={principal}
          min={10000}
          max={50000000}
          step={10000}
          onChange={setPrincipal}
        />

        <CalculatorInput
          label="Interest Rate"
          type="percentage"
          value={rate}
          min={1}
          max={25}
          step={0.1}
          onChange={setRate}
        />

        <CalculatorInput
          label="Loan Tenure"
          type="years"
          value={years}
          min={1}
          max={30}
          step={1}
          onChange={setYears}
        />

      </div>
    }
    right={<EmiSummary result={result} />}
  >
    {/* We'll add Formula, Schedule, FAQs here later */}
  </CalculatorLayout>
);
}