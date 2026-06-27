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
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <p
        className={cn(
          "mt-2 text-2xl font-bold tracking-tight",
          highlight ? "text-emerald-600 text-3xl" : "text-slate-900"
        )}
      >
        {value}
      </p>
    </div>
  );
}