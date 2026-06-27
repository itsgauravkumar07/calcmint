import Link from "next/link";
import { Search } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const popularCalculators = [
  "EMI",
  "SIP",
  "FD",
  "GST",
  "Home Loan",
];

export function Hero() {
  return (
    <section className="border-b bg-gradient-to-b from-white to-slate-50">
      <Container>
        <div className="grid min-h-[80vh] items-center gap-12 py-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
              🚀 100% Free Finance Tools
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
              Smart Financial
              <span className="block text-emerald-600">
                Calculators
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Calculate EMI, SIP returns,
              loan eligibility, taxes,
              GST, FD maturity and more
              with free financial tools.
            </p>

            <div className="mt-8">

              <Button
                size="lg"
                className="rounded-xl"
                asChild
              >
                <Link href="/calculators">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Calculators
                </Link>
              </Button>

            </div>

            <div className="mt-10">

              <p className="mb-4 text-sm font-medium text-slate-500">
                Popular Searches
              </p>

              <div className="flex flex-wrap gap-3">

                {popularCalculators.map((item) => (
                  <Link
                    key={item}
                    href="/calculators"
                    className="rounded-full border bg-white px-4 py-2 text-sm hover:border-emerald-500 hover:text-emerald-600"
                  >
                    {item}
                  </Link>
                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="hidden lg:flex items-center justify-center">

            <div className="flex h-[420px] w-[420px] items-center justify-center rounded-3xl border bg-white shadow-xl">

              <span className="text-slate-400">
                Hero Illustration
              </span>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}