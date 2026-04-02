import Link from "next/link"

const cities = [
  { label: "Seneca, SC", href: "/service-areas/seneca-sc/" },
  { label: "Clemson, SC", href: "/service-areas/clemson-sc/" },
  { label: "Anderson, SC", href: "/service-areas/anderson-sc/" },
  { label: "Easley, SC", href: "/service-areas/easley-sc/" },
  { label: "Greenville, SC", href: "/service-areas/greenville-sc/" },
]

const globalCapabilities = [
  "150+ country infrastructure reach",
  "Forward staging and sparing",
  "Field engineering coordination",
  "Post-deployment hardening support",
]

export function ServiceAreaSection() {
  return (
    <section className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            GLOBAL <span className="theme-accent">REACH</span>, LOCAL CONTROL
          </h2>
          <div className="theme-rule mb-6 h-1 w-24" />
          <p className="theme-copy mb-8 text-lg leading-relaxed">
            NextGridIT is structured for global infrastructure execution and regional rapid response. The field footprint matters because it supports research-informed hardening, on-site validation, and tighter follow-through after the install window closes.
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="glass-panel border border-[var(--border)] p-8">
              <h3 className="theme-heading mb-4 font-mono text-2xl font-bold">
                Global execution
              </h3>
              <div className="mb-6 flex flex-wrap gap-3">
                {globalCapabilities.map((capability) => (
                  <span
                    key={capability}
                    className="theme-chip px-4 py-2 font-mono text-sm tracking-wide"
                  >
                    {capability}
                  </span>
                ))}
              </div>
              <p className="theme-copy leading-relaxed">
                This delivery layer supports infrastructure-heavy programs that need better discipline around deployment sequencing, site readiness, communications, and technical follow-through after install day.
              </p>
            </section>

            <section className="glass-panel border border-[var(--border)] p-8">
              <h3 className="theme-heading mb-4 font-mono text-2xl font-bold">
                Upstate rapid response
              </h3>
              <div className="mb-6 flex flex-wrap gap-3">
                {cities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="theme-chip px-4 py-2 font-mono text-sm tracking-wide"
                  >
                    {city.label}
                  </Link>
                ))}
              </div>
              <p className="theme-copy leading-relaxed">
                Local on-site work remains centered around Seneca, Clemson, Anderson, Easley, and Greenville, with travel available for larger projects and specialty security engagements outside Upstate South Carolina.
              </p>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/labs/"
              className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              Explore NextGrid Labs
            </Link>
            <Link
              href="/service-areas/"
              className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              View Service Areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
