"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigation } from "@/config/navigation";

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="rounded-lg p-2 transition hover:bg-slate-100"
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72">
          <div className="mt-10 flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-lg font-medium hover:text-emerald-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/calculators"
              className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Get Started
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}