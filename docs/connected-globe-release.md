# Connected globe design pass

2026-10-20. The visitor needs local, experienced help connecting infrastructure,
cloud services, security, and ownership. The opening now pairs that practical
message with a large globe extending beyond the page frame. Green remains the
brand color; stronger sans-serif headings, varied section treatments, and more
direct service links replace the repeated italic editorial treatment.

## Motion and meaning

The rotating globe is decorative, with illustrative routes originating near
Seneca, South Carolina. It does not claim to show attacks, client locations,
NextGridIT facilities, or live traffic. The caption explicitly identifies the
routes as illustrative. Booking and service links remain ordinary native links.

The renderer uses Canvas 2D without a new dependency. Coastline points load in a
separate local chunk. Drawing is capped at approximately 30 fps on larger
canvases and 20 fps on smaller ones, with device pixel ratio capped at 1.5.
Intersection and page-visibility observers stop animation when it is not visible.
Pause/play is available, including keyboard access. Reduced-motion preferences
are observed immediately and when changed. A complete static SVG globe is
present before JavaScript and remains the fallback if enhancement fails.

The introduction and About page no longer present company social profiles as
Benjamin's personal accounts. Company profile links elsewhere retain their
company context. Personal links and additional career details await user input.
No new career claims, testimonials, client photographs, or credentials were added.

## Map provenance and regeneration

- Source: [Natural Earth 110m land geometry](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson).
- License: [Natural Earth public-domain terms](https://www.naturalearthdata.com/about/terms-of-use/).
- Downloaded source SHA-256:
  `9e0729ee253ca7d7a5c4ae9395fb1902264c5377c52e224d13dd85010e2835d9`.
- Generator: `scripts/generate-globe.mjs`, run with the downloaded GeoJSON path.
  It samples 11,000 evenly distributed sphere locations and retains 3,172 land
  points using the existing `d3-geo` dependency.
- Generated files: `src/lib/globe-points.json` and
  `public/images/network-globe.svg`. Normal builds require no map-service access.
- Renderer and layout are original code. No Cloudflare artwork or code was copied.

## Verification

- Lint, TypeScript, 22 unit tests, production build and export checks passed.
  The export includes 81 HTML files, 6,763 internal links, 78 sitemap URLs,
  371 JSON-LD blocks and seven PDF canonical headers.
- All 20 browser tests passed, including new checks for pixel changes while
  playing, stable output when paused or offscreen, resume, and changing the
  reduced-motion preference. Existing booking/contact, navigation, filter,
  mobile, enlarged-text, SEO and no-JavaScript checks remain covered.
- Automated accessibility: 36 page, theme and menu states, zero axe violations.
- Production-export screenshots reviewed at desktop, tablet and phone widths,
  including both themes and static/reduced motion. No browser runtime errors
  or horizontal overflow detected at 320, 390, 768 and 1440 pixels.
- All 78 public pages checked at 390, 768 and 1440 pixels: 234 views with
  no route errors, canonical mismatches, heading-count issues, small input
  fonts, horizontal overflow or browser runtime exceptions detected.
- Local mobile Lighthouse with animation enabled: performance 97,
  accessibility 100, best practices 100; LCP 2.6 seconds, TBT 10 milliseconds,
  CLS 0. These are lab measurements, not field performance or conversion data.

Device checks use Chromium emulation. Physical-device, WebKit and screen-reader
testing remain unverified. Contact success and provider handoff states use test
doubles; no actual email or appointment was submitted. Live deployment checks
are performed separately after publication.
