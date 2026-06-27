"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface EmiPieChartProps {
  principal: number;
  interest: number;
}

const dataColors = {
  principal: "#10b981",
  interest: "#f59e0b",
};

export function EmiPieChart({
  principal,
  interest,
}: EmiPieChartProps) {
  const data = [
    {
      name: "Principal",
      value: principal,
      color: dataColors.principal,
    },
    {
      name: "Interest",
      value: interest,
      color: dataColors.interest,
    },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-semibold">
        Payment Breakdown
      </h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={3}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}
            </Pie>

           <Tooltip
            formatter={(value, name) => [
              `₹ ${Number(value).toLocaleString("en-IN")}`,
              name,
            ]}
          />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
            <span>Principal</span>
          </div>

          <span className="font-semibold">
            ₹ {principal.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-amber-500" />
            <span>Interest</span>
          </div>

          <span className="font-semibold">
            ₹ {interest.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
}