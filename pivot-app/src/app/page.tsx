import HeroSection from "@/components/HeroSection";
import BentoSection from "@/components/BentoSection";
import LocalSection from "@/components/LocalSection";
import SaasSection from "@/components/SaasSection";
import IntegrationSection from "@/components/IntegrationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BentoSection />
      <LocalSection />
      <SaasSection />
      <IntegrationSection />
      <ContactSection />
    </main>
  );
}
