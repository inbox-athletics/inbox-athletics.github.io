'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitToLoops } from '@/lib/loops'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

const earlyAccessSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type EarlyAccessFormData = z.infer<typeof earlyAccessSchema>

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EarlyAccessFormData>({
    resolver: zodResolver(earlyAccessSchema),
  })

  const onSubmit = async (data: EarlyAccessFormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitToLoops({ email: data.email })

      if (result.success) {
        toast({
          title: "You're in!",
          description: "Check your inbox — we'll send early access details soon.",
          duration: 5000,
        })
        reset()
      } else {
        throw new Error(result.message)
      }
    } catch (error: any) {
      console.error('Error submitting early access form:', error)

      let errorMessage = 'Something went wrong. Please try again.'

      if (error instanceof Error) {
        errorMessage = error.message
      }

      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row sm:gap-2">
      <div className="flex-1">
        <Input
          type="email"
          id="email"
          placeholder="you@example.com"
          {...register('email')}
          disabled={isSubmitting}
          className="focus-visible:ring-brand-600"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="bg-brand-600 hover:bg-brand-700 text-white shrink-0"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Get Early Access'}
      </Button>
    </form>
  )
}
