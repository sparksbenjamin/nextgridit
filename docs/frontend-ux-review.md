# Frontend UX and motion review

Reviewed 2026-10-20 against the current production site and the resulting local
Cloudflare build. This supplements the earlier redesign and booking release
notes; the current primary action is **Book a consultation**.

## Direction and findings

Keep the established forest green identity, open layouts, restrained borders,
Space Grotesk typography, documented project examples, and direct booking path.
The homepage already communicates independent IT consulting and ownership of
systems. A new visual identity would not resolve the specific problems found.

| Finding | Delivered improvement |
| --- | --- |
| Guide and policy contents appeared after the entire article on narrow screens | Native expandable contents before the article through 850px; desktop keeps its sidebar. Links retain existing heading anchors. |
| Four process columns felt cramped on portrait tablets | Two columns through 850px, with the existing desktop and phone layouts preserved. |
| FAQ summaries and technology category buttons had small touch areas | Minimum 44px height; category buttons also have a minimum 44px width. Theme and filter-reset controls receive the same height. |
| Menus appeared and disappeared abruptly | 180ms opacity/6px translation transitions, with retained desktop content for exit. Closed panels become inert and leave the accessibility tree immediately. |
| Resource pages lacked an active desktop navigation indicator | Resources now indicates its section on guide, policy, process, FAQ, and other resource routes. |
| Expanded mobile menu keyboard handling omitted native summaries from its focus-boundary calculation | Include visible summaries along with links and buttons; preserve Escape, focus restoration, background inertness, and resize cleanup. |
| Text enlarged to 200% overflowed the desktop header after the web font loaded | Font-relative container queries switch to compact navigation as available text space shrinks. Observing the actual header layout also clears menu locks when text size returns to normal. The regression check waits for the real font and exercises the enlarged menu. |
| Short mobile viewports need space beneath menu controls | Keep the scrolling menu and add bottom safe-area padding. |
| Wide Markdown tables need a keyboard entry point | Named, focusable scroll region; retain document-level reflow. |

## Motion decisions

- Menus move from the header and support rapid reversal without delayed timers.
  Chevrons indicate expanded state.
- Supporting homepage sections and shared project invitations have a single
  380ms, 12px arrival as they enter the viewport. Initially visible content,
  restored scroll positions, and focused sections are excluded. Nothing starts
  hidden or waits for JavaScript, and no persistent fill style is applied.
- Buttons have a small press response; text-link arrows move only on devices
  with a fine pointer and hover support.
- Reduced-motion preferences remove translations/press effects and scroll
  smoothing; changing the preference cancels active section animations.
  Keyboard focus also cancels motion on its containing section.
- No parallax, automatic carousels, moving statistics, scroll interception, or
  additional animation dependency. Motion uses CSS and native browser APIs.

## Verification and scope

| Requirement | Evidence |
| --- | --- |
| Modern, professional visual presentation | Actual before/after browser captures inspected for homepage, services, contact, technology catalog, guide, About, Labs, case studies, process, desktop menu, tablet menu, and stable dark contact. The established hierarchy, color system, and project evidence remain coherent. |
| Phone, tablet, and desktop reflow | 23 representative routes at 320, 390, 768, 1024, and 1440 CSS pixels in the repository browser suite: no document overflow or header collisions, one H1, correct canonical, and structured data. A separate 66-view scan covered 22 routes at 390/768/1440 with no runtime exceptions or remaining measured small button/summary targets. |
| Useful tablet and mobile navigation | Contents links tested at 390/768/820, including article ordering and target visibility below the sticky header. Menu scrolling and booking-link focus tested at 820×480. Escape, route changes, resize, background inertness, and rapid toggling tested. |
| Purposeful, accessible motion | Actual section-animation creation, single playback, changed reduced-motion preference, and no-JavaScript content tested. Closed navigation panels remain inert throughout exit. |
| Existing visitor journeys | Booking handoff, project-details anchor, combined/empty/reset technology filters, FAQ expansion, article anchors, policy PDFs, Labs validation/results/failure recovery, and contact validation/failure/duplicate/success states pass. Provider results and successful submissions use controlled mocks; no email or appointment was created. |
| Accessibility checks | axe-core Playwright 4.14.0: 33 stable page/state scans across 390/768/1440, including open menus and dark contact, with no WCAG-tagged violations. Scans wait for active transitions to finish. Keyboard, 200% text resizing, and reduced motion are also covered by browser tests. This is not an accessibility conformance certification. |
| Build and regression checks | `npm run check` passes: ESLint, TypeScript, 22 unit tests, production export, link/metadata/schema checks. `npm run test:browser`: 17 tests pass. Export: 81 HTML files, 78 sitemap URLs, 6,755 internal links, 371 JSON-LD blocks, seven PDF canonical headers. Every sitemap destination returns 200 in the local Worker; missing pages and legacy redirects retain their expected statuses. |
| Performance | Local mobile Lighthouse: performance/accessibility/best practices 100/100/100, LCP 1.8s, TBT 0ms, CLS 0. Production baseline: 89/100/100/100 including SEO; the first post-release production check reports 93/100/100/100, TBT 0ms, and CLS 0. These environments differ, so these numbers do not establish a performance improvement. Preview intentionally remains noindex. |

Browser evidence was collected with Chromium/Brave emulation. Physical Android,
iOS, tablet software keyboards, and screen-reader behavior were not tested.
Production publishing and final interaction checks are recorded in the release
handoff. The first production sweep rendered all 78 published pages at
390/768/1440 (234 views): every response was 200, with no overflow, missing H1,
canonical mismatch, input text below 16px, or runtime exception. A live 200%
text test then exposed the header issue documented above; that regression is
covered explicitly rather than treating the normal-size sweep as proof of zoom
behavior.
