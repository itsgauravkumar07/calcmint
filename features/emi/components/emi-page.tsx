"use client";

import { useEmiCalculator } from "../hooks";

import { CalculatorLayout } from "@/components/calculator/calculator-layout";

import { EmiForm } from "./emi-form";
import { EmiSummary } from "./emi-summary";
import { AmortizationTable } from "./amortization-table";
import { EmiFormula } from "./emi-formula";
import { EmiExample } from "./emi-example";

export function EmiPage() {
  const emi = useEmiCalculator();

  return (
    <CalculatorLayout
      left={
        <EmiForm
          principal={emi.principal}
          rate={emi.rate}
          years={emi.years}
          onPrincipalChange={emi.setPrincipal}
          onRateChange={emi.setRate}
          onYearsChange={emi.setYears}
        />
      }
      right={
        <EmiSummary
          result={emi.result}
        />
      }
    >
      <AmortizationTable
        schedule={emi.schedule}
      />

      <EmiFormula
        principal={emi.principal}
        annualRate={emi.rate}
        tenureYears={emi.years}
        emi={emi.result.emi}
      />

      <EmiExample
        principal={emi.principal}
        annualRate={emi.rate}
        tenureYears={emi.years}
        emi={emi.result.emi}
      />

    </CalculatorLayout>
  );
}