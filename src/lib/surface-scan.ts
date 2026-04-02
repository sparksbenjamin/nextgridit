export const surfaceScanSteps = [
  "[INFO] Fingerprinting Mail Carrier (MS365 / Google)...",
  "[RECON] Mapping DNS & Subdomain Surface...",
  "[INTEL] Cross-referencing MSRC Case #108637 templates...",
  "[AI] Local Qwen 2.5 generating Risk Brief...",
] as const

export type SurfaceScanResult = {
  domain: string
  environment: string
  finding: string
  focus: string
  riskScore: number
  mxRecords: string[]
  summary: string
  technicalBrief: string[]
}

export function looksLikeDomain(value: string) {
  return /^(?!-)[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(value.trim())
}
