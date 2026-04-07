"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { smoothScrollTo } from "@/lib/utils"

const navLinks: { label: string; id?: string; href?: string }[] = [
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
  // { label: "Guide", href: "https://guide.inboxathletics.com" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    smoothScrollTo(id)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/inbox-athletics-logo-without-tagline.svg"
            alt="Inbox Athletics"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-primary hover:text-brand-600 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id!)}
                className="text-sm font-medium text-text-primary hover:text-brand-600 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Button className="bg-brand-600 hover:bg-brand-700 text-white">
            <Link href="#waitlist" onClick={(e) => handleNavClick(e, "waitlist")}>
              Get Early Access
            </Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-text-primary hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id!)}
                    className="text-base font-medium text-text-primary hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button className="bg-brand-600 hover:bg-brand-700 text-white w-full">
                <Link href="#waitlist" onClick={(e) => handleNavClick(e, "waitlist")}>
                  Get Early Access
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
