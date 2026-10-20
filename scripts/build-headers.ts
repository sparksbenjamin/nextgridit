import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { getAllPolicies } from "../src/lib/policies";
import { siteConfig } from "../src/lib/site-data";

// Derive PDF canonicals from the same published content as the HTML pages.
const canonicals = new Map<string, string>();
for (const policy of getAllPolicies()) {
  if (!policy.pdf) continue;
  const pdf = new URL(policy.pdf, siteConfig.url);
  if (pdf.origin !== siteConfig.url) continue;
  assert(
    !canonicals.has(pdf.pathname),
    `Multiple policies use ${pdf.pathname}`,
  );
  canonicals.set(
    pdf.pathname,
    `${siteConfig.url}/resources/policy-starter-kit/${policy.slug}/`,
  );
}
const baseHeaders = readFileSync(
  path.resolve("public/_headers"),
  "utf8",
).trimEnd();
const policyHeaders = [...canonicals]
  .map(([pdf, canonical]) => `${pdf}\n  Link: <${canonical}>; rel="canonical"`)
  .join("\n\n");
writeFileSync(
  path.resolve("out/_headers"),
  `${baseHeaders}\n\n${policyHeaders}\n`,
);
console.log(
  `Generated canonical response headers for ${canonicals.size} policy PDFs.`,
);
