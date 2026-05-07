import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

const EAGLE_LOGO =
  "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/03bd86246_ChatGPT_Image_May_7__2026__04_17_01_PM-removebg-preview.png";

export default function AdminLogin() {
  const { isAuthenticated, user, isLoadingAuth } = useAuth();
  const navigate = useNavigate();

  // If already authenticated as admin, redirect to dashboard
  useEffect(() => {
    if (!isLoadingAuth && isAuthenticated && user?.role === "admin") {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, user, isLoadingAuth, navigate]);

  const handleLogin = () => {
    // Redirect to the platform's secure login page, come back to /admin after
    base44.auth.redirectToLogin(window.location.origin + "/admin");
  };

  const handleForgotPassword = () => {
    // Redirect to login — the platform's login page has a "forgot password" link built-in
    base44.auth.redirectToLogin(window.location.origin + "/admin");
  };

  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 bg-[#080808] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#B8860B]/30 border-t-[#B8860B] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background grain/texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%20opacity%3D%220.04%22%2F%3E%3C%2Fsvg%3E')] pointer-events-none opacity-60" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#B8860B]/6 blur-[120px] rounded-full pointer-events-none" />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8860B]/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-[#0d0d0d] border border-[#B8860B]/25 shadow-2xl shadow-black/60">
          {/* Gold top accent */}
          <div className="h-[2px] bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B] to-[#B8860B]/0" />

          <div className="px-8 pt-10 pb-10">
            {/* Logo + Brand */}
            <div className="flex flex-col items-center mb-8">
              <img
                src={EAGLE_LOGO}
                alt="Kay Amazing Grace Global"
                className="h-20 w-auto object-contain mb-4 drop-shadow-2xl"
              />
              <div className="text-center">
                <h1 className="text-white font-black text-[17px] uppercase tracking-[0.08em] mb-1">
                  Kay Amazing Grace Global
                </h1>
                <p className="text-[#B8860B] text-[9px] font-bold uppercase tracking-[0.32em]">
                  Admin Control Panel
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-px bg-white/8" />
              <Shield className="w-4 h-4 text-[#B8860B]/60" />
              <div className="flex-1 h-px bg-white/8" />
            </div>

            {/* Heading */}
            <div className="text-center mb-8">
              <h2 className="text-white font-bold text-[15px] mb-2">Secure Admin Access</h2>
              <p className="text-white/40 text-[12px] leading-relaxed">
                This area is restricted to authorized administrators only. Sign in with your admin account to continue.
              </p>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#B8860B] text-black text-[12px] font-black uppercase tracking-widest hover:bg-[#D4A017] active:scale-[0.98] transition-all shadow-lg shadow-[#B8860B]/25 mb-4"
            >
              <Shield className="w-4 h-4" />
              Sign In to Admin Panel
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Forgot Password */}
            <button
              onClick={handleForgotPassword}
              className="w-full text-center text-white/30 text-[11px] hover:text-[#B8860B] transition-colors py-2 font-semibold uppercase tracking-wider"
            >
              Forgot Password? Reset via Email
            </button>

            {/* Security note */}
            <div className="mt-8 pt-6 border-t border-white/6">
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B]/60 mt-1.5 shrink-0" />
                <p className="text-white/20 text-[10px] leading-relaxed">
                  All sessions are encrypted and secured. Unauthorized access attempts are logged and blocked. Admin access requires role-based permissions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <a href="/" className="text-white/25 text-[10px] font-semibold uppercase tracking-widest hover:text-white/50 transition-colors">
            ← Return to Website
          </a>
        </div>
      </motion.div>
    </div>
  );
}