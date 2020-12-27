import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ddwuqjstrexeuntabrqk.supabase.co'
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
