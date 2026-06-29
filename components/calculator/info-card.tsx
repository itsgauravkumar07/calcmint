import { Card } from "@/components/ui/card";
import { CardTitle, Paragraph } from "@/components/typography";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function InfoCard({
  icon,
  title,
  description,
  children,
  className,
}: InfoCardProps) {
  return (
    <Card
      className={cn(
         "rounded-2xl border border-border-light bg-surface p-6 card-shadow transition-all duration-300 card-shadow-hover",
        className
      )}
    >

      {(icon || title) && (
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              {icon}
            </div>
          )}

          {title && (
            <CardTitle>
              {title}
            </CardTitle>
          )}
        </div>
      )}

      {description && (
        <Paragraph className="mt-2">
          {description}
        </Paragraph>
      )}

      <div
        className={cn(
          (title || description) && "mt-6"
        )}
      >
        {children}
      </div>
    </Card>
  );
}