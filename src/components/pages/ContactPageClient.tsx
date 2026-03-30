"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconMail, IconPhone } from "@tabler/icons-react";
import MapChart from "@/components/ui/MapChart";

type FormState = {
  company: string;
  email: string;
  details: string;
  website: string;
};

type SubmitState = "idle" | "sending" | "success" | "error";

const initialFormState: FormState = {
  company: "",
  email: "",
  details: "",
  website: "",
};

const intakeSteps = [
  {
    step: "01",
    title: "Share the basics",
    description:
      "Start with your city, organization name, timeline, and the main issue you want solved first.",
    signal: "Best first details: location, user count, buildings, and your biggest pain point.",
  },
  {
    step: "02",
    title: "Environment review",
    description:
      "We look at the current setup, inherited vendors, and where the biggest operational risk or drag is showing up.",
    signal: "Useful context: platforms in use, known outages, weak Wi-Fi, or camera/security gaps.",
  },
  {
    step: "03",
    title: "Prioritized next steps",
    description:
      "The initial response is meant to clarify fit and point toward the most useful next action instead of forcing a generic package.",
    signal: "That might be a scoped project, a deeper assessment, or a targeted remediation plan.",
  },
  {
    step: "04",
    title: "Move into project work",
    description:
      "Once the direction is clear, the project can move into implementation, cleanup, documentation, and handoff.",
    signal: "Typical scopes include cloud cleanup, Wi-Fi redesign, security hardening, cameras, and infrastructure work.",
  },
] as const;

const intakeChecklist = [
  "City or project site",
  "How many users or buildings are involved",
  "Main system problem to solve first",
  "Current platforms, vendors, or inherited issues",
] as const;

export function ContactPageClient() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

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

  function openMailClient(values: FormState) {
    window.location.href = buildMailtoHref(values);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const submittedForm = { ...form };

    setSubmitState("sending");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(submittedForm),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (response.ok) {
        setForm(initialFormState);
        setSubmitState("success");
        setSubmitMessage("Your message was sent directly to NextGridIT.");
        return;
      }

      if (response.status >= 500) {
        openMailClient(submittedForm);
        setSubmitState("success");
        setSubmitMessage(
          "Direct form delivery is not ready yet, so a prefilled email was opened instead.",
        );
        return;
      }

      setSubmitState("error");
      setSubmitMessage(
        data?.error ?? "We could not send the form. You can still email us directly below.",
      );
    } catch {
      openMailClient(submittedForm);
      setSubmitState("success");
      setSubmitMessage(
        "We could not reach the direct form service, so a prefilled email was opened instead.",
      );
    }
  }

  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="mb-16">
        <h1 className="theme-heading mb-6 font-mono text-4xl font-bold uppercase tracking-wider md:text-5xl">
          Contact <span className="theme-accent-strong">NextGridIT</span>
        </h1>
        <div className="theme-rule mb-6 h-1 w-24" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="glass-panel relative border border-[var(--border)] p-8">
          <div className="absolute right-0 top-0 p-4 opacity-50">
            <div className="h-12 w-12 border-r-2 border-t-2 border-[var(--accent)]" />
          </div>

          <div className="mb-8">
            <p className="theme-copy mb-2 border-l-2 border-[var(--accent)] pl-3 font-mono text-sm">
              START THE PROJECT CONVERSATION BY EMAIL
            </p>
            <p className="theme-soft font-sans text-sm">
              Send the form to deliver your message directly. If direct delivery is
              unavailable, we will fall back to a prefilled email. You can also reach
              us directly at{" "}
              <a className="theme-link" href="mailto:contact@nextgridit.com">
                contact@nextgridit.com
              </a>
              .
            </p>
          </div>

          <section className="mb-8 rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-6">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="theme-accent-strong mb-2 font-mono text-xs uppercase tracking-[0.26em]">
                  Intake Flow
                </p>
                <h2 className="theme-heading font-mono text-xl font-bold uppercase tracking-wide">
                  How the first step usually works
                </h2>
              </div>
              <p className="theme-soft max-w-md font-sans text-sm leading-relaxed">
                The goal is a cleaner project start, not a generic sales script.
                Email is the fastest way to establish fit and get the right next
                move in front of you.
              </p>
            </div>

            <div className="relative grid gap-4 md:grid-cols-4">
              <div className="absolute left-8 right-8 top-6 hidden h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent md:block" />
              {intakeSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)]">
                    <span className="theme-heading font-mono text-sm font-bold tracking-[0.2em]">
                      {step.step}
                    </span>
                  </div>
                  <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <h3 className="theme-heading mb-2 font-mono text-base font-bold">
                      {step.title}
                    </h3>
                    <p className="theme-copy text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <p className="theme-soft mt-3 text-xs leading-relaxed">
                      {step.signal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <form className="space-y-6 font-mono" onSubmit={handleSubmit}>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="company" className="theme-accent-strong mb-2 block text-sm uppercase tracking-wide">Company Name</label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
                className="theme-input w-full rounded-xl p-3"
                placeholder="Enter organization name..."
              />
            </div>
            <div>
              <label htmlFor="email" className="theme-accent-strong mb-2 block text-sm uppercase tracking-wide">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="theme-input w-full rounded-xl p-3"
                placeholder="Enter your email address..."
              />
            </div>
            <div>
              <label htmlFor="details" className="theme-accent-strong mb-2 block text-sm uppercase tracking-wide">Project Details</label>
              <textarea
                id="details"
                rows={5}
                required
                value={form.details}
                onChange={(event) => setForm((current) => ({ ...current, details: event.target.value }))}
                className="theme-input w-full resize-none rounded-xl p-3"
                placeholder="Tell us about your infrastructure, cloud, Wi-Fi, camera, security, or compliance-related needs..."
              />
            </div>
            {submitMessage ? (
              <p
                className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                  submitState === "error"
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                    : "border-[var(--border-strong)] bg-[var(--surface-strong)] theme-copy"
                }`}
                role="status"
              >
                {submitMessage}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={submitState === "sending"}
              className="button-primary mt-4 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-bold uppercase tracking-widest disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span>{submitState === "sending" ? "Sending..." : "Send Project Request"}</span>
              <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-6">
            <p className="theme-accent-strong mb-3 font-mono text-xs uppercase tracking-[0.24em]">
              Helpful first-email details
            </p>
            <div className="flex flex-wrap gap-3">
              {intakeChecklist.map((item) => (
                <span key={item} className="theme-chip px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel border border-[var(--border)] p-8">
            <div className="flex items-center gap-3 mb-4">
              <IconMail className="theme-accent h-5 w-5" />
              <h2 className="theme-heading font-mono text-xl uppercase tracking-wider">Direct Contact</h2>
            </div>
            <div className="theme-copy space-y-3 font-sans leading-relaxed">
              <p>Email: <a className="theme-link" href="mailto:contact@nextgridit.com">contact@nextgridit.com</a></p>
              <p className="flex items-center gap-2"><IconPhone className="theme-accent h-4 w-4" /><a className="theme-link" href="tel:8647800202">864-780-0202</a></p>
              <p>If you already know what you need, reach out directly with your location, timeline, and the main problem you want solved. We currently emphasize custom projects and tailored support engagements.</p>
            </div>
          </div>

          <div className="glass-panel flex h-[400px] flex-col border border-[var(--border)] p-8">
            <h3 className="theme-heading mb-2 font-mono text-xl uppercase tracking-wider">Local <span className="theme-accent">Service Area</span></h3>
            <p className="theme-copy mb-4 font-sans text-sm">
              Primary local coverage includes Seneca, Clemson, Anderson, Easley, and Greenville, South Carolina. Travel is available for larger projects and specialty engagements. Each pin jumps to the matching local page.
            </p>
            <div className="relative min-h-[250px] w-full flex-grow overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)]">
              <MapChart />
            </div>
          </div>

          <div className="glass-panel border border-[var(--border)] border-l-[var(--accent-alt)] p-8">
            <h3 className="theme-heading mb-2 font-mono text-xl uppercase tracking-wider">Infrastructure and <span className="theme-accent-alt">Compliance Support</span></h3>
            <p className="theme-copy font-sans leading-relaxed">
              NextGridIT supports infrastructure improvement, security hardening, cloud services, camera deployments, and compliance-aware environments for organizations that need reliable technical execution without overcomplicating operations.
            </p>
            <div className="theme-accent-alt mt-4 flex items-center gap-2 font-mono text-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-alt)] animate-ping" />
              STATUS: ACCEPTING NEW PROJECTS
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/faq/" className="button-secondary rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                FAQ
              </Link>
              <Link href="/process/" className="button-secondary rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                Process
              </Link>
              <Link href="/project-fit/" className="button-secondary rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                Project Fit
              </Link>
              <Link href="/service-areas/" className="button-secondary rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                Service Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
