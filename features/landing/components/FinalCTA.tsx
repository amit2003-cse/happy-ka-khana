"use client";

import React from "react";
import { ArrowRight, Utensils } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const scrollToPricing = () => {
    const el = document.querySelector("#pricing");
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <Container>
        <div className="relative rounded-3xl bg-brand-secondary overflow-hidden px-6 py-16 md:px-12 md:py-20 text-center shadow-xl shadow-brand-secondary/15">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 h-48 w-48 bg-brand-primary/10 rounded-full blur-2xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 h-48 w-48 bg-brand-accent/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
            
            {/* Center icon */}
            <div className="h-14 w-14 rounded-2xl bg-white/10 text-brand-primary flex items-center justify-center shadow-md">
              <Utensils className="h-7 w-7 text-brand-primary" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Ready for Ghar Jaisa Swad?
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-white/80 font-body leading-relaxed max-w-xl">
              No daily cooking stress, no messy kitchens, no compromises on health. Try our single meal trial or select a subscription package.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToPricing}
                className="group w-full sm:w-auto justify-center"
              >
                Order Trial Meal
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <button
                onClick={scrollToPricing}
                className="px-8 py-4 border-2 border-white/20 hover:border-white text-white text-lg font-bold font-heading rounded-xl hover:bg-white/5 transition-all duration-200 active:scale-95"
              >
                View Pricing Plans
              </button>
            </div>

            {/* Subtext guarantees */}
            <p className="text-xs text-white/50 font-body">
              ★ Free delivery • Cancel or Pause subscription anytime • 100% Veg
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}
