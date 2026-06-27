import type { EmiInput } from "../types";

export function validateEMI({
  principal,
  annualRate,
  tenureYears,
}: EmiInput) {
  return (
    principal > 0 &&
    annualRate > 0 &&
    tenureYears > 0
  );
}