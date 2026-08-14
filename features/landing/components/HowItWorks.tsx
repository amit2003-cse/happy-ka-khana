"use client";

import React from "react";
import { ClipboardList, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      stepNum: "01",
      title: "Choose Your Plan",
      desc: "Select a trial, weekly, or monthly subscription that fits your budget and lifestyle. 100% veg and home-cooked.",
    },
    {
      icon: MapPin,
      stepNum: "02",
      title: "Set Delivery Details",
      desc: "Share your delivery address and we'll confirm if your area is covered. Lunch & Dinner timings are fixed.",
    },
    {
      icon: Sparkles,
      stepNum: "03",
      title: "Enjoy Hot Meals",
      desc: "Our delivery partners bring freshly cooked, warm, hygienic home-style food straight to your PG, office, or home.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-surface-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-brand-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-brand-secondary/5 blur-3xl" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="How It Works"
          title="Delicious Food In 3 Easy Steps"
          subtitle="Ghar jaisa swad pana ab behad aasan hai. Bas 3 simple steps mein apna order shuru karein."
        />

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Visual Connector (Desktop only) */}
                {!isLast && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] z-0 text-brand-primary/20">
                    <ChevronRight className="h-8 w-8 mx-auto animate-pulse" />
                  </div>
                )}

                <Card
                  hoverEffect
                  className="w-full border border-brand-secondary/5 bg-white p-8 flex flex-col items-center relative z-10"
                >
                  {/* Step Number Tag */}
                  <span className="absolute top-4 right-5 text-4xl font-black font-heading text-brand-primary/10 tracking-widest selection:bg-transparent">
                    {step.stepNum}
                  </span>

                  {/* Icon Wrapper */}
                  <div className="h-16 w-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6 shadow-sm shadow-brand-primary/10">
                    <Icon className="h-7 w-7" />
                  </div>

                  <CardHeader className="p-0 mb-3 text-center">
                    <CardTitle className="text-xl font-extrabold text-brand-secondary font-heading">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 text-sm text-text-secondary leading-relaxed font-body">
                    {step.desc}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
