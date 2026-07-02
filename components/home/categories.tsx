import { categories } from "@/data/categories";

import { CategoryCard } from "@/components/calculator";
import { Container } from "@/components/layout/container";

import {
  Section,
  SectionHeader,
} from "@/components/common";

export function Categories() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeader
          center
          badge="Explore Categories"
          title="Browse by Category"
          description="Choose a financial category to discover specialized calculators for loans, investments, taxes, savings, and more."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}