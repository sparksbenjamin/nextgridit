# Studio redesign release

Prepared 2026-10-20. The selected editorial direction gives NextGridIT a more
recognizable identity while keeping consultation booking as the primary action.
See [design direction](design-direction-studio.md) for the explored alternatives,
visual decisions, and asset provenance.

## Delivered

- New homepage composition, editorial typography, original infrastructure
  illustration, project story, personal introduction, and clearer next steps.
- Accessible Connect / Protect / Take control service selector with keyboard
  navigation and links to the actual services.
- Shared styling across service directories, service details, About, Process,
  Labs, contact, resources, navigation, and footer, in both themes.
- Responsive image variants, refreshed favicon and social preview, and saved
  theme initialization before the first content paint.
- Existing routes, service scope, booking destination, contact behavior, and
  search metadata retained. No new production dependencies.

The illustration was generated using built-in imagegen. Its exact prompt and
published asset paths are in [the asset record](asset-prompts/infrastructure-studio.txt).
It is labeled as an illustration, not presented as customer installation evidence.

## Verification

- `npm run check`: lint, TypeScript, 22 unit tests, production build, PDF headers,
  and export checks passed. Export: 81 HTML files, 6,760 internal links,
  78 sitemap URLs, 371 JSON-LD blocks, and seven PDF canonical headers.
- Playwright: 19 tests passed, including service selection, navigation, filters,
  article contents, booking handoff, contact states, reduced motion, enlarged
  text, and saved dark theme before first content paint.
- All 78 public pages checked at 390, 768, and 1440 pixels: 234 page views with
  no missing pages, horizontal overflow, duplicate main headings, canonical
  mismatches, small input fonts, or browser runtime exceptions detected.
- Axe: 36 page/theme/menu states checked against WCAG A/AA rules, with zero
  detected violations after fixes. Automated checks do not establish full
  accessibility conformance.
- Local mobile Lighthouse homepage: performance 99, accessibility 100, best
  practices 100; LCP 2.2 seconds, total blocking time 10 milliseconds, CLS 0.
  Contact: 100 in those three categories. These are local lab measurements,
  not production field data or conversion results.
- Desktop, phone, tablet, dark-theme, menu, selector, and interior-page
  screenshots visually reviewed. `git diff --check` passed.

Browser device checks use Chromium viewport emulation. Physical Android/iOS,
WebKit, and actual screen-reader testing remain unverified. Contact success and
booking provider states use test doubles; no real email or appointment was sent.
The invalid contact-request check exercises the real validation response.

Production deployment and live browser checks are verified separately at release.
