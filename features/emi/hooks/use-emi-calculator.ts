"use client";

import { useMemo, useState } from "react";

import {
  calculateEMI,
  generateEmiSchedule,
} from "../lib";

export function useEmiCalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    return calculateEMI({
      principal,
      annualRate: rate,
      tenureYears: years,
    });
  }, [principal, rate, years]);

  const schedule = useMemo(() => {
    return generateEmiSchedule({
      principal,
      annualRate: rate,
      tenureYears: years,
    });
  }, [principal, rate, years]);

  return {
    principal,
    rate,
    years,

    setPrincipal,
    setRate,
    setYears,

    result,
    schedule,
  };
}