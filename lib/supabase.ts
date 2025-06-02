import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing environment variables for Supabase configuration')
}

if (supabaseUrl.includes('your-project-id')) {
  throw new Error('Please replace the placeholder Supabase URL with your actual project URL')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: true,
    detectSessionInUrl: false
  },
  db: {
    schema: 'public'
  }
})

// Test the connection
const testConnection = async () => {
  try {
    const { data, error } = await supabase.from('wait_list_entries').select('count').limit(1)
    if (error) {
      console.error('Supabase connection test failed:', error)
    } else {
      console.debug('Supabase connection test successful')
    }
  } catch (err) {
    console.error('Supabase connection test failed:', err)
  }
}

// Run the test in development
if (process.env.NODE_ENV === 'development') {
  testConnection()
}

export type Tables = Database['public']['Tables']
export type WaitlistRow = Tables['wait_list_entries']['Row']
export type WaitlistInsert = Tables['wait_list_entries']['Insert']
export type WaitlistUpdate = Tables['wait_list_entries']['Update']