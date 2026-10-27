# Aegis WAF landing page

## Brief and source review

Audience: developers, self-hosters, and IT teams evaluating an application WAF.
Primary task: assess Aegis WAF for self-hosted websites, HTTP APIs, and multiple
applications. The landing page explains benefits, use cases, and evaluation
criteria in original copy. Installation commands and detailed operating guidance
live on GitHub. Secondary task: discuss deployment help with NextGridIT.

Canonical route: `/aegis/WAF/` (uppercase WAF as requested). Legacy `/aegis/`,
slashless, HTML, and lowercase WAF variants permanently redirect with HTTP 308,
preserving query parameters. Asset paths remain unchanged.

Aegis WAF’s teal, mint, dark slate, shield motif and real interface screenshots carry
its identity inside NextGridIT's shared navigation, themes and typography.

Reviewed the public repository at `7c07c36224c51329cb11becd1cc704a724bd972c`
on 2026-10-26. Read the README, Compose deployment, license, architecture/limits,
managed-signature and agent-access documentation, screenshot/graphics provenance,
benchmark data, and relevant Coraza/MCP implementation paths. This is a product
claims/source review, not a fresh security audit or an independently rerun gateway
benchmark. Changes are confined to the website repository.

## Claims and authorities

| Page claim | Repository authority |
| --- | --- |
| Self-hosted HTTP(S) reverse proxy and WAF | README; compose.yaml; internal/app public routing |
| Coraza and OWASP CRS policies | go.mod; internal/app/managed_signatures.go; docs/managed-signatures.md |
| TLS issuance and renewal, PEM uploads | docs/certificates.md; README; certificate UI screenshot |
| Default app plus PostgreSQL | compose.yaml; docs/deployment.md |
| Optional external agents, disabled drafts, gated enforcement | internal/app/mcp.go server instructions; docs/agent-access.md |
| No built-in inference; bounded and opt-in inspection | docs/limitations.md; docs/body-inspection.md |
| Open-source application code | LICENSE; README third-party notices |

The revised page links to the published benchmark methodology instead of
repeating the README’s benchmark table. Product facts were rechecked against
the current GitHub README on 2026-10-26. No attack-coverage, autonomous policy
adaptation, network DDoS protection, production-capacity or certification claims.

## Assets and provenance

- `public/aegis/{live-traffic-map,overview,certificates-current,curated-set-builder}*.webp`
  are resized/compressed versions of the repository's actual PNG screenshots.
  Application content was not altered. Capture dates/revisions and synthetic-data
  details remain in the linked upstream `docs/screenshots/README.md`.
- `public/aegis/request-path.svg` and `request-path-mobile.svg` are original static
  architecture illustrations with desktop/phone compositions and light/dark
  palettes. They contain no scripts, external fonts, remote images or motion.
- The HTML agent-workflow infographic is semantic and responsive. It shows
  scoped reading, disabled drafts, simulation and explicitly permitted enforcement.
- `public/aegis/social.svg` and `.png` are an original 1200×630 sharing image.
- Upstream MIT notice is retained in `public/aegis/LICENSE.txt`.

## Discovery and behavior

Homepage feature, Resources navigation, footer and sitemap link the product.
The title, description, H1, sharing metadata, and SoftwareApplication schema
identify Aegis WAF. Schema links directly to nextgridit-team/Aegis-WAF. The
canonical, Open Graph URL, breadcrumbs, and sitemap use `/aegis/WAF/`.
The general mobile booking bar is omitted on this product page so GitHub remains
the primary action; the final section retains an optional deployment-help link.
Screenshot tabs support pointer and Left/Right/Home/End keyboard navigation.
Full-size images link to the actual repository captures. Evaluation guidance,
installation links, and FAQs remain available without JavaScript. No product demo, email or
installation is executed for visitors.

## Original launch verification (before the landing-page revision)

- Full check: lint, TypeScript, 22 unit tests, build and export verification passed.
- Export: 84 HTML files, 81 sitemap URLs, 386 JSON-LD blocks and seven PDF canonicals.
- Browser suite: 23 tests passed, including keyboard/touch screenshot navigation,
  clipboard success/failure, no-JavaScript content and all sitemap destinations.
- Twelve automated accessibility states (home/product × three widths × two themes)
  passed with no axe violations, horizontal overflow or runtime exceptions.
- Both architecture SVGs passed XML parsing and browser text-geometry checks:
  zero canvas overflow, container spills or text overlap. Dark palettes verified.
- Twelve referenced repository documentation/image files verified to exist.
- Local mobile Lighthouse: performance 99, accessibility 100, best practices 100;
  LCP 2.2 seconds, TBT 10 milliseconds, CLS 0. These are lab measurements.
- Screenshots actually reviewed on phone/tablet/desktop, both themes, the
  architecture diagram and setup section. Social preview visually reviewed.

Live deployment checks are reported separately with the delivery.
Browser checks use Chromium emulation, not physical mobile hardware.

## Landing-page revision verification

Updated regression coverage checks the WAF canonical and search metadata,
repository identity, homepage discovery, sitemap migration, permanent redirects,
query preservation, screenshots, and no-JavaScript content.

- ESLint and TypeScript passed.
- All 23 unit tests passed with `node --import tsx --test --test-isolation=none tests/*.test.ts`.
- Production export passed with `next build --webpack`, followed by header
  generation and export checks: 84 HTML files, 81 sitemap URLs, 386 JSON-LD blocks.
- All 23 Playwright browser tests passed using the installed Brave Chromium.
- Desktop and phone screenshots reviewed in light and dark themes. No horizontal
  overflow at 1440px or 390px; both lazy-loaded architecture diagrams resolved.
- The default Turbopack build could not bind its worker port in this environment;
  the supported webpack compiler completed successfully. Build configuration is
  unchanged. Generated route types were refreshed after moving the page.
- Changes are local and have not been deployed.
