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
are left to the provider page so the website does not duplicate appointment
configuration.

## Verification

- `npm run check` passed: lint, types, 22 regression tests, build, export checks.
- All 14 browser tests passed, including booking-link destinations and handoff,
  the project-details fragment, existing form behavior, and responsive checks
  at five widths. The handoff test intercepts the provider URL; it does not
  create an appointment or prove provider availability.
- Captured and viewed the modified contact layout at 390 and 1440px.

## Initial provider failure and resolution

The supplied Microsoft page was inspected twice in an unsigned-in browser.
Its document returned HTTP 200 but displayed “Some error occurred.” The public
business information loaded and reported a published page with anonymous
access; requests for services, staff, and custom questions returned HTTP 500
with `AccessScopePolicyBlocked`. No usable appointment selection appeared.
This is evidence of a provider-side failure, not a confirmed diagnosis of the
tenant's policy configuration. No tenant settings were changed and no booking
was created.

After the owner confirmed the page was live, two fresh unsigned-in browser
checks loaded the IT Project Consultation service, its 30-minute duration,
available appointment times, and the guest details form. The blocking service
requests no longer failed. An Eastern-time browser still displayed UTC on the
booking page. The owner should check business hours/timezone in Bookings if
local Eastern hours are intended. The exact supplied URL is preserved despite
the misspelling in the booking business's display name and URL.

The public provider page is ready for linking. Merge to main, let Cloudflare
redeploy, and check the live booking links plus the form alternative. No
appointment was created and confirmation/reminder delivery was not tested.
