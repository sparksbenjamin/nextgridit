"use client";

import * as React from "react";
import Link from "next/link";
import {
  getIndustry,
  getService,
  technologyCatalog,
  type TechnologyEntry,
} from "@/lib/site-data";

const categories = ["All", ...new Set(technologyCatalog.map((item) => item.category))] as const;
type CategoryFilter = (typeof categories)[number];

const serviceOptions = [
  { slug: "all", label: "All Services" },
  ...Array.from(new Set(technologyCatalog.flatMap((item) => item.relatedServices)))
    .map((slug) => getService(slug))
    .filter(Boolean)
    .map((service) => ({
      slug: service!.slug,
      label: service!.shortLabel,
    })),
] as const;

const industryOptions = [
  { slug: "all", label: "All Industries" },
  ...Array.from(new Set(technologyCatalog.flatMap((item) => item.relatedIndustries)))
    .map((slug) => getIndustry(slug))
    .filter(Boolean)
    .map((industry) => ({
      slug: industry!.slug,
      label: industry!.title,
    })),
] as const;

export function TechnologiesFilterClient() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<CategoryFilter>("All");
  const [serviceFilter, setServiceFilter] = React.useState("all");
  const [industryFilter, setIndustryFilter] = React.useState("all");

  const filteredTechnologies = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return technologyCatalog.filter((technology) => {
      const matchesCategory =
        category === "All" || technology.category === category;
      const matchesService =
        serviceFilter === "all" ||
        technology.relatedServices.includes(serviceFilter);
      const matchesIndustry =
        industryFilter === "all" ||
        technology.relatedIndustries.includes(industryFilter);
      const matchesQuery =
        normalizedQuery.length === 0 ||
        technology.name.toLowerCase().includes(normalizedQuery) ||
        technology.summary.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesService && matchesIndustry && matchesQuery;
    });
  }, [category, industryFilter, query, serviceFilter]);

  return (
    <div className="space-y-8">
      <section className="glass-panel border border-[var(--border)] p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <label
              htmlFor="technology-filter"
              className="theme-accent-strong mb-2 block font-mono text-sm uppercase tracking-[0.2em]"
            >
              Search technologies
            </label>
            <input
              id="technology-filter"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Microsoft 365, cameras, firewalls, Wi-Fi..."
              className="theme-input w-full rounded-xl px-4 py-3"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="technology-service-filter"
                className="theme-accent-strong mb-2 block font-mono text-sm uppercase tracking-[0.2em]"
              >
                Service focus
              </label>
              <select
                id="technology-service-filter"
                value={serviceFilter}
                onChange={(event) => setServiceFilter(event.target.value)}
                className="theme-input w-full rounded-xl px-4 py-3"
              >
                {serviceOptions.map((option) => (
                  <option key={option.slug} value={option.slug}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="technology-industry-filter"
                className="theme-accent-strong mb-2 block font-mono text-sm uppercase tracking-[0.2em]"
              >
                Industry focus
              </label>
              <select
                id="technology-industry-filter"
                value={industryFilter}
                onChange={(event) => setIndustryFilter(event.target.value)}
                className="theme-input w-full rounded-xl px-4 py-3"
              >
                {industryOptions.map((option) => (
                  <option key={option.slug} value={option.slug}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={
                category === item
                  ? "button-primary rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.2em]"
                  : "button-secondary rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.2em]"
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="theme-copy text-sm">
            Showing {filteredTechnologies.length} of {technologyCatalog.length} technologies
          </span>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setServiceFilter("all");
              setIndustryFilter("all");
            }}
            className="button-secondary rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.2em]"
          >
            Reset Filters
          </button>
          <Link
            href="/project-fit/"
            className="theme-accent font-mono text-sm uppercase tracking-[0.2em]"
          >
            See project-fit guidance
          </Link>
        </div>
      </section>

      {filteredTechnologies.length > 0 ? (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              label: "Cloud and Identity",
              count: filteredTechnologies.filter((item) => item.category === "Cloud and Identity").length,
            },
            {
              label: "Infrastructure",
              count: filteredTechnologies.filter((item) => item.category === "Infrastructure").length,
            },
            {
              label: "Networking and Wi-Fi",
              count: filteredTechnologies.filter((item) => item.category === "Networking and Wi-Fi").length,
            },
            {
              label: "Security and Cameras",
              count: filteredTechnologies.filter((item) =>
                item.category === "Security and Compliance" || item.category === "Cameras and Local AI",
              ).length,
            },
          ].map((item) => (
            <div key={item.label} className="glass-panel border border-[var(--border)] p-6">
              <p className="theme-accent-strong mb-2 font-mono text-xs uppercase tracking-[0.24em]">
                {item.label}
              </p>
              <p className="theme-heading font-mono text-3xl font-bold">{item.count}</p>
            </div>
          ))}
        </section>
      ) : null}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredTechnologies.map((technology) => (
          <TechnologyCard key={technology.slug} technology={technology} />
        ))}
      </section>

      {filteredTechnologies.length === 0 ? (
        <section className="glass-panel border border-[var(--border)] p-8">
          <h2 className="theme-heading mb-3 font-mono text-xl font-bold">
            No direct matches
          </h2>
          <p className="theme-copy leading-relaxed">
            Try a broader search term or switch back to all categories. If you
            have a specialized platform in mind, the best next step is still to
            start the conversation by email.
          </p>
        </section>
      ) : null}
    </div>
  );
}

function TechnologyCard({ technology }: { technology: TechnologyEntry }) {
  const relatedServices = technology.relatedServices
    .map((slug) => getService(slug))
    .filter(Boolean);
  const relatedIndustries = technology.relatedIndustries
    .map((slug) => getIndustry(slug))
    .filter(Boolean);

  return (
    <section className="glass-panel border border-[var(--border)] p-8">
      <p className="theme-accent-strong mb-3 font-mono text-xs uppercase tracking-[0.24em]">
        {technology.category}
      </p>
      <h2 className="theme-heading mb-4 font-mono text-2xl font-bold">
        <Link href={`/technologies/${technology.slug}/`} className="hover:text-[var(--accent-strong)]">
          {technology.name}
        </Link>
      </h2>
      <p className="theme-copy mb-6 leading-relaxed">{technology.summary}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {relatedIndustries.map((industry) => (
          <Link
            key={industry!.slug}
            href={`/industries/${industry!.slug}/`}
            className="theme-chip px-3 py-2 text-xs uppercase tracking-[0.14em] hover:border-[var(--border-strong)]"
          >
            {industry!.title}
          </Link>
        ))}
      </div>

      <div className="space-y-3">
        {relatedServices.map((service) => (
          <Link
            key={service!.slug}
            href={`/services/${service!.slug}/`}
            className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm theme-copy hover:border-[var(--border-strong)]"
          >
            {service!.title}
          </Link>
        ))}
      </div>

      <Link
        href={`/technologies/${technology.slug}/`}
        className="theme-accent mt-6 inline-block font-mono text-sm uppercase tracking-[0.2em]"
      >
        View technology page
      </Link>
    </section>
  );
}
