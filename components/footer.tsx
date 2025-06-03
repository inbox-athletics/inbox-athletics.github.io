import Link from 'next/link'
import type React from "react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-white py-6">
            <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <img src="/inbox-athletics-logo-without-tagline.svg" alt="Inbox Athletics" width={250} />
                    </Link>
                </div>
                <p className="text-center text-sm text-azure-700 md:text-left">
                    &copy; {new Date().getFullYear()} Inbox Athletics. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link href="/privacy" className="text-sm text-azure-700 hover:text-azure-900">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-sm text-azure-700 hover:text-azure-900">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    )
}