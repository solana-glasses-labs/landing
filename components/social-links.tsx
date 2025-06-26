"use client"

import { Twitter, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "https://x.com/solanaglasses", label: "Twitter" },
  { icon: Mail, href: "mailto:info@solanaglasses.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/solanaglasses", label: "LinkedIn" },
]

export function SocialLinks() {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex space-x-6">
        {socialLinks.map(({ icon: Icon, href, label }, index) => (
          <a
            key={label}
            href={href}
            className="group relative p-3 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10 mix-blend-difference"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
            aria-label={label}
          >
            <Icon className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </a>
        ))}
      </div>
    </div>
  )
}
