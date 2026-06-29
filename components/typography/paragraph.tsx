import { cn } from "@/lib/utils";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({
  children,
  className,
}: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-base leading-8 text-slate-600",
        className
      )}
    >
      {children}
    </p>
  );
}