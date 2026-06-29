import { cn } from "@/lib/utils";

import {
  SectionTitle,
  Lead,
} from "@/components/typography";

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
        "space-y-5",
        center && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
          {badge}
        </span>
      )}

      <SectionTitle>
        {title}
      </SectionTitle>

      {description && (
        <Lead>
          {description}
        </Lead>
      )}
    </div>
  );
}