import { JsonLd } from "@/components/content/JsonLd";
import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/ContactPageClient";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Book an IT project consultation with NextGridIT or send your project details. Discuss IT transitions, security, and infrastructure in Seneca and Upstate SC.",
  path: "/contact/",
});

export default function ContactPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact/" },
  ]);

  return (
    <>
      <JsonLd id="contact-breadcrumb-schema" data={breadcrumbSchema} />
      <ContactPageClient />
    </>
  );
}
