---
Title: README
tags: []
description: This is a statically exported Next.js site configured for deployment to Cloudflare Workers with static assets.
last_updated: 2026-06-07
---
This is a statically exported Next.js site configured for deployment to Cloudflare Workers with static assets.

## Local Development

Use Node.js 22 or newer. Install the locked dependencies with `npm ci`, then start the normal Next.js dev server:

```bash
npm run dev
```

To preview the site in the Cloudflare Workers runtime locally:

```bash
npm run preview
```

Open `http://localhost:8788` for the Worker preview. Using the same localhost
origin for pages and API requests keeps local form validation consistent with
production; the preview is intentionally marked noindex.

## Cloudflare Deploy

Production deploy:

```bash
npm run deploy
```

Non-production preview upload:

```bash
npm run deploy:preview
```

## Required Cloudflare Credentials

Wrangler requires Cloudflare credentials for non-interactive deploys.

Create a local `.env` file from `.env.example`, or set these in Cloudflare Workers Builds:

```bash
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

If you are configuring Cloudflare Workers Builds in the dashboard, use:

- Build command: `npm install && npm run build`
- Deploy command: `npm run deploy`
- Non-production branch deploy command: `npm run deploy:preview`

This project intentionally uses static export because the site is fully static and the OpenNext server bundle exceeded Cloudflare's free-plan Worker size limit. The Worker now just serves the generated `out` assets.

The API token should have permission to deploy Workers for the target account. `CLOUDFLARE_ACCOUNT_ID` is supported by Wrangler as an environment variable and helps ensure the deploy targets the correct account.

## Contact Form Email Delivery

The contact form can send mail directly through Microsoft 365 by using the Cloudflare Worker and Microsoft Graph.

### Required Worker secrets

For local `wrangler dev` preview, copy `.dev.vars.example` to `.dev.vars` and fill in:

```bash
M365_TENANT_ID=
M365_CLIENT_ID=
M365_CLIENT_SECRET=
CONTACT_FORM_FROM_EMAIL=contact@nextgridit.com
CONTACT_FORM_TO_EMAIL=contact@nextgridit.com
```

For deployed environments, set the same values as Worker secrets:

```bash
wrangler secret put M365_TENANT_ID
wrangler secret put M365_CLIENT_ID
wrangler secret put M365_CLIENT_SECRET
wrangler secret put CONTACT_FORM_FROM_EMAIL
wrangler secret put CONTACT_FORM_TO_EMAIL
```

### Microsoft 365 setup

1. Create or choose a mailbox that will send the form messages, for example `contact@nextgridit.com`.
2. Create an Entra app registration for the website contact form.
3. Add the Microsoft Graph application permission `Mail.Send`.
4. Grant admin consent for that permission.
5. Create a client secret and store it as `M365_CLIENT_SECRET`.
6. Use the sending mailbox address as `CONTACT_FORM_FROM_EMAIL`.
7. Use the destination mailbox address as `CONTACT_FORM_TO_EMAIL`.

If you want the app limited to one mailbox instead of broad tenant mail-send rights, add an Exchange application access restriction for the chosen contact mailbox after the basic flow is working.

### Fallback behavior

The form submits to `/api/contact`. If delivery cannot be confirmed, it preserves the entered details and offers a prefilled `mailto:` link. A success message appears only after the API accepts the message.

## Review checks

Run `npm run check` (or `npm run site:check`) for lint, TypeScript, Worker regression tests, and the production static export. Every build also checks internal links, fragment targets, sitemap destinations, and page headings. These commands do not pull, commit, push, or deploy. `npm run site:sync` retains the existing PowerShell publishing workflow.

The Worker regression tests mock Microsoft Graph and DNS; they never send real email. End-to-end mailbox delivery still requires the configured Microsoft 365 secrets and permissions.

API routes run through the Worker before static assets. Requests accept JSON only, reject cross-origin browser submissions, and limit streamed bodies to 16 KiB. Provider calls have timeouts. These controls and the honeypot do not replace a Cloudflare rate limiting rule if automated abuse becomes a problem.

The Labs mail lookup checks public MX records only. It reports routing information without assigning a security risk score or claiming an AI assessment.

Static response headers are configured in `public/_headers`. Sitemap modification dates are included for dated guides and policies; undated pages do not claim a new modification on every build.

References:

- [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports)
- [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/)
- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Wrangler system environment variables](https://developers.cloudflare.com/workers/wrangler/system-environment-variables/)

## SEO review — 2026-10-20

The review covered all 78 public pages in the production export, shared layouts,
page templates, content relationships, metadata, structured data, robots rules,
sitemap coverage, and Cloudflare routing. Production HTTP spot checks confirmed
that the www homepage returned 200, robots.txt allowed crawling and referenced
the production sitemap, missing content returned 404, and `/about` redirected
to `/about/`. The bare domain returned a Cloudflare 522 during the review.

### Findings addressed

| Finding | Change | Verification |
| --- | --- | --- |
| Structured data was deferred until client JavaScript ran | Render escaped JSON-LD directly in the initial HTML on every template | Parse every JSON-LD block in the export and check hydrated pages |
| Homepage title described only the brand slogan | Add an explicit service/location title and a concise description | Inspect exported head and browser DOM |
| Service, industry, and location descriptions reused long body paragraphs | Use each page's existing editorial summary; remove generic extra technology boilerplate | Require unique, nonempty descriptions in every exported page |
| Location titles were lengthy lists of services; location and technology headings lacked service context | Focus local titles on IT support/security and give headings explicit service context | Verify metadata and one H1 per page |
| Root canonical could leak into error or future pages | Set the homepage canonical on the homepage; require self-canonicals for public pages | Compare every page canonical and Open Graph URL with its route |
| Some useful destinations were absent from shared navigation | Add technology, compliance, FAQ, process, local-first, and company-facts links | Check incoming links for every sitemap destination |
| Sitemap and robots repeated the production origin | Derive both from `siteConfig.url` | Require exact sitemap/export coverage and robots sitemap reference |
| Business schema included a city-center coordinate as the business location, an unsupported credential property, and an unsubstantiated price range | Remove those fields; connect service providers to the established business ID; add article images | Parse schema and inspect the supplied business facts |
| Bare domain failed and preview URLs had no explicit indexing protection | Add the apex custom-domain route and permanent HTTPS/www redirects; add preview `X-Robots-Tag: noindex, nofollow` | Worker tests and local Cloudflare HTTP checks |
| Discovery files referenced three obsolete URLs | Correct both existing discovery files and permanently redirect the old routes to relevant destinations | Validate discovery-file URLs against the export and request each legacy route |
| Navigation linked to redirecting slashless URLs | Standardize navigation and calls to action on trailing-slash URLs | Reject noncanonical internal page links during export checks |
| Homepage labels and shared light-theme buttons had insufficient contrast | Darken text and button colors while preserving the palette | Repeat mobile Lighthouse accessibility checks |
| Slash normalization used a temporary redirect | Set explicit trailing-slash asset handling and convert asset normalization redirects to 308 | Request slashless, `.html`, and `index.html` variants; preserve real 404s |

The export check now rejects duplicate/missing titles and descriptions, wrong
canonicals, unexpected noindex, mismatched Open Graph URLs, malformed or absent
initial JSON-LD, missing image alternatives, broken internal links/fragments,
orphan pages, and incomplete or noncanonical sitemap coverage. These are
repository acceptance rules, not claims that all are Google ranking factors.

### Validation and release

- Lint, TypeScript, and 20 individual Worker regression tests passed.
- Production webpack export passed; the expanded export checker passed for
  78 canonical URLs, 3,946 internal links, and 371 JSON-LD blocks.
- Local Cloudflare crawl: 78 pages returned 200; three missing routes returned
  404; three URL variants redirected permanently to the canonical path; all six
  legacy route variants returned 301 redirects to relevant current pages.
- Mobile homepage Lighthouse after fixes: performance 99, accessibility 100,
  LCP 2.1 seconds, TBT 0 ms, CLS 0. This is a local lab result with simulated
  mobile throttling, not real-user Core Web Vitals. Preview SEO scored 66 because
  its intentional noindex header is present; production header policy is tested
  separately.
- Browser checks cover nine representative pages at mobile and desktop widths,
  including hydrated canonical URLs, JSON-LD, headings, overflow, and exceptions.
- This environment prevents Turbopack from opening its internal port. Validation
  used `npm exec next build -- --webpack` followed by
  `node scripts/check-export.mjs`; the standard build command is retained.

Deploying this configuration attaches `nextgridit.com` as a Cloudflare custom
domain. If Cloudflare reports an existing DNS/domain conflict, reconcile it in
the zone before deployment. All asset requests now run through the Worker so
host redirects and preview indexing headers apply consistently; account for
those requests in the Cloudflare plan. Public page URLs are preserved.

After deployment, verify both hosts and HTTP/HTTPS variants, slash/index.html
redirects, missing-route status, production headers without noindex, preview
headers with noindex, and the live sitemap. Submit or recheck the sitemap in
Search Console and inspect representative canonical URLs and rich results.
Search Console, real-user Core Web Vitals, rankings, backlinks, keyword volumes,
and Google Business Profile ownership were not available for this review.
The business profile URL is still empty in `siteConfig`; add the verified URL
when available. No street address, review scores, or business credentials were
invented to satisfy rich-result validators.

Service/location intent is mapped to the existing service and service-area
pages. Technology pages retain their existing platform summaries and related
services; their search demand and need for deeper original examples should be
assessed from Search Console queries before expanding them. Review impressions,
clicks, query relevance, and qualified inquiries after 28 days, and use field
performance reports when enough real-user data is available.

Implementation references: [Next.js metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata),
[Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls),
[Google structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data),
and [Cloudflare HTML handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/).


## Frontend design and browser verification

The consultancy design uses shared light/dark tokens, a responsive navigation,
consistent page introductions, and a single project-inquiry action. Service,
industry, location, and technology URLs are preserved. The contact form still
uses the Worker/Microsoft 365 delivery flow; the Labs lookup still uses public
MX records. Neither flow substitutes a visual success state for API acceptance.

The implementation and review evidence are recorded in
[the frontend release notes](docs/frontend-release.md). The original
[design plan](docs/frontend-design-plan.md) includes the before-state captures.

For repeatable frontend checks:

```bash
npm run check
npx playwright install chromium
npm run test:browser
```

The browser suite starts a fresh local Worker on port 8790 using the generated `out`
directory. It checks the public route map, 15 templates at five widths,
keyboard/menu behavior, themes and storage recovery, form validation and delivery
states, technology filters, guide anchors, PDF downloads, the Labs lookup, and
200% text resizing with reduced motion. Contact and lookup success/failure cases
use mocked responses; tests do not send email or query external DNS. An invalid
contact payload also exercises the actual Worker validation path without
sending a message.

Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to use an installed Chromium-compatible
browser instead of Playwright's downloaded browser. `SITE_TEST_URL` can point
the browser suite at another approved environment; avoid using it for arbitrary
third-party sites. Browser reports and failure traces are ignored by Git.
