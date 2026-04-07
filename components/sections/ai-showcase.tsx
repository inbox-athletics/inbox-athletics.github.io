import { Sparkles, MessageSquare, Bell, Shield } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Smart draft suggestions",
    description:
      "AI-generated reply drafts that match your voice and help you sound professional when communicating with coaches.",
  },
  {
    icon: Bell,
    title: "Follow-up intelligence",
    description:
      "Know exactly when to follow up based on conversation context, coach engagement, and recruiting timelines.",
  },
  {
    icon: MessageSquare,
    title: "Conversation summaries",
    description:
      "Instant summaries of long email threads so you never lose track of what was discussed with each coach.",
  },
  {
    icon: Shield,
    title: "Tone & professionalism check",
    description:
      "Real-time feedback on your messages to ensure you're striking the right tone before hitting send.",
  },
]

export function AIShowcase() {
  return (
    <section id="ai-features" className="w-full py-16 md:py-24 bg-ai-surface">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Your personal recruiting assistant
          </h2>
          <p className="mx-auto max-w-[600px] text-text-secondary text-lg">
            Powered by AI that understands the recruiting journey and helps you communicate with confidence.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex items-start gap-4 rounded-lg border border-ai-border bg-ai-light p-6"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                  <feature.icon className="h-5 w-5 text-ai shrink-0" />
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
