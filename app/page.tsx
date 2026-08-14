import { Navbar } from "@/features/landing/components/Navbar";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { HowItWorks } from "@/features/landing/components/HowItWorks";
import { WeeklyMenu } from "@/features/landing/components/WeeklyMenu";
import { PricingPlans } from "@/features/landing/components/PricingPlans";
import { WhyChooseUs } from "@/features/landing/components/WhyChooseUs";
import { Testimonials } from "@/features/landing/components/Testimonials";
import { DeliveryAreas } from "@/features/landing/components/DeliveryAreas";
import { FAQ } from "@/features/landing/components/FAQ";
import { Footer } from "@/features/landing/components/Footer";
import { BottomNav } from "@/features/app-shell/components/BottomNav";
import { InstallPrompt } from "@/features/app-shell/components/InstallPrompt";
import { WhatsAppFloat } from "@/features/landing/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="has-bottom-nav">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <WeeklyMenu />
        <PricingPlans />
        <WhyChooseUs />
        <Testimonials />
        <DeliveryAreas />
        <FAQ />
      </main>
      <Footer />

      {/* PWA Components */}
      <BottomNav />
      <InstallPrompt />

      {/* Floating Widgets */}
      <WhatsAppFloat />
    </div>
  );
}






