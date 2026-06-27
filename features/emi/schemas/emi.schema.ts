import { z } from "zod";

export const emiSchema = z.object({
  principal: z.number().positive(),
  annualRate: z.number().positive(),
  tenureYears: z.number().positive(),
});
