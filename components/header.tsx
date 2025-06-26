"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6 lg:p-8">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Solana Glasses Logo"
            width={144}
            height={72}
            className="w-18 h-9 md:w-24 md:h-12 lg:w-32 lg:h-16 object-contain mix-blend-difference"
            priority
          />
        </div>

        {/* Get in touch button */}
        <Button
          variant="outline"
          className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 mix-blend-difference backdrop-blur-sm"
        >
          Get in touch
        </Button>
      </div>
    </header>
  )
}
