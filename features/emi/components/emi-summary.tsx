import {
  ResultCard,
  ResultGrid,
} from "@/components/calculator";

import { EmiResult } from "@/features/emi/types";

import { EmiPieChart } from "./emi-pie-chart";

interface Props {
  result: EmiResult;
}

export function EmiSummary({
  result,
}: Props) {
  return (
    <div className="space-y-6">
      <ResultCard
        title="Monthly EMI"
        value={`₹ ${result.emi.toLocaleString("en-IN")}`}
        highlight
      />

      <ResultGrid>
        <ResultCard
          title="Total Interest"
          value={`₹ ${result.totalInterest.toLocaleString("en-IN")}`}
        />

        <ResultCard
          title="Total Payment"
          value={`₹ ${result.totalPayment.toLocaleString("en-IN")}`}
        />
      </ResultGrid>

      <EmiPieChart
        principal={result.totalPayment - result.totalInterest}
        interest={result.totalInterest}
      />
    </div>
  );
}