"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconMail, IconPhone } from "@tabler/icons-react";
import MapChart from "@/components/ui/MapChart";

type FormState = {
  company: string;
  email: string;
  details: string;
};

const initialFormState: FormState = {
  company: "",
  email: "",
  details: "",
};

export function ContactPageClient() {
  const [form, setForm] = useState<FormState>(initialFormState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `NextGridIT inquiry from ${form.company || "Website visitor"}`;
    const body = [
      `Company: ${form.company || "Not provided"}`,
      `Email: ${form.email}`,
      "",
      "Project details:",
      form.details,
    ].join("\n");

    window.location.href = `mailto:contact@nextgridit.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
              Send the form to open a prefilled email, or contact us directly at{" "}
              <a className="theme-link" href="mailto:contact@nextgridit.com">
                contact@nextgridit.com
              </a>
              .
            </p>
          </div>

          <form className="space-y-6 font-mono" onSubmit={handleSubmit}>
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
            <button type="submit" className="button-primary mt-4 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-bold uppercase tracking-widest">
              <span>Open Project Email</span>
              <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
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
              Primary local coverage includes Seneca, Clemson, Anderson, Easley, and Greenville, South Carolina. Travel is available for larger projects and specialty engagements.
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
