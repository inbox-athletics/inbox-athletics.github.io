import type React from "react"
import type { Metadata } from "next"
import { Schibsted_Grotesk } from "next/font/google"
import Script from "next/script"
import { GA_MEASUREMENT_ID } from "@/lib/gtag"
import "./globals.css"
import { Analytics } from '@/components/analytics'

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
})

export const metadata: Metadata = {
  title: {
    default: "Inbox Athletics | Recruiting Intelligence for Student-Athletes",
    template: "%s | Inbox Athletics",
  },
  description:
    "A recruiting productivity platform that helps high school student-athletes manage communication with college coaches. Get smart reminders, drafts, and action items to stay proactive in your recruiting journey.",
  keywords: [
    "athletic recruiting",
    "college recruiting",
    "student athlete",
    "recruiting platform",
    "college coaches",
    "recruiting communication",
    "high school athletics",
    "recruiting productivity",
    "college sports recruiting",
    "athlete recruiting tools",
    "recruiting intelligence",
    "sports recruiting software",
    "athletic scholarship",
    "college sports",
    "recruiting management",
  ],
  authors: [{ name: "Inbox Athletics" }],
  creator: "Inbox Athletics",
  publisher: "Inbox Athletics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.inboxathletics.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.inboxathletics.com",
    title: "Inbox Athletics | Recruiting Intelligence for Student-Athletes",
    description:
      "A recruiting productivity platform that helps high school student-athletes manage communication with college coaches. Get smart reminders, drafts, and action items to stay proactive in your recruiting journey.",
    siteName: "Inbox Athletics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inbox Athletics - Athletic Recruiting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inbox Athletics | Recruiting Intelligence for Student-Athletes",
    description:
      "A recruiting productivity platform that helps high school student-athletes manage communication with college coaches.",
    images: ["/og-image.png"],
    creator: "@inboxathletics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${schibstedGrotesk.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#063674" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Inbox Athletics" />
        <link rel="apple-touch-icon" href="/inbox-athletics-square-500x500.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={schibstedGrotesk.className}>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  )
}