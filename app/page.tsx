
import {
        WhyCalcMint, 
        Hero, 
        FeaturedCalculators, 
        Categories 
      } from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCalculators />
      <Categories />
      <WhyCalcMint />
    </>
  );
}