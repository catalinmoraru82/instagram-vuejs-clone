import { createClient } from '@supabase/supabase-js'
import SUPABASE_KEY from '.env';

const supabaseUrl = 'https://ytbwlpuceskhghaecdiq.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)