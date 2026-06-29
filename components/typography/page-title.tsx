import { cn } from "@/lib/utils";

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({
  children,
  className,
}: PageTitleProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  );
}