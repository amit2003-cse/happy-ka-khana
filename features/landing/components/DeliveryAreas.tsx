"use client";

import React, { useState } from "react";
import { MapPin, CheckCircle, AlertTriangle, Building } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { deliveryAreasData } from "../data/delivery-areas";

export function DeliveryAreas() {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<{ status: "idle" | "available" | "unavailable"; message: string }>({
    status: "idle",
    message: "",
  });

  const checkPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode.trim()) return;

    const trimmedPincode = pincode.trim();
    const areaMatch = deliveryAreasData.find((a) => a.pincode === trimmedPincode && a.isAvailable);

    if (areaMatch) {
      setResult({
        status: "available",
        message: `Great news! Delivery is fully available at ${trimmedPincode} (${areaMatch.name}).`,
      });
    } else {
      setResult({
        status: "unavailable",
        message: `Sorry, we do not deliver to ${trimmedPincode} yet. We are expanding soon!`,
      });
    }
  };

  return (
    <section id="delivery" className="py-20 bg-white relative">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Delivery Areas"
          title="Fresh Food, Delivered to Your Doorstep"
          subtitle="Check if our kitchen serves your location in Patna. Enter your pincode below to instantly verify."
        />

        {/* Compact Pincode Checker Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border border-brand-secondary/5 bg-surface-light/40 shadow-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-brand-primary/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2" />
            
            <form onSubmit={checkPincode} className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center relative z-10">
              <div className="flex-grow relative">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value.replace(/\D/g, ""));
                    setResult({ status: "idle", message: "" });
                  }}
                  placeholder="Enter 6-digit Patna pincode (e.g. 800001)"
                  className="w-full pl-4 pr-10 py-3 bg-white border-2 border-gray-200 rounded-xl font-body text-sm text-text-primary focus:outline-none focus:border-brand-secondary transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light">
                  <MapPin className="h-5 w-5 text-brand-primary" />
                </div>
              </div>

              <button
                type="submit"
                disabled={pincode.length !== 6}
                className="py-3 px-6 bg-brand-secondary text-white text-sm font-bold font-heading rounded-xl hover:bg-brand-secondary/90 transition-all shadow-md shadow-brand-secondary/10 disabled:opacity-50 disabled:pointer-events-none active:scale-95 shrink-0"
              >
                Verify Pincode
              </button>
            </form>

            {/* Result Indicator Area */}
            {result.status !== "idle" && (
              <div
                className={`mt-4 p-3.5 rounded-xl flex items-start gap-2.5 border text-xs font-semibold font-body ${
                  result.status === "available"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-amber-50 border-amber-200 text-amber-800"
                }`}
              >
                {result.status === "available" ? (
                  <CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="h-4.5 w-4.5 text-amber-600 shrink-0 mt-0.5" />
                )}
                <span>{result.message}</span>
              </div>
            )}
          </Card>
        </div>

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
              href="https://wa.me/917488574616?text=Hi,%20I%20don&apos;t%20see%20my%20area%20listed%20on%20the%20website.%20Do%20you%20deliver%20here?"
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
