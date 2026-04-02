export const surfaceScanSteps = [
  "[INFO] Detecting Mail Carrier via MX Fingerprinting...",
  "[MATCH] Microsoft 365 / Entra ID Environment Detected.",
  "[INTEL] Cross-referencing MSRC Case #108637 (Unauthenticated Enumeration)...",
  "[AI] Qwen 2.5 Coder generating risk posture brief...",
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
