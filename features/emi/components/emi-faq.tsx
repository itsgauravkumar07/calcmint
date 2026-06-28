"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HelpCircle } from "lucide-react";

import { emiFaqs } from "../content/emi-faq";

export function EmiFaq() {
  return (
    <section className="mt-24">
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
          Frequently Asked Questions
        </span>

        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
          EMI Calculator FAQs
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Find answers to the most common questions about loan EMI,
          interest rates, repayment schedules, and how banks calculate
          your monthly installment.
        </p>
      </div>

      {/* FAQ */}
      <Accordion
        type="single"
        collapsible
        className="mx-auto max-w-4xl space-y-5"
      >
        {emiFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline">
              <div className="flex w-full items-center gap-4">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <HelpCircle className="h-5 w-5 text-emerald-600" />
                </div>

                {/* Question */}
                <div className="flex-1">
                  <h3 className="text-left text-lg font-semibold text-slate-900 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="border-t border-slate-100 bg-slate-50">
              <div className="ml-15 px-6 py-2">
                <p className="text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}