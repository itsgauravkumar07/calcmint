import type { EmiInput, EmiScheduleItem } from "../types";

export function generateEmiSchedule({
  principal,
  annualRate,
  tenureYears,
}: EmiInput): EmiScheduleItem[] {
  const monthlyRate = annualRate / 12 / 100;
  const months = tenureYears * 12;

  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  let balance = principal;

  const schedule: EmiScheduleItem[] = [];

  for (let month = 1; month <= months; month++) {
    const interestPaid = balance * monthlyRate;
    const principalPaid = emi - interestPaid;

    balance -= principalPaid;

    schedule.push({
      month,
      emi,
      principalPaid,
      interestPaid,
      balance: Math.max(balance, 0),
    });
  }

  return schedule;
}