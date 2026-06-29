import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function InfoCard({
  title,
  description,
  children,
  className,
}: InfoCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      {title && (
        <h3 className="text-xl font-semibold text-slate-900">
          {title}
        </h3>
      )}

      {description && (
        <p className="mt-2 text-slate-600">
          {description}
        </p>
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