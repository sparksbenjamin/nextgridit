# Consultation booking integration

Prepared on branch `feat/consultation-booking` on 2026-10-20.

The supplied public URL is configured once as `siteConfig.bookingUrl`. Shared
native booking links replace the primary project-inquiry links in the desktop
and mobile navigation, homepage, detail-page introductions, and shared closing
CTA. Links open the Microsoft page in the same tab and preserve normal browser
Back navigation. No iframe, provider SDK, appointment proxy, or account secrets
are added to the site.

The contact page leads with scheduling and offers a direct fragment link to
the retained email form. Shared closing CTAs also retain the project-details
alternative. Phone/email and existing form validation, delivery, failure
recovery, and duplicate-submission handling remain available. The privacy page
identifies the Microsoft Bookings handoff. Duration, price, and meeting modality
are not asserted because the published service details could not be verified.

## Verification

- `npm run check` passed: lint, types, 22 regression tests, build, export checks.
- All 14 browser tests passed, including booking-link destinations and handoff,
  the project-details fragment, existing form behavior, and responsive checks
  at five widths. The handoff test intercepts the provider URL; it does not
  create an appointment or prove provider availability.
- Captured and viewed the modified contact layout at 390 and 1440px.

## Publication dependency

The supplied Microsoft page was inspected twice in an unsigned-in browser.
Its document returned HTTP 200 but displayed “Some error occurred.” The public
business information loaded and reported a published page with anonymous
access; requests for services, staff, and custom questions returned HTTP 500
with `AccessScopePolicyBlocked`. No usable appointment selection appeared.
This is evidence of a provider-side failure, not a confirmed diagnosis of the
tenant's policy configuration. No tenant settings were changed and no booking
was created.

The integration is kept off production while this failure persists. Before
merging, verify the public link in a private browser: the intended service,
duration, available times/timezone, and guest details must load. Confirm business
hours use the intended timezone; the public business response currently reports
UTC. Once resolved, merge to main, let Cloudflare redeploy, and check the live
booking links plus the form alternative. A real appointment/notification test
requires a separately authorized test booking.
