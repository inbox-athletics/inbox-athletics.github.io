"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [sport, setSport] = useState("")
  const [gradYear, setGradYear] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-6 text-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-azure-900">You're on the list!</h3>
        <p className="text-azure-700">
          Thanks for joining our waitlist. We'll notify you when Inbox Athletics launches.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="sport">Sport</Label>
          <Input
            id="sport"
            placeholder="Your sport"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gradYear">Graduation Year</Label>
          <Input
            id="gradYear"
            placeholder="Class of..."
            value={gradYear}
            onChange={(e) => setGradYear(e.target.value)}
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full bg-azure-600 hover:bg-azure-700" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  )
}
