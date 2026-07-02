import { cn } from "@/lib/utils";

interface IconBoxProps {
  children: React.ReactNode;
  className?: string;

  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
}

const sizes = {
  sm: {
    container: "h-10 w-10 rounded-xl",
    icon: "[&>svg]:h-5 [&>svg]:w-5",
  },

  md: {
    container: "h-12 w-12 rounded-2xl",
    icon: "[&>svg]:h-6 [&>svg]:w-6",
  },

  lg: {
    container: "h-16 w-16 rounded-3xl",
    icon: "[&>svg]:h-8 [&>svg]:w-8",
  },
};

const variants = {
  primary:
    "bg-primary/10 text-primary",

  secondary:
    "bg-surface-muted text-text-secondary",

  outline:
    "border border-border bg-background text-primary",
};

export function IconBox({
  children,
  className,
  size = "md",
  variant = "primary",
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center transition-colors duration-300",
        sizes[size].container,
        sizes[size].icon,
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}