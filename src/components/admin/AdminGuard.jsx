import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";

export default function AdminGuard({ children }) {
  const { isAuthenticated, isLoadingAuth } = useAuth();

  // Wait until Supabase checks for an existing session
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080808]">
        <p className="text-white/60 text-sm">Checking authentication...</p>
      </div>
    );
  }

  // Not logged in → send to login page
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Logged in
  return children;
}