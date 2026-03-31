import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CollectionsSection from "@/components/CollectionsSection";
import FabricCategoriesSection from "@/components/FabricCategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import StoreShowcase from "@/components/StoreShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <CollectionsSection />
      <FabricCategoriesSection />
      <ServicesSection />
      <StoreShowcase />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <CTABanner />
      <FooterSection />
    </main>
  );
};

export default Index;
