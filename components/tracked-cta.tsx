"use client"

import { posthog } from "@/lib/posthog"
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
        posthog.capture("cta_click", {
          category: "conversion",
          label,
        })
      }
    >
      {children}
    </a>
  )
}
