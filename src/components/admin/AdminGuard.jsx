import React from "react";

export default function AdminGuard({ children }) {
  // TEMPORARY:
  // Bypass authentication while migrating from Base44 to Supabase.
  return children;
}