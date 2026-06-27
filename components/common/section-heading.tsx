interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 ${
        centered ? "text-center" : ""
      }`}
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}