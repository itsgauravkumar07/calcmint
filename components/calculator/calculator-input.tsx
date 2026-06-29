"use client";

import { Slider } from "@/components/ui/slider";
import { NumericFormat } from "react-number-format";

interface CalculatorInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  type?: "currency" | "percentage" | "years";
  onChange: (value: number) => void;
}

export function CalculatorInput({
  label,
  value,
  min,
  max,
  step = 1,
  type = "currency",
  onChange,
}: CalculatorInputProps) {
  const prefix = type === "currency" ? "₹ " : undefined;

  const suffix =
    type === "percentage"
      ? " %"
      : type === "years"
      ? " Years"
      : undefined;

  const decimalScale = type === "percentage" ? 2 : 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="font-medium">{label}</label>

        <NumericFormat
          value={value}
          thousandSeparator={type === "currency"}
          thousandsGroupStyle={type === "currency" ? "lakh" : undefined}
          allowNegative={false}
          decimalScale={decimalScale}
          fixedDecimalScale={false}
          prefix={prefix}
          suffix={suffix}
          onValueChange={(values) => {
            onChange(values.floatValue ?? 0);
          }}
          className="w-44 rounded-lg border border-slate-300 px-3 py-2 text-right font-medium focus:border-emerald-500 focus:outline-none"
        />
      </div>

      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(values) => onChange(values[0])}
      />
    </div>
  );
}