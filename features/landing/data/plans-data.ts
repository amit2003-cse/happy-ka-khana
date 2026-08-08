export interface Plan {
  id: string;
  name: string;
  price: number;
  perMealPrice: number;
  validity: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  badgeText?: string;
  ctaText: string;
}

export const plansData: Plan[] = [
  {
    id: "trial",
    name: "Trial Meal",
    price: 99,
    perMealPrice: 99,
    validity: "1 Day",
    description: "Perfect for testing our food quality and delivery service before subscribing.",
    features: [
      "1 Single Meal (Lunch or Dinner)",
      "Standard rotating menu",
      "Fresh & warm delivery included",
      "Eco-friendly disposable packaging",
      "No commitments - order anytime",
    ],
    ctaText: "Order Trial Meal",
  },
  {
    id: "weekly",
    name: "Weekly Plan",
    price: 599,
    perMealPrice: 85,
    validity: "7 Days (Mon - Sat)",
    description: "Ideal for students and working professionals looking for a short trial week.",
    features: [
      "6 Meals (Lunch or Dinner)",
      "Daily rotating home-style menu",
      "Pause/Resume plan with 1-day notice",
      "Free doorstep delivery",
      "Standard food-grade packaging",
    ],
    ctaText: "Choose Weekly Plan",
  },
  {
    id: "monthly",
    name: "Monthly Subscription",
    price: 2099,
    perMealPrice: 70,
    validity: "30 Days (Mon - Sat)",
    description: "Our most loved and cost-effective plan for daily home-cooked meals.",
    features: [
      "26 Meals (Lunch or Dinner)",
      "Daily rotating menu (Zero repetitions)",
      "Unlimited Pause/Resume flexibility",
      "Free doorstep delivery",
      "Premium insulated container option",
      "Dedicated support line",
    ],
    isPopular: true,
    badgeText: "Save 18% • Most Popular",
    ctaText: "Subscribe Monthly",
  },
];
