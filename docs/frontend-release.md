# Frontend redesign — release evidence

Date: 2026-10-20. Implementation complete.

## Delivered behavior

The site now presents NextGridIT as an independent IT consultancy with one
shared visual system. The homepage replaces the decorative sphere with a
clearly identified, sanitized project story. Service introductions put scope,
outcomes, and a project inquiry near the top. About introduces the consultant
using existing professional facts rather than an invented portrait or stock
team. Case studies, guides, policy resources, industry/location pages, and
technology pages use layouts suited to their content.

Typography uses the existing Space Grotesk consistently. Forest green, neutral
surfaces, readable body copy, restrained borders, and shared controls replace
mixed neon/glass treatments. Light and dark themes apply to the homepage and
interior pages together, retaining the saved theme preference and recovery when
storage is blocked.

Navigation switches to its compact layout before tablet controls collide.
Mobile menus use an opaque surface, grouped native disclosures, Escape/focus
handling, and background inertness while open. Desktop dropdowns close on
navigation, outside interaction, or Escape. The footer groups destinations by
purpose and provides quieter theme controls.

The primary action is consistently “Discuss your project,” linking to the real
contact form. Contact now has a shorter layout with direct phone/email access
and a concise explanation of next steps. The sticky mobile contact bar is
omitted on the contact page so it cannot cover form controls. The form retains
native validation, timeout/pending behavior, duplicate-submission protection,
accepted-delivery success, preserved input after failure, and a prefilled email
fallback. The Microsoft Graph/Worker delivery integration is unchanged.

The technology catalog supports combined query/category/service/industry
filters, an announced result count, reset, and a useful empty state. Guide
anchors, policy PDF downloads, FAQ disclosures, and the Labs mail-provider lookup
remain functional. Missing routes return a branded 404 with useful destinations.

All 78 canonical page URLs, page metadata, structured data, sitemap coverage,
legacy redirects, and preview noindex behavior remain in place. The local
preview command now uses `http://localhost:8788` consistently, avoiding production
host redirects and local API-origin mismatches.

## Verification

- `npm run check`: lint, TypeScript, 20 Worker regression tests, production
  static build, and export checks passed.
- Export: 78 canonical sitemap URLs; 5,954 internal links; 371 initial-HTML
  JSON-LD blocks. No missing or duplicate metadata, broken internal links,
  sitemap coverage gaps, or orphan pages were reported by the repository checks.
- `npm run test:browser`: 13 browser tests passed. The suite visits 15
  representative routes at 320, 390, 768, 1024, and 1440px, with no document
  overflow, header collisions, missing canonicals/headings, or browser exceptions.
- Every sitemap destination returned 200 in the local Cloudflare runtime.
  Missing routes returned 404; slash/index variants and a legacy service route
  retained their intended permanent redirects.
- Exercised mobile/desktop menus, focus restoration, viewport changes, theme
  persistence, blocked storage, native form validation, actual Worker rejection
  of invalid input, mocked contact failure/success and duplicate-send handling,
  technology filtering/reset/empty state, article fragments, seven PDF downloads,
  Labs lookup validation/success/failure, reduced motion, and 200% text resizing.
- Captured 29 desktop, narrow, tablet, full-page, and dark-state images and
  inspected representative captures directly. Selected evidence is linked below.
- Local simulated-mobile Lighthouse: homepage performance 100 / accessibility
  100; Contact performance 100 / accessibility 100. Contact LCP 1.6 seconds,
  TBT 10 ms, CLS 0. These are local lab diagnostics, not field Core Web Vitals
  or a WCAG conformance certification. Preview SEO is intentionally limited by
  its noindex header; production indexing is checked separately at release.

## Evidence

- [Homepage](design-review/2026-10-20/after/home-desktop.png)
- [Homepage dark theme](design-review/2026-10-20/after/home-dark.png)
- [Contact](design-review/2026-10-20/after/contact-desktop.png)
- [Narrow service introduction](design-review/2026-10-20/after/service-390.png)
- [Original review and before captures](frontend-design-plan.md)

## Practical limits

Real mailbox delivery was not exercised; browser success/failure cases use
mocked API responses and Worker tests mock Microsoft Graph. Production still
requires the existing Microsoft 365 secrets and mailbox permissions. No real
contact message was sent during this work. Labs tests also mock DNS results.

There were no supplied, approved portrait or project photographs. The completed
text-led design uses existing sanitized project information without placeholders,
invented endorsements, or fabricated client imagery. Authentic approved photos
can be added later without changing the information hierarchy.

The bare-domain Cloudflare 522 found in the earlier live SEO review is a separate
infrastructure follow-up; this redesign does not claim to resolve an external
DNS/custom-domain configuration. Search Console, field performance, conversion
analytics, and real visitor research were not available.

## Repeat the checks

Use Node 22+ and `npm ci`, then `npm run check`. Install a browser once with
`npx playwright install chromium`, or supply an installed Chromium-compatible
binary through `PLAYWRIGHT_CHROMIUM_EXECUTABLE`. Run `npm run test:browser` after
the build. The test runner starts a fresh local Worker on port 8790 so it reads the current
asset manifest. Rebuilding `out` while an older Wrangler preview remains open
can leave its manifest stale; restart that preview after rebuilding.
See the README for preview and test-environment options.


## Deployment configuration follow-up

GitHub's Cloudflare check succeeded for `a160a88` (the established www-only
configuration), but failed for `c1d0553` and `342380f` after the public assets
became available. The latter two configurations also attempted to register the
bare domain as an additional custom domain. The public check does not expose
Cloudflare's detailed error, and account credentials were unavailable here.

The unverified bare-domain registration was removed to restore the established
www-only deployment target. The Worker still contains the permanent apex-to-www
redirect for use once the bare-domain binding/DNS is correctly configured.
This isolates an infrastructure prerequisite from publishing the working site.
