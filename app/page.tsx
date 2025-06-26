"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HeroText } from "@/components/hero-text"
import { FloatingGlasses } from "@/components/floating-glasses"
import { ComingSoon } from "@/components/coming-soon"
import { SocialLinks } from "@/components/social-links"
import { BackgroundElements } from "@/components/background-elements"
import { CustomCursor } from "@/components/custom-cursor"

export default function SolanaGlassesLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="h-screen bg-black text-white overflow-hidden relative">
      <CustomCursor />
      <Header />
      <BackgroundElements />
      <HeroText mousePosition={mousePosition} />
      <FloatingGlasses mousePosition={mousePosition} />
      <ComingSoon />
      <SocialLinks />
    </div>
  )
}
