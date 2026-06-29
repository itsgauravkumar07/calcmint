import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { CardTitle, Paragraph } from "@/components/typography";

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
      <Card className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:card-shadow-hover focus-within:ring-2 focus-within:ring-primary/20">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>

        <div className="mt-6 flex flex-1 flex-col">
          <CardTitle>
            {category.title}
          </CardTitle>

          <Paragraph className="mt-3 flex-1">
            {category.description}
          </Paragraph>

          <div className="mt-6 flex items-center gap-2 font-medium text-primary">
            <span>Explore</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}