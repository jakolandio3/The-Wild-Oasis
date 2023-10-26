import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ynjqqejuebcocufsdsnr.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluanFxZWp1ZWJjb2N1ZnNkc25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNzY1NDEsImV4cCI6MjAxMDc1MjU0MX0.a6bHhZzFa24U7el0-B2PRuI9WXD0rp_pjpmVoyCYvf8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
