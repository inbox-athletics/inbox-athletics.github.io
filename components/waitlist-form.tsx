'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const currentYear = new Date().getFullYear()
const graduationYears = Array.from({ length: 8 }, (_, i) => currentYear + i)

const sports = [
  'Baseball',
  'Basketball',
  'Cross Country',
  'Field Hockey',
  'Football',
  'Golf',
  'Hockey',
  'Lacrosse',
  'Soccer',
  'Swimming',
  'Tennis',
  'Track & Field',
  'Volleyball',
  'Wrestling',
  'Other',
] as const

const waitlistSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  sport: z.enum(sports, {
    errorMap: () => ({ message: 'Please select a sport' }),
  }),
  graduation_year: z.number({
    required_error: 'Please select a graduation year',
    invalid_type_error: 'Please select a graduation year',
  }).int().min(currentYear).max(currentYear + 7),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true)
    try {
      console.debug('Checking for existing entry...')
      const { data: existingEntries, error: checkError } = await supabase
        .from('wait_list_entries')
        .select('email')
        .eq('email', data.email)

      if (checkError) {
        console.error('Error checking for existing entry:', checkError)
        throw checkError
      }

      if (existingEntries && existingEntries.length > 0) {
        toast({
          title: 'Already registered',
          description: 'This email is already on the waitlist.',
          variant: 'destructive',
          duration: 5000,
        })
        return
      }

      console.debug('Inserting new entry...')
      const { error: insertError } = await supabase
        .from('wait_list_entries')
        .insert({
          full_name: data.full_name,
          email: data.email,
          sport: data.sport,
          graduation_year: data.graduation_year,
        })

      if (insertError) {
        console.error('Insert error details:', {
          code: insertError.code,
          message: insertError.message,
          details: insertError.details,
          hint: insertError.hint
        })
        throw insertError
      }

      toast({
        title: 'Success!',
        description: 'You have been added to the waitlist.',
        duration: 5000,
      })

      reset()
    } catch (error: any) {
      console.error('Full error details:', {
        error,
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      })
      
      let errorMessage = 'Something went wrong. Please try again.'
      
      if (error.code === '401') {
        errorMessage = 'Authentication error. Please check your Supabase configuration.'
      } else if (error.code === '23505') { // Unique violation
        errorMessage = 'This email is already registered.'
      } else if (error instanceof Error) {
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

  const handleSportChange = async (value: string) => {
    setValue('sport', value as any)
    await trigger('sport')
  }

  const handleGraduationYearChange = async (value: string) => {
    setValue('graduation_year', parseInt(value, 10))
    await trigger('graduation_year')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name</Label>
          <Input
            id="full_name"
            {...register('full_name')}
            disabled={isSubmitting}
          />
          {errors.full_name && (
            <p className="text-sm text-red-500">{errors.full_name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            {...register('email')}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="sport">Sport</Label>
            <Select
              onValueChange={handleSportChange}
              disabled={isSubmitting}
            >
              <SelectTrigger id="sport">
                <SelectValue placeholder="Select a sport" />
              </SelectTrigger>
              <SelectContent>
                {sports.map((sport) => (
                  <SelectItem key={sport} value={sport}>
                    {sport}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.sport && (
              <p className="text-sm text-red-500">{errors.sport.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="graduation_year">Graduation Year</Label>
            <Select
              onValueChange={handleGraduationYearChange}
              disabled={isSubmitting}
            >
              <SelectTrigger id="graduation_year">
                <SelectValue placeholder="Select a year" />
              </SelectTrigger>
              <SelectContent>
                {graduationYears.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.graduation_year && (
              <p className="text-sm text-red-500">
                {errors.graduation_year.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-azure-600 hover:bg-azure-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
        </Button>
      </form>
    </>
  )
}