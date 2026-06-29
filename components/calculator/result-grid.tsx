import { cn } from "@/lib/utils";

interface ResultGridProps {
  children: React.ReactNode;
  className?: string;
}

export function ResultGrid({
  children,
  className,
}: ResultGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
}