import { Card } from "@/components/ui/card";
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
    <Card className="mt-8 rounded-2xl p-6">
      <h2 className="text-2xl font-bold">
        EMI Formula
      </h2>

      <p className="mt-4 text-slate-600">
        The Equated Monthly Installment (EMI) is calculated using the following formula:
      </p>

      <div className="my-8 overflow-x-auto rounded-xl bg-slate-50 p-6 text-center">
        <p className="text-2xl font-semibold">
          EMI = P × R × (1 + R)<sup>N</sup>
        </p>

        <p className="mt-2 text-xl">
          ─────────────────────────────
        </p>

        <p className="text-2xl font-semibold">
          ((1 + R)<sup>N</sup> − 1)
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <p className="font-medium">P (Principal)</p>
          <p className="mt-2 text-lg">
            {formatCurrency(principal)}
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="font-medium">R (Monthly Interest Rate)</p>
          <p className="mt-2 text-lg">
            {monthlyRate.toFixed(4)}%
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="font-medium">N (Loan Tenure)</p>
          <p className="mt-2 text-lg">
            {tenureYears * 12} Months
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="font-medium">Monthly EMI</p>
          <p className="mt-2 text-lg font-bold text-emerald-600">
            {formatCurrency(emi)}
          </p>
        </div>
      </div>
    </Card>
  );
}