import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

import {
  Badge,
  Lead,
  PageTitle,
} from "@/components/typography";

const popularCalculators = [
  "EMI",
  "SIP",
  "FD",
  "GST",
  "Home Loan",
];

export function Hero() {
  return (
    <section className="border-b bg-gradient-to-b from-background via-background to-surface-muted">
      <Container>
        <div className="grid min-h-[80vh] items-center gap-16 py-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <Badge>
              🚀 100% Free Finance Tools
            </Badge>

            <PageTitle className="mt-6 max-w-2xl">
              Smart Financial{" "}
              <span className="block text-primary">
                Calculators
              </span>
            </PageTitle>

            <Lead className="mt-6 max-w-xl">
              Calculate EMI, SIP returns, loan eligibility,
              income tax, GST, FD maturity and more with
              fast, accurate and completely free financial
              calculators.
            </Lead>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/calculators">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Calculators
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/guides">
                  Financial Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12">
              <p className="mb-4 text-sm font-medium text-text-muted">
                Popular Searches
              </p>

              <div className="flex flex-wrap gap-3">
                {popularCalculators.map((item) => (
                  <Link
                    key={item}
                    href="/calculators"
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-[420px] w-[420px] items-center justify-center rounded-3xl border border-border bg-card card-shadow">
              <span className="text-text-muted">
                Hero Illustration
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}