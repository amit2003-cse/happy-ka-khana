"use client";

import React from "react";
import { MapPin, Building } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { deliveryAreasData } from "../data/delivery-areas";

export function DeliveryAreas() {
  return (
    <section id="delivery" className="py-20 bg-white relative">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Delivery Areas"
          title="Fresh Food, Delivered to Your Doorstep"
          subtitle="Hum poore Patna ke major areas mein garam aur fresh tiffin deliver karte hain."
        />

        {/* Covered Areas List cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-xl font-bold font-heading text-text-primary flex items-center justify-center gap-2">
            <Building className="h-5 w-5 text-brand-secondary" />
            Currently Serving Areas in Patna
          </h3>

          {/* List of areas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {deliveryAreasData.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 p-3 bg-surface-cream rounded-xl border border-brand-secondary/5 hover:border-brand-primary/20 transition-all group"
              >
                <div className="h-8 w-8 rounded-lg bg-brand-secondary/10 text-brand-secondary flex items-center justify-center shrink-0 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary font-heading leading-tight">
                    {area.name}
                  </p>
                  <p className="text-[10px] text-text-secondary font-body mt-0.5">
                    Pincode: {area.pincode}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-text-light font-body text-center mt-6">
            💡 Don&apos;t see your area? Drop us a{" "}
            <a
              href="https://wa.me/917488574616?text=Hello%20Happy%20Ka%20Khana!%20My%20area%20is%20not%20listed%20on%20the%20website.%20Do%20you%20deliver%20to%20my%20location?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-bold hover:underline transition-all"
            >
              WhatsApp text
            </a>
            . We validate expansion requests weekly!
          </p>
        </div>
      </Container>
    </section>
  );
}
