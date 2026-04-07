"use client"

import { event } from "@/lib/gtag"
import { cn } from "@/lib/utils"

const APP_URL = "https://app.inboxathletics.com"

interface TrackedCTAProps {
  children: React.ReactNode
  className?: string
  label: string
}

export function TrackedCTA({ children, className, label }: TrackedCTAProps) {
  return (
    <a
      href={APP_URL}
      className={cn(className)}
      onClick={() =>
        event({
          action: "cta_click",
          category: "conversion",
          label,
        })
      }
    >
      {children}
    </a>
  )
}
