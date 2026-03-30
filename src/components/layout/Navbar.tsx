"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { IconMenu2, IconX } from "@tabler/icons-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const mobileMenuId = "mobile-navigation"

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/compliance", label: "Compliance" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-sm bg-black border border-[#39ff14] flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-shadow duration-300">
                <span className="text-[#39ff14] font-mono font-bold text-xl leading-none">NX</span>
              </div>
              <span className="font-mono text-xl font-bold tracking-wider text-white">
                NEXT<span className="text-[#39ff14]">GRID</span><span className="text-white/50 text-sm ml-1">IT</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-mono text-sm tracking-wide uppercase transition-colors duration-200 hover:text-[#00f0ff] relative group",
                    isActive ? "text-[#39ff14]" : "text-gray-300"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1.5 left-0 w-full h-[2px] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                    isActive ? "bg-[#39ff14] scale-x-100" : "bg-[#00f0ff]"
                  )} />
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="relative px-6 py-2.5 font-mono text-sm font-bold text-black bg-[#39ff14] hover:bg-[#00f0ff] transition-colors duration-300 overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-300">START BY EMAIL</span>
              <div className="absolute inset-0 h-full w-full border-2 border-inherit translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id={mobileMenuId}
        className={cn(
          "md:hidden absolute w-full bg-[#050505] border-b border-[#39ff14]/20 transition-all duration-300 ease-in-out origin-top overflow-hidden",
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        )}
      >
        <nav aria-label="Mobile" className="px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block font-mono text-xl uppercase tracking-wider",
                pathname === link.href ? "text-[#39ff14]" : "text-gray-300"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full text-center px-6 py-3 font-mono text-sm font-bold text-black bg-[#39ff14] hover:bg-[#00f0ff] transition-colors duration-300"
            >
              START BY EMAIL
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
