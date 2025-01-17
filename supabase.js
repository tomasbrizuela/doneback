const { createClient } =  require('@supabase/supabase-js');
const supabaseUrl = "https://cfgbkadwolfpkjmgptwl.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmZ2JrYWR3b2xmcGtqbWdwdHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5OTg1NjksImV4cCI6MjA1MjU3NDU2OX0.4audc7HKo-cifj3UqA8SPN7t0hJkh9qh8oThSzCKvzI"
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase
