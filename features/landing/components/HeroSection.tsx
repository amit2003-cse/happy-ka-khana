"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Leaf,
  Clock,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const scrollTo = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-surface-light pt-6 pb-0">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-1/3 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand-secondary/5 blur-3xl -translate-x-1/4" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center min-h-[calc(100vh-120px)]">
          {/* ========== LEFT COLUMN ========== */}
          <div className="flex flex-col items-start space-y-6 animate-fade-in-up py-8 lg:py-12">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-secondary-light border border-brand-secondary/15 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-brand-secondary" />
              <span className="text-sm font-semibold font-heading text-brand-secondary">
                Proudly Serving <span className="text-brand-primary">Patna, Bihar</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-text-primary font-heading leading-[1.15]">
              Patna ka Apna{" "}
              <br className="hidden sm:inline" />
              Ghar Jaisa Khana,{" "}
              <br className="hidden sm:inline" />
              <span className="text-brand-primary">Har Roz, Time Par!</span>
            </h1>

            {/* Price Anchor */}
            <div className="inline-flex items-center gap-1.5 bg-brand-primary/10 border border-brand-primary/20 px-3.5 py-1.5 rounded-xl">
              <span className="text-xs font-bold font-heading text-brand-primary">
                Starting at just <span className="font-extrabold text-brand-primary-hover">₹75 / meal</span>
              </span>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-text-secondary font-body max-w-lg leading-relaxed">
              Swadisht, hygienic aur nutritious ghar jaisa khana ab aapke ghar, PG ya office tak.
            </p>

            {/* Trust Icons Row */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: Leaf, text: "100% Pure Veg" },
                { icon: Clock, text: "On Time Delivery" },
                { icon: ShieldCheck, text: "Hygienic & Safe" },
                { icon: MapPin, text: "Bihar ka Swad" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-full bg-brand-secondary-light flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-brand-secondary" />
                    </div>
                    <span className="text-sm font-semibold text-text-primary font-heading">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-1">
              <button
                onClick={() => scrollTo("#menu")}
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-primary text-white text-base font-bold font-heading rounded-xl hover:bg-brand-primary-hover transition-all duration-200 shadow-lg shadow-brand-primary/20 active:scale-95"
              >
                Order Now
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <a
                href="https://wa.me/917488574616?text=Hello%20Happy%20Ka%20Khana!%20I%20am%20interested%20in%20subscribing%20to%20your%20tiffin%20service.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white border-2 border-gray-200 text-text-primary text-base font-bold font-heading rounded-xl hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-secondary-light/10 transition-all duration-200 active:scale-95 text-center"
              >
                <svg
                  className="h-5 w-5 text-brand-secondary fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm12.035-2.03c1.797 0 3.548-.482 5.077-1.393l.363-.216 3.775.99-.208-3.679.237-.377a9.92 9.92 0 0 0 1.517-5.26c.003-5.485-4.48-9.948-9.984-9.948-5.502 0-9.98 4.463-9.983 9.948-.001 1.93.546 3.81 1.58 5.48l.245.39-.63 2.302 2.355-.618.377.224a9.94 9.94 0 0 0 5.12 1.452zm4.953-6.793c-.271-.135-1.602-.789-1.85-.878-.247-.089-.427-.135-.607.135-.18.271-.697.878-.854 1.057-.158.18-.315.2-.585.065-.27-.135-1.14-.42-2.172-1.34-.803-.715-1.345-1.6-1.503-1.871-.158-.271-.017-.417.118-.552.122-.122.271-.315.405-.471.135-.158.18-.271.27-.45.09-.18.045-.338-.022-.472-.068-.135-.608-1.464-.833-2.005-.22-.53-.44-.457-.607-.466-.157-.008-.337-.01-.517-.01-.18 0-.472.067-.72.338-.247.271-.944.923-.944 2.25 0 1.328.966 2.61 1.101 2.79.135.18 1.9 2.9 4.606 4.074.645.278 1.148.445 1.542.57.647.206 1.236.177 1.702.107.518-.077 1.602-.653 1.828-1.284.225-.63.225-1.17.157-1.284-.067-.113-.247-.203-.518-.338z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Social Proof Row */}
            <div className="flex flex-wrap items-center gap-6 pt-3">
              {/* Avatar Stack + Rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-white bg-brand-primary/10 flex items-center justify-center text-xs font-bold text-brand-primary font-heading"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-text-secondary font-body">
                    Trusted by families & students across Patna
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`h-3.5 w-3.5 ${
                          s <= 4 ? "text-brand-primary fill-brand-primary" : "text-brand-primary fill-brand-primary/50"
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-text-primary ml-1 font-heading">
                      4.6/5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== RIGHT COLUMN (Image + Floating Cards) ========== */}
          <div className="relative flex justify-center items-center lg:justify-end animate-slide-in-right py-4 lg:py-8">
            {/* Main Food Image */}
            <div className="relative w-full max-w-[480px] aspect-[4/3.5] rounded-3xl overflow-hidden shadow-2xl shadow-brand-secondary/10">
              <Image
                src="/images/hero_tiffin.png"
                alt="Delicious Indian thali with dal, sabzi, rice and roti served in stainless steel tiffin"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>

            {/* Floating Card: Delivery Across Patna */}
            <div className="absolute top-2 right-0 lg:-right-2 bg-brand-secondary text-white rounded-2xl p-4 shadow-xl max-w-[200px] animate-float z-10" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-xs font-medium text-white/80">Delivery Across</span>
              </div>
              <p className="text-xl font-extrabold font-heading leading-tight">Patna</p>
              <p className="text-[10px] text-white/70 mt-1 leading-relaxed">
                Kankarbagh • Boring Road • Rajendra Nagar • Bailey Road & Many More Areas
              </p>
            </div>

            {/* Floating Card: Delivery Timing */}
            <div className="absolute bottom-4 right-0 lg:-right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-[220px] animate-float z-10" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-xl bg-brand-primary-light flex items-center justify-center">
                  <Truck className="h-5 w-5 text-brand-primary" />
                </div>
                <span className="text-sm font-bold text-text-primary font-heading">Fast & On Time Delivery</span>
              </div>
              <div className="space-y-1 text-xs text-text-secondary font-body">
                <p>
                  <span className="font-semibold text-text-primary">Lunch:</span> 12:30 PM – 2:00 PM
                </p>
                <p>
                  <span className="font-semibold text-text-primary">Dinner:</span> 7:30 PM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
