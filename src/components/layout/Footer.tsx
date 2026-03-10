import Link from "next/link"
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react"

export function Footer() {
  return (
    <footer className="border-t border-[#39ff14]/20 bg-[#050505] relative z-10 overflow-hidden">
      {/* Cyberpunk accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 border-l-2 border-[#b026ff] pl-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-2xl font-bold tracking-wider text-white">
                NEXT<span className="text-[#b026ff]">GRID</span><span className="text-white/50 text-sm ml-1">IT</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Enterprise-grade IT Solutions tailored for small to medium businesses. Securing networks and building infrastructure for the future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                <span className="sr-only">Twitter</span>
                <IconBrandTwitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#b026ff] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <IconBrandLinkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#39ff14] transition-colors">
                <span className="sr-only">GitHub</span>
                <IconBrandGithub className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-white tracking-wider uppercase mb-4 opacity-80">Solutions</h3>
            <ul className="space-y-3">
              {[
                { label: "Network Architecture", href: "/services#network" },
                { label: "Cybersecurity", href: "/services#security" },
                { label: "Cloud Migration", href: "/services#cloud" },
                { label: "Managed IT", href: "/services#managed" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-[#00f0ff] hover:pl-2 transition-all duration-200 flex items-center before:content-['>'] before:text-[#39ff14] before:opacity-0 hover:before:opacity-100 before:-ml-3 before:absolute relative">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-white tracking-wider uppercase mb-4 opacity-80">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/about#case-studies" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-[#00f0ff] hover:pl-2 transition-all duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-white tracking-wider uppercase mb-4 opacity-80">Terminal</h3>
            <div className="bg-[#0a0a0a] p-4 rounded-sm border border-gray-800 font-mono text-xs text-[#39ff14] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#39ff14]/30"></div>
              <p className="mb-2 opacity-80">&gt; ping contact@nextgridit.com</p>
              <p className="mb-4 opacity-80">&gt; Reply from 192.168.1.1: bytes=32 time&lt;1ms TTL=64</p>
              <Link 
                href="/contact"
                className="inline-block mt-2 bg-[#b026ff]/10 text-[#b026ff] hover:bg-[#b026ff] hover:text-black border border-[#b026ff] px-4 py-2 transition-colors duration-300 w-full text-center tracking-wider"
              >
                INITIATE CONTACT
              </Link>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-mono text-center md:text-left">
            &copy; {new Date().getFullYear()} NextgridIT Systems. All rights reserved. <span className="text-[#39ff14]/50">SECURE: true</span>
          </p>
          <div className="flex gap-4 text-xs font-mono text-gray-600">
            <span>SYS_STATUS: <span className="text-[#00f0ff]">ONLINE</span></span>
            <span>UPTIME: <span className="text-[#39ff14]">99.9%</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
