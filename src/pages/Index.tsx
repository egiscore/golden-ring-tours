import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ToursSection from "@/components/sections/ToursSection";
import RoutesSection from "@/components/sections/RoutesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import GallerySection from "@/components/sections/GallerySection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import CallbackButton from "@/components/CallbackButton";

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <RoutesSection scrollToSection={scrollToSection} />
      <ToursSection scrollToSection={scrollToSection} />
      <BenefitsSection />
      <SocialProofSection />
      <CallbackButton />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
