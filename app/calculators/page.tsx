import { CalculatorGrid } from "@/components/calculator/calculator-grid";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/common/section-header";
import { Section } from "@/components/common/section";

export default function CalculatorsPage() {
  return (
    <Section>
      <Container>
        <Heading
          center
          title="Financial Calculators"
          description="Browse all free financial calculators available on CalcMint."
        />

        <div className="mt-12">
          <CalculatorGrid />
        </div>
      </Container>
    </Section>
  );
}