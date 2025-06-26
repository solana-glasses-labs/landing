"use client"

export function LoadingDots() {
  return (
    <span className="inline-flex">
      <span className="animate-pulse" style={{ animationDelay: "0s", animationDuration: "1.5s" }}>
        .
      </span>
      <span className="animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "1.5s" }}>
        .
      </span>
      <span className="animate-pulse" style={{ animationDelay: "1s", animationDuration: "1.5s" }}>
        .
      </span>
    </span>
  )
}
