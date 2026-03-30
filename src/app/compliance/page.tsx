import type { Metadata } from "next";
import Link from "next/link";
import {
  IconChecklist,
  IconCreditCard,
  IconHeartbeat,
  IconShieldCheck,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Compliance and Frameworks",
  description:
    "Explore the compliance-aware support and framework-informed technical services NextGridIT offers across HIPAA, PCI DSS, and NIST-aligned environments.",
  alternates: {
    canonical: "/compliance/",
  },
};

const frameworks = [
  {
    title: "HIPAA-Aware Support",
    icon: <IconHeartbeat className="w-7 h-7 text-[#39ff14]" />,
    appliesTo: "Medical offices, healthcare-adjacent practices, and organizations handling protected information.",
    support:
      "We help with secure Microsoft 365 administration, access controls, documentation, infrastructure cleanup, backups, endpoint posture, and practical coordination with the systems you already rely on.",
    links: [
      { label: "IT Support", href: "/services#support" },
      { label: "Cloud Services", href: "/services#cloud" },
      { label: "Security", href: "/services#security" },
    ],
  },
  {
    title: "PCI DSS-Aware Projects",
    icon: <IconCreditCard className="w-7 h-7 text-[#00f0ff]" />,
    appliesTo: "Organizations that process payments and need cleaner network boundaries, documentation, and security practices.",
    support:
      "We help with segmentation, public or guest Wi-Fi separation, access control improvements, documentation, and infrastructure decisions that support safer payment environments.",
    links: [
      { label: "Network & Wi-Fi", href: "/services#network" },
      { label: "Security", href: "/services#security" },
      { label: "Camera Systems", href: "/services#camera" },
    ],
  },
  {
    title: "NIST-Informed Security Practices",
    icon: <IconShieldCheck className="w-7 h-7 text-[#b026ff]" />,
    appliesTo: "Municipal, regulated, and security-conscious organizations that want a stronger operational baseline.",
    support:
      "Our approach is informed by practical security frameworks, including NIST-aligned thinking, so technical improvements can map back to risk reduction, documentation, and a more defensible operating posture.",
    links: [
      { label: "Security", href: "/services#security" },
      { label: "IT Support", href: "/services#support" },
      { label: "Cloud Services", href: "/services#cloud" },
    ],
  },
];

export default function CompliancePage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="max-w-4xl mb-14">
        <p className="text-sm font-mono uppercase tracking-[0.3em] text-[#39ff14] mb-4">
          Compliance and frameworks
        </p>
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-wider">
          Compliance-Aware <span className="text-[#00f0ff]">Technical Support</span>
        </h1>
        <div className="w-24 h-1 bg-[#00f0ff] mb-6 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
        <p className="text-gray-300 text-lg leading-relaxed">
          NextGridIT helps organizations improve real systems and daily operations in ways that support compliance expectations. We focus on technical execution, documentation, and risk reduction rather than empty checklist language.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {frameworks.map((framework) => (
          <section key={framework.title} className="glass-panel p-8 border border-white/10">
            <div className="mb-5 inline-flex rounded-sm border border-white/10 bg-black p-4">
              {framework.icon}
            </div>
            <h2 className="text-2xl font-mono font-bold text-white mb-4">{framework.title}</h2>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-3">Common fit</p>
            <p className="text-gray-300 leading-relaxed mb-5">{framework.appliesTo}</p>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-3">How we help</p>
            <p className="text-gray-400 leading-relaxed mb-6">{framework.support}</p>
            <div className="pt-5 border-t border-white/10">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-3">Related services</p>
              <div className="flex flex-wrap gap-2">
                {framework.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border border-[#39ff14]/25 bg-black/40 px-3 py-2 font-mono text-sm text-white transition-colors hover:border-[#39ff14] hover:text-[#39ff14]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="glass-panel p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-4 text-[#39ff14] font-mono uppercase tracking-[0.2em] text-sm">
            <IconChecklist className="w-5 h-5" />
            What this means in practice
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We do not treat compliance like a disconnected paperwork exercise. We connect security, documentation, identity, networking, Wi-Fi, cameras, and cloud administration to the real operating environment.
            </p>
            <p>
              That means helping teams improve the technical foundation behind HIPAA-aware healthcare environments, PCI DSS-sensitive payment systems, and NIST-informed security programs without burying the project in enterprise theater.
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 border border-white/10">
          <h2 className="text-2xl font-mono font-bold text-white mb-4">Local-First Mindset</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Many of our solutions are designed to keep ownership, visibility, and performance close to the client environment whenever that is the right fit.
          </p>
          <p className="text-gray-400 leading-relaxed">
            That includes infrastructure choices, camera deployments, and custom local AI processing options where on-site control matters more than handing everything to a third-party platform.
          </p>
        </div>
      </section>
    </div>
  );
}
