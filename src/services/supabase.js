import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sqfgbtmiyuyqzgxrhbkj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZmdidG1peXV5cXpneHJoYmtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NDI1NDMsImV4cCI6MjA0NzExODU0M30.WBzypFx4w7-19E51RHNMq6-xtBCbxgf2fpqkADVa4BY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
