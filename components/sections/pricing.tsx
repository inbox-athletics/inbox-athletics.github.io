import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TrackedCTA } from "@/components/tracked-cta"

const features = [
  "Email Sync & Organization",
  "AI Writing Assistant",
  "Recruiting Pipeline & Analytics",
  "Follow-up Reminders",
  "Unlimited Colleges & Coaches",
  "Cancel Anytime",
]

const plans = [
  {
    name: "Monthly",
    price: "$34.99",
    period: "/month",
    note: "Monthly member pricing",
    highlighted: false,
  },
  {
    name: "Annual",
    price: "$299.99",
    period: "/year",
    note: "Annual member pricing (save 29% vs monthly)",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-surface">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Pricing
          </h2>
        </div>
        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl bg-white p-8 shadow-lg space-y-6 ${
                plan.highlighted
                  ? "border-2 border-brand-600"
                  : "border border-border"
              }`}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-text-primary">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-brand-600">{plan.price}</span>
                  <span className="text-text-secondary">{plan.period}</span>
                </div>
                <p className="text-sm text-text-secondary">{plan.note}</p>
              </div>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
              <TrackedCTA label={`pricing_get_started_${plan.name.toLowerCase()}`} className="block">
                <Button size="lg" className={`w-full ${
                  plan.highlighted
                    ? "bg-brand-600 hover:bg-brand-700 text-white"
                    : "bg-white border border-brand-600 text-brand-600 hover:bg-brand-50"
                }`}>
                  Get Started
                </Button>
              </TrackedCTA>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
