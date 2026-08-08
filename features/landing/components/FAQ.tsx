"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqData } from "../data/faq-data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-surface-cream relative overflow-hidden">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Kuch sawaal? Humne sabhi common questions ke answers yahan list kar diye hain taaki aapko call na karna pade."
        />

        {/* FAQ Accordion container */}
        <div className="max-w-3xl mx-auto space-y-4 pt-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-brand-secondary/5 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-brand-primary/20"
              >
                {/* Accordion Trigger header button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 font-heading font-bold text-text-primary text-base md:text-lg leading-snug">
                    <HelpCircle className="h-5 w-5 text-brand-primary shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-text-secondary shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-brand-primary" : ""
                    }`}
                  />
                </button>

                {/* Accordion panel content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-5 md:p-6 pt-0 border-t border-brand-secondary/5 text-sm md:text-base text-text-secondary font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
