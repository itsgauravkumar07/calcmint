import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight text-slate-900 md:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}