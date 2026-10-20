# NextGridIT frontend review and design plan

Date: 2026-10-20. Original review and implementation plan.
Implementation was subsequently authorized and completed; see
[release notes](frontend-release.md) for the delivered scope and validation.
The observations below describe the site before the redesign.

## Recommendation

Refine NextGridIT into a calm, credible, locally grounded technical consultancy.
Keep the recognizable green identity, the emphasis on client ownership, and the
existing substantive service content. Establish one visual system across the
site, make proof of actual work more prominent, and simplify the route from a
visitor's problem to a project inquiry.

The current homepage is the strongest starting point. Its lighter palette and
clear sections have more character than the older interior layouts. However,
the abstract sphere does little to explain the work, the large visual transitions
feel disconnected from the interior pages, and the repeated slogans could be
replaced with more concrete evidence. A redesign should improve these specific
relationships rather than add more visual effects.

The user authorized implementation of this direction after the review.

## Evidence and review boundaries

Inspected the live production site in Chromium/Brave, including full-page and
first-viewport captures of eight routes at 1440px: homepage, services index,
MSP-transition detail, About, Contact, guides index, Seneca service-area detail,
and Labs. Five routes were also captured at 390px. Inspected the homepage at
768px, the desktop/mobile navigation, and homepage/services dark states.

All eight sampled desktop pages returned HTTP 200. The five narrow samples did
not show document-level horizontal overflow. That does not rule out collisions
inside the viewport: the tablet header has a visible overlap. This is a design
and layout review, not a new audit of all 78 routes, a conversion experiment, or
an accessibility conformance certification. No contact message was submitted.

Measurements and capture inventory: [observations](design-review/2026-10-20/observations.json).

## Findings, in priority order

| Priority | Observed issue | Why it matters | Proposed response |
| --- | --- | --- | --- |
| First | At 768px, desktop navigation runs beneath the theme control, and the assessment button wraps/squeezes | The primary navigation becomes difficult to read and operate | Switch to compact navigation before controls collide; test intermediate widths rather than only phone/desktop |
| First | Dark mode changes the header and services page while the homepage remains light | Theme behavior makes the site feel assembled from different systems | Use shared semantic color tokens for all templates and both palettes; move the selector out of the primary action area |
| First | Header and mobile bar offer a free assessment, homepage offers booking, but each leads to a general contact form | The interface suggests different next steps without explaining the difference | Use one primary CTA, “Discuss your project,” leading to the existing inquiry form; keep free-assessment language only if its scope and fulfillment are defined |
| High | Homepage typography differs from the system-font-heavy interior pages; older headings also retain all-caps/monospace conventions | Brand voice changes between routes | Define shared heading/body/label roles and verify actual computed fonts; investigate font token resolution before replacing font files |
| High | The mobile service introduction consumes most of the first screen; its first useful contact action is not in the introduction | A visitor must read extensively before acting | Use a short service summary, three concrete outcomes, and an early CTA; retain detail further down |
| High | About relies on paragraphs and credential claims without a visible consultant portrait; the hero sphere is generic | The site provides little immediate evidence of who performs the work | Introduce an authentic portrait, approved work photography, and concise documented project examples |
| Medium | Interior pages wrap nearly every section in similar rounded panels, sometimes containing further panels | The same emphasis is given to background, evidence, and action | Use open sections, rules, lists, and selective cards according to content purpose |
| Medium | Mobile menu overlays a translucent page, with nine equally styled destinations and a separate sticky CTA | Navigation feels crowded and detached from the desktop grouping | Use an opaque menu surface, clear group headings, and a consistent primary action; keep every existing destination reachable |
| Medium | Service-card diagonal arrows render as blue emoji tiles in the review browser | Small platform-dependent details reduce visual consistency | Use the existing Tabler SVG icon family consistently |
| Medium | Contact includes a form, direct-contact panel, map, Google-search link, multi-step intake explanation, and another support panel | The task surface competes with explanatory content | Put a compact inquiry form and direct contact first; reduce intake to a short next-step explanation; move extensive coverage material to service areas |
| Medium | Footer Explore list is a long column; resource pages contain large explanatory side panels | Vertical space and attention are spent on repeated navigation and meta-explanation | Group footer links into meaningful columns; organize resources by useful topics |

Evidence: [tablet collision](design-review/2026-10-20/home-tablet.png),
[homepage desktop](design-review/2026-10-20/home-desktop.png),
[homepage mobile](design-review/2026-10-20/home-mobile.png),
[service mobile](design-review/2026-10-20/service-mobile.png),
[contact desktop](design-review/2026-10-20/contact-desktop.png),
[mobile navigation](design-review/2026-10-20/navigation-mobile.png),
[homepage dark](design-review/2026-10-20/home-dark.png),
and [services dark](design-review/2026-10-20/services-dark.png).

These implications are design judgments based on the observed interface. No
visitor research or measured conversion loss is claimed.

## Design brief

**Audience:** business owners, practice managers, municipal/property operators,
and internal IT leads who need experienced help with inherited systems,
security, infrastructure, or provider transitions.

**Primary task:** recognize that NextGridIT handles the visitor's problem,
understand the likely engagement, see credible evidence, and send an inquiry.

**Visual concept:** clear, documented technical work presented with the care and
restraint of an established professional-services firm. Use the actual handoff
and outcomes of a project as the distinctive visual subject.

**Proposed organizing motif:** a simple, accurate project record: problem,
work performed, outcome, and what the client now controls. It can appear in a
featured case study and service proof section. It should not resemble a live
security dashboard or imply access to customer systems.

**Keep:** company name, green association, ownership proposition, meaningful
service groups, useful guides, service URLs, and real contact behavior.

**Asset strategy:** prioritize a real portrait and two or three approved project
images such as a documented installation or completed network work. Remove
identifiers and secure customer permission before use. Existing sanitized case
studies can support a text-led first iteration if photos are unavailable. Do not
publish stock people as the team, invented testimonials, or unapproved logos.

## Proposed visual system

These are starting values to validate in a representative page, not approved
brand specifications.

| Role | Proposed treatment |
| --- | --- |
| Page background | Near-white `#F7F8F5`, with white content surfaces |
| Main text | Deep green-black `#16251E` |
| Secondary text | Muted dark green `#526258`; verify all actual combinations |
| Brand/action | Forest green `#17633D`; reserve strongest contrast for actions |
| Supporting accent | Sage `#A9C96A`, mostly as a supporting surface or graphic detail |
| Dark sections/theme | Related deep-green neutrals with deliberately checked text and control colors |
| Typography | Apply the existing Space Grotesk consistently first; choose regular body weight and restrained heading weights; keep monospace for dates/technical labels |
| Type hierarchy | Approximate display 48–64px desktop / 36–42px phone; body 17–18px; UI labels 14–16px; validate real wrapping and zoom |
| Reading width | Roughly 65 characters for prose; shared content container around 1160–1200px |
| Spacing | Small reusable spacing scale; sections around 72–96px desktop / 40–56px phone, tuned to content |
| Surfaces | Plain backgrounds and fine rules first; selective 8–12px-radius cards; shadows mainly for overlays |
| Controls | One primary button style, one secondary style, one text-link treatment; consistent heights and SVG arrows |
| Motion | Brief state feedback; visible static content by default; honor reduced-motion preferences |

Align the body, navigation, hero, and footer to shared container edges. Remove
extreme heading tracking, unnecessary all-caps, corner brackets, arbitrary
numbering, and whole-page decorative grids from the main consultancy surfaces.
Labs can retain a more technical voice within the same overall system.

## Proposed homepage hierarchy

1. **Compact header:** brand, Services, Who we help, Our work, Resources, About,
   and a clear project-contact CTA. These labels are proposed; existing URL
   structure remains. Secondary phone access stays easy to find. Put theme
   preferences in a quieter utility position.
2. **Specific hero:** service/location context, a clear ownership-oriented
   headline, a short supporting sentence, and one main action. Draft headline:
   “Take control of the technology your business depends on.” Supporting copy
   should name IT infrastructure, security, and transitions in Upstate SC.
3. **Credible evidence near the introduction:** verified professional experience
   and a named person or real project visual. Attribute career experience to the
   consultant rather than implying the company has operated for 20 years.
4. **Three service groups:** ownership, security, infrastructure. Give each a
   concrete problem, useful outcomes, and clear service links. Keep the full
   catalog on Services rather than reproducing it in the hero.
5. **Featured project:** short problem/work/outcome narrative drawn from an
   existing approved case, with a relevant image or clean documentation diagram.
6. **Who performs the work:** consultant introduction, local base, and verified
   relevant experience. Link to About and supporting evidence.
7. **Engagement process:** three or four concise stages with an explanation of
   the first response. No promised response time without operational backing.
8. **Closing inquiry prompt and grouped footer:** tell visitors what information
   helps scope the project; give direct phone/email alternatives.

On mobile, keep the service context and primary action visible before decorative
media. The current sphere should be replaced by informative proof or substantially
reduced if retained. Do not set a universal page-length limit: remove duplicated
content and improve scanability while preserving useful detail.

## Template plan

| Surface | Proposed composition |
| --- | --- |
| Service index | Short introduction; three service groups; compact, differentiated service previews; guidance for uncertain visitors |
| Service detail | Breadcrumb; concise problem/outcome introduction and CTA; deliverables; approach; relevant case; scope/pricing context from existing content; FAQ; inquiry CTA |
| About | Real consultant introduction and portrait; relevant experience with supporting context; approach; local service coverage; contact link |
| Contact | Short intro; existing three-field inquiry form; direct contact; concise next-step explanation; failure recovery and privacy guidance |
| Guide index | Topics, one useful featured guide, then compact readable article previews; remove lengthy explanations of the section's own purpose |
| Guide/policy detail | Reading-focused column, clear title/date/author context, accessible table of contents, restrained related content; downloads stay available |
| Industry/location | Specific audience or local context first; relevant services and evidence; smaller supporting map; inquiry CTA near introduction |
| Technology | Clear platform-specific summary and services it supports; compact related content rather than repetitive generic panels |
| Labs | Research and real tools clearly separated; technical content kept intact; align typography and navigation with the company site |
| Case studies | Problem, work, outcome, and constraints; strong visual hierarchy; honest confidentiality labels and no invented metrics |

## Implementation sequence and affected files

### 1. Establish the foundation and repair layout

Work in a design branch. Consolidate shared color, typography, spacing, and
container decisions in `src/app/globals.css`, with font setup in
`src/app/layout.tsx`. Resolve the observed font mismatch. Refactor
`src/components/layout/Navbar.tsx`, `MobileStickyBar.tsx`, and `Footer2026.tsx`
around clear action priorities and content-driven breakpoints. Normalize the
existing dark theme; preserve saved preference behavior.

Deliverable: coherent shared header/footer and tokens at 390, 768, 1024, and
1440px, with no colliding controls. Check 320px and text zoom as edge cases.

### 2. Establish the direction on three representative pages

Develop homepage, MSP-transition detail, and Contact together. Primary files:
`src/components/sections/HomePage2026.tsx`,
`src/app/services/[slug]/page.tsx`,
`src/components/content/PageIntro.tsx`, and
`src/components/pages/ContactPageClient.tsx`.

These three surfaces prove persuasion, detailed service information, and the
actual inquiry task. Review rendered desktop/mobile screenshots before extending
the system to all templates. Use existing real copy and assets early; unresolved
photos should remain an explicit asset need rather than fake client work.

Deliverable: a representative frontend preview showing the complete
homepage → service → contact journey and visible form success/failure designs.

### 3. Extend across the remaining templates

Update `ServicesPage2026.tsx`, About, case studies, guide/policy templates,
industry/location/technology templates, and `LabsPageClient.tsx`. Reuse only the
components justified by repeated content: page introduction, CTA, service
preview, proof/case summary, and field/button styles. Avoid a new UI framework
or backend for this work.

Deliverable: one coherent visual language throughout the existing route map,
with appropriate compositions for different page purposes.

### 4. Verify and release

Run lint, type checking, meaningful existing regression tests, the production
export, and `scripts/check-export.mjs`. Review screenshots at intermediate as
well as endpoint widths. Exercise menus by keyboard/touch, theme persistence,
reduced motion, long headings, 200% text zoom, and contact submission states.
Mock delivery for repeatable tests; perform real-mail validation only with an
explicitly controlled test inquiry.

Keep all existing canonical URLs, server-visible content, structured data,
sitemap coverage, redirect behavior, and preview indexing protection. Repeat
mobile lab performance checks under comparable settings; earlier SEO work's
local Lighthouse results are historical context, not measurements of a future
redesign. Do not publish the design work simply to obtain a preview: pushing
`main` triggers the production deployment.

## Acceptance criteria

- No navigation overlap at 768px or other tested widths; all links remain reachable.
- Matching typography, control geometry, and content edges across the three
  representative pages and remaining templates.
- Dark mode changes every intended surface coherently; no bright accent fallback
  from the older theme competes with the professional-services palette.
- A visitor can identify service/location context and reach the inquiry form
  from each service introduction, including at narrow widths.
- CTA wording matches the actual destination and fulfillment.
- Menus have clear surfaces, Escape/focus behavior, and usable touch targets;
  sticky mobile controls do not hide focused fields or the submit action.
- The existing form preserves input on failure and reports success only when
  delivery is accepted; design changes do not replace the real endpoint.
- Actual color combinations pass relevant contrast checks; keyboard focus and
  reduced-motion behavior are visible and tested.
- Existing SEO/export checks and Worker tests remain green; no fabricated proof
  is introduced. Public URLs continue to work.

## Content decisions still needed

Confirm the preferred design direction, whether a defined free assessment is an
actual offer, and which real portrait/project assets may be published. Verify
credential descriptions and any proposed partner logos/testimonials. These
choices do not prevent building a restrained text-led design from existing
approved content. New scheduling or tracking integrations are separate scope.

For later measurement, compare qualified inquiries and service-to-contact
progression against a baseline if analytics become available. Neither improved
conversion nor a reduction in support friction can be claimed from screenshots.

## Reference lessons

Primary design evidence is the live [NextGridIT site](https://www.nextgridit.com/)
and the dated browser captures above. A limited content-structure comparison with
[Thoughtworks](https://www.thoughtworks.com/) illustrates separating capabilities,
client work, and insights into identifiable destinations. This is a hierarchy
reference, not a recommendation to copy an enterprise site's scale, composition,
or brand. The proposed visual direction is specific to NextGridIT's local,
project-led consulting work.
