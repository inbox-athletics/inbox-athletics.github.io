import type { Metadata } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import './globals.css'

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-schibsted-grotesk'
});

export const metadata: Metadata = {
  title: 'Inbox Athletics | Recruiting intelligence for Student-Athletes',
  description: 'A recruiting productivity platform that helps high school student-athletes manage communication with college coaches.',
  keywords: ['recruiting', 'student-athletes', 'college sports', 'athletic recruiting', 'sports recruiting'],
  authors: [{ name: 'Inbox Athletics' }],
  openGraph: {
    title: 'Inbox Athletics | Recruiting intelligence for Student-Athletes',
    description: 'A recruiting productivity platform that helps high school student-athletes manage communication with college coaches.',
    url: 'https://inboxathletics.com',
    siteName: 'Inbox Athletics',
    images: [
      {
        url: '/og-image.png', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Inbox Athletics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inbox Athletics | Recruiting intelligence for Student-Athletes',
    description: 'A recruiting productivity platform that helps high school student-athletes manage communication with college coaches.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/inbox-athletics-square-500x500.png', // favicon
    apple: '/inbox-athletics-square-500x500.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={schibstedGrotesk.variable}>
      <body className={schibstedGrotesk.className}>{children}</body>
    </html>
  )
}