"use client";

import React from "react";
import { Check, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { plansData } from "../data/plans-data";


export function PricingPlans() {
  const getWhatsAppUrl = (planName: string, price: number) => {
    const text = `Hi! I want to order the ${planName} plan at ₹${price}. My name is ___ and my address is ___`;
    return `https://wa.me/917488574616?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-20 bg-surface-cream relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-brand-secondary/5 blur-3xl opacity-40 translate-x-1/4 translate-y-1/4" />

      <Container>
        {/* Section Header */}
        <SectionHeading
          badge="Pricing Plans"
          title="Choose Your Tiffin Subscription Plan"
          subtitle="No hidden charges. Clear pricing with flexibility to pause, resume, or cancel your plans anytime."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {plansData.map((plan) => {
            const isMonthly = plan.id === "monthly";
            return (
              <Card
                key={plan.id}
                hoverEffect
                className={`relative flex flex-col justify-between overflow-hidden border transition-all duration-300 ${
                  isMonthly
                    ? "border-brand-primary ring-2 ring-brand-primary/20 scale-105 md:scale-105 z-10 shadow-xl shadow-brand-primary/5"
                    : "border-brand-secondary/10 shadow-md hover:border-brand-secondary/20"
                }`}
              >
                {/* Popular Badge banner */}
                {plan.badgeText && (
                  <div className="absolute top-4 right-4">
                    <Badge variant={isMonthly ? "primary" : "secondary"} className="normal-case text-[11px] font-bold">
                      {plan.badgeText}
                    </Badge>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <CardHeader className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary font-heading mb-1 block">
                      {plan.validity}
                    </span>
                    <CardTitle className="text-2xl font-extrabold text-text-primary">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Pricing Section */}
                  <CardContent className="py-4 border-y border-brand-secondary/5 my-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight font-heading">
                        ₹{plan.price}
                      </span>
                      <span className="text-sm text-text-secondary font-medium">
                        / plan
                      </span>
                    </div>
                    {plan.id !== "trial" && (
                      <p className="text-sm font-semibold text-brand-secondary mt-2 flex items-center gap-1 font-heading">
                        Just <span className="text-brand-primary font-bold">₹{plan.perMealPrice}</span> per meal
                      </p>
                    )}
                  </CardContent>

                  {/* Plan Features */}
                  <CardContent className="space-y-3.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm text-text-secondary">
                          <div className={`h-5 w-5 rounded-full shrink-0 flex items-center justify-center ${
                            isMonthly ? "bg-brand-primary/10 text-brand-primary" : "bg-brand-secondary/10 text-brand-secondary"
                          }`}>
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span className="font-body">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                {/* Card Footer Action */}
                <CardFooter className="pt-6 border-t-0">
                  <a
                    href={getWhatsAppUrl(plan.name, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center font-heading font-bold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 text-center text-sm md:text-base py-3 ${
                      isMonthly
                        ? "bg-brand-primary text-white hover:bg-brand-primary/90 focus:ring-brand-primary shadow-sm hover:shadow-md"
                        : "border-2 border-brand-secondary/20 text-brand-secondary bg-transparent hover:bg-brand-secondary/5 focus:ring-brand-secondary"
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Footnote information strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/50 border border-brand-secondary/10 rounded-2xl p-4 max-w-3xl mx-auto">
          <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
            <AlertCircle className="h-5 w-5 text-brand-primary" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-text-primary font-heading">
              Ghar ja rahe ho ya vacation pe?
            </p>
            <p className="text-xs text-text-secondary font-body mt-0.5">
              Pause or resume your subscription anytime using the customer dashboard. No deduction for paused days!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
