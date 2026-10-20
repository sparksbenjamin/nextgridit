import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import { ServicesPage2026 } from "@/components/pages/ServicesPage2026";
import {
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createMetadata,
} from "@/lib/seo";
import { services } from "@/lib/site-data";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "IT services for Upstate SC businesses: MSP transitions, security assessments, Microsoft 365, network infrastructure, camera systems, and private AI consulting.",
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
      "NextGridIT services: MSP transitions, vendor lockout recovery, HIPAA security assessments, vulnerability remediation, infrastructure hardening, hybrid cloud, Microsoft 365, network and Wi-Fi, penetration testing, and camera systems.",
    path: "/services/",
    items: services.map((service) => ({
      name: service.title,
      description: service.summary,
      path: `/services/${service.slug}/`,
    })),
  });

  return (
    <>
      <JsonLd id="services-breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="services-collection-schema" data={collectionSchema} />
      <ServicesPage2026 />
    </>
  );
}
