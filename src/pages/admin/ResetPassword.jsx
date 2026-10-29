import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabase/client";
import { motion } from "framer-motion";

const EAGLE_LOGO =
  "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/03bd86246_ChatGPT_Image_May_7__2026__04_17_01_PM-removebg-preview.png";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        alert("Invalid or expired password reset link.");
        navigate("/admin/login", { replace: true });
        return;
      }

      setChecking(false);
    };

    checkSession();
  }, [navigate]);

  const updatePassword = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return alert("Password must be at least 6 characters.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) throw error;

      alert("Password updated successfully.");

      navigate("/admin/login", { replace: true });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <p className="text-white/60">Verifying reset link...</p>
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
              Reset Password
            </h1>

            <p className="text-white/50 mt-2">
              Choose a new password for your account.
            </p>
          </div>

          <form onSubmit={updatePassword} className="space-y-4">

            <input
              className="admin-input"
              type="password"
              placeholder="New Password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              className="admin-input"
              type="password"
              placeholder="Confirm New Password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B8860B] py-3 text-black font-bold uppercase disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>

          </form>

        </div>
      </motion.div>
    </div>
  );
}