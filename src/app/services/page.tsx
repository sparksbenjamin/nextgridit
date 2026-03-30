import type { Metadata } from "next";
import Script from "next/script";
import { ServicesPageClient } from "@/components/pages/ServicesPageClient";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore NextGridIT services including project-led IT support, Microsoft 365, network infrastructure, public Wi-Fi, cameras, and compliance-aware technical guidance.",
  path: "/services/",
});

export default function ServicesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
  ]);

  return (
    <>
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesPageClient />
    </>
  );
}
