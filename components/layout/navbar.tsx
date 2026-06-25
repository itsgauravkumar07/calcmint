"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "./container";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

import { navigation } from "@/config/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">

          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-emerald-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/calculators"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
            >
              Get Started
            </Link>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}