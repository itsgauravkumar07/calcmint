"use client";

import { Section, SectionHeader } from "@/components/common";
import { DataTable } from "@/components/common/data-table";

import { formatCurrency } from "@/features/emi/lib";
import type { EmiScheduleItem } from "../types";

interface AmortizationTableProps {
  schedule: EmiScheduleItem[];
}

export function AmortizationTable({
  schedule,
}: AmortizationTableProps) {
  return (
    <Section>
      <SectionHeader
        badge="Repayment Schedule"
        title="Amortization Schedule"
        description="View a month-by-month breakdown of your loan repayment, including EMI, principal paid, interest paid, and the remaining loan balance."
      />

        <DataTable
          columns={[
            {
              key: "month",
              header: "Month",
            },
            {
              key: "emi",
              header: "EMI",
              render: (value) =>
                formatCurrency(Number(value)),
            },
            {
              key: "principalPaid",
              header: "Principal",
              render: (value) =>
                formatCurrency(Number(value)),
            },
            {
              key: "interestPaid",
              header: "Interest",
              render: (value) =>
                formatCurrency(Number(value)),
            },
            {
              key: "balance",
              header: "Balance",
              render: (value) =>
                formatCurrency(Number(value)),
            },
          ]}
          data={schedule}
        />
    </Section>
  );
}