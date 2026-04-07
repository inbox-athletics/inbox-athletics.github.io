import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { HowItWorks } from "@/components/sections/how-it-works"
import { AIShowcase } from "@/components/sections/ai-showcase"
import { DualAudience } from "@/components/sections/dual-audience"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/footer"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Inbox Athletics",
  description:
    "A recruiting productivity platform that helps student-athletes and their families organize coach conversations, follow up on time, and communicate confidently.",
  url: "https://www.inboxathletics.com",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "34.99",
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
    audienceType: "High School Student Athletes and Their Families",
  },
  featureList: [
    "Unified coach inbox",
    "Smart follow-up reminders",
    "AI-drafted replies",
    "Conversation summaries",
    "Tone & professionalism check",
    "Recruiting dashboard",
    "Parent visibility & shared access",
  ],
  screenshot: "https://www.inboxathletics.com/og-image.png",
}

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static structured data object — safe, no user input
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <AIShowcase />
        <DualAudience />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
