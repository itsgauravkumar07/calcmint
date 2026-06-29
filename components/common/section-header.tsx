import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  center = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        center && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
          {badge}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}