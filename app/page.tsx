
import {
        WhyCalcMint, 
        Hero, 
        FeaturedCalculators, 
        Categories,
        HowItWorks 
      } from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCalculators />
      <Categories />
      <WhyCalcMint />
      <HowItWorks />
    </>
  );
}