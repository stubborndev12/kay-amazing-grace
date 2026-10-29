import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/supabase/client";
import { motion } from "framer-motion";

const EAGLE_LOGO =
  "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/03bd86246_ChatGPT_Image_May_7__2026__04_17_01_PM-removebg-preview.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendResetLink = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
       redirectTo: "https://kaygrace.shop/admin/reset-password",
      });

      if (error) throw error;

      setMessage(
        "A password reset link has been sent to your email."
      );
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

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
              Forgot Password
            </h1>

            <p className="text-white/50 mt-2">
              Enter your email to receive a password reset link.
            </p>
          </div>

          <form onSubmit={sendResetLink} className="space-y-4">

            <input
              className="admin-input"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B8860B] py-3 text-black font-bold uppercase disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

          </form>

          {message && (
            <p className="text-green-400 text-sm mt-4 text-center">
              {message}
            </p>
          )}

          <div className="text-center mt-6">
            <Link
              to="/admin/login"
              className="text-[#B8860B] hover:underline text-sm"
            >
              Back to Login
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
}