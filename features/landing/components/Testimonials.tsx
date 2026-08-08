"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialsData } from "../data/testimonials-data";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-surface-cream relative overflow-hidden">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand-primary/5 blur-3xl opacity-60 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand-secondary/5 blur-3xl opacity-40 -translate-x-1/3" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Customer Reviews"
          title="What Patna is Saying About Us"
          subtitle="Real reviews from real students and working professionals eating with us daily."
        />

        {/* Carousel / Slider Container */}
        <div className="relative max-w-4xl mx-auto pt-4">
          <div className="overflow-hidden rounded-3xl bg-white border border-brand-secondary/5 shadow-xl p-8 md:p-12 relative">
            
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-brand-primary/10">
              <Quote className="h-20 w-20 transform rotate-180" />
            </div>

            {/* Testimonial Content Block */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              
              {/* Rating stars */}
              <div className="flex gap-1 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-brand-accent fill-brand-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl font-body italic text-text-primary leading-relaxed max-w-2xl">
                &ldquo;{testimonialsData[currentIndex].content}&rdquo;
              </p>

              {/* Author Details */}
              <div className="flex flex-col items-center">
                {/* Character circle avatar */}
                <div className="h-14 w-14 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-extrabold font-heading shadow-md shadow-brand-primary/20 mb-3">
                  {testimonialsData[currentIndex].avatarChar}
                </div>
                <h4 className="text-base font-extrabold text-text-primary font-heading">
                  {testimonialsData[currentIndex].name}
                </h4>
                <p className="text-xs font-semibold text-brand-secondary font-heading uppercase mt-0.5">
                  {testimonialsData[currentIndex].role} • {testimonialsData[currentIndex].location}
                </p>
              </div>

            </div>

            {/* Slide Indicators / Navigation Controls */}
            <div className="flex items-center justify-between mt-8 relative z-20">
              {/* Slider Dots */}
              <div className="flex gap-1.5 mx-auto">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-brand-primary" : "w-2.5 bg-brand-primary/20 hover:bg-brand-primary/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Left/Right Buttons */}
              <div className="absolute inset-y-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
                <button
                  onClick={prevSlide}
                  className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white border border-brand-secondary/10 flex items-center justify-center text-text-primary hover:border-brand-primary hover:text-brand-primary transition-all duration-200 pointer-events-auto shadow-md hover:shadow-lg active:scale-95"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white border border-brand-secondary/10 flex items-center justify-center text-text-primary hover:border-brand-primary hover:text-brand-primary transition-all duration-200 pointer-events-auto shadow-md hover:shadow-lg active:scale-95"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5 stroke-[2.5]" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
