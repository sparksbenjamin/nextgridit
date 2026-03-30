import type { Metadata } from "next";
import { IconCertificate, IconNetwork, IconShieldCheck, IconWorld } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NextGridIT and its approach to network infrastructure, security, and compliance-aware support for businesses in Upstate South Carolina.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="mb-16">
        <h1 className="theme-heading mb-6 font-mono text-4xl font-bold uppercase tracking-wider md:text-5xl">
          About <span className="theme-accent-alt">NextGridIT</span>
        </h1>
        <div className="theme-rule mb-6 h-1 w-24" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="theme-copy space-y-6 font-sans text-lg leading-relaxed">
          <p>
            NextGridIT was built to bring experienced infrastructure, security, and operations support to organizations that need serious technical help without enterprise-sized overhead.
          </p>
          <p>
            The company draws on more than 20 years of hands-on IT experience across network engineering, systems administration, security, support leadership, cloud migrations, compliance-aware environments, and multi-site operations.
          </p>
          <p>
            Our work is grounded in practical outcomes: stronger networks, cleaner systems, better visibility, better documentation, and fewer operational surprises.
          </p>
          <p className="theme-heading my-8 border-l-2 border-[var(--accent-alt)] py-2 pl-4 font-mono">
            NextGridIT exists to help businesses in Upstate South Carolina build technology environments that are stable, secure, and easier to run.
          </p>
          <p>
            We focus on long-term usefulness over buzzwords. That means recommending the right level of infrastructure, security, and process for each organization instead of forcing every client into the same package.
          </p>
        </div>

        <div className="glass-panel relative overflow-hidden border border-[var(--border)] p-8">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl" style={{ backgroundColor: "var(--accent-alt-soft)" }} />

          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-3">
                <IconShieldCheck className="theme-accent-alt h-6 w-6" />
              </div>
              <div>
                <h3 className="theme-heading mb-1 font-mono text-xl font-bold">Security and Operations</h3>
                <p className="theme-copy font-sans text-sm">Experience across incident response, hardening, infrastructure support, and long-term operational improvement.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-3">
                <IconNetwork className="theme-accent-strong h-6 w-6" />
              </div>
              <div>
                <h3 className="theme-heading mb-1 font-mono text-xl font-bold">Network and Infrastructure</h3>
                <p className="theme-copy font-sans text-sm">Built on real-world experience with Microsoft environments, Active Directory, Azure, SQL, virtualization, firewalls, and multi-site networking.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-3">
                <IconCertificate className="theme-accent h-6 w-6" />
              </div>
              <div>
                <h3 className="theme-heading mb-1 font-mono text-xl font-bold">Compliance-Aware Background</h3>
                <p className="theme-copy font-sans text-sm">Comfortable supporting regulated and documentation-heavy environments, including healthcare-related systems and compliance-oriented operations.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-3">
                <IconWorld className="theme-accent-alt h-6 w-6" />
              </div>
              <div>
                <h3 className="theme-heading mb-1 font-mono text-xl font-bold">Local and Travel-Ready</h3>
                <p className="theme-copy font-sans text-sm">Focused on Seneca, Clemson, Anderson, Easley, and Greenville, with travel available for larger or specialized engagements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="case-studies" className="glass-panel mt-20 border border-[var(--border)] p-8 scroll-mt-28">
        <div className="max-w-3xl">
          <h2 className="theme-heading mb-4 font-mono text-2xl font-bold uppercase tracking-wider">
            Representative <span className="theme-accent-strong">Results</span>
          </h2>
          <div className="theme-copy space-y-4 leading-relaxed">
            <p>Experience includes improving network uptime in legacy environments, leading multi-site IT operations, supporting cloud and hybrid migrations, and helping teams clean up infrastructure that had become difficult to manage.</p>
            <p>Because client environments are private, NextGridIT does not publicly identify clients or publish sensitive implementation details. We focus on practical outcomes, confidentiality, and long-term support.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
