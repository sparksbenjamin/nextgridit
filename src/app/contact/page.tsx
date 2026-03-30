import type { Metadata } from "next";
import Script from "next/script";
import { ContactPageClient } from "@/components/pages/ContactPageClient";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact NextGridIT for network infrastructure, security, compliance-aware support, and IT services in Upstate South Carolina.",
  path: "/contact/",
});

export default function ContactPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact/" },
  ]);

  return (
    <>
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient />
    </>
  );
}
