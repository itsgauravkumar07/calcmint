export const categories = [
  "Loans",
  "Investment",
  "Tax",
  "Business",
  "Insurance",
  "Salary",
  "Real Estate",
] as const;

export type Category = (typeof categories)[number];