import { EmiResult } from "@/features/emi/types";
import { ResultCard } from "@/components/calculator/result-card";
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
      />

      <div className="grid grid-cols-2 gap-4">

        <ResultCard
          title="Interest"
          value={`₹ ${result.totalInterest.toLocaleString("en-IN")}`}
        />

        <ResultCard
          title="Total Payment"
          value={`₹ ${result.totalPayment.toLocaleString("en-IN")}`}
        />

      </div>

      <EmiPieChart
        principal={
          result.totalPayment -
          result.totalInterest
        }
        interest={result.totalInterest}
      />

    </div>
  );
}