import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-brand-primary bg-brand-primary/10 rounded-full font-heading">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight font-heading leading-tight max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-text-secondary font-body max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-16 bg-brand-primary rounded-full mt-6", align === "center" ? "mx-auto" : "ml-0")} />
    </div>
  );
}
