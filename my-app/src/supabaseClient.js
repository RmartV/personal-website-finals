import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://coykyrkawpljafzbfggj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNveWt5cmthd3BsamFmemJmZ2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MjI0MTYsImV4cCI6MjA1Mzk5ODQxNn0.5gPfga6QWPCOO6zrmZHOgbpFFO4KSB__NptWME-PJjY')