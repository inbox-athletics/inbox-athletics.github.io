"use client"
import Link from "next/link"
import type React from "react"

import { ArrowRight, CheckCircle, MessageSquare, Star, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WaitlistForm } from "@/components/waitlist-form"
import { smoothScrollTo } from "@/lib/utils"

export default function LandingPage() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    smoothScrollTo(id)
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Inbox Athletics",
    description:
      "A recruiting productivity platform that helps high school student-athletes manage communication with college coaches.",
    url: "https://www.inboxathletics.com",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/ComingSoon",
    },
    creator: {
      "@type": "Organization",
      name: "Inbox Athletics",
      url: "https://www.inboxathletics.com",
      logo: "https://www.inboxathletics.com/inbox-athletics-square-500x500.png",
    },
    audience: {
      "@type": "Audience",
      audienceType: "High School Student Athletes",
    },
    featureList: [
      "Smart reminders for coach communications",
      "AI-assisted message drafts",
      "Recruiting progress tracking",
      "Coach contact management",
      "Action item organization",
      "Email integration",
      "Personalized dashboard",
    ],
    screenshot: "https://www.inboxathletics.com/og-image.png",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/inbox-athletics-logo-250x50.png"
              alt="Inbox Athletics - Recruiting Intelligence for Student-Athletes"
              width={250}
              height={50}
            />
          </div>
          <nav className="hidden md:flex gap-6" role="navigation" aria-label="Main navigation">
            <Link
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="text-sm font-medium text-azure-900 hover:text-azure-600"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "how-it-works")}
              className="text-sm font-medium text-azure-900 hover:text-azure-600"
            >
              How It Works
            </Link>
          </nav>
          <div>
            <Button className="bg-azure-600 hover:bg-azure-700">
              <Link href="#waitlist" onClick={(e) => handleNavClick(e, "waitlist")}>
                Join Waitlist
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-azure-50 to-white"
          aria-labelledby="hero-heading"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    id="hero-heading"
                    className="text-3xl font-bold tracking-tighter text-azure-900 sm:text-5xl xl:text-6xl/none"
                  >
                    Take Control of Your Athletic Recruiting Journey
                  </h1>
                  <p className="max-w-[600px] text-azure-800 md:text-xl">
                    A recruiting productivity platform that helps high school student-athletes manage communication with
                    college coaches through smart reminders, AI-assisted drafts, and actionable insights.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-azure-600 hover:bg-azure-700">
                    <Link href="#waitlist" onClick={(e) => handleNavClick(e, "waitlist")}>
                      Join Waitlist
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-azure-600 text-azure-600 hover:bg-azure-50">
                    <Link href="#features" onClick={(e) => handleNavClick(e, "features")} className="flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-azure-100 p-4 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-azure-200/50 to-azure-400/30"></div>
                  <div className="relative z-10 flex h-full flex-col gap-4 rounded-lg bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 border-b border-azure-100 pb-4">
                      <MessageSquare className="h-5 w-5 text-azure-600" />
                      <h3 className="text-lg font-semibold text-azure-900">Coach Messages</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-azure-50 p-3">
                        <p className="text-sm text-azure-800">
                          <span className="font-semibold">Coach Thompson:</span> Thanks for sending your highlight reel.
                          I'd like to discuss your potential fit with our program.
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs text-azure-600">2 days ago</span>
                          <span className="text-xs text-red-500 font-medium">Follow up reminder</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-azure-50 p-3">
                        <p className="text-sm text-azure-800">
                          <span className="font-semibold">Coach Williams:</span> We're impressed with your stats. Are
                          you available for a campus visit next month?
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs text-azure-600">Yesterday</span>
                          <span className="text-xs text-green-500 font-medium">Reply drafted</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-azure-100 px-3 py-1 text-sm text-azure-800">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter text-azure-900 sm:text-5xl">
                  Designed for Student-Athlete Success
                </h2>
                <p className="max-w-[900px] text-azure-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Inbox Athletics empowers you to take control of your recruiting journey with tools designed
                  specifically for student-athletes navigating the college recruiting process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <article className="flex flex-col items-center space-y-4 rounded-lg border border-azure-100 bg-white p-6 shadow-sm">
                <div className="rounded-full bg-azure-100 p-3">
                  <Trophy className="h-6 w-6 text-azure-600" />
                </div>
                <h3 className="text-xl font-bold text-azure-900">Empowerment</h3>
                <p className="text-center text-azure-700">
                  Take control of your recruiting journey with tools that put you in the driver's seat of your athletic
                  future.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-azure-600" />
                    <span>Personalized recruiting dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-azure-600" />
                    <span>Real-time progress tracking</span>
                  </li>
                </ul>
              </article>
              <article className="flex flex-col items-center space-y-4 rounded-lg border border-azure-100 bg-white p-6 shadow-sm">
                <div className="rounded-full bg-azure-100 p-3">
                  <Star className="h-6 w-6 text-azure-600" />
                </div>
                <h3 className="text-xl font-bold text-azure-900">Clarity & Guidance</h3>
                <p className="text-center text-azure-700">
                  Actionable tools and clear next steps to navigate the complex college recruiting process with
                  confidence.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-azure-600" />
                    <span>Smart recruiting reminders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-azure-600" />
                    <span>AI-suggested replies</span>
                  </li>
                </ul>
              </article>
              <article className="flex flex-col items-center space-y-4 rounded-lg border border-azure-100 bg-white p-6 shadow-sm">
                <div className="rounded-full bg-azure-100 p-3">
                  <Users className="h-6 w-6 text-azure-600" />
                </div>
                <h3 className="text-xl font-bold text-azure-900">Professionalism</h3>
                <p className="text-center text-azure-700">
                  Make a strong impression with college coaches through organized, professional communication and
                  presentation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-azure-600" />
                    <span>AI-assisted messaging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-azure-600" />
                    <span>Coach-ready athlete profiles</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-azure-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-azure-100 px-3 py-1 text-sm text-azure-800">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-azure-900 sm:text-5xl">
                  Simplifying Your College Recruiting Process
                </h2>
                <p className="max-w-[900px] text-azure-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Inbox Athletics organizes your recruiting communications and provides actionable insights to keep you
                  moving forward in your athletic recruiting journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-azure-600 text-white">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-azure-900">Connect Your Email</h3>
                      <p className="text-azure-700">
                        Securely link your email account to automatically organize all college coach communications in
                        one centralized location.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-azure-600 text-white">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-azure-900">Set Your Recruiting Goals</h3>
                      <p className="text-azure-700">
                        Define your target colleges, sports preferences, and recruiting timeline to receive personalized
                        guidance and recommendations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-azure-600 text-white">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-azure-900">Stay On Track</h3>
                      <p className="text-azure-700">
                        Receive intelligent reminders and AI-powered suggestions based on your conversations with
                        college coaches and recruiting timeline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-azure-100 p-4 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-azure-200/50 to-azure-400/30"></div>
                  <div className="relative z-10 flex h-full flex-col gap-4 rounded-lg bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 border-b border-azure-100 pb-4">
                      <Trophy className="h-5 w-5 text-azure-600" />
                      <h3 className="text-lg font-semibold text-azure-900">Recruiting Dashboard</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-azure-50 p-3">
                        <h4 className="font-medium text-azure-900">Active Conversations</h4>
                        <p className="text-2xl font-bold text-azure-600">12</p>
                      </div>
                      <div className="rounded-lg bg-azure-50 p-3">
                        <h4 className="font-medium text-azure-900">Follow-ups Due</h4>
                        <p className="text-2xl font-bold text-azure-600">3</p>
                      </div>
                      <div className="rounded-lg bg-azure-50 p-3">
                        <h4 className="font-medium text-azure-900">Campus Visits</h4>
                        <p className="text-2xl font-bold text-azure-600">2</p>
                      </div>
                      <div className="rounded-lg bg-azure-50 p-3">
                        <h4 className="font-medium text-azure-900">Interest Level</h4>
                        <p className="text-2xl font-bold text-azure-600">High</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <h4 className="font-medium text-azure-900">Today's Action Items</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 rounded-lg border border-azure-100 p-2">
                          <CheckCircle className="h-4 w-4 text-azure-600" />
                          <span className="text-sm">Reply to Coach Thompson</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="w-full py-12 md:py-24 lg:py-32 bg-azure-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                    Join the Waitlist
                  </h2>
                  <p className="max-w-[600px] text-azure-200 md:text-xl">
                    Be among the first to experience Inbox Athletics when we launch. Sign up now to secure your spot and
                    get early access to the future of athletic recruiting.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-azure-400" />
                    <span className="text-white">Early access to the platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-azure-400" />
                    <span className="text-white">Exclusive launch discounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-azure-400" />
                    <span className="text-white">Free recruiting tips and resources</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md space-y-2 rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-azure-900">Reserve Your Spot</h3>
                  <p className="text-sm text-azure-700">
                    Fill out the form below to join our waitlist and be notified when we launch.
                  </p>
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
