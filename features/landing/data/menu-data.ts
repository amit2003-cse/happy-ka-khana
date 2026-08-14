export interface DayMenu {
  day: string;
  isSpecial?: boolean;
  lunch: string[];
  dinner: string[];
}

export const weeklyMenuData: DayMenu[] = [
  {
    day: "Monday",
    lunch: ["Chawal", "4 Roti", "Dal", "Paneer Sabji", "Salad"],
    dinner: ["Chawal", "4 Roti", "Seasonal Sabji", "Arhar Dal", "Achar"],
  },
  {
    day: "Tuesday",
    lunch: ["Chawal", "4 Roti", "Chota Chole", "Aloo Sabji", "Achar"],
    dinner: ["Chawal", "4 Roti", "Mix Veg", "Light Dal", "Salad"],
  },
  {
    day: "Wednesday",
    lunch: ["Rajma", "Chawal", "4 Roti", "Mix Veg", "Raita"],
    dinner: ["Chawal", "4 Roti", "Aloo Shimla Mirch", "Dal Tadka", "Achar"],
  },
  {
    day: "Thursday",
    lunch: ["Kadhi Badi", "Chawal", "4 Roti", "Aalu Bhujiya", "Salad"],
    dinner: ["Chawal", "4 Roti", "Seasonal Sabji", "Moong Dal", "Achar"],
  },
  {
    day: "Friday",
    lunch: ["Chawal", "4 Roti", "Dal Tadka", "Aalu Sabji", "Papad", "Salad"],
    dinner: ["Chawal", "4 Roti", "Matar Paneer", "Chana Dal", "Salad"],
  },
  {
    day: "Saturday",
    lunch: ["Basmati Rice", "4 Roti", "Aalu Chana Sabji", "Seasonal Sabji", "Salad"],
    dinner: ["Chawal", "4 Roti", "Aalu Cabbage / Baingan", "Dal Fry", "Achar"],
  },
  {
    day: "Sunday",
    isSpecial: true,
    lunch: ["Pulao", "4 Roti", "Paneer Sabji", "Dal Makhni", "Kheer / Halwa"],
    dinner: ["Chawal", "4 Roti", "Mix Veg / Aalu Matar", "Light Dal", "Salad"],
  },
];
