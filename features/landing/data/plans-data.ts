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
    name: "Single Meal",
    price: 90,
    perMealPrice: 90,
    validity: "1 Time Trial",
    description: "Ek baar taste karo — 1 Lunch ya 1 Dinner full 5-CP Executive Thali try karne ke liye.",
    features: [
      "1 Single Meal (Lunch ya Dinner)",
      "Full 5-CP Executive Thali",
      "4 Roti + Rice + Dal + Sabji + Salad",
      "Fresh & warm doorstep delivery",
      "No commitment — order anytime",
    ],
    ctaText: "Order Trial Meal",
  },
  {
    id: "daily",
    name: "Daily 2-Time Meal",
    price: 179,
    perMealPrice: 90,
    validity: "Daily Pay Basis",
    description: "Roz Lunch + Dinner dono chahiye but monthly commitment nahi? Daily pay karo, daily khao.",
    features: [
      "2 Meals / Day (Lunch + Dinner)",
      "Daily rotating home-style menu",
      "4 Roti + Rice + Dal + Sabji each meal",
      "Free doorstep delivery (both times)",
      "No advance payment — pay daily",
    ],
    ctaText: "Start Daily Plan",
  },
  {
    id: "monthly",
    name: "Super Combo (Monthly)",
    price: 4500,
    perMealPrice: 75,
    validity: "30 Days • Best Value",
    description: "Sabse sasta aur sabse popular plan — Lunch + Dinner dono daily, poore mahine, advance mein.",
    features: [
      "60 Meals / Month (Lunch + Dinner daily)",
      "Just ₹75 per meal (₹150/day)",
      "Daily rotating menu — zero repetitions",
      "Unlimited Pause/Resume flexibility",
      "Free doorstep delivery — both times",
      "Dedicated WhatsApp support line",
    ],
    isPopular: true,
    badgeText: "Save 40% • Most Popular",
    ctaText: "Subscribe Monthly",
  },
];
