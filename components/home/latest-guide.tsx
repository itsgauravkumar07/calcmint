import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { guides } from "@/data/guides";

import { Container } from "@/components/layout/container";

import {
  Section,
  SectionHeader,
} from "@/components/common";

import { Button } from "@/components/ui/button";

import { GuideCard } from "@/components/guide/guide-card";

export function LatestGuides() {

  const featuredGuide = guides[0];

  const sideGuides = guides.slice(1, 5);

  return (
    <Section>

      <Container>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <SectionHeader
            badge="Financial Guides"
            title="Latest Financial Guides"
            description="Master loans, investing, taxes and personal finance with practical guides designed for beginners and professionals."
          />

          <Button
            asChild
            variant="outline"
          >
            <Link href="/guides">

              View All Guides

              <ArrowRight className="ml-2 h-4 w-4" />

            </Link>
          </Button>

        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_.9fr]">

          <GuideCard
            {...featuredGuide}
            variant="featured"
          />

          <div className="space-y-6">

            {sideGuides.map((guide) => (

              <GuideCard
                key={guide.slug}
                {...guide}
                variant="horizontal"
              />

            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}