"use client";

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
  );
}