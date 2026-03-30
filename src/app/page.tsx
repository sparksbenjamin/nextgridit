import { HeroSection } from "@/components/sections/HeroSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TargetAudienceSection />
      <ServicesSection />
      <ResourcesSection />
      <ServiceAreaSection />
    </div>
  );
}
