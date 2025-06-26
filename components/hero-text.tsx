"use client"

interface HeroTextProps {
  mousePosition: { x: number; y: number }
}

export function HeroText({ mousePosition }: HeroTextProps) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center z-30 transition-transform duration-300 ease-out mix-blend-difference"
      style={{
        transform: `translate(${-mousePosition.x * 0.2}px, ${-mousePosition.y * 0.2}px)`,
      }}
    >
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center leading-none relative">
        <span className="text-white relative">
          Solana Glasses
          {/* White blurred underline shadow effect - 15% more prominent */}
          <div className="absolute -bottom-6 -left-8 -right-8 h-1 bg-white blur-xl opacity-75" />
          <div className="absolute -bottom-4 -left-12 -right-12 h-2 bg-white blur-2xl opacity-55" />
          <div className="absolute -bottom-2 -left-16 -right-16 h-3 bg-white blur-3xl opacity-35" />
        </span>
      </h1>
    </div>
  )
}
