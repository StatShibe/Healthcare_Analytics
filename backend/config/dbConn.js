require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.DB_PROJECT_URL, process.env.DB_ANON_KEY);

module.exports = supabase;
