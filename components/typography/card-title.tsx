import { cn } from "@/lib/utils";

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({
  children,
  className,
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-slate-900",
        className
      )}
    >
      {children}
    </h3>
  );
}