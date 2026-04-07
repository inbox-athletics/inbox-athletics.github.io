"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Inbox Athletics?",
    answer:
      "Inbox Athletics is a recruiting productivity platform that connects to your email and organizes all of your coach conversations in one place. It gives you smart reminders, AI-drafted replies, and a dashboard to stay on top of your recruiting journey.",
  },
  {
    question: "What does it cost?",
    answer:
      "$34.99/month or $299.99/year (save 29% vs monthly). You can cancel anytime.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use industry-standard encryption for data in transit and at rest. Your emails are processed securely, and we never share your data with third parties. We only access the coach-related conversations you authorize.",
  },
  {
    question: "Which email providers are supported?",
    answer:
      "We currently support Gmail and Google Workspace accounts.",
  },
  {
    question: "Can my parents see my recruiting progress?",
    answer:
      "Not yet, but it's on our roadmap. We're building a parent view that will let families see recruiting progress, upcoming follow-ups, and conversation summaries — without needing access to your email. It's one of our most requested features.",
  },
  {
    question: "How is this different from a regular email app?",
    answer:
      "Regular email apps don't understand recruiting. Inbox Athletics automatically identifies coach conversations, tracks follow-up timelines, drafts professional replies, and gives you a recruiting-specific dashboard. It's purpose-built for the recruiting journey.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your account settings.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-text-primary hover:no-underline hover:text-brand-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
