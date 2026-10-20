# SEO release audit

Reviewed 2026-10-20 after the frontend redesign. This supplements the earlier
audit in the README and the frontend release evidence.

## Scope and observed findings

Fetched all 78 sitemap destinations from production and inspected their initial
HTML and HTTP headers. All returned 200 with unique titles/descriptions, one H1,
matching canonical URLs, crawlable content, and valid JSON in 371 JSON-LD blocks.
The sitemap and robots.txt used the production www origin. Missing content
returned 404. The social image returned 200 and measured 1200 × 630 pixels.

Remaining findings and implemented fixes:

| Finding | Change | Release verification |
| --- | --- | --- |
| Homepage title omitted the business name because of layout title inheritance | Shared metadata emits absolute branded titles | Build checks require branded, unique titles across all 78 pages |
| Guide and policy detail pages used generic website sharing metadata | Emit article metadata using the same real publication/update dates and tags as the content/schema | Check article type and matching dates in the export |
| Seven downloadable PDFs lacked an equivalent HTML canonical | Generate HTTP Link canonical headers from the policy content model | Browser tests request all seven PDFs and their HTML equivalents |
| Image preview policy was implicit | Permit large Google image previews in shared metadata | Verify initial-HTML googlebot directives on all public pages |
| Bare domain returned Cloudflare 522 over HTTP and HTTPS | Route the existing proxied apex through the Worker's permanent www redirect | Verify actual deployment and both schemes, paths, and query strings after publication |

The apex is a normal Worker route, not a second custom-domain registration. It
intercepts the existing proxied hostname without replacing DNS records. The
established www custom domain remains the public content origin. Wrangler's dry
run accepted the mixed route configuration. The subsequent successful production
deployment and live checks confirmed the route is installed and the error is
resolved.

## Intended search behavior

All 78 public HTML pages are self-canonical, indexable, linked internally, and
present in the sitemap. Service pages cover specific project needs; service-area
pages cover local relevance; industry pages explain sector needs; technology
pages support platform expertise. Guides answer informational questions and
policy pages provide readable resources with optional PDF downloads. These are
qualitative intent assignments, not measured keyword volumes or ranking claims.

Filtered technology results stay on the existing catalog route. PDF versions
identify their HTML resource as canonical. Legacy and slash/index variants
redirect to established destinations. Missing routes return a real 404 with
noindex, while nonproduction hosts carry a noindex response header. Public
content and schema remain available before client JavaScript runs.

No new overlapping location/technology pages or boilerplate content were added.
Local schema retains factual city-level details; no street address, reviews,
coordinates, or credentials were invented for search validation. Existing
llms.txt files are maintained for consistency without claiming ranking value.

## Verification before publication

- `npm run check`: lint, TypeScript, 22 regression tests, production build, and
  export checks passed.
- Export checks: 81 HTML files, 78 sitemap destinations, 5,954 internal links,
  371 JSON-LD blocks, and seven PDF canonical headers passed.
- `npm run test:browser`: all 13 tests passed, including 15 representative
  routes at 320, 390, 768, 1024, and 1440px, navigation, themes, form states,
  filtering, guide anchors, PDF headers/downloads, Labs states, and text resizing.
- Fresh production homepage mobile Lighthouse: performance 94, accessibility
  100, SEO 100; LCP 3.0 seconds, TBT 10 ms, CLS 0. This is a simulated lab run,
  not field Core Web Vitals or accessibility certification.
- Contact delivery states and DNS outcomes use mocks; no real email was sent.

## Production release evidence

Commit `204e5d0` deployed successfully through GitHub's `Workers Builds:
nextgridit` check. A fresh production crawl verified all 78 pages returned 200,
with unique branded titles/descriptions, self-canonicals, large image preview
permission, and no accidental noindex. All 371 JSON-LD blocks parsed; all 18
article pages exposed matching sharing/schema dates. All seven PDF responses
carried the correct HTML canonical Link header.

Both `http://nextgridit.com` and `https://nextgridit.com` returned 308 redirects
to HTTPS www, preserving the tested service path and tracking query. HTTP www
also redirected correctly. A tracking-query service request retained a clean
canonical; a missing route returned 404 with noindex. Production robots.txt
remained crawlable with the correct sitemap. No Cloudflare 522 remained in
these host checks.

## Measurement and unavailable evidence

Search Console, analytics, field performance, backlinks, and Google Business
Profile ownership were unavailable. These checks establish delivery and search
signals; they do not prove Google indexing, rich results, or improved rankings.
Add the verified business-profile URL when available. Check Search Console's
sitemap, representative URL inspections, page indexing, and query relevance;
review qualified inquiries alongside clicks/impressions after 28 days. Use
field data to decide whether performance work is needed and query evidence to
prioritize deeper original content.

## Implementation references

- [Next.js metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Cloudflare Worker routes](https://developers.cloudflare.com/workers/configuration/routing/routes/)
- [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google local business schema](https://developers.google.com/search/docs/appearance/structured-data/local-business)
