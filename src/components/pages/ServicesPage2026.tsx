import Link from "next/link"
import { PageIntro } from "@/components/content/PageIntro"
import { services } from "@/lib/site-data"

const serviceGroups = [
  { eyebrow: "Ownership", title: "Get your environment back under your control.", slugs: ["msp-transition", "vendor-lockout-recovery"] },
  { eyebrow: "Security", title: "Reduce risk with work that leads to action.", slugs: ["hipaa-security-assessment", "vulnerability-assessment", "infrastructure-hardening", "security-audits-pentesting"] },
  { eyebrow: "Infrastructure", title: "Build a dependable foundation for the work ahead.", slugs: ["microsoft-365", "network-wifi", "camera-systems", "private-ai"] },
] as const

export function ServicesPage2026() {
  return (
    <div className="container mx-auto min-h-[70vh] px-4 py-24 sm:px-6 lg:px-8">
      <PageIntro eyebrow="Capabilities" title="Services built around" accent="useful outcomes" description="NextGridIT helps organizations move from inherited complexity to a clearer, more dependable operating environment. Choose the problem closest to what you need solved." />
      <div className="space-y-16">
        {serviceGroups.map((group) => {
          const groupServices = group.slugs.map((slug) => services.find((service) => service.slug === slug)).filter(Boolean)
          return <section key={group.eyebrow}><div className="mb-7 max-w-2xl"><p className="theme-accent-strong mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em]">{group.eyebrow}</p><h2 className="theme-heading text-3xl font-bold leading-tight tracking-[-0.04em] md:text-4xl">{group.title}</h2></div><div className="grid gap-5 md:grid-cols-2">{groupServices.map((service, index) => service ? <Link key={service.slug} href={`/services/${service.slug}/`} className="service-card group"><div className="flex items-start justify-between gap-5"><span className="service-card-number">0{index + 1}</span><span className="service-card-arrow">↗</span></div><h3 className="theme-heading mt-10 text-2xl font-bold tracking-[-0.04em]">{service.title}</h3><p className="theme-copy mt-3 max-w-xl leading-7">{service.summary}</p><span className="service-card-link">View service details</span></Link> : null)}</div></section>
        })}
      </div>
      <section className="service-next-step mt-20 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]"><div><p className="theme-accent-strong mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em]">Not sure where to start?</p><h2 className="theme-heading text-3xl font-bold tracking-[-0.05em] md:text-4xl">Start with the environment, not a package.</h2><p className="theme-copy mt-4 max-w-2xl leading-7">Tell us what is not working, what you need to own, or what you are preparing for. We will help identify the most useful next step.</p></div><div className="flex flex-wrap items-start gap-3 lg:justify-end"><Link className="button-primary rounded-full px-5 py-3" href="/contact/">Start a conversation</Link><Link className="button-secondary rounded-full px-5 py-3" href="/project-fit/">Review project fit</Link></div></section>
    </div>
  )
}
