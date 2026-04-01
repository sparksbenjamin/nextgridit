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
    "Explore NextGridIT services across managed security and infrastructure, cloud identity, global deployment logistics, exposure research, private AI systems, and compliance-aware delivery.",
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
      "Overview of service lines including managed security and infrastructure, Microsoft 365, global deployment logistics, security hardening, exposure research, and private AI systems.",
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
