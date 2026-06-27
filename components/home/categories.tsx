import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/calculator/category-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";

export function Categories() {
  return (
    <Section>
      <Container>
        <Heading
          center
          title="Browse by Category"
          description="Choose a finance category and discover powerful calculators."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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