import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-secondary/10 bg-surface-card p-6 shadow-sm transition-all duration-300",
        hoverEffect && "hover:shadow-lg hover:-translate-y-1 hover:border-brand-primary/25",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props}>{children}</div>;
}

export function CardTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-heading text-xl font-bold text-text-primary", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-text-secondary font-body", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("font-body text-text-primary", className)} {...props}>{children}</div>;
}

export function CardFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center pt-4 mt-4 border-t border-brand-secondary/5", className)} {...props}>{children}</div>;
}
