export interface EmiInput {
  principal: number;
  annualRate: number;
  tenureYears: number;
}

export interface EmiResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
}

export interface EmiScheduleItem {
  month: number;
  emi: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
}