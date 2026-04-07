import { Trophy, Eye, MessageSquare, Bell, Heart, BarChart3, Users, Shield } from "lucide-react"

const athleteFeatures = [
  { icon: Trophy, text: "Take control of your recruiting journey" },
  { icon: MessageSquare, text: "Communicate with coaches like a pro" },
  { icon: BarChart3, text: "Stay organized across every conversation" },
  { icon: Bell, text: "Never miss a critical follow-up" },
]

const parentFeatures = [
  { icon: Eye, text: "Visibility into your student-athlete's progress" },
  { icon: Heart, text: "Peace of mind without the nagging" },
  { icon: Users, text: "Shared dashboard for the whole family" },
  { icon: Shield, text: "Know nothing is falling through the cracks" },
]

export function DualAudience() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Built for them. And for you.
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-brand-200 bg-brand-50/50 p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-brand-900">For Student-Athletes</h3>
            <ul className="space-y-4">
              {athleteFeatures.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  <feature.icon className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-text-primary">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold text-text-primary">For Parents</h3>
              <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-2.5 py-0.5 text-xs font-medium text-brand-600 uppercase tracking-wide">
                Coming Soon
              </span>
            </div>
            <ul className="space-y-4">
              {parentFeatures.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  <feature.icon className="h-5 w-5 shrink-0 text-gray-400" />
                  <span className="text-text-primary">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
