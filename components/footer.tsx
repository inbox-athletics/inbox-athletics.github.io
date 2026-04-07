import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t border-[#E2E8F0] bg-white py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/inbox-athletics-logo-without-tagline.svg" alt="Inbox Athletics" width={180} height={20} />
          </Link>
        </div>
        <p className="text-center text-sm text-text-secondary md:text-left">
          &copy; {new Date().getFullYear()} Inbox Athletics. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm text-text-secondary hover:text-brand-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-text-secondary hover:text-brand-600 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
