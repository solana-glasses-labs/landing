"use client"

import Image from "next/image"

interface FloatingGlassesProps {
  mousePosition: { x: number; y: number }
}

export function FloatingGlasses({ mousePosition }: FloatingGlassesProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-300 ease-out -translate-y-16"
      style={{
        transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8 - 124}px) scale(${1 + Math.abs(mousePosition.x + mousePosition.y) * 0.002})`,
      }}
    >
      <div className="relative w-[500px] h-[300px] md:w-[600px] md:h-[360px] lg:w-[700px] lg:h-[420px]">
        <Image
          src="/solana-glasses.png"
          alt="Solana Glasses - Futuristic Smart Glasses"
          fill
          className="object-contain filter drop-shadow-2xl"
          priority
        />
        {/* Enhanced glow effect for floating appearance */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/8 to-cyan-500/8 blur-[100px] -z-10 scale-150 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>
    </div>
  )
}
