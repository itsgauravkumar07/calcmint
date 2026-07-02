
import {
        WhyCalcMint, 
        Hero, 
        FeaturedCalculators, 
        Categories,
        HowItWorks,
        CalculatorOfWeek,
        LatestGuides,
        CTASection 
      } from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCalculators />
      <Categories />
      <WhyCalcMint />
      <HowItWorks />
      <CalculatorOfWeek />
      <LatestGuides />
      <CTASection />
    </>
  );
}