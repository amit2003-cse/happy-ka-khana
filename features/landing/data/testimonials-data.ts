export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatarChar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Rohan Verma",
    role: "Software Engineer",
    location: "Boring Road, Patna",
    content: "Swiggy/Zomato roz khana bohot expensive aur unhealthy ho jata tha. Happy Ka Khana ka taste bilkul ghar jaisa hai, aur delivery humesha time pe hoti hai. Highly recommended!",
    rating: 5,
    avatarChar: "R",
  },
  {
    id: "2",
    name: "Sneha Kumari",
    role: "NEET Aspirant",
    location: "Kankarbagh, Patna",
    content: "PG ka khana bohot bekaar tha. Monthly subscription start karne ke baad se padhai pe focus kar paa rahi hoon. Roti soft hoti hai aur dal ka tadka best hai!",
    rating: 5,
    avatarChar: "S",
  },
  {
    id: "3",
    name: "Amit Raj",
    role: "Bank Employee",
    location: "Rajendra Nagar, Patna",
    content: "Sabse acchi baat inki pause/resume option hai. Weekend pe jab main ghar jata hoon, subscription pause kar deta hoon. Ek rupeya bhi waste nahi hota.",
    rating: 5,
    avatarChar: "A",
  },
  {
    id: "4",
    name: "Priya Sharma",
    role: "College Student",
    location: "Bailey Road, Patna",
    content: "Cleanliness aur hygiene bohot acchi hai. Unke stainless steel box option se plastic ka darr bhi nahi rehta. Har hafta menu change hota hai toh bore bhi nahi hoti.",
    rating: 5,
    avatarChar: "P",
  },
];
