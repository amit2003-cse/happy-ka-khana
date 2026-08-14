"use client";

import React from "react";
import { Sun, Moon, Sparkles, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { weeklyMenuData } from "../data/menu-data";

export function WeeklyMenu() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="menu" className="py-20 bg-surface-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -z-10 h-[350px] w-[350px] rounded-full bg-brand-primary/5 blur-3xl opacity-50 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand-secondary/5 blur-3xl opacity-40 -translate-x-1/4" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Weekly Menu"
          title="Hafta Bhar Ka Swad, Har Din Naya"
          subtitle="Monday se Sunday tak daily rotating menu — zero repetitions, ghar jaisa variety."
        />

        {/* Delivery Timing Info Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 bg-white border border-brand-primary/10 rounded-full px-4 py-2 shadow-sm">
            <Sun className="h-4 w-4 text-brand-primary" />
            <span className="text-xs font-bold font-heading text-text-primary">
              Lunch: <span className="text-brand-primary">12:30 - 2:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-brand-secondary/10 rounded-full px-4 py-2 shadow-sm">
            <Moon className="h-4 w-4 text-brand-secondary" />
            <span className="text-xs font-bold font-heading text-text-primary">
              Dinner: <span className="text-brand-secondary">7:30 - 9:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <Clock className="h-4 w-4 text-text-secondary" />
            <span className="text-xs font-bold font-heading text-text-secondary">
              Order Cut-off: Lunch 9:30 AM • Dinner 4:30 PM
            </span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {weeklyMenuData.map((dayMenu) => {
            const isToday = dayMenu.day === today;

            return (
              <Card
                key={dayMenu.day}
                hoverEffect
                className={`relative border p-5 flex flex-col transition-all duration-300 ${
                  isToday
                    ? "border-brand-primary ring-2 ring-brand-primary/20 shadow-lg shadow-brand-primary/5"
                    : "border-brand-secondary/5 bg-white"
                }`}
              >
                {/* Today Badge */}
                {isToday && (
                  <div className="absolute -top-3 left-4 bg-brand-primary text-white text-[10px] font-bold font-heading px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    📍 Aaj Ka Menu
                  </div>
                )}

                {/* Sunday Special Badge */}
                {dayMenu.isSpecial && (
                  <div className="absolute -top-3 right-4 bg-brand-accent text-brand-secondary text-[10px] font-bold font-heading px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Special
                  </div>
                )}

                {/* Day Header */}
                <h3 className={`text-lg font-extrabold font-heading mb-4 ${
                  isToday ? "text-brand-primary" : "text-text-primary"
                }`}>
                  {dayMenu.day}
                </h3>

                {/* Lunch */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sun className="h-3.5 w-3.5 text-brand-primary" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary font-heading">
                      Lunch
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {dayMenu.lunch.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-brand-primary/5 text-text-primary font-medium px-2 py-1 rounded-md font-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Moon className="h-3.5 w-3.5 text-brand-secondary" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-secondary font-heading">
                      Dinner
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {dayMenu.dinner.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-brand-secondary/5 text-text-primary font-medium px-2 py-1 rounded-md font-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="text-xs text-text-light font-body text-center mt-8 max-w-xl mx-auto">
          💡 Menu mein minor changes ho sakte hain based on seasonal availability. Roti ki jagah <strong>Extra Rice</strong> swap kiya ja sakta hai on request.
        </p>
      </Container>
    </section>
  );
}
