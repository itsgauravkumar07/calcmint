"use client";

import type { EmiScheduleItem } from "@/features/emi/types";

interface AmortizationTableProps {
  schedule: EmiScheduleItem[];
}

export function AmortizationTable({
  schedule,
}: AmortizationTableProps) {
  return (
    <div className="mt-10 rounded-2xl border bg-white shadow-sm overflow-hidden">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">
          Amortization Schedule
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Month-by-month breakdown of your loan repayment.
        </p>
      </div>

      <div className="max-h-[500px] overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-slate-50">
            <tr className="border-b">
              <th className="p-4 text-left">Month</th>
              <th className="p-4 text-right">EMI</th>
              <th className="p-4 text-right">Principal</th>
              <th className="p-4 text-right">Interest</th>
              <th className="p-4 text-right">Balance</th>
            </tr>
          </thead>

          <tbody>
            {schedule.map((item) => (
              <tr
                key={item.month}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4">{item.month}</td>

                <td className="p-4 text-right">
                  ₹ {item.emi.toLocaleString("en-IN")}
                </td>

                <td className="p-4 text-right">
                  ₹ {item.principalPaid.toLocaleString("en-IN")}
                </td>

                <td className="p-4 text-right">
                  ₹ {item.interestPaid.toLocaleString("en-IN")}
                </td>

                <td className="p-4 text-right">
                  ₹ {item.balance.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}