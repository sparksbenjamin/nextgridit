import type { Metadata } from "next";
import { ServicesPageClient } from "@/components/pages/ServicesPageClient";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore NextGridIT services including network infrastructure, security hardening, managed IT support, and compliance-aware technical guidance.",
  path: "/services/",
});

export default function ServicesPage() {
  return <ServicesPageClient />;
}
