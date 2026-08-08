"use client";

import React from "react";
import { Utensils, ShieldCheck, PauseCircle, Clock, PiggyBank, RotateCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function WhyChooseUs() {
  const trustPoints = [
    {
      icon: Utensils,
      title: "Ghar ka Swad",
      desc: "Ghar ke masale, home-style recipes aur bina kisi preservatives ke. Taste bilkul waisa jaise maa ke haath ka.",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic & Safe Kitchen",
      desc: "FSSAI certified, sanitised kitchen aur safety standard ke sath packing. Health hamari prime priority hai.",
    },
    {
      icon: PauseCircle,
      title: "Pause / Resume Subscription",
      desc: "Vacation pe ja rahe ho ya weekend pe? Ek click pe app se meal pause karein, no money waste.",
    },
    {
      icon: Clock,
      title: "On-Time Doorstep Delivery",
      desc: "Hamare dedicated delivery partners roz subah aur shaam garam khana seedhe aap tak pahunchate hain.",
    },
    {
      icon: PiggyBank,
      title: "Super Pocket Friendly",
      desc: "Swiggy aur restaurants se 60% sasta. Quality home-cooked food starting at just ₹70 per meal.",
    },
    {
      icon: RotateCw,
      title: "Rotating Weekly Menu",
      desc: "Daily monotony ko break karne ke liye har din naya menu. Mon to Sat variety khana, zero repetitions.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Why Choose Us"
          title="Swad aur Sehat Ka Perfect Balance"
          subtitle="Hum sirf khana nahi banate, ghar jaisa prem aur shuddhata aapke table tak deliver karte hain."
        />

        {/* 3x2 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                hoverEffect
                className="border border-brand-secondary/5 bg-surface-light/30 p-6 flex flex-col items-start"
              >
                <div className="h-12 w-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg font-bold text-text-primary">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-sm text-text-secondary leading-relaxed">
                  {point.desc}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
