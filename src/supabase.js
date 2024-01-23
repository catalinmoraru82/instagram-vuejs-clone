import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ytbwlpuceskhghaecdiq.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0YndscHVjZXNraGdoYWVjZGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMDYwMzksImV4cCI6MjAyMTU4MjAzOX0.LixTJOL27EjzZO2Hw-Jdl6rvBdS2bbjiuPSW0bd7zb8"
export const supabase = createClient(supabaseUrl, supabaseKey)