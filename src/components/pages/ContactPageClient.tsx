"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconMail, IconPhone } from "@tabler/icons-react";
import { PageIntro } from "@/components/content/PageIntro";
import { BookingLink } from "@/components/content/BookingLink";
import { siteConfig } from "@/lib/site-data";

type FormState = {
  company: string;
  email: string;
  details: string;
  website: string;
};
const initialFormState: FormState = {
  company: "",
  email: "",
  details: "",
  website: "",
};
export function ContactPageClient() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function buildMailtoHref(values: FormState) {
    const subject = `NextGridIT inquiry from ${values.company || "Website visitor"}`;
    const body = [
      `Company: ${values.company || "Not provided"}`,
      `Email: ${values.email}`,
      "",
      "Project details:",
      values.details,
    ].join("\n");

    return `mailto:contact@nextgridit.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
        signal: AbortSignal.timeout(20000),
      });
      const payload = await response.json();
      if (!response.ok || payload.ok !== true)
        throw new Error("Delivery failed");
      setStatus("sent");
      setForm(initialFormState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="page-shell container">
      <PageIntro
        eyebrow="Let’s talk about your project"
        title="A good next step starts"
        accent="with a conversation."
        description="Choose a time to discuss your IT challenge with Benjamin, or send your project details if you prefer to start by email."
      />
      <section className="contact-booking" aria-labelledby="booking-heading">
        <div>
          <p className="eyebrow">Find your next step</p>
          <h2 id="booking-heading">Book an IT project consultation.</h2>
          <p>
            Discuss what you need, whether NextGridIT is a good fit, and
            practical next steps. Choose an available time through Microsoft
            Bookings.
          </p>
          <p className="form-note">
            An introductory conversation, rather than a troubleshooting session
            or security assessment.
          </p>
        </div>
        <div className="project-cta-actions">
          <BookingLink>Choose a time</BookingLink>
          <a href="#project-details" className="text-link">
            Send project details instead
          </a>
        </div>
      </section>
      <div className="contact-layout">
        <form
          id="project-details"
          className="contact-form"
          onSubmit={handleSubmit}
          aria-busy={status === "sending"}
        >
          <h2>Send project details</h2>
          <p>
            Prefer email? Tell us a little about what you need and we will
            follow up. Required fields are marked below.
          </p>
          <fieldset disabled={status === "sending"}>
            <div hidden aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(event) =>
                  setForm({ ...form, website: event.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="company">
                Organization <span>Optional</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={200}
                value={form.company}
                onChange={(event) =>
                  setForm({ ...form, company: event.target.value })
                }
                className="theme-input"
                placeholder="Your business or organization"
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">
                Email address <span>Required</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={320}
                required
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                className="theme-input"
                placeholder="you@yourcompany.com"
              />
            </div>
            <div className="form-field">
              <label htmlFor="details">
                Tell us about the project <span>Required</span>
              </label>
              <textarea
                id="details"
                name="details"
                required
                maxLength={10000}
                value={form.details}
                onChange={(event) =>
                  setForm({ ...form, details: event.target.value })
                }
                className="theme-input"
                aria-describedby="project-help"
                placeholder="What needs to improve? Include your location and timeline if you know them."
              />
            </div>
            <p id="project-help" className="form-note">
              Please leave out passwords and sensitive client or patient
              information. Read our <Link href="/privacy/">privacy policy</Link>
              .
            </p>
            <button type="submit" className="button-primary w-full">
              {status === "sending" ? "Sending your message…" : "Send Message"}
              <IconArrowRight size={18} aria-hidden="true" />
            </button>
          </fieldset>
          {status === "sent" && (
            <div role="status" className="form-message">
              Your message has been sent. Thank you for getting in touch—we will
              follow up by email.
            </div>
          )}
          {status === "error" && (
            <div role="alert" className="form-message">
              We couldn’t confirm delivery. Your details are still here. Please
              try again or{" "}
              <a href={buildMailtoHref(form)}>open a pre-filled email</a>.
            </div>
          )}
        </form>
        <aside className="contact-aside">
          <section>
            <p className="eyebrow mb-3">Prefer to reach out directly?</p>
            <h2>We’re easy to get in touch with.</h2>
            <a className="contact-direct" href={`mailto:${siteConfig.email}`}>
              <IconMail size={19} aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a className="contact-direct" href={`tel:${siteConfig.phone}`}>
              <IconPhone size={19} aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
          </section>
          <section>
            <h2>What happens next</h2>
            <ol>
              <li>We review your inquiry and clarify what you need.</li>
              <li>We discuss your environment, priorities, and project fit.</li>
              <li>
                You receive a proposed scope and clear deliverables before work
                begins.
              </li>
            </ol>
            <Link className="text-link" href="/process/">
              More about our approach
              <IconArrowRight size={16} />
            </Link>
          </section>
          <section>
            <h2>
              Local to the Upstate.
              <br />
              Flexible about the work.
            </h2>
            <p>
              Based in Seneca, serving Clemson, Anderson, Easley, and
              Greenville. Remote work and project travel are available when the
              scope calls for them.
            </p>
            <Link className="text-link" href="/service-areas/">
              Explore our service areas
              <IconArrowRight size={16} />
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
