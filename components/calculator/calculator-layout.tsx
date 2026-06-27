import { ReactNode } from "react";

interface CalculatorLayoutProps {
  left: ReactNode;
  right: ReactNode;
  children?: ReactNode;
}

export function CalculatorLayout({
  left,
  right,
  children,
}: CalculatorLayoutProps) {
  return (
    <div className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <aside className="lg:sticky lg:top-24 h-fit">
          {left}
        </aside>

        <aside className="lg:sticky lg:top-24 h-fit">
          {right}
        </aside>
      </div>

      {children}
    </div>
  );
}