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
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  center = false,

  className,
  badgeClassName,
  titleClassName,
  descriptionClassName,
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
        <span
          className={cn(
            "inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary",
            badgeClassName
          )}
        >
          {badge}
        </span>
      )}

      <SectionTitle className={titleClassName}>
        {title}
      </SectionTitle>

      {description && (
        <Lead className={descriptionClassName}>
          {description}
        </Lead>
      )}
    </div>
  );
}