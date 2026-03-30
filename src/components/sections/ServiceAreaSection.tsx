const cities = ["Seneca", "Clemson", "Anderson", "Easley", "Greenville"];

export function ServiceAreaSection() {
  return (
    <section className="py-24 bg-[#020202] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
            SERVICE <span className="text-[#00f0ff]">AREA</span>
          </h2>
          <div className="w-24 h-1 bg-[#00f0ff] mb-6 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            NextGridIT primarily serves businesses and public-facing organizations in Upstate South Carolina, with local support centered around the communities where on-site response, infrastructure work, and property deployments matter most.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {cities.map((city) => (
              <span key={city} className="px-4 py-2 border border-[#39ff14]/25 bg-black/40 text-white font-mono text-sm tracking-wide">
                {city}, SC
              </span>
            ))}
          </div>

          <p className="text-gray-400 leading-relaxed max-w-3xl">
            Travel is available for larger projects and specialty engagements outside Upstate South Carolina, especially for municipal work, multi-building properties, campgrounds, and infrastructure-heavy deployments that need on-site planning and execution.
          </p>
        </div>
      </div>
    </section>
  );
}
