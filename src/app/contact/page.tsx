import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/ContactPageClient";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact NextGridIT for network infrastructure, security, compliance-aware support, and IT services in Upstate South Carolina.",
  path: "/contact/",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
