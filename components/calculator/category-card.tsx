import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { CategoryItem } from "@/data/categories";

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({
  category,
}: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link href={`/categories/${category.slug}`}>
      <Card className="group h-full rounded-2xl transition hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg">
        <div className="space-y-4 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
            <Icon className="h-6 w-6 text-emerald-600" />
          </div>

          <h3 className="text-xl font-semibold">
            {category.title}
          </h3>

          <p className="text-sm text-slate-600">
            {category.description}
          </p>

          <div className="flex items-center gap-2 font-medium text-emerald-600">
            Explore
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}