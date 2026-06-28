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
    <section className="mt-20">
      <div className="mb-10 text-center">
        <p className="font-semibold uppercase tracking-widest text-emerald-600">
          Frequently Asked Questions
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
          EMI Calculator FAQs
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Find answers to the most common questions about loan EMI, 
          interest rates, repayment schedules, and how EMI is calculated.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="mx-auto max-w-4xl space-y-5"
      >
        {emiFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-100 p-2">
                  <HelpCircle className="h-5 w-5 text-emerald-600" />
                </div>

                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="border-t bg-slate-50 px-6 py-5">
              <p className="pl-14 text-base leading-8 text-slate-600">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}