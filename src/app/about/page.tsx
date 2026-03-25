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
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-wider">
          About <span className="text-[#b026ff]">NextGridIT</span>
        </h1>
        <div className="w-24 h-1 bg-[#b026ff] mb-6 shadow-[0_0_10px_rgba(176,38,255,0.5)]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-gray-300 font-sans text-lg leading-relaxed">
          <p>
            NextGridIT was built to bring experienced infrastructure, security, and operations support to organizations that need serious technical help without enterprise-sized overhead.
          </p>
          <p>
            The company draws on more than 20 years of hands-on IT experience across network engineering, systems administration, security, support leadership, cloud migrations, compliance-aware environments, and multi-site operations.
          </p>
          <p>
            Our work is grounded in practical outcomes: stronger networks, cleaner systems, better visibility, better documentation, and fewer operational surprises.
          </p>
          <p className="border-l-2 border-[#b026ff] pl-4 text-white font-mono my-8 py-2">
            NextGridIT exists to help businesses in Upstate South Carolina build technology environments that are stable, secure, and easier to run.
          </p>
          <p>
            We focus on long-term usefulness over buzzwords. That means recommending the right level of infrastructure, security, and process for each organization instead of forcing every client into the same package.
          </p>
        </div>

        <div className="glass-panel p-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b026ff]/10 blur-3xl rounded-full" />

          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-black border border-[#b026ff]/30 rounded-sm mt-1">
                <IconShieldCheck className="w-6 h-6 text-[#b026ff]" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-1">Security and Operations</h3>
                <p className="text-sm text-gray-400 font-sans">Experience across incident response, hardening, infrastructure support, and long-term operational improvement.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-black border border-[#39ff14]/30 rounded-sm mt-1">
                <IconNetwork className="w-6 h-6 text-[#39ff14]" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-1">Network and Infrastructure</h3>
                <p className="text-sm text-gray-400 font-sans">Built on real-world experience with Microsoft environments, Active Directory, Azure, SQL, virtualization, firewalls, and multi-site networking.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-black border border-[#00f0ff]/30 rounded-sm mt-1">
                <IconCertificate className="w-6 h-6 text-[#00f0ff]" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-1">Compliance-Aware Background</h3>
                <p className="text-sm text-gray-400 font-sans">Comfortable supporting regulated and documentation-heavy environments, including healthcare-related systems and compliance-oriented operations.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-black border border-[#b026ff]/30 rounded-sm mt-1">
                <IconWorld className="w-6 h-6 text-[#b026ff]" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-1">Local and Travel-Ready</h3>
                <p className="text-sm text-gray-400 font-sans">Focused on Seneca, Clemson, Anderson, Easley, and Greenville, with travel available for larger or specialized engagements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="case-studies" className="mt-20 glass-panel p-8 border border-white/5 scroll-mt-28">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-mono font-bold text-white uppercase tracking-wider mb-4">
            Representative <span className="text-[#39ff14]">Results</span>
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>Experience includes improving network uptime in legacy environments, leading multi-site IT operations, supporting cloud and hybrid migrations, and helping teams clean up infrastructure that had become difficult to manage.</p>
            <p>Because client environments are private, NextGridIT does not publicly identify clients or publish sensitive implementation details. We focus on practical outcomes, confidentiality, and long-term support.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
