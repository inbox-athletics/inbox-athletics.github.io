import { WaitlistForm } from "@/components/waitlist-form"

export function FinalCTA() {
  return (
    <section id="waitlist" className="w-full py-16 md:py-24 bg-brand-600">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
              Recruiting doesn&apos;t have to feel this hard.
            </h2>
            <p className="max-w-[500px] text-brand-200 text-lg">
              We know how much goes into the recruiting journey — the emails, the follow-ups, the timing. Inbox Athletics keeps it all organized so nothing slips through the cracks.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl space-y-4">
              <div>
                <h3 className="text-xl font-bold text-text-primary">Get Early Access</h3>
                <p className="text-sm text-text-secondary mt-1">
                  Enter your email and we&apos;ll send you an invite.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
