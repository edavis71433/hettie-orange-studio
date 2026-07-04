// ============================================================================
// config.js — per-deployment configuration for Studio OS
// This is the ONLY file that differs between deployments. The HTML files are
// byte-identical across the whole fleet; if this file is missing, every value
// falls back to the Davis Digital Studio production defaults built in.
//
// For a design partner deployment: fill in HER Supabase project values.
// ============================================================================
window.DDS_CONFIG = {
  // Her Supabase project (Settings → API in her project's dashboard)
  SUPABASE_URL: "https://REPLACE-WITH-HER-PROJECT-REF.supabase.co",
  SUPABASE_ANON_KEY: "REPLACE-WITH-HER-ANON-KEY",

  // Her studio name — renames the visible surface (title, top bar)
  STUDIO_NAME: "Her Studio Name"
};
