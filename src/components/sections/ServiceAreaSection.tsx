import Link from "next/link";

const cities = [
  { label: "Seneca, SC", href: "/service-areas/seneca-sc/" },
  { label: "Clemson, SC", href: "/service-areas/clemson-sc/" },
  { label: "Anderson, SC", href: "/service-areas/anderson-sc/" },
  { label: "Easley, SC", href: "/service-areas/easley-sc/" },
  { label: "Greenville, SC", href: "/service-areas/greenville-sc/" },
];

export function ServiceAreaSection() {
  return (
    <section className="border-t border-[var(--border)] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="theme-heading mb-4 font-mono text-3xl font-bold md:text-5xl">
            SERVICE <span className="theme-accent">AREA</span>
          </h2>
          <div className="theme-rule mb-6 h-1 w-24" />
          <p className="theme-copy mb-8 text-lg leading-relaxed">
            NextGridIT primarily serves businesses and public-facing organizations in Upstate South Carolina, with local support centered around the communities where on-site response, infrastructure work, and property deployments matter most.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
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

          <p className="theme-copy max-w-3xl leading-relaxed">
            Travel is available for larger projects and specialty engagements outside Upstate South Carolina, especially for municipal work, multi-building properties, campgrounds, and infrastructure-heavy deployments that need on-site planning and execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/service-areas/" className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
              View Service Areas
            </Link>
            <Link href="/company-facts/" className="button-secondary rounded-full px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em]">
              Company Facts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
