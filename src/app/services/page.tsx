import type { Metadata } from "next";
import Script from "next/script";
import { ServicesPageClient } from "@/components/pages/ServicesPageClient";
import {
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createMetadata,
} from "@/lib/seo";
import { services } from "@/lib/site-data";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "MSP transitions, vendor lockout recovery, HIPAA security assessments, vulnerability remediation, infrastructure hardening, Microsoft 365, network and Wi-Fi, and penetration testing in Upstate South Carolina.",
  path: "/services/",
});

export default function ServicesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
  ]);
  const collectionSchema = createCollectionPageSchema({
    name: "NextGridIT Services",
    description:
      "NextGridIT services: MSP transitions, vendor lockout recovery, HIPAA security assessments, vulnerability remediation, infrastructure hardening, Microsoft 365, network and Wi-Fi, penetration testing, and camera systems.",
    path: "/services/",
    items: services.map((service) => ({
      name: service.title,
      description: service.summary,
      path: `/services/${service.slug}/`,
    })),
  });

  return (
    <>
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="services-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ServicesPageClient />
    </>
  );
}
