import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "success" | "warning";
}

export function Badge({ children, className, variant = "primary", ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-heading tracking-wide uppercase transition-colors";

  const variants = {
    primary: "bg-brand-primary/10 text-brand-primary border border-brand-primary/20",
    secondary: "bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20",
    accent: "bg-brand-accent/15 text-brand-secondary border border-brand-accent/30",
    outline: "border border-brand-secondary/20 text-text-secondary bg-transparent",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
