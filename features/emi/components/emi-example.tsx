import { Card } from "@/components/ui/card";
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
    <Card className="mt-8 rounded-2xl p-6">
      <h2 className="text-2xl font-bold">
        Example Calculation
      </h2>

      <p className="mt-4 leading-8 text-slate-600">
        Suppose you borrow{" "}
        <strong>{formatCurrency(principal)}</strong> at an
        annual interest rate of{" "}
        <strong>{annualRate}%</strong> for{" "}
        <strong>{tenureYears} years</strong>.
      </p>

      <p className="mt-4 leading-8 text-slate-600">
        Based on these values, your monthly EMI will be{" "}
        <strong className="text-emerald-600">
          {formatCurrency(emi)}
        </strong>.
      </p>

      <p className="mt-4 leading-8 text-slate-600">
        Every monthly payment consists of both principal repayment
        and interest. In the initial months, a larger portion goes
        toward interest, while over time, more of the payment is
        applied to the principal.
      </p>
    </Card>
  );
}