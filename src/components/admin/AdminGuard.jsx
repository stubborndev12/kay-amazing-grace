import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";

/**
 * AdminGuard — wraps all /admin routes.
 * Redirects to /admin/login if not authenticated OR not admin.
 */
export default function AdminGuard({ children }) {
  const { user, isLoadingAuth, isAuthenticated } = useAuth();
  const location = useLocation();

  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 bg-[#080808] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#B8860B]/30 border-t-[#B8860B] rounded-full animate-spin" />
          <p className="text-white/30 text-[10px] uppercase tracking-widest">Authenticating…</p>
        </div>
      </div>
    );
  }

  // Not logged in at all
  if (!isAuthenticated || !user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Logged in but not admin
  if (user.role !== "admin") {
    return (
      <div className="fixed inset-0 bg-[#080808] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-14 h-14 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-red-400 text-2xl">✕</span>
          </div>
          <h2 className="text-white font-black text-xl uppercase tracking-tight mb-2">Access Denied</h2>
          <p className="text-white/40 text-sm mb-6">
            Your account does not have admin privileges. Contact the super admin to request access.
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="px-6 py-2.5 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest hover:border-[#B8860B]/50 hover:text-[#B8860B] transition-all"
          >
            Return to Website
          </button>
        </div>
      </div>
    );
  }

  return children;
}