import Link from "next/link"

const cities = [
  { label: "Seneca, SC", href: "/service-areas/seneca-sc/" },
  { label: "Clemson, SC", href: "/service-areas/clemson-sc/" },
  { label: "Anderson, SC", href: "/service-areas/anderson-sc/" },
  { label: "Easley, SC", href: "/service-areas/easley-sc/" },
  { label: "Greenville, SC", href: "/service-areas/greenville-sc/" },
]

const remoteCapabilities = [
  "Project-based remote support",
  "Travel for on-site engagements",
  "Compliance and security work nationwide",
  "Remote monitoring and assessment",
]

export function ServiceAreaSection() {
  return (
    <section className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            LOCAL <span className="theme-accent">PRESENCE</span>, PROJECT FLEXIBILITY
          </h2>
          <div className="theme-rule mb-6 h-1 w-24" />
          <p className="theme-copy mb-8 text-lg leading-relaxed">
            NextGridIT is based in Seneca, SC and provides on-site IT services across Upstate South Carolina. Security assessments, compliance work, and remote projects are available nationwide. If the project requires travel, we go where the work is.
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="glass-panel border border-[var(--border)] p-8">
              <h3 className="theme-heading mb-4 font-mono text-2xl font-bold">
                Beyond Upstate SC
              </h3>
              <div className="mb-6 flex flex-wrap gap-3">
                {remoteCapabilities.map((capability) => (
                  <span
                    key={capability}
                    className="theme-chip px-4 py-2 font-mono text-sm tracking-wide"
                  >
                    {capability}
                  </span>
                ))}
              </div>
              <p className="theme-copy leading-relaxed">
                Compliance assessments, security audits, and vulnerability work don't require a local presence. For organizations outside Upstate SC, NextGridIT delivers the same depth remotely — or travels on-site when the project calls for it.
              </p>
            </section>

            <section className="glass-panel border border-[var(--border)] p-8">
              <h3 className="theme-heading mb-4 font-mono text-2xl font-bold">
                Upstate SC on-site
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
                Local on-site work centered around Seneca, Clemson, Anderson, Easley, and Greenville. Same-day or next-day availability for local businesses that need someone who actually shows up.
              </p>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/service-areas/"
              className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              View Service Areas
            </Link>
            <Link
              href="/contact/"
              className="button-primary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]"
            >
              Get a Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
