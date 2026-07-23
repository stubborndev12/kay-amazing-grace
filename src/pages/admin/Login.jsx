import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabase/client";
import { useAuth } from "@/lib/AuthContext";
import { motion } from "framer-motion";

const EAGLE_LOGO =
  "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/03bd86246_ChatGPT_Image_May_7__2026__04_17_01_PM-removebg-preview.png";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoadingAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect logged-in users away from login page
  useEffect(() => {
    if (!isLoadingAuth && isAuthenticated) {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, isLoadingAuth, navigate]);

  const login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      navigate("/admin", { replace: true });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <p className="text-white/60">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#111] border border-[#B8860B]/30 p-8">
          <div className="text-center mb-8">
            <img
              src={EAGLE_LOGO}
              alt="Logo"
              className="h-20 mx-auto mb-4"
            />

            <h1 className="text-white text-2xl font-bold">
              Admin Login
            </h1>

            <p className="text-white/50 mt-2">
              Sign in to continue
            </p>
          </div>

          <form onSubmit={login} className="space-y-4">
            <input
              className="admin-input"
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="admin-input"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B8860B] py-3 text-black font-bold uppercase disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}