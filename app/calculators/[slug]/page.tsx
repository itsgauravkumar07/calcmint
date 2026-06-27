import { notFound } from "next/navigation";

import { calculatorRegistry } from "@/data/calculator-registry";
import { Container } from "@/components/layout/container";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CalculatorPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const feature = calculatorRegistry[
    slug as keyof typeof calculatorRegistry
  ];

  if (!feature) {
    notFound();
  }

  const Calculator = feature.component;

  return (
    <Container className="py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          {feature.title}
        </h1>

        <p className="mt-3 text-slate-600">
          {feature.content.description}
        </p>
      </div>

      <Calculator />
    </Container>
  );
}