import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InfoCard } from "./info-card";

interface CalculatorCTAProps {
  title?: string;
  description?: string;
}

export function CalculatorCTA({
  title = "Need another calculator?",
  description = "Explore our collection of free finance calculators and financial guides to make smarter money decisions.",
}: CalculatorCTAProps) {
  return (
    <InfoCard className="mt-16 overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-emerald-50 p-10">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/calculators">
              View All Calculators
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <Link href="/guides">
              Browse Guides
            </Link>
          </Button>
        </div>
      </div>
    </InfoCard>
  );
}