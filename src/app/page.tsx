import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TargetAudienceSection />
      <ServicesSection />
      <TrustSignalsSection />
      <CaseStudiesSection />
      <ResourcesSection />
      <ServiceAreaSection />
    </div>
  );
}
