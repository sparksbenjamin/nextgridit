import type { Metadata } from "next";
import { ServicesPageClient } from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NextGridIT services including network infrastructure, security hardening, managed IT support, and compliance-aware technical guidance.",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
