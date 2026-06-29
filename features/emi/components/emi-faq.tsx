"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HelpCircle } from "lucide-react";

import { Section, SectionHeader } from "@/components/common";
import { Paragraph } from "@/components/typography";

import { emiFaqs } from "../content/emi-faq";

export function EmiFaq() {
  return (
    <Section>
      <SectionHeader
        badge="Frequently Asked Questions"
        title="EMI Calculator FAQs"
        description="Find answers to the most common questions about loan EMI, interest rates, repayment schedules, and how banks calculate your monthly installment."
        center
      />

      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-12 max-w-4xl space-y-5"
      >
        {emiFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="overflow-hidden rounded-2xl border border-border bg-card card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:card-shadow-hover"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline">
              <div className="flex w-full items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HelpCircle className="h-5 w-5" />
                </div>

                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="border-t border-border bg-surface-muted">
              <div className="flex gap-4 px-6 py-5">
                <div className="w-11 shrink-0" />

                <div className="flex-1">
                  <Paragraph>{faq.answer}</Paragraph>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}