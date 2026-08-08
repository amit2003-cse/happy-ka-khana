# 🍱 Happy Ka Khana (Patna's Premium Tiffin Service PWA)

A Progressive Web App (PWA) solution designed for **Happy Ka Khana**, a homemade tiffin subscription service serving students, PG residents, and working professionals in Patna, Bihar.

Designed as a mobile-first web app that looks, feels, and performs like a native APK.

---

## 🚀 Key Business Offerings

- **Pure Veg & Hygienic**: Home-cooked style meals with zero preservatives or artificial coloring.
- **Flexible Subscriptions**: Choose between Single Meal Trial, Weekly, or Monthly plans.
- **Smart Pause/Resume**: Pause your meal subscription during weekends or vacations directly from the app so you never waste money.
- **On-Time Delivery**: Dedicated lunch (12:30 PM - 2:00 PM) and dinner (7:30 PM - 9:00 PM) slots.

---

## 📱 PWA Features (APK Jaisa Feel)

1. **Add to Home Screen**: Installable as a standalone app on both Android and iOS devices.
2. **Full-Screen App Shell**: Browser address/URL bars are completely hidden for a immersive native app experience.
3. **Sticky Bottom Navigation**: 5 touch-optimized tabs (Home, Plans, Reviews, FAQs, Contact) mimicking standard mobile apps.
4. **Smart Install Banner**: Prompts users to install the app only after they take key actions, featuring a 3-day dismissal snooze system.
5. **Interactive Support**: Integrated float widgets for instant support on WhatsApp.

---

## 🛠️ Tech Stack & Libraries

- **Core**: Next.js 16 (App Router, Turbopack, TypeScript)
- **Styling**: Tailwind CSS v4 (Modern design tokens, curated green/orange theme variables)
- **Icons**: Lucide React
- **PWA Capabilities**: Metadata JSON Web App Manifest config & service worker hooks

---

## 📂 Project Structure

```
happy_ka_khana/
├── app/
│   ├── layout.tsx         # PWA Viewports and Meta config
│   ├── page.tsx           # Responsive landing page structure
│   ├── manifest.ts        # Dynamic PWA metadata manifest generator
│   └── globals.css        # Tailwind v4 custom theme and PWA safe-area styles
├── features/
│   ├── app-shell/         # Mobile bottom navigation & PWA install prompts
│   └── landing/           # Landing page section components & mock data
├── components/
│   └── ui/                # Core design components (Button, Card, Badge, etc.)
└── public/
    ├── icons/             # Custom PWA launch & splash icons (192, 512, apple)
    └── images/            # Curated thali hero asset image
```

---

## ⚙️ How to Run Locally

### 1. Clone the project
```bash
git clone https://github.com/amit2003-cse/happy-ka-khana.git
cd happy-ka-khana
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your mobile browser or simulator.

### 4. Build for production
```bash
npm run build
npm start
```
