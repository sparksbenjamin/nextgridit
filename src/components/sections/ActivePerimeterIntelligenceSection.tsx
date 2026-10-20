import { SurfaceScanModule } from "@/components/scan/SurfaceScanModule"

export function ActivePerimeterIntelligenceSection() {
  return (
    <SurfaceScanModule
      anchorId="active-perimeter-intelligence"
      sectionTitle="Public Mail Provider Lookup"
      sectionDescription="Enter a public domain to identify its mail routing from DNS records."
    />
  )
}
