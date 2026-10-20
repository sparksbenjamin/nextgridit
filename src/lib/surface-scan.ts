export type SurfaceScanResult = {
  domain: string
  environment: string
  mxRecords: string[]
  summary: string
}

export function looksLikeDomain(value: string) {
  const domain = value.trim()
  if (domain.length > 253 || /^\d+(\.\d+){3}$/.test(domain)) return false
  const labels = domain.split(".")
  return labels.length >= 2 && /^[a-z]{2,63}$/i.test(labels.at(-1) ?? "") &&
    labels.every((label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label))
}
