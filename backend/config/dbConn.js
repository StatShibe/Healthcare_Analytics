require('dotenv').config()
const client = require('@supabase/supabase-js')

//console.log(process.env.PROJECT_URL)

const supabase = client.createClient(process.env.PROJECT_URL,process.env.ANON_KEY);
module.exports = client;