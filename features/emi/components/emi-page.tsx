"use client";

import { useEmiCalculator } from "../hooks";

import {
  CalculatorCTA,
  CalculatorLayout,
} from "@/components/calculator";

import { EmiForm } from "./emi-form";
import { EmiSummary } from "./emi-summary";
import { EmiFormula } from "./emi-formula";
import { EmiExample } from "./emi-example";
import { AmortizationTable } from "./amortization-table";
import { EmiFaq } from "./emi-faq";

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

      <AmortizationTable
        schedule={emi.schedule}
      />

      <EmiFaq />

      <CalculatorCTA />
    </CalculatorLayout>
  );
}