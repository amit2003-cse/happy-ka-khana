"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Home, HelpCircle, Tag, MessageSquareText, Phone } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, href: "#", sectionId: null },
  { label: "Plans", icon: Tag, href: "#pricing", sectionId: "pricing" },
  { label: "Reviews", icon: MessageSquareText, href: "#reviews", sectionId: "reviews" },
  { label: "FAQs", icon: HelpCircle, href: "#faqs", sectionId: "faqs" },
  { label: "Contact", icon: Phone, href: "#contact", sectionId: "contact" },
];

export function BottomNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  // Track which section is in viewport
  React.useEffect(() => {
    const sectionIds = navItems.filter((n) => n.sectionId).map((n) => n.sectionId!);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const handleClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    e.preventDefault();

    if (!item.sectionId) {
      // Home — scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection(null);
      return;
    }

    const el = document.getElementById(item.sectionId);
    if (el) {
      const offset = 10; // minimal offset since bottom nav is at bottom
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(item.sectionId);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200/60 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] safe-area-bottom md:hidden">
      <div className="flex items-center justify-around h-16 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.sectionId
            ? activeSection === item.sectionId
            : activeSection === null;

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item)}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 rounded-xl transition-all duration-200 active:scale-90 ${
                isActive
                  ? "text-brand-primary"
                  : "text-text-light hover:text-text-secondary"
              }`}
            >
              <div
                className={`flex items-center justify-center h-7 w-7 rounded-lg transition-all duration-200 ${
                  isActive ? "bg-brand-primary/10 scale-110" : ""
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition-all duration-200 ${
                    isActive ? "stroke-[2.5]" : "stroke-[1.8]"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] font-heading leading-none transition-all duration-200 ${
                  isActive ? "font-bold" : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
