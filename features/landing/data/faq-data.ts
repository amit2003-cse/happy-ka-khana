export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "Delivery timings kya hain?",
    answer: "Lunch delivery 12:30 PM se 2:00 PM ke beech hoti hai, aur Dinner delivery 7:30 PM se 9:00 PM ke beech hoti hai. Aap order karte waqt apna preferred time slot select kar sakte hain.",
  },
  {
    question: "Kya main apna plan pause kar sakta hoon?",
    answer: "Haan, bilkul! Agar aap kisi din bahar ja rahe hain ya weekend pe ghar ja rahe hain, toh aap customer dashboard se single click pe apni delivery pause kar sakte hain. Pause karne ke liye bas 1 din pehle (cut-off time se pehle) update karna hoga. Paused days ke paise deduct nahi hote, wo aapke validity mein add ho jate hain.",
  },
  {
    question: "Kya khana pure veg hota hai?",
    answer: "Haan, hamara kitchen 100% Pure Veg hai. Hum bilkul pure vegetarian ingredients use karte hain aur hygiene ka poora dhyan rakhte hain.",
  },
  {
    question: "Payment models kya hain? Kya cash on delivery (COD) available hai?",
    answer: "Aap online payments (UPI, Card, Netbanking via Razorpay) ya COD (Cash on Delivery) ke through pay kar sakte hain. Subscriptions ke liye advance payment mandatory hai, par Trial Meal ke liye aap COD choose kar sakte hain.",
  },
  {
    question: "Kya menu har din change hota hai?",
    answer: "Haan, hamara weekly rotating menu hota hai. Monday se Saturday tak har din alag sabzi, dal aur combinations hote hain taaki aap bore na hon. Aap hamara weekly menu section check kar sakte hain.",
  },
  {
    question: "Agar khana time pe nahi aaya toh kya refund milega?",
    answer: "Hum 98% on-time delivery maintain karte hain. Kisi extreme scenario mein agar delivery 30 mins se zyada delay hoti hai, toh hum us meal ka full refund ya adjustment aapke wallet mein kar dete hain.",
  },
];
