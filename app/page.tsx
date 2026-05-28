import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AISection from "@/components/AISection";
import MethodologySection from "@/components/MethodologySection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AISection />
      <MethodologySection />
      <WhyUsSection />
      <CTASection />
    </main>
  );
}
