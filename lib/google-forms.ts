interface GoogleFormsData {
  full_name: string
  email: string
  sport: string
  graduation_year: number
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScvR_ChtIwoj24M5-RKHwEpJ5uZjSqEQiq3_qWBLxfbp69gSg/formResponse'

const FIELD_IDS = {
  full_name: 'entry.895796542',
  email: 'entry.838828067',
  sport: 'entry.13177539',
  graduation_year: 'entry.1071575532',
} as const

export async function submitToGoogleForms(data: GoogleFormsData): Promise<{ success: boolean; message: string }> {
  try {
    // Create form data
    const formData = new FormData()
    formData.append(FIELD_IDS.full_name, data.full_name)
    formData.append(FIELD_IDS.email, data.email)
    formData.append(FIELD_IDS.sport, data.sport)
    formData.append(FIELD_IDS.graduation_year, data.graduation_year.toString())

    // Submit to Google Forms
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors', // Google Forms requires this
    })

    // Note: Due to CORS restrictions, we can't read the response
    // Google Forms will always return a 200 status even on errors
    // We assume success if no exception is thrown
    
    return {
      success: true,
      message: 'Successfully submitted to waitlist'
    }
  } catch (error) {
    console.error('Error submitting to Google Forms:', error)
    return {
      success: false,
      message: 'Failed to submit form. Please try again.'
    }
  }
} 