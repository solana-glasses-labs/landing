"use client"

import { LoadingDots } from "./loading-dots"

export function ComingSoon() {
  return (
    <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 z-40 mix-blend-difference">
      <p className="text-2xl md:text-3xl text-white font-light tracking-wide text-center">
        Coming Soon
        <LoadingDots />
      </p>
    </div>
  )
}
