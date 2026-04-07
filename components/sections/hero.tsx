"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScrollTo } from "@/lib/utils"

export function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    smoothScrollTo(id)
  }

  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-brand-50 to-white"
      aria-labelledby="hero-heading"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl text-balance"
          >
            The recruiting journey is stressful. Let&apos;s fix that.
          </h1>
          <p className="mx-auto max-w-[600px] text-text-secondary text-lg md:text-xl">
            Inbox Athletics organizes your coach conversations, reminds you to follow up, and helps you communicate like a pro.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white">
              <Link href="#waitlist" onClick={(e) => handleClick(e, "waitlist")} className="flex items-center">
                Get Early Access
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
              <Link href="#how-it-works" onClick={(e) => handleClick(e, "how-it-works")} className="flex items-center">
                See How It Works <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-text-secondary italic">
            We were the athletes. Now we&apos;re the parents. We built this for both.
          </p>
        </div>
        <div className="mt-12 md:mt-16">
          <div className="relative w-full overflow-hidden rounded-xl border border-[#E2E8F0] shadow-xl">
            <img
              src="/screenshots/hero-desktop.png"
              alt="Inbox Athletics desktop dashboard showing coach conversations, follow-up reminders, and recruiting overview"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
