"use client";

import { FormEvent, useState } from "react";
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

export default function ContactPage() {
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
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-wider">
          Contact <span className="text-[#39ff14]">NextGridIT</span>
        </h1>
        <div className="w-24 h-1 bg-[#39ff14] mb-6 shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="glass-panel p-8 border border-[#39ff14]/20 relative">
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <div className="w-12 h-12 border-t-2 border-r-2 border-[#39ff14]" />
          </div>

          <div className="mb-8">
            <p className="text-gray-300 font-mono text-sm border-l-2 border-[#39ff14] pl-3 mb-2">
              REQUEST A QUOTE OR START A CONVERSATION
            </p>
            <p className="text-gray-500 font-sans text-sm">
              Send the form to open a prefilled email, or contact us directly at{" "}
              <a className="text-[#39ff14] hover:text-[#00f0ff] transition-colors" href="mailto:contact@nextgridit.com">
                contact@nextgridit.com
              </a>
              .
            </p>
          </div>

          <form className="space-y-6 font-mono" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="company" className="block text-sm text-[#39ff14] mb-2 uppercase tracking-wide">Company Name</label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
                className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-[#39ff14] focus:bg-black outline-none transition-all placeholder-gray-700"
                placeholder="Enter organization name..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-[#39ff14] mb-2 uppercase tracking-wide">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-[#39ff14] focus:bg-black outline-none transition-all placeholder-gray-700"
                placeholder="Enter your email address..."
              />
            </div>
            <div>
              <label htmlFor="details" className="block text-sm text-[#39ff14] mb-2 uppercase tracking-wide">Project Details</label>
              <textarea
                id="details"
                rows={5}
                required
                value={form.details}
                onChange={(event) => setForm((current) => ({ ...current, details: event.target.value }))}
                className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-[#39ff14] focus:bg-black outline-none transition-all placeholder-gray-700 resize-none"
                placeholder="Tell us about your infrastructure, support, networking, or security needs..."
              />
            </div>
            <button type="submit" className="bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14] font-bold px-6 py-3 hover:bg-[#39ff14] hover:text-black transition-all duration-300 w-full uppercase tracking-widest mt-4 flex justify-center items-center gap-2 group">
              <span>Open Email Draft</span>
              <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="glass-panel p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <IconMail className="w-5 h-5 text-[#00f0ff]" />
              <h2 className="text-xl font-mono text-white uppercase tracking-wider">Direct Contact</h2>
            </div>
            <div className="space-y-3 text-gray-400 font-sans leading-relaxed">
              <p>Email: <a className="text-[#39ff14] hover:text-[#00f0ff] transition-colors" href="mailto:contact@nextgridit.com">contact@nextgridit.com</a></p>
              <p className="flex items-center gap-2"><IconPhone className="w-4 h-4 text-[#00f0ff]" /><a className="text-[#39ff14] hover:text-[#00f0ff] transition-colors" href="tel:8647800202">864-780-0202</a></p>
              <p>If you already know what you need, reach out directly with your location, timeline, and the main problem you want solved.</p>
            </div>
          </div>

          <div className="glass-panel p-8 border border-white/5 h-[400px] flex flex-col">
            <h3 className="text-xl font-mono text-white mb-2 uppercase tracking-wider">Local <span className="text-[#00f0ff]">Service Area</span></h3>
            <p className="text-gray-400 font-sans text-sm mb-4">
              Primary local coverage includes Seneca, Clemson, Anderson, Easley, and Greenville, South Carolina. Travel is available for larger projects and specialty engagements.
            </p>
            <div className="flex-grow w-full relative min-h-[250px] bg-black/30 rounded-sm border border-white/5 overflow-hidden">
              <MapChart />
            </div>
          </div>

          <div className="glass-panel p-8 border border-white/5 border-l-[#b026ff]">
            <h3 className="text-xl font-mono text-white mb-2 uppercase tracking-wider">Infrastructure and <span className="text-[#b026ff]">Compliance Support</span></h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              NextGridIT supports infrastructure improvement, security hardening, and compliance-aware environments for organizations that need reliable technical execution without overcomplicating operations.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#b026ff] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#b026ff] animate-ping" />
              STATUS: ACCEPTING NEW PROJECTS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
