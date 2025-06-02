export type Database = {
    public: {
        Tables: {
            wait_list_entries: {
                Row: {
                    id: number
                    created_at: string
                    full_name: string
                    email: string
                    sport: string
                    graduation_year: number
                }
                Insert: {
                    full_name: string
                    email: string
                    sport: string
                    graduation_year: number
                    created_at?: string
                }
                Update: {
                    full_name?: string
                    email?: string
                    sport?: string
                    graduation_year?: number
                    created_at?: string
                }
            }
        }
    }
}