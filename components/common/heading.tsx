import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function Heading({
  title,
  description,
  center = false,
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        center && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}