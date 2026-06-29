import { Label } from "@/components/typography";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  title: string;
  value: string;
  className?: string;
  highlight?: boolean;
}

export function ResultCard({
  title,
  value,
  className,
  highlight = false,
}: ResultCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 card-shadow transition-all duration-300 card-shadow-hover",
        className
      )}
    >
      <Label>{title}</Label>

      <p
        className={cn(
    "rounded-2xl border border-border bg-card p-6 card-shadow transition-all duration-300 card-shadow-hover",
    highlight && "border-primary/20 bg-primary/5"
  )}
      >
        {value}
      </p>
    </div>
  );
}