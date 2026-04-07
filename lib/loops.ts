interface EarlyAccessData {
  email: string
}

const LOOPS_FORM_ENDPOINT = "https://app.loops.so/api/newsletter-form/"

// Set your Loops.so form ID in .env.local as NEXT_PUBLIC_LOOPS_FORM_ID
const LOOPS_FORM_ID = process.env.NEXT_PUBLIC_LOOPS_FORM_ID ?? ""

export async function submitToLoops(
  data: EarlyAccessData
): Promise<{ success: boolean; message: string }> {
  if (!LOOPS_FORM_ID) {
    console.error("Loops.so form ID is not configured.")
    return {
      success: false,
      message: "Configuration error. Please contact support.",
    }
  }

  try {
    const formBody = new URLSearchParams({ email: data.email })

    const response = await fetch(`${LOOPS_FORM_ENDPOINT}${LOOPS_FORM_ID}`, {
      method: "POST",
      body: formBody,
    })

    if (response.ok) {
      return {
        success: true,
        message: "Successfully signed up for early access",
      }
    }

    const errorData = await response.json().catch(() => null)
    return {
      success: false,
      message: errorData?.message || "Failed to submit. Please try again.",
    }
  } catch (error) {
    console.error("Error submitting to Loops:", error)
    return {
      success: false,
      message: "Failed to submit. Please try again.",
    }
  }
}
