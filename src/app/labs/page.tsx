import type { Metadata } from "next"
import Script from "next/script"
import { LabsPageClient } from "@/components/pages/LabsPageClient"
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: "NextGrid Labs — Security Research and Vulnerability Discovery",
  description:
    "Active bug bounty research on Microsoft and HackerOne platforms. Identity exposure analysis, vulnerability discovery, and perimeter intelligence from NextGridIT.",
  path: "/labs/",
})

export default function LabsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "NextGrid Labs", path: "/labs/" },
  ])

  return (
    <>
      <Script
        id="labs-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LabsPageClient />
    </>
  )
}
