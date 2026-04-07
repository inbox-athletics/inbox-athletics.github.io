import { Inbox, Clock, HelpCircle } from "lucide-react"

const painPoints = [
  {
    icon: Inbox,
    title: "Scattered emails",
    description:
      "Coach messages buried across inboxes, spam folders, and group threads. Important conversations slip through the cracks.",
  },
  {
    icon: Clock,
    title: "Missed follow-ups",
    description:
      "Losing momentum at critical moments because there's no system to track who you need to reply to and when.",
  },
  {
    icon: HelpCircle,
    title: "No guidance",
    description:
      "Not knowing what to say, when to reach out, or how to sound professional when communicating with coaches.",
  },
]

export function Problem() {
  return (
    <section id="problem" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Sound familiar?
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {painPoints.map((point) => (
            <article
              key={point.title}
              className="flex flex-col items-start space-y-4 rounded-lg border border-border bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-text-primary flex items-center gap-2">
                <point.icon className="h-5 w-5 text-brand-600 shrink-0" />
                {point.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
