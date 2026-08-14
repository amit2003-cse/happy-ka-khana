"use client";

import React, { useState, useEffect } from "react";
import { Phone, Utensils } from "lucide-react";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "Plans", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-[64px] md:h-[72px]">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollTo(e, "#")}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="relative h-10 w-10 md:h-11 md:w-11 rounded-full bg-brand-secondary flex items-center justify-center shadow-md shadow-brand-secondary/20 transition-transform duration-300 group-hover:scale-105">
              <Utensils className="h-4.5 w-4.5 md:h-5 md:w-5 text-white" />
              {/* Accent dot */}
              <div className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-brand-primary rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base md:text-lg font-extrabold text-brand-secondary leading-tight tracking-tight">
                Happy Ka Khana
              </span>
              <span className="text-[9px] md:text-[10px] text-text-secondary font-medium tracking-wider uppercase">
                Ghar Jaisa, Har Roz
              </span>
            </div>
          </a>

          {/* Desktop Nav Links — hidden on mobile */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm font-semibold font-heading text-text-primary hover:text-brand-primary transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Call Now — desktop only */}
            <a
              href="tel:7488574616"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold font-heading text-text-primary hover:border-brand-secondary hover:text-brand-secondary transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              Call Now: 7488574616
            </a>

            {/* Order Now CTA — always visible, compact on mobile */}
            <a
              href="https://wa.me/917488574616?text=Hi,%20I%20want%20to%20subscribe%20to%20Happy%20Ka%20Khana%20tiffin%20subscription."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-brand-primary text-white text-xs md:text-sm font-bold font-heading hover:bg-brand-primary-hover transition-all duration-200 shadow-sm shadow-brand-primary/20 active:scale-95"
            >
              Order Now
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

