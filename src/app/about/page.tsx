import { IconSkull, IconShieldCheck, IconWorld } from "@tabler/icons-react"

export const runtime = "edge";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-wider">
          Origin <span className="text-[#b026ff]">Story</span>
        </h1>
        <div className="w-24 h-1 bg-[#b026ff] mb-6 shadow-[0_0_10px_rgba(176,38,255,0.5)]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Story Text */}
        <div className="space-y-6 text-gray-300 font-sans text-lg leading-relaxed">
          <p>
            I started NextgridIT out of frustration. Working inside massive corporate environments, I watched daily as enterprises deployed incredible, automated security layers. Meanwhile, the small businesses down the street were left exposed, entirely reliant on reactive break-fix IT models.
          </p>
          <p>
            The technology to secure these smaller networks exists, and it doesn't have to cost a fortune. The problem isn't the cost of the tools; the problem is that the agencies who know how to deploy them charge enterprise rates to everyone.
          </p>
          <p className="border-l-2 border-[#b026ff] pl-4 text-white font-mono my-8 py-2">
            "A truly secure world is one where <span className="text-[#b026ff] drop-shadow-[0_0_8px_rgba(176,38,255,0.8)]">everyone</span> is secure. We are trying to make a safer tomorrow, today."
          </p>
          <p>
            When I'm not architecting secure networks for NextgridIT clients, I spend my time hunting for zero-day vulnerabilities (bug bounties) inside the infrastructure of tech giants like Microsoft and Google. 
          </p>
          <p>
            That offensive security mindset is baked into everything we do. We don't just set up your router; we configure it knowing exactly how an attacker would try to break it.
          </p>
        </div>

        {/* Visual Stats/Badges */}
        <div className="glass-panel p-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b026ff]/10 blur-3xl rounded-full" />
          
          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-black border border-[#b026ff]/30 rounded-sm mt-1">
                <IconShieldCheck className="w-6 h-6 text-[#b026ff]" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-1">Defense Architect</h3>
                <p className="text-sm text-gray-400 font-sans">Bringing Fortune 500 security protocols to agile teams.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-black border border-[#39ff14]/30 rounded-sm mt-1">
                <IconSkull className="w-6 h-6 text-[#39ff14]" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-1">Active Bug Hunter</h3>
                <p className="text-sm text-gray-400 font-sans">Continually pressure-testing the world's largest networks (Google, Microsoft).</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-black border border-[#00f0ff]/30 rounded-sm mt-1">
                <IconWorld className="w-6 h-6 text-[#00f0ff]" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-1">Global & Local</h3>
                <p className="text-sm text-gray-400 font-sans">Worldwide security consulting, with physical deployments rooted in Upstate South Carolina.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

