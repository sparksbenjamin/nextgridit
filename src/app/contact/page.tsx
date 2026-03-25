import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NextGridIT for network infrastructure, security, compliance-aware support, and IT services in Upstate South Carolina.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
