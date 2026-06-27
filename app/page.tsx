import { Hero } from "@/components/home/hero";
import { FeaturedCalculators } from "@/components/home/featured-calculators";
import { Categories } from "@/components/home/categories";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCalculators />
      <Categories />
    </>
  );
}