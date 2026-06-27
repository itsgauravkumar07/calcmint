import type { EmiInput, EmiResult } from "../types";

export function calculateEMI({
  principal,
  annualRate,
  tenureYears,
}: EmiInput): EmiResult {
  const monthlyRate = annualRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  if (monthlyRate === 0) {
    const emi = principal / totalMonths;

    return {
      emi,
      totalInterest: 0,
      totalPayment: principal,
    };
  }

  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;

  return {
    emi,
    totalInterest,
    totalPayment,
  };
}