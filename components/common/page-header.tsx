interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="space-y-4 py-16">
      <h1 className="text-5xl font-bold">
        {title}
      </h1>

      <p className="max-w-3xl text-lg text-slate-600">
        {description}
      </p>
    </div>
  );
}