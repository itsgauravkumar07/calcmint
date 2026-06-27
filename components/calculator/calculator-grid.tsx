import { calculators } from "@/data/calculator";
import { CalculatorCard } from "./calculator-card";

interface CalculatorGridProps {
  featuredOnly?: boolean;
}

export function CalculatorGrid({
  featuredOnly = false,
}: CalculatorGridProps) {
  const items = featuredOnly
    ? calculators.filter((item) => item.featured)
    : calculators;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((calculator) => (
        <CalculatorCard
          key={calculator.id}
          calculator={calculator}
        />
      ))}
    </div>
  );
}