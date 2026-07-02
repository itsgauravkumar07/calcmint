import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}