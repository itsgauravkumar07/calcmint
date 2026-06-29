import { cn } from "@/lib/utils";

interface CaptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Caption({
  children,
  className,
}: CaptionProps) {
  return (
    <p
      className={cn(
        "text-sm text-slate-500",
        className
      )}
    >
      {children}
    </p>
  );
}