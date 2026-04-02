import type { Metadata } from "next"
import Script from "next/script"
import { LabsPageClient } from "@/components/pages/LabsPageClient"
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: "NextGrid Labs",
  description:
    "MSRC case tracking, Entra ID research, sovereign AI workflows, and instant perimeter audit previews from NextGridIT.",
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
